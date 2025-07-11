import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh K.",
    location: "Bangalore",
    content: "Lavaggio saved me hours of waiting. My car has never looked better! The doorstep service is incredibly convenient and the quality is top-notch.",
    rating: 5
  },
  {
    name: "Priya M.",
    location: "Mumbai",
    content: "Love their punctuality and the way they explain each service. Very transparent pricing and excellent customer service. Highly recommended!",
    rating: 5
  },
  {
    name: "Arjun S.",
    location: "Delhi",
    content: "Amazing service! They use soft water and premium products. My car's paint looks brand new after their polishing service. Will definitely book again.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their Lavaggio experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-3 bg-card border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Trust & Transparency
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Clear Pricing</h4>
              <p className="text-muted-foreground text-sm">No hidden charges or surprise costs</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">No Upselling</h4>
              <p className="text-muted-foreground text-sm">We recommend only what you need</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Detailed Explanation</h4>
              <p className="text-muted-foreground text-sm">Full service breakdown and process</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Feedback Driven</h4>
              <p className="text-muted-foreground text-sm">Continuous improvement through reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};