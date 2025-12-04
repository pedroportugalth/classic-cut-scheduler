import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  SprayCan,
  Sparkles,
  Droplets,
  Flame,
  Palette,
} from "lucide-react";

const allServices = [
  {
    icon: Scissors,
    title: "Corte Clássico",
    description:
      "Corte tradicional com acabamento impecável. Inclui lavagem e finalização com produtos premium.",
    price: "R$ 60",
    duration: "45 min",
  },
  {
    icon: SprayCan,
    title: "Barba",
    description:
      "Aparagem e modelagem de barba profissional. Inclui hidratação e toalha quente.",
    price: "R$ 45",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Corte + Barba",
    description:
      "Combinação perfeita de corte e barba para um visual completo e sofisticado.",
    price: "R$ 90",
    duration: "1h 15min",
  },
  {
    icon: Palette,
    title: "Pigmentação",
    description:
      "Pigmentação capilar para cobertura de fios brancos com resultado natural.",
    price: "R$ 80",
    duration: "1h",
  },
  {
    icon: Droplets,
    title: "Tratamento Capilar",
    description:
      "Tratamento profundo para hidratação e fortalecimento dos fios. Ideal para cabelos danificados.",
    price: "R$ 70",
    duration: "45 min",
  },
  {
    icon: Flame,
    title: "Hot Towel Shave",
    description:
      "Barbear clássico com toalha quente, navalha e produtos premium. Experiência relaxante.",
    price: "R$ 75",
    duration: "50 min",
  },
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | The Classic Cut - Barbearia Premium</title>
        <meta
          name="description"
          content="Conheça todos os serviços da The Classic Cut: cortes clássicos, barba, tratamentos capilares e muito mais. Qualidade premium."
        />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a84b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
                Nossos Serviços
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Serviços <span className="text-gradient-gold">Premium</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Cada serviço é executado com maestria e atenção aos detalhes.
                Conheça todas as opções disponíveis.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                Escolheu seu serviço? Agende agora mesmo!
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/agendamento">
                  <Scissors className="w-5 h-5 mr-2" />
                  Agendar Horário
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicos;
