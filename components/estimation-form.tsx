"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ArrowRight } from "lucide-react"

export function EstimationForm() {
  const handleStartEstimation = () => {
    // Aquí integrarás tu chatbot de Botpress
    window.open("https://your-botpress-chatbot-url.com", "_blank")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-600">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              ¿Listo para conocer el costo de tu casa?
            </CardTitle>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Nuestro asistente inteligente te guiará paso a paso para obtener una estimación personalizada
            </p>
          </CardHeader>

          <CardContent className="text-center pb-8">
            <div className="bg-stone-50 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-2">Inicia el Chat</h4>
                  <p className="text-stone-600 text-sm">Haz clic en el botón para comenzar</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-2">Responde Preguntas</h4>
                  <p className="text-stone-600 text-sm">Proporciona detalles de tu proyecto</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-2">Recibe Estimación</h4>
                  <p className="text-stone-600 text-sm">Obtén tu presupuesto detallado</p>
                </div>
              </div>

              <Button
                onClick={handleStartEstimation}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Comenzar Estimación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-stone-500 text-sm">
              ⚡ Proceso rápido • 🔒 Información segura • 📊 Estimación detallada
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
