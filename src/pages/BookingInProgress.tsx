import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BookingInProgress = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8 shadow-premium bg-card border-border/50">
          <CardContent className="p-0">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-primary-foreground" />
            </div>
            
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Booking System Coming Soon!
            </h1>
            
            {/* Message */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're working hard to bring you the best online booking experience. 
              <strong className="text-foreground"> Please be with us for some more days.</strong>
            </p>
            
            {/* Current Solution */}
            <div className="bg-accent/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Meanwhile, let's connect directly!
              </h3>
              <p className="text-muted-foreground mb-6">
                Currently, you can call us and let us know your availability. 
                Our team will be happy to schedule your car wash service.
              </p>
              
              {/* Contact Options */}
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="premium" size="lg" className="text-lg px-6 py-4">
                  <Phone className="mr-2" />
                  Call Now: +91 98765 43210
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-6 py-4">
                  <Clock className="mr-2" />
                  WhatsApp: +91 98765 43210
                </Button>
              </div>
            </div>
            
            {/* What to expect */}
            <div className="text-left bg-background rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-3">When you call, please have ready:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Your preferred date and time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Your location (home/office address)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Type of vehicle and preferred services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Any special requirements or requests
                </li>
              </ul>
            </div>
            
            {/* Back to Home */}
            <Link to="/">
              <Button variant="ghost" size="lg" className="text-lg">
                <ArrowLeft className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingInProgress;