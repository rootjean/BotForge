import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, HeadphonesIcon, Users, Store, Briefcase, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: HeadphonesIcon,
    title: "Soporte al Cliente",
    description: "Resuelve consultas 24/7, reduce tickets y mejora la satisfacción del cliente.",
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    icon: ShoppingCart,
    title: "Ventas",
    description: "Califica leads, responde preguntas y guía a los usuarios hacia la compra.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Users,
    title: "Recursos Humanos",
    description: "Automatiza onboarding, responde dudas de empleados y gestiona solicitudes.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Recomienda productos, gestiona pedidos y procesa devoluciones.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Briefcase,
    title: "Consultoría",
    description: "Agenda citas, responde FAQs y precalifica prospectos automáticamente.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: MessageSquare,
    title: "Marketing",
    description: "Genera leads, segmenta audiencias y personaliza conversaciones.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un chatbot para cada <span className="gradient-text">necesidad</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Adapta BotForge a cualquier industria y caso de uso. Nuestros bots se entrenan con tu contenido específico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="interactive" className="h-full">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${useCase.bgColor} flex items-center justify-center mb-4`}>
                    <useCase.icon className={`w-7 h-7 ${useCase.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
