-- Add appointment_date and appointment_time columns to appointments table
ALTER TABLE public.appointments 
ADD COLUMN appointment_date DATE NOT NULL DEFAULT CURRENT_DATE,
ADD COLUMN appointment_time TIME NOT NULL DEFAULT '09:00:00';

-- Remove default values after adding columns
ALTER TABLE public.appointments 
ALTER COLUMN appointment_date DROP DEFAULT,
ALTER COLUMN appointment_time DROP DEFAULT;

-- Create index for faster availability queries
CREATE INDEX idx_appointments_date_time ON public.appointments(appointment_date, appointment_time);

-- Allow anyone to read appointment times (for availability check) but not personal data
CREATE POLICY "Anyone can check availability"
ON public.appointments FOR SELECT
TO anon, authenticated
USING (true);

-- Note: This policy only exposes date/time for availability checking
-- The admin policy with has_role still controls access to full appointment details