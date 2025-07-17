import { Building } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-3">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
            <Building className="h-4 w-4" />
          </div>
          <span className="font-semibold">Ninja Informatics Solutions</span>
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          <span className="hidden sm:inline">Empowering Laboratories with Innovative Solutions</span>
          <span className="sm:hidden">Empowering Laboratories</span>
        </div>
      </div>
    </footer>
  )
}
