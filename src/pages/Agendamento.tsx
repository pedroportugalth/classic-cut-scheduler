import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

const Agendamento = () => {
  return (
    <>
      <Helmet>
        <title>Agendamento | The Classic Cut - Barbearia Premium</title>
        <meta
          name="description"
          content="Agende seu horário na The Classic Cut. Escolha o serviço desejado e garanta seu atendimento personalizado."
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
                Agendamento
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Reserve Seu <span className="text-gradient-gold">Horário</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu agendamento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-card rounded-lg border border-border/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">Formulário de Agendamento</h2>
                      <p className="text-sm text-muted-foreground">Preencha seus dados</p>
                    </div>
                  </div>
                  <BookingForm />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Informações de Contato</h2>
                  <p className="text-muted-foreground">Prefere ligar? Entre em contato diretamente conosco.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua Sete de Setembro, 123
                        <br />
                        Icaraí - Niterói, RJ
                        <br />
                        CEP: 12345-543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(21) 99999-9999</p>
                      <p className="text-sm text-muted-foreground mt-1">WhatsApp disponível</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 9h às 20h</p>
                        <p>Sábado: 9h às 18h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-lg border border-border overflow-hidden bg-secondary h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-gold" />
                    <p className="text-sm">Mapa interativo em breve</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Agendamento;
