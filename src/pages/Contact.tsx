import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const { submitContactForm } = await import("@/services/contactService");
      await submitContactForm(
        formData.name,
        formData.email,
        formData.phone,
        formData.message
      );

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Whether you have questions, prayer requests, 
            or would like to join our fellowship, please reach out.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-soft border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm">
                    pcs.chinna@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-sm">
                      +91 9052402299
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Bro. Chinnaraja P<br />
                      H. No 2, Thanigai Street,<br />
                      Rajaji Nagar,
                      Villivakkam,<br />
                      Chennai - 49
</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-2">Service Times</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Sunday Worship:</strong> 10:00 AM</p>
                  <p><strong>Bible Study:</strong> 9:00 AM</p>
                  <p><strong>Wednesday Evening:</strong> 7:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevated border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you? Share your prayer requests, questions, or let us know you'd like to join our fellowship..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" variant="covenant" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Message */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-card rounded-xl p-8 shadow-soft text-center">
            <p className="text-lg text-muted-foreground italic">
              "And let us consider one another in order to stir up love and good works, 
              not forsaking the assembling of ourselves together."
            </p>
            <p className="text-accent font-medium mt-3">— Hebrews 10:24-25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
