import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { GallerySection } from "@/components/gallery-section"
import { EstimationForm } from "@/components/estimation-form"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <EstimationForm />
      <Footer />
      <Chatbot />
    </main>
  )
}
