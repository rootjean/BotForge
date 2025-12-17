import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfecto para probar la plataforma",
    features: [
      "1 chatbot",
      "500 mensajes/mes",
      "Entrenamiento básico",
      "Widget web",
      "Analíticas básicas",
    ],
    cta: "Comenzar gratis",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Starter",
    price: "29",
    description: "Ideal para pequeños negocios",
    features: [
      "3 chatbots",
      "5,000 mensajes/mes",
      "Entrenamiento con documentos",
      "WhatsApp + Telegram",
      "Analíticas avanzadas",
      "Soporte por email",
    ],
    cta: "Empezar ahora",
    variant: "default" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "79",
    description: "Para equipos en crecimiento",
    features: [
      "10 chatbots",
      "25,000 mensajes/mes",
      "Todos los canales",
      "Constructor de flujos",
      "API REST",
      "Escalado a humanos",
      "Soporte prioritario",
    ],
    cta: "Elegir Pro",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Soluciones a medida",
    features: [
      "Chatbots ilimitados",
      "Mensajes ilimitados",
      "SLA garantizado",
      "Integración personalizada",
      "Manager dedicado",
      "On-premise disponible",
      "Formación incluida",
    ],
    cta: "Contactar ventas",
    variant: "outline" as const,
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes para cada <span className="gradient-text">etapa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empieza gratis y escala según tus necesidades. Sin sorpresas ni costes ocultos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                    <Sparkles className="w-3 h-3" />
                    Más popular
                  </div>
                </div>
              )}
              <Card 
                variant={plan.popular ? "elevated" : "default"} 
                className={`h-full flex flex-col ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? "" : "$"}
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/mes</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-success shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/dashboard" className="w-full">
                    <Button variant={plan.variant} className="w-full">
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
