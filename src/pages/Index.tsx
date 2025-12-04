import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, SprayCan, Sparkles, Clock, Award, Users } from "lucide-react";

const featuredServices = [
  {
    icon: Scissors,
    title: "Corte Clássico",
    description: "Corte tradicional com acabamento impecável e atenção aos detalhes.",
    price: "R$ 60",
    duration: "45 min",
  },
  {
    icon: SprayCan,
    title: "Barba",
    description: "Aparagem e modelagem de barba com produtos premium.",
    price: "R$ 45",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Corte + Barba",
    description: "Combinação perfeita para visual completo e sofisticado.",
    price: "R$ 90",
    duration: "1h 15min",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Classic Cut | Barbearia Premium em Niterói</title>
        <meta
          name="description"
          content="A barbearia premium de São Paulo. Cortes clássicos, barbas impecáveis e tratamentos exclusivos. Agende seu horário."
        />
      </Helmet>

      <Navigation />

      <main>
        <Hero />

        {/* Services Preview Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
                Nossos Serviços
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Excelência em Cada Detalhe
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços para homens que valorizam qualidade e tradição.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredServices.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/servicos">Ver Todos os Serviços</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
                Por Que Nos Escolher
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                A Experiência The Classic Cut
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Profissionais Experientes",
                  description: "Nossa equipe possui anos de experiência e treinamento contínuo.",
                },
                {
                  icon: Clock,
                  title: "Pontualidade",
                  description: "Respeitamos seu tempo. Agendamentos sem atrasos.",
                },
                {
                  icon: Users,
                  title: "Ambiente Exclusivo",
                  description: "Espaço confortável e elegante para uma experiência completa.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pronto para o <span className="text-gradient-gold">Corte Perfeito</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Agende seu horário agora e descubra por que somos a barbearia preferida de Niterói.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/agendamento">
                  <Scissors className="w-5 h-5 mr-2" />
                  Agendar Agora
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

export default Index;
