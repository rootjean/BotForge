import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  MessageSquare,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Bots Activos",
    value: "5",
    change: "+2",
    trend: "up",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Conversaciones Hoy",
    value: "1,248",
    change: "+18%",
    trend: "up",
    icon: MessageSquare,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Usuarios Únicos",
    value: "892",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    label: "Tasa de Resolución",
    value: "94%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

const recentBots = [
  {
    name: "Asistente de Ventas",
    status: "active",
    messages: 423,
    lastActive: "Hace 2 min",
  },
  {
    name: "Soporte Técnico",
    status: "active",
    messages: 312,
    lastActive: "Hace 5 min",
  },
  {
    name: "Bot de RRHH",
    status: "training",
    messages: 156,
    lastActive: "Hace 1 hora",
  },
  {
    name: "E-commerce Helper",
    status: "paused",
    messages: 89,
    lastActive: "Hace 3 días",
  },
];

const recentConversations = [
  {
    user: "María G.",
    bot: "Asistente de Ventas",
    message: "¿Cuál es el precio del plan Pro?",
    time: "Hace 2 min",
    resolved: true,
  },
  {
    user: "Carlos R.",
    bot: "Soporte Técnico",
    message: "No puedo acceder a mi cuenta",
    time: "Hace 5 min",
    resolved: false,
  },
  {
    user: "Ana M.",
    bot: "Bot de RRHH",
    message: "¿Cómo solicito vacaciones?",
    time: "Hace 12 min",
    resolved: true,
  },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Buenos días, Juan 👋</h1>
          <p className="text-muted-foreground">
            Aquí tienes un resumen de tu actividad de hoy.
          </p>
        </div>
        <Button variant="hero-outline" className="gap-2">
          <ExternalLink className="w-4 h-4" />
          Ver reportes
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Bots List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Mis Bots</CardTitle>
              <Button variant="ghost" size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Nuevo
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBots.map((bot) => (
                  <div
                    key={bot.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{bot.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {bot.messages} mensajes • {bot.lastActive}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          bot.status === "active"
                            ? "default"
                            : bot.status === "training"
                            ? "secondary"
                            : "outline"
                        }
                        className={
                          bot.status === "active"
                            ? "bg-success/10 text-success border-success/20"
                            : bot.status === "training"
                            ? "bg-warning/10 text-warning border-warning/20"
                            : ""
                        }
                      >
                        {bot.status === "active"
                          ? "Activo"
                          : bot.status === "training"
                          ? "Entrenando"
                          : "Pausado"}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Conversations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conversaciones Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentConversations.map((conv, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-border/50 hover:border-border transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                          {conv.user.split(" ")[0][0]}
                          {conv.user.split(" ")[1]?.[0]}
                        </div>
                        <span className="font-medium text-sm">{conv.user}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {conv.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{conv.bot}</span>
                      <Badge
                        variant="outline"
                        className={
                          conv.resolved
                            ? "bg-success/10 text-success border-success/20 text-xs"
                            : "bg-warning/10 text-warning border-warning/20 text-xs"
                        }
                      >
                        {conv.resolved ? "Resuelto" : "Pendiente"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">
                Ver todas las conversaciones
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Plan Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-primary text-primary-foreground">Plan Pro</Badge>
                <span className="text-sm text-muted-foreground">
                  Renovación: 15 de Enero, 2025
                </span>
              </div>
              <p className="text-muted-foreground">
                Has usado <span className="font-semibold text-foreground">18,420</span> de{" "}
                <span className="font-semibold text-foreground">25,000</span> mensajes este mes
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[74%] rounded-full" style={{ background: "var(--gradient-hero)" }} />
              </div>
              <Button variant="hero-outline" size="sm">
                Upgrade
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
