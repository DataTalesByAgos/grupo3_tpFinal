import { Card, CardContent } from "@/components/ui/card"
import { Home, MapPin, Hammer, Palette, Users, Calculator } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Metros Cuadrados",
    description: "Calcula según el tamaño exacto de tu proyecto",
  },
  {
    icon: Users,
    title: "Cantidad de Ambientes",
    description: "Dormitorios, baños, cocina y espacios comunes",
  },
  {
    icon: Calculator,
    title: "Módulos Adicionales",
    description: "Garaje, piscina, jardín y extensiones",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Costos ajustados según la zona geográfica",
  },
  {
    icon: Palette,
    title: "Calidad de Materiales",
    description: "Desde básico hasta premium y lujo",
  },
  {
    icon: Hammer,
    title: "Mano de Obra",
    description: "Especializada según el tipo de construcción",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Factores que Consideramos</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Nuestro sistema analiza múltiples variables para darte la estimación más precisa posible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">{feature.title}</h3>
                    <p className="text-stone-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
