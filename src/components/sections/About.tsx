import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              About Lavaggio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              More Than Just a Car Wash
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Lavaggio is more than a car wash — it's a movement to redefine vehicle care with integrity, 
              professionalism, and unmatched convenience. With a local office and growing community trust, 
              we're on a mission to make car care effortless and effective.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Built with Integrity</h4>
                  <p className="text-muted-foreground">We focus on building lasting relationships through clear pricing, honest recommendations, and transparent communication.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Community Focused</h4>
                  <p className="text-muted-foreground">Growing community trust through local presence and personalized service that treats every customer like family.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Professional Excellence</h4>
                  <p className="text-muted-foreground">Our trained professionals use sophisticated methods and premium products to deliver exceptional results every time.</p>
                </div>
              </div>
            </div>
            
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Learn More About Our Mission
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <Card className="text-center p-6 bg-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
                <p className="text-muted-foreground">Cars Serviced</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">10+</h3>
                <p className="text-muted-foreground">Cities Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">98%</h3>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};