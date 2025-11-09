import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductIntro } from "@/components/product-intro"
import { SuccessCases } from "@/components/success-cases"
import { CustomerTestimonials } from "@/components/customer-testimonials"
import { AdvantagesSection } from "@/components/advantages-section"
import { ServiceProcess } from "@/components/service-process"
import { CompanyIntro } from "@/components/company-intro"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductIntro />
      <SuccessCases />
      <CustomerTestimonials />
      <AdvantagesSection />
      <ServiceProcess />
      <CompanyIntro />
      <ContactSection />
      <Footer />
    </main>
  )
}
