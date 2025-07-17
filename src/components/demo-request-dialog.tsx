"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Eye } from "lucide-react"

interface DemoRequestDialogProps {
  trigger?: React.ReactNode
  triggerText?: string
}

interface FormData {
  fullname: string
  institution: string
  designation: string
  email: string
  phone: string
  request: string
}

export default function DemoRequestDialog({ 
  trigger, 
  triggerText = "Book a Demo" 
}: DemoRequestDialogProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    institution: "",
    designation: "",
    email: "",
    phone: "",
    request: ""
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically send the data to your backend
    console.log("Demo request submitted:", formData)
    
    // Reset form and close dialog
    setFormData({
      fullname: "",
      institution: "",
      designation: "",
      email: "",
      phone: "",
      request: ""
    })
    setIsLoading(false)
    setOpen(false)
    
    // Show success message (you could add a toast notification here)
    alert("Thank you for your demo request! We will get back to you soon to arrange the session.")
  }

  const handleCancel = () => {
    setOpen(false)
    // Reset form when cancelling
    setFormData({
      fullname: "",
      institution: "",
      designation: "",
      email: "",
      phone: "",
      request: ""
    })
  }

  const isFormValid = formData.fullname && formData.institution && formData.email

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="lg">
            <Eye className="mr-2 h-4 w-4" />
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Demo Session Request Form</DialogTitle>
          <DialogDescription>
            Please fill the form and submit. We will get back to you to arrange the demo session
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Fullname */}
            <div className="space-y-2">
              <label htmlFor="fullname" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Fullname:
              </label>
              <Input
                id="fullname"
                placeholder="Fullname"
                value={formData.fullname}
                onChange={(e) => handleInputChange("fullname", e.target.value)}
                required
              />
            </div>

            {/* Institution */}
            <div className="space-y-2">
              <label htmlFor="institution" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Institution:
              </label>
              <Input
                id="institution"
                placeholder="Institution"
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                required
              />
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <label htmlFor="designation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Designation:
              </label>
              <Input
                id="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={(e) => handleInputChange("designation", e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email:
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone Number - Full Width */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone Number:
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full md:w-1/2"
            />
          </div>

          {/* Request Details */}
          <div className="space-y-2">
            <label htmlFor="request" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Your request here... max 200 characters
            </label>
            <Textarea
              id="request"
              placeholder="Your request here... max 200 characters"
              value={formData.request}
              onChange={(e) => handleInputChange("request", e.target.value.slice(0, 200))}
              maxLength={200}
              rows={3}
            />
            <div className="text-xs text-muted-foreground text-right">
              {formData.request.length}/200
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
