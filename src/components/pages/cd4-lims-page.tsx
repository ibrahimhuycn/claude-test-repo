import { 
  Microscope,
  Eye,
  FileText,
  Activity,
  BarChart3,
  Check,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FeatureCard = ({ title, features, icon }: { title: string; features: string[]; icon: React.ReactNode }) => (
  <Card className="h-full hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="pb-4">
      <CardTitle className="flex items-center gap-3 text-primary">
        <div className="p-2 rounded-md bg-primary/10">
          {icon}
        </div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
        </div>
      ))}
    </CardContent>
  </Card>
)

interface CD4LIMSPageProps {
  navigateTo: (page: string) => void
}

export default function CD4LIMSPage({ navigateTo }: CD4LIMSPageProps) {
  const preAnalyticalFeatures = [
    "Create / import analysis requests",
    "Print barcodes", 
    "Samples management",
    "Analyser Management"
  ]

  const analyticalFeatures = [
    "Send orders and receive results - Bidirectional interface",
    "Worklists",
    "Complex Calculations", 
    "Results management"
  ]

  const postAnalyticalFeatures = [
    "Comprehensive Audit trails",
    "Integrated with Dhiraagu Bulk SMS service",
    "Auto dispatch reports via email",
    "Customizable report templates",
    "Comprehensive laboratory statistics"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="container space-y-8 py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-primary">CD4</span> - What does it mean?
          </h1>
          <p className="max-w-3xl text-xl text-muted-foreground">
            CD4+ cell is a type of lymphocyte called T-Helper cell. This software is meant to be a great help for clinical laboratory professionals and hence the name CD4.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg"
              onClick={() => navigateTo('contactus')}
            >
              <Eye className="mr-2 h-4 w-4" />
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigateTo('contactus')}
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CD4 Logo Section */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10">
            <Microscope className="h-16 w-16 text-primary" />
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              What can you do with the help of <span className="text-primary">CD4 LIMS</span>?
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              The following is a brief summary of features present in CD4 Laboratory Information Management System. Please book a demo session or contact us if you would like to know more about CD4
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigateTo('contactus')}
            >
              <Eye className="mr-2 h-4 w-4" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="border-t bg-muted/50 pb-16 md:pb-24">
        <div className="container pt-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <FeatureCard 
              title="Pre-Analytical" 
              features={preAnalyticalFeatures}
              icon={<FileText className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Analytical" 
              features={analyticalFeatures}
              icon={<Activity className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Post Analytical" 
              features={postAnalyticalFeatures}
              icon={<BarChart3 className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Ready to Transform Your Laboratory?
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Contact us today to learn more about how CD4 LIMS can streamline your laboratory operations and enhance patient care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg"
                onClick={() => navigateTo('contactus')}
              >
                <Eye className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigateTo('home')}
              >
                Back to Home
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
