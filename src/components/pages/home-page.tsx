import { 
  Microscope,
  Shield,
  Activity,
  Globe,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DemoRequestDialog from "@/components/demo-request-dialog"

interface HomePageProps {
  navigateTo: (page: string) => void
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const customerLogos = [
    { name: "ASMH", src: "https://via.placeholder.com/150x75/6366f1/ffffff?text=ASMH" },
    { name: "GRH", src: "https://via.placeholder.com/150x75/6366f1/ffffff?text=GRH" },
    { name: "HAAH", src: "https://via.placeholder.com/150x75/6366f1/ffffff?text=HAAH" },
    { name: "KRH", src: "https://via.placeholder.com/150x75/6366f1/ffffff?text=KRH" },
    { name: "Regional Hospital", src: "https://via.placeholder.com/150x75/6366f1/ffffff?text=Regional" }
  ]

  const instrumentLogos = [
    { name: "Abbott", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Abbott" },
    { name: "Bio-Rad", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Bio-Rad" },
    { name: "Boditech", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Boditech" },
    { name: "Elitech", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Elitech" },
    { name: "ERBA", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=ERBA" },
    { name: "Nihon Kohden", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Nihon" },
    { name: "Protia", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Protia" },
    { name: "Quidel Ortho", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Quidel" },
    { name: "SNIBE", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=SNIBE" },
    { name: "Stago", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Stago" },
    { name: "Sysmex", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Sysmex" },
    { name: "Thermo Fisher", src: "https://via.placeholder.com/150x75/8b5cf6/ffffff?text=Thermo" }
  ]

  const homeFeatures = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Track lab operations and instrument status in real-time with enterprise-grade reliability"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Regulatory Compliance",
      description: "Ensure adherence to global standards including ASTM, HL7, and Kermit protocols"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Multi-Instrument Integration",
      description: "Seamlessly integrate with leading analyzer systems from major manufacturers"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cloud-Based Solution",
      description: "Access your lab data securely from anywhere with enterprise-grade security"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="container space-y-8 py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="px-4 py-2">
            <Microscope className="mr-2 h-4 w-4" />
            Advanced Laboratory Information Management
          </Badge>
          
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Revolutionize Your Laboratory Operations with{" "}
            <span className="text-primary">CD4 LIMS</span>
          </h1>
          
          <p className="max-w-3xl text-xl text-muted-foreground">
            Streamline workflows, ensure accuracy, and enhance patient care with our advanced LIMS solution — your lab's perfect helper cell.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => navigateTo('cd4lims')}
            >
              Discover CD4 LIMS
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <DemoRequestDialog 
              trigger={
                <Button variant="outline" size="lg" className="px-8">
                  Book a Demo
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Why Choose CD4 LIMS?
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Our comprehensive laboratory information management system is designed to meet the unique needs of modern diagnostic laboratories.
            </p>
          </div>
          
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            {homeFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Trusted by Laboratories Across the Nation
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Empowering Regional and Atoll Hospital Labs, along with Private Laboratories, to deliver accurate and efficient results
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                onClick={() => navigateTo('cd4lims')}
              >
                Discover CD4 LIMS
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <DemoRequestDialog />
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {customerLogos.map((logo, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex aspect-[3/2] items-center justify-center p-4">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="border-t bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Integrated with Industry-Leading Analyzer Systems
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Engineered to integrate seamlessly with the most advanced analyzer systems in the diagnostics industry, our solution adheres to global standards such as ASTM, HL7, and Kermit protocols.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                onClick={() => navigateTo('cd4lims')}
              >
                Discover CD4 LIMS
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <DemoRequestDialog />
            </div>
          </div>
          
          <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {instrumentLogos.map((logo, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex aspect-[3/2] items-center justify-center p-3">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
