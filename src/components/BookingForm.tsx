import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, Scissors, CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido").max(255, "E-mail muito longo"),
  service: z.string().min(1, "Selecione um serviço"),
  date: z.date({ required_error: "Selecione uma data" }),
  time: z.string().min(1, "Selecione um horário"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  { value: "corte-classico", label: "Corte Clássico" },
  { value: "barba", label: "Barba" },
  { value: "corte-barba", label: "Corte + Barba" },
  { value: "pigmentacao", label: "Pigmentação" },
  { value: "tratamento-capilar", label: "Tratamento Capilar" },
  { value: "hot-towel", label: "Hot Towel Shave" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00"
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const watchedDate = watch("date");
  const watchedTime = watch("time");

  // Fetch booked slots when date changes
  useEffect(() => {
    async function fetchBookedSlots() {
      if (!selectedDate) {
        setBookedSlots([]);
        return;
      }

      setIsLoadingSlots(true);
      try {
        const dateString = format(selectedDate, "yyyy-MM-dd");
        const { data, error } = await supabase
          .from("appointments")
          .select("appointment_time")
          .eq("appointment_date", dateString);

        if (error) throw error;

        const booked = data?.map((apt) => {
          // Convert time to HH:mm format
          const time = apt.appointment_time;
          return time.substring(0, 5);
        }) || [];
        
        setBookedSlots(booked);
      } catch (error) {
        console.error("Error fetching booked slots:", error);
        setBookedSlots([]);
      } finally {
        setIsLoadingSlots(false);
      }
    }

    fetchBookedSlots();
  }, [selectedDate]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setValue("date", date);
      setValue("time", ""); // Reset time when date changes
    }
  };

  const handleTimeSelect = (time: string) => {
    setValue("time", time);
  };

  const isTimeSlotAvailable = (time: string) => {
    return !bookedSlots.includes(time);
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const dateString = format(data.date, "yyyy-MM-dd");
      const timeString = data.time + ":00";

      const { error } = await supabase.from("appointments").insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        service: data.service,
        appointment_date: dateString,
        appointment_time: timeString,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Agendamento realizado!",
        description: `Seu horário: ${format(data.date, "dd/MM/yyyy", { locale: ptBR })} às ${data.time}`,
      });
      reset();
      setSelectedDate(undefined);
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Erro ao agendar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disable past dates and Sundays
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0;
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Agendamento Confirmado!
        </h3>
        <p className="text-muted-foreground">
          Você receberá um e-mail de confirmação em breve.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Nome Completo
        </Label>
        <Input
          id="name"
          placeholder="Seu nome"
          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-gold"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Service Field */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-foreground">
          Serviço Desejado
        </Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="bg-input border-border text-foreground focus:border-gold focus:ring-gold">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {services.map((service) => (
              <SelectItem
                key={service.value}
                value={service.value}
                className="text-foreground focus:bg-gold/20 focus:text-foreground"
              >
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* Date Field */}
      <div className="space-y-2">
        <Label className="text-foreground">Data do Agendamento</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-input border-border",
                !watchedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {watchedDate ? (
                format(watchedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
              ) : (
                <span>Selecione uma data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={disabledDays}
              locale={ptBR}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
        {errors.date && (
          <p className="text-sm text-destructive">{errors.date.message}</p>
        )}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-2"
        >
          <Label className="text-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Horários Disponíveis
          </Label>
          {isLoadingSlots ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-6 h-6 animate-spin text-gold" />
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => {
                const isAvailable = isTimeSlotAvailable(time);
                const isSelected = watchedTime === time;
                
                return (
                  <Button
                    key={time}
                    type="button"
                    variant={isSelected ? "gold" : "outline"}
                    size="sm"
                    disabled={!isAvailable}
                    onClick={() => isAvailable && handleTimeSelect(time)}
                    className={cn(
                      "text-sm",
                      !isAvailable && "opacity-50 cursor-not-allowed line-through bg-muted",
                      isSelected && "ring-2 ring-gold"
                    )}
                  >
                    {time}
                  </Button>
                );
              })}
            </div>
          )}
          {errors.time && (
            <p className="text-sm text-destructive">{errors.time.message}</p>
          )}
        </motion.div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Agendando...
          </>
        ) : (
          <>
            <Scissors className="w-5 h-5" />
            Confirmar Agendamento
          </>
        )}
      </Button>
    </form>
  );
}
