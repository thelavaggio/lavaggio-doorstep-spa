import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Droplets, Sparkles, Settings, CircleDot, Wind, Package } from "lucide-react";
import servicesImage from "@/assets/services-illustration.jpg";

const services = [
  {
    icon: Car,
    title: "Exterior & Interior Wash",
    description: "Complete cleaning of your vehicle inside and out with premium products and techniques.",
    badge: "Most Popular"
  },
  {
    icon: Droplets,
    title: "Waterless Car Cleaning",
    description: "Eco-friendly waterless cleaning technology that's safe for your car and the environment.",
    badge: "Eco-Friendly"
  },
  {
    icon: Sparkles,
    title: "Polishing & Waxing",
    description: "Professional polishing and waxing to restore your car's shine and protect the paint.",
    badge: "Premium"
  },
  {
    icon: Settings,
    title: "Engine Bay Cleaning",
    description: "Deep cleaning of your engine compartment with specialized tools and products.",
    badge: "Professional"
  },
  {
    icon: CircleDot,
    title: "Tyre & Alloy Cleaning",
    description: "Specialized cleaning for wheels and alloys to remove brake dust and grime.",
    badge: "Detailed"
  },
  {
    icon: Wind,
    title: "AC Vent Sanitization",
    description: "Thorough sanitization of air conditioning vents for better air quality.",
    badge: "Health+"
  },
  {
    icon: Package,
    title: "Custom Service Packages",
    description: "Tailored service combinations designed specifically for your vehicle's needs.",
    badge: "Customizable"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            All services use soft/mineral water to avoid damage and rust. 
            Choose from our comprehensive range of professional car care solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img 
              src={servicesImage} 
              alt="Professional car wash services" 
              className="w-full h-auto rounded-2xl shadow-premium"
            />
          </div>
          
          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:border-primary/20 bg-card border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">
                      {service.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="premium" size="lg" className="text-lg px-8 py-4 mr-4">
            View All Services
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};