import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  TrendingDown,
  Download,
  RefreshCw,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const conversationData = [
  { date: "Lun", conversations: 120, resolved: 108 },
  { date: "Mar", conversations: 145, resolved: 130 },
  { date: "Mié", conversations: 168, resolved: 155 },
  { date: "Jue", conversations: 132, resolved: 118 },
  { date: "Vie", conversations: 189, resolved: 175 },
  { date: "Sáb", conversations: 78, resolved: 72 },
  { date: "Dom", conversations: 56, resolved: 52 },
];

const topQuestions = [
  { question: "¿Cuál es el precio del plan Pro?", count: 234, change: 12 },
  { question: "¿Cómo puedo cancelar mi suscripción?", count: 189, change: -5 },
  { question: "¿Tienen soporte en español?", count: 156, change: 23 },
  { question: "¿Cómo integro con WhatsApp?", count: 142, change: 8 },
  { question: "¿Puedo exportar mis datos?", count: 98, change: -2 },
];

const channelData = [
  { name: "Web Widget", value: 45, color: "hsl(234, 89%, 58%)" },
  { name: "WhatsApp", value: 30, color: "hsl(142, 76%, 36%)" },
  { name: "Telegram", value: 15, color: "hsl(199, 89%, 48%)" },
  { name: "Facebook", value: 10, color: "hsl(24, 75%, 55%)" },
];

const suggestions = [
  {
    title: "Añadir información sobre devoluciones",
    description: "45 usuarios preguntaron sobre la política de devoluciones esta semana",
    priority: "high",
  },
  {
    title: "Mejorar respuestas de precios",
    description: "El tiempo de resolución para consultas de precios es 30% mayor al promedio",
    priority: "medium",
  },
  {
    title: "Crear flujo de onboarding",
    description: "23% de usuarios abandonan después de la primera interacción",
    priority: "high",
  },
];

const stats = [
  {
    label: "Total Conversaciones",
    value: "12,847",
    change: "+18%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    label: "Usuarios Únicos",
    value: "4,231",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Tasa de Resolución",
    value: "92.4%",
    change: "+2.1%",
    trend: "up",
    icon: CheckCircle2,
  },
  {
    label: "Tiempo Promedio",
    value: "1m 24s",
    change: "-8%",
    trend: "up",
    icon: Clock,
  },
];

export const AnalyticsOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analíticas</h1>
          <p className="text-muted-foreground">
            Métricas y rendimiento de tus chatbots
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Últimas 24h</SelectItem>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="90d">Últimos 90 días</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>
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
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conversaciones por día</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={conversationData}>
                    <defs>
                      <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(234, 89%, 58%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(234, 89%, 58%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(152, 76%, 42%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(152, 76%, 42%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                    <XAxis dataKey="date" stroke="hsl(220, 9%, 46%)" fontSize={12} />
                    <YAxis stroke="hsl(220, 9%, 46%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="conversations"
                      stroke="hsl(234, 89%, 58%)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorConversations)"
                      name="Total"
                    />
                    <Area
                      type="monotone"
                      dataKey="resolved"
                      stroke="hsl(152, 76%, 42%)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorResolved)"
                      name="Resueltas"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Channel Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Por canal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                      paddingAngle={4}
                    >
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {channelData.map((channel) => (
                  <div key={channel.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: channel.color }}
                      />
                      <span>{channel.name}</span>
                    </div>
                    <span className="font-medium">{channel.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Preguntas frecuentes</CardTitle>
              <Button variant="ghost" size="sm">
                Ver todas
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topQuestions.map((q, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{q.question}</p>
                      <p className="text-xs text-muted-foreground">{q.count} veces</p>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs ${
                        q.change > 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {q.change > 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {Math.abs(q.change)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Sugerencias de mejora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-card border border-border/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <Badge
                        variant="outline"
                        className={
                          suggestion.priority === "high"
                            ? "bg-destructive/10 text-destructive border-destructive/20"
                            : "bg-warning/10 text-warning border-warning/20"
                        }
                      >
                        {suggestion.priority === "high" ? "Alta" : "Media"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {suggestion.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary text-sm mt-2">
                      Implementar sugerencia →
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
