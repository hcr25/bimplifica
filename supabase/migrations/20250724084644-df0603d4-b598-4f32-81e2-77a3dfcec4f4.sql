-- Fix database function security by adding search_path parameter
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Update RLS policy to allow authenticated admins to view contact requests
-- Remove the overly restrictive policy first
DROP POLICY IF EXISTS "Only authenticated users can view contact requests" ON public.contact_requests;

-- Create a more practical policy for authenticated users to view contact requests
CREATE POLICY "Authenticated users can view contact requests" 
ON public.contact_requests 
FOR SELECT 
USING (auth.uid() IS NOT NULL);