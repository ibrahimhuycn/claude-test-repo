import { 
  Building,
  Target,
  Eye,
  ExternalLink,
  ChevronRight,
  Phone,
  Award,
  Globe,
  Shield,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutUsPageProps {
  navigateTo: (page: string) => void
}

export default function AboutUsPage({ navigateTo }: AboutUsPageProps) {
  const whyChooseUsPoints = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Proven Reliability",
      description: "Trusted by hospitals and laboratories across the Maldives."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Affordable Solutions",
      description: "Designed to meet the needs of facilities of all sizes without compromising on quality."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Future-Ready Technology",
      description: "A roadmap for evolving into a full-scale HIMS to address tomorrow's challenges."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Nationwide Focus",
      description: "Committed to enhancing healthcare informatics across the Maldives with global aspirations."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Advanced Analytics",
      description: "Comprehensive laboratory statistics at your fingertips. Reduce workload by eliminating manual handling."
    }
  ]

  return (
    <div>
      {/* Company Logo Section */}
      <section className="container py-16">
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/10">
            <Building className="h-24 w-24 text-primary" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Empowering Laboratories, Transforming Healthcare
            </h1>
            <p className="max-w-4xl text-lg text-muted-foreground">
              We are a company registered with the Ministry of Health, Republic of Maldives, dedicated to revolutionizing healthcare informatics through innovative and affordable solutions. Our flagship product, CD4 LIMS, is trusted by regional and atoll hospital labs, as well as private laboratories, to streamline operations, enhance accuracy, and deliver timely results.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://business.egov.mv/BusinessRegistry/ViewDetails/189525?key=-1153251199" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Registration
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To transform CD4 LIMS into a full-scale, affordable Hospital Information Management System (HIMS), enabling healthcare facilities across the Maldives to improve efficiency and patient care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To see advanced healthcare informatics systems implemented nationwide and, eventually, globally—contributing to a smarter, faster, and more accessible healthcare ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Why Choose Us?
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsPoints.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {point.icon}
                  </div>
                  <h3 className="mb-3 font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="border-t bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Let's Connect
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Have questions or want to see CD4 LIMS in action? Contact us today or book a demo to learn more about how we can support your laboratory's transformation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                onClick={() => navigateTo('cd4lims')}
              >
                Discover CD4 LIMS
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigateTo('contactus')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
