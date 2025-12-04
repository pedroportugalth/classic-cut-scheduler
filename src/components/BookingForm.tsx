import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, Scissors } from "lucide-react";

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido").max(255, "E-mail muito longo"),
  service: z.string().min(1, "Selecione um serviço"),
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

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("appointments").insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        service: data.service,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Agendamento realizado!",
        description: "Entraremos em contato em breve para confirmar.",
      });
      reset();
      
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
