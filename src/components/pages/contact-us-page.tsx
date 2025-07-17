import { Phone, Mail, Building, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContactUsPageProps {
  navigateTo: (page: string) => void
}

export default function ContactUsPage({ navigateTo }: ContactUsPageProps) {
  return (
    <div>
      {/* Contact Section */}
      <section className="container py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Feel free to use the form to schedule a call / demo session or drop us an email. Old fashioned phone calls work too.
            </p>
          </div>

          <Card className="w-full max-w-2xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">00960 7657111</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:admin@nis.mv" 
                      className="text-primary hover:underline"
                    >
                      admin@nis.mv
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">Ninja Informatics Solutions, Hulhumale Phase 2, 24000</p>
                  </div>
                </div>

                {/* Contact Form Button */}
                <div className="pt-4 text-center">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch – Fill the Form
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Explore More</h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg"
                onClick={() => navigateTo('cd4lims')}
              >
                Learn About CD4 LIMS
                <ChevronRight className="ml-2 h-4 w-4" />
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
