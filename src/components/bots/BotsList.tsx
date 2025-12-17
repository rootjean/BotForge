import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Plus,
  Search,
  MoreHorizontal,
  Play,
  Pause,
  Settings,
  Trash2,
  Copy,
  ExternalLink,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bots = [
  {
    id: 1,
    name: "Asistente de Ventas",
    description: "Bot para calificar leads y responder preguntas de productos",
    status: "active",
    language: "Español",
    messages: 12423,
    conversations: 892,
    resolution: 94,
    channels: ["web", "whatsapp"],
    lastTrained: "Hace 2 días",
  },
  {
    id: 2,
    name: "Soporte Técnico",
    description: "Resuelve dudas técnicas y gestiona tickets",
    status: "active",
    language: "Español, Inglés",
    messages: 8912,
    conversations: 634,
    resolution: 87,
    channels: ["web", "telegram"],
    lastTrained: "Hace 5 días",
  },
  {
    id: 3,
    name: "Bot de RRHH",
    description: "Onboarding y preguntas de empleados",
    status: "training",
    language: "Español",
    messages: 3421,
    conversations: 245,
    resolution: 91,
    channels: ["web"],
    lastTrained: "Entrenando...",
  },
  {
    id: 4,
    name: "E-commerce Helper",
    description: "Recomendaciones de productos y seguimiento de pedidos",
    status: "paused",
    language: "Español",
    messages: 1892,
    conversations: 156,
    resolution: 82,
    channels: ["web", "instagram"],
    lastTrained: "Hace 2 semanas",
  },
];

export const BotsList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mis Chatbots</h1>
          <p className="text-muted-foreground">
            Gestiona y configura todos tus asistentes de IA
          </p>
        </div>
        <Link to="/bots/create">
          <Button variant="hero" className="gap-2">
            <Plus className="w-4 h-4" />
            Crear nuevo bot
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar bots..."
            className="pl-9 bg-card border-border/50"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
      </div>

      {/* Bots Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {bots.map((bot, index) => (
          <motion.div
            key={bot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="interactive" className="h-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">{bot.name}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {bot.description}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      Configurar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver widget
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Status and Language */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    className={
                      bot.status === "active"
                        ? "bg-success/10 text-success border-success/20"
                        : bot.status === "training"
                        ? "bg-warning/10 text-warning border-warning/20"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {bot.status === "active"
                      ? "Activo"
                      : bot.status === "training"
                      ? "Entrenando"
                      : "Pausado"}
                  </Badge>
                  <Badge variant="outline">{bot.language}</Badge>
                  {bot.channels.map((channel) => (
                    <Badge key={channel} variant="outline" className="capitalize">
                      {channel}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="text-center">
                    <div className="text-xl font-bold">
                      {bot.messages.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Mensajes</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-xl font-bold">{bot.conversations}</div>
                    <div className="text-xs text-muted-foreground">
                      Conversaciones
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{bot.resolution}%</div>
                    <div className="text-xs text-muted-foreground">Resolución</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">
                    Entrenado: {bot.lastTrained}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={
                        bot.status === "active"
                          ? "text-warning hover:text-warning"
                          : "text-success hover:text-success"
                      }
                    >
                      {bot.status === "active" ? (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pausar
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Activar
                        </>
                      )}
                    </Button>
                    <Link to={`/bots/${bot.id}/edit`}>
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
