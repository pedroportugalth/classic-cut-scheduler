import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Award, Clock, Users, Heart } from "lucide-react";
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
    description:
      "Nascemos de um sonho: criar um espaço onde homens pudessem cuidar da aparência com estilo e sofisticação.",
  },
  {
    year: "2015",
    title: "Expansão",
    description:
      "Com uma clientela fiel, expandimos nosso espaço e equipe, sempre mantendo a qualidade que nos define.",
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
    <div className="min-h-screen bg-background">
      {" "}
      <Navigation />{" "}
      <main className="pt-20">
        {" "}
        {/* Hero Section */}{" "}
        <section className="relative py-24 overflow-hidden">
          {" "}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>{" "}
          <div className="absolute inset-0 opacity-10">
            {" "}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />{" "}
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-dark rounded-full blur-3xl" />{" "}
          </div>{" "}
          <div className="container mx-auto px-4 relative z-10">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              {" "}
              <span className="inline-block text-gold font-medium tracking-wider uppercase text-sm mb-4">
                {" "}
                Nossa História{" "}
              </span>{" "}
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground"> Quem Somos </h1>{" "}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {" "}
                Há mais de uma década, The Classic Cut é sinônimo de excelência em barbearia. Combinamos a tradição das
                técnicas clássicas com a sofisticação moderna para proporcionar uma experiência única aos nossos
                clientes.{" "}
              </p>{" "}
            </motion.div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Story Section */}{" "}
        <section className="py-20 bg-card">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {" "}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {" "}
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  {" "}
                  Uma Tradição de <span className="text-gradient-gold">Excelência</span>{" "}
                </h2>{" "}
                <div className="space-y-4 text-muted-foreground">
                  {" "}
                  <p>
                    {" "}
                    Fundada em 2010, The Classic Cut nasceu do sonho de criar um espaço onde o cuidado masculino fosse
                    elevado a uma verdadeira arte. Nosso fundador, com mais de 20 anos de experiência, trouxe para nossa
                    barbearia o melhor das técnicas tradicionais europeias.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    Ao longo dos anos, formamos uma equipe de profissionais apaixonados que compartilham nossa visão:
                    cada cliente que entra pela nossa porta merece uma experiência excepcional, do início ao fim.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    Hoje, somos reconhecidos como referência em qualidade e atendimento, mas nunca esquecemos nossas
                    raízes. Mantemos viva a tradição da barbearia clássica enquanto abraçamos a inovação.{" "}
                  </p>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {" "}
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-charcoal-light to-charcoal overflow-hidden border border-border/50">
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {" "}
                    <div className="text-center p-8">
                      {" "}
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold">
                        {" "}
                        <span className="font-display text-3xl font-bold text-primary-foreground">14+</span>{" "}
                      </div>{" "}
                      <p className="text-gold font-medium text-lg">Anos de Experiência</p>{" "}
                      <p className="text-muted-foreground mt-2">Cuidando do estilo masculino</p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Values Section */}{" "}
        <section className="py-20">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {" "}
                Nossos <span className="text-gradient-gold">Valores</span>{" "}
              </h2>{" "}
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {" "}
                Os princípios que guiam cada aspecto do nosso trabalho e definem quem somos.{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {" "}
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/30 transition-all group hover:-translate-y-1 hover:shadow-lg"
                >
                  {" "}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center mb-4 group-hover:from-gold/30 group-hover:to-gold-dark/30 transition-all">
                    {" "}
                    <value.icon className="w-6 h-6 text-gold" />{" "}
                  </div>{" "}
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground"> {value.title} </h3>{" "}
                  <p className="text-muted-foreground text-sm"> {value.description} </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Timeline Section */}{" "}
        <section className="py-20 bg-card">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {" "}
                Nossa <span className="text-gradient-gold">Trajetória</span>{" "}
              </h2>{" "}
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {" "}
                Uma jornada de dedicação, crescimento e paixão pela arte da barbearia.{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="max-w-3xl mx-auto">
              {" "}
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {" "}
                  {/* Timeline line */} <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />{" "}
                  {/* Timeline dot */}{" "}
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-gold glow-gold" />{" "}
                  <span className="inline-block text-gold font-display text-2xl font-bold mb-2"> {item.year} </span>{" "}
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground"> {item.title} </h3>{" "}
                  <p className="text-muted-foreground"> {item.description} </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* CTA Section */}{" "}
        <section className="py-20">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-charcoal-light to-charcoal border border-border/50"
            >
              {" "}
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {" "}
                Faça Parte da Nossa História{" "}
              </h2>{" "}
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {" "}
                Venha conhecer nosso espaço e descubra por que milhares de clientes confiam em nós há mais de uma
                década.{" "}
              </p>{" "}
              <a
                href="/agendamento"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-gold"
              >
                {" "}
                Agende Sua Visita{" "}
              </a>{" "}
            </motion.div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}
