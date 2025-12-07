import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Award, Clock, Users, Heart } from "lucide-react";

/**
 * Ultra Premium Barbershop — QuemSomos
 * Mantém paleta: charcoal + gold
 * Estilos: glass cards, gold glow, textured background, serif headline
 */

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Cada corte é uma obra de arte. Nos dedicamos a entregar o melhor resultado sempre.",
  },
  {
    icon: Clock,
    title: "Tradição",
    description: "Técnicas clássicas aliadas às tendências modernas para um resultado atemporal.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Mais que uma barbearia, somos um ponto de encontro para os homens da nossa cidade.",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos e isso se reflete em cada detalhe do nosso trabalho.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "O Início",
    description: "Nascemos de um sonho: criar um espaço onde homens pudessem cuidar da aparência com estilo e sofisticação.",
  },
  {
    year: "2015",
    title: "Expansão",
    description: "Com uma clientela fiel, expandimos nosso espaço e equipe, sempre mantendo a qualidade que nos define.",
  },
  {
    year: "2018",
    title: "Reconhecimento",
    description: "Fomos eleitos a melhor barbearia da região, consolidando nossa reputação de excelência.",
  },
  {
    year: "2024",
    title: "Inovação",
    description: "Lançamos nosso sistema de agendamento online, unindo tradição e tecnologia para melhor atendê-lo.",
  },
];

export default function QuemSomos() {
  return (
    <div className="min-h-screen text-foreground bg-background antialiased">
      <Navigation />

      {/* Page styles (small additions to Tailwind) */}
      <style>{`
        /* Textured dark background (subtle) */
        :root {
          --gold: #c59c48;
          --gold-dark: #8f6e36;
          --card: rgba(255,255,255,0.03);
        }

        .bg-texture {
          background-image:
            radial-gradient( rgba(255,255,255,0.02) 1px, transparent 1px ),
            linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.65) 40%),
            url('https://images.unsplash.com/photo-1503264116251-35a269479413?
