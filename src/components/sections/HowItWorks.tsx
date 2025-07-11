import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle, CreditCard } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MapPin,
    title: "Choose Your Location",
    description: "Use our integrated map to select your preferred location. We come to you - home, office, or anywhere convenient."
  },
  {
    step: "02", 
    icon: Clock,
    title: "Pick Your Time",
    description: "Select a time slot that suits your schedule. We offer flexible timing with no delays or waiting queues."
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Select Services",
    description: "Choose from our range of services and add-ons. Book for multiple vehicles at once and enjoy combo offers."
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Secure Payment",
    description: "Make secure online payments. Enjoy discount coupons on first bookings and loyalty rewards for repeat customers."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking a slot with Lavaggio is simple and convenient. Get your car professionally cleaned in just four easy steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Customer Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">First Booking Discount</h4>
              <p className="text-muted-foreground">Get exclusive discount coupons on your first service booking with us.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Loyalty Rewards</h4>
              <p className="text-muted-foreground">Earn points and rewards for repeat bookings and enjoy special member benefits.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Referral Perks</h4>
              <p className="text-muted-foreground">Get community-based rewards when you refer friends and family to Lavaggio.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Your First Booking
          </Button>
        </div>
      </div>
    </section>
  );
};