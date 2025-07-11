import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Book your first wash now and experience the Lavaggio difference. 
            Premium car care delivered right to your doorstep.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-10 py-5 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Calendar className="mr-2" />
              Book a Slot Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-5 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="mr-2" />
              Call Us
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-1">Easy Booking</h4>
              <p className="text-sm">24/7 online booking available</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-1">Customer Support</h4>
              <p className="text-sm">Quick response and assistance</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-1">Wide Coverage</h4>
              <p className="text-sm">Serving multiple cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};