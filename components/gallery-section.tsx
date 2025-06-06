const projects = [
  {
    title: "Casa Moderna Minimalista",
    size: "180m²",
    cost: "$95,000",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Casa Familiar Tradicional",
    size: "220m²",
    cost: "$120,000",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Casa Compacta Urbana",
    size: "120m²",
    cost: "$65,000",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Casa de Campo Rústica",
    size: "250m²",
    cost: "$140,000",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Proyectos Realizados</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos y sus estimaciones de costo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.cost}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-800 mb-2">{project.title}</h3>
                <p className="text-stone-600 text-sm">{project.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
