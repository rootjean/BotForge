import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  Upload,
  Link as LinkIcon,
  FileText,
  Globe,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  Plus,
  X,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const CreateBotForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    language: "es",
    tone: "professional",
    creativity: [50],
    responseLength: [150],
    faqs: [{ question: "", answer: "" }],
    urls: [""],
  });

  const handleCreate = () => {
    toast({
      title: "¡Bot creado exitosamente!",
      description: "Tu chatbot está listo para ser entrenado.",
    });
    navigate("/bots");
  };

  const addFAQ = () => {
    setFormData({
      ...formData,
      faqs: [...formData.faqs, { question: "", answer: "" }],
    });
  };

  const removeFAQ = (index: number) => {
    setFormData({
      ...formData,
      faqs: formData.faqs.filter((_, i) => i !== index),
    });
  };

  const addURL = () => {
    setFormData({
      ...formData,
      urls: [...formData.urls, ""],
    });
  };

  const removeURL = (index: number) => {
    setFormData({
      ...formData,
      urls: formData.urls.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/bots">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Crear nuevo chatbot</h1>
          <p className="text-muted-foreground">
            Configura y entrena tu asistente de IA personalizado
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[
          { num: 1, label: "Información básica" },
          { num: 2, label: "Entrenamiento" },
          { num: 3, label: "Configuración IA" },
        ].map((s, index) => (
          <div key={s.num} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                step >= s.num
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s.num ? <Check className="w-5 h-5" /> : s.num}
            </div>
            <span
              className={`ml-3 text-sm font-medium hidden sm:block ${
                step >= s.num ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {s.label}
            </span>
            {index < 2 && (
              <div
                className={`w-16 md:w-32 h-1 mx-4 rounded-full ${
                  step > s.num ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                Información básica
              </CardTitle>
              <CardDescription>
                Define la identidad y personalidad de tu chatbot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del bot *</Label>
                <Input
                  id="name"
                  placeholder="Ej: Asistente de Ventas"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe el propósito y funciones de tu bot..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Idioma principal</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) =>
                      setFormData({ ...formData, language: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tono de respuesta</Label>
                  <Select
                    value={formData.tone}
                    onValueChange={(value) =>
                      setFormData({ ...formData, tone: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Profesional</SelectItem>
                      <SelectItem value="friendly">Amigable</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Entrenamiento del bot
              </CardTitle>
              <CardDescription>
                Proporciona información para que tu bot aprenda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="files" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="files" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Archivos
                  </TabsTrigger>
                  <TabsTrigger value="faqs" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    FAQs
                  </TabsTrigger>
                  <TabsTrigger value="urls" className="gap-2">
                    <Globe className="w-4 h-4" />
                    URLs
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="files" className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      Arrastra y suelta tus archivos
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Soportamos PDF, Word, TXT y más
                    </p>
                    <Button variant="outline">Seleccionar archivos</Button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>Máximo 10 archivos, 50MB cada uno</span>
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="space-y-4">
                  {formData.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-border space-y-4 relative"
                    >
                      {formData.faqs.length > 1 && (
                        <button
                          onClick={() => removeFAQ(index)}
                          className="absolute top-2 right-2 p-1 hover:bg-muted rounded"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      )}
                      <div className="space-y-2">
                        <Label>Pregunta</Label>
                        <Input
                          placeholder="Ej: ¿Cuáles son sus horarios de atención?"
                          value={faq.question}
                          onChange={(e) => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[index].question = e.target.value;
                            setFormData({ ...formData, faqs: newFaqs });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Respuesta</Label>
                        <Textarea
                          placeholder="Ej: Nuestro horario es de lunes a viernes, de 9:00 a 18:00"
                          value={faq.answer}
                          onChange={(e) => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[index].answer = e.target.value;
                            setFormData({ ...formData, faqs: newFaqs });
                          }}
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-2" onClick={addFAQ}>
                    <Plus className="w-4 h-4" />
                    Añadir pregunta frecuente
                  </Button>
                </TabsContent>

                <TabsContent value="urls" className="space-y-4">
                  {formData.urls.map((url, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="relative flex-1">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          className="pl-9"
                          placeholder="https://tuempresa.com/faq"
                          value={url}
                          onChange={(e) => {
                            const newUrls = [...formData.urls];
                            newUrls[index] = e.target.value;
                            setFormData({ ...formData, urls: newUrls });
                          }}
                        />
                      </div>
                      {formData.urls.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeURL(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full gap-2" onClick={addURL}>
                    <Plus className="w-4 h-4" />
                    Añadir URL
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    El bot extraerá y aprenderá del contenido de estas páginas web
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Configuración de IA
              </CardTitle>
              <CardDescription>
                Ajusta el comportamiento y las respuestas de tu bot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Nivel de creatividad</Label>
                    <p className="text-sm text-muted-foreground">
                      Controla cuán creativo o preciso será el bot
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {formData.creativity[0]}%
                  </span>
                </div>
                <Slider
                  value={formData.creativity}
                  onValueChange={(value) =>
                    setFormData({ ...formData, creativity: value })
                  }
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Preciso</span>
                  <span>Creativo</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Longitud de respuesta</Label>
                    <p className="text-sm text-muted-foreground">
                      Máximo de palabras por respuesta
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {formData.responseLength[0]} palabras
                  </span>
                </div>
                <Slider
                  value={formData.responseLength}
                  onValueChange={(value) =>
                    setFormData({ ...formData, responseLength: value })
                  }
                  min={50}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="space-y-4 p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Multilenguaje automático</Label>
                    <p className="text-sm text-muted-foreground">
                      Responde en el idioma del usuario
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Escalado a humano</Label>
                    <p className="text-sm text-muted-foreground">
                      Transferir cuando no pueda resolver
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Memoria contextual</Label>
                    <p className="text-sm text-muted-foreground">
                      Recordar conversaciones anteriores
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button
          variant="ghost"
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Anterior
        </Button>

        {step < 3 ? (
          <Button variant="hero" onClick={() => setStep(step + 1)} className="gap-2">
            Siguiente
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="gradient" onClick={handleCreate} className="gap-2">
            <Sparkles className="w-4 h-4" />
            Crear chatbot
          </Button>
        )}
      </div>
    </div>
  );
};
