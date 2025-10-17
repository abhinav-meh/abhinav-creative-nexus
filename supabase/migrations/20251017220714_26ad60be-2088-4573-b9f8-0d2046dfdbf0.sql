-- Drop overly permissive policies on unique_visitors table
DROP POLICY IF EXISTS "Anyone can insert unique visitors" ON public.unique_visitors;
DROP POLICY IF EXISTS "Anyone can update unique visitors" ON public.unique_visitors;
DROP POLICY IF EXISTS "Anyone can view unique visitors" ON public.unique_visitors;

-- The track_unique_visitor() function is already SECURITY DEFINER
-- so it can still write to the table without these public policies

-- Also lock down the visitor_stats table for extra security
-- Keep SELECT policy but ensure no one can modify the stats directly
-- (only the SECURITY DEFINER functions can modify it)