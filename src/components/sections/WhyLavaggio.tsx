import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, Truck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Slot Booking",
    description: "Skip the queue with our seamless online booking system. Choose your preferred time slot and we'll be there — no delays, no hassle."
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Our trained professionals treat every vehicle as their own. We use high-quality products, soft/mineral water for rust-free cleaning, and sophisticated handling methods."
  },
  {
    icon: Truck,
    title: "True Doorstep Convenience",
    description: "Whether at home or work, Lavaggio brings car wash and detailing services directly to your location. Save time, avoid traffic, and enjoy premium service without stepping out."
  },
  {
    icon: BarChart3,
    title: "Transparent Approach",
    description: "We recommend only necessary services after detailed car condition checks. You'll get honest advice and clear communication every step of the way."
  }
];

export const WhyLavaggio = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Lavaggio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium car care services designed around your convenience and satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="premium" size="lg" className="text-lg px-8 py-4">
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};