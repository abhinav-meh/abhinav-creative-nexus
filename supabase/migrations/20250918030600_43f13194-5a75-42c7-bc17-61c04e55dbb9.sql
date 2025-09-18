-- Fix the search path for the increment_visitor_count function
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS INTEGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE public.visitor_stats 
  SET 
    total_visitors = total_visitors + 1,
    updated_at = now()
  WHERE id = (SELECT id FROM public.visitor_stats ORDER BY created_at ASC LIMIT 1)
  RETURNING total_visitors INTO new_count;
  
  RETURN new_count;
END;
$$;