import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  index: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  duration,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-card rounded-lg border border-border/50 p-6 hover:border-gold/50 transition-all duration-500 hover:shadow-gold"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
          <Icon className="w-7 h-7 text-gold" />
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Price & Duration */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="font-display text-2xl font-bold text-gold">
            {price}
          </span>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
      </div>
    </motion.div>
  );
}
