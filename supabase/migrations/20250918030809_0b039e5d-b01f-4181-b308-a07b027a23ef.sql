-- Create a table to track unique visitors
CREATE TABLE public.unique_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL UNIQUE,
  first_visit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_visit TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.unique_visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read and insert visitor records (since it's just tracking)
CREATE POLICY "Anyone can view unique visitors" 
ON public.unique_visitors 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert unique visitors" 
ON public.unique_visitors 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update unique visitors" 
ON public.unique_visitors 
FOR UPDATE 
USING (true);

-- Create function to track unique visitor and increment count
CREATE OR REPLACE FUNCTION public.track_unique_visitor(visitor_uuid TEXT)
RETURNS INTEGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
DECLARE
  new_count INTEGER;
  visitor_exists BOOLEAN;
BEGIN
  -- Check if visitor already exists
  SELECT EXISTS(SELECT 1 FROM public.unique_visitors WHERE visitor_id = visitor_uuid) INTO visitor_exists;
  
  IF NOT visitor_exists THEN
    -- Insert new visitor
    INSERT INTO public.unique_visitors (visitor_id) VALUES (visitor_uuid);
    
    -- Increment the total visitor count
    UPDATE public.visitor_stats 
    SET 
      total_visitors = total_visitors + 1,
      updated_at = now()
    WHERE id = (SELECT id FROM public.visitor_stats ORDER BY created_at ASC LIMIT 1)
    RETURNING total_visitors INTO new_count;
  ELSE
    -- Update last visit time
    UPDATE public.unique_visitors 
    SET last_visit = now() 
    WHERE visitor_id = visitor_uuid;
    
    -- Get current count without incrementing
    SELECT total_visitors INTO new_count 
    FROM public.visitor_stats 
    ORDER BY created_at ASC 
    LIMIT 1;
  END IF;
  
  RETURN new_count;
END;
$$;