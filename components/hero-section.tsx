"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Home, Users } from "lucide-react"

declare global {
  interface Window {
    botpressWebChat?: {
      sendEvent: (event: { type: string }) => void;
    };
  }
}

export function HeroSection() {
  const handleChatbotClick = () => {
    // No hacer nada
  }

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 leading-tight">
                Estima el costo de tu
                <span className="text-amber-600 block">casa ideal</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Obtén una estimación precisa y personalizada para la construcción de tu hogar. Nuestro sistema considera
                todos los factores importantes para darte el mejor presupuesto.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleChatbotClick}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Presupuesto
              </Button>
              <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 px-8 py-4 text-lg">
                Ver Ejemplos
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-amber-600" />
                <span className="text-stone-600">+500 Proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="text-stone-600">Clientes Satisfechos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Casa moderna en construcción"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-amber-600">$85,000</div>
              <div className="text-stone-600">Estimación promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
