import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Workflow, 
  Globe, 
  BarChart3, 
  Shield, 
  Zap,
  Brain,
  Languages,
  Mic,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Entrenamiento con IA",
    description: "Sube PDFs, documentos o URLs. El bot aprende de tu contenido automáticamente.",
  },
  {
    icon: Workflow,
    title: "Constructor Visual",
    description: "Diseña flujos conversacionales arrastrando y soltando. Sin necesidad de código.",
  },
  {
    icon: Globe,
    title: "Multi-canal",
    description: "Despliega en web, WhatsApp, Telegram, Facebook Messenger e Instagram.",
  },
  {
    icon: BarChart3,
    title: "Analíticas Avanzadas",
    description: "Métricas en tiempo real, insights y sugerencias de mejora automáticas.",
  },
  {
    icon: Languages,
    title: "Multilenguaje",
    description: "Detecta y responde automáticamente en más de 50 idiomas.",
  },
  {
    icon: Shield,
    title: "Seguridad Enterprise",
    description: "Encriptación de datos, cumplimiento GDPR y control de acceso granular.",
  },
  {
    icon: Mic,
    title: "Voz a Texto",
    description: "Soporte para mensajes de voz con transcripción automática.",
  },
  {
    icon: Users,
    title: "Escalado Humano",
    description: "Transferencia automática a agentes cuando el bot no puede resolver.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">automatizar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Herramientas poderosas y fáciles de usar para crear chatbots inteligentes que realmente funcionan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card variant="glass" className="h-full border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
