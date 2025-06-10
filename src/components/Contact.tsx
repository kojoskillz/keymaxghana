
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact KeyMax Automotive
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Need automotive key services? Contact us for fast, professional, and reliable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-slate-800/70 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <Phone className="w-6 h-6 text-blue-400 mr-3" />
                    Emergency Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-400 mb-2">0244288005</p>
                  <p className="text-slate-300">Available 24/7 for emergency services</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-slate-800/70 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                    Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Accra,Ghana</p>
                  <p className="text-slate-300">Mobile service available citywide</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-slate-800/70 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <Clock className="w-6 h-6 text-blue-400 mr-3" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-slate-300">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-blue-400 font-semibold">Emergency services: 24/7</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md transition-all duration-300 hover:bg-slate-800/70 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <Mail className="w-6 h-6 text-blue-400 mr-3" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">info@keymaxautomotive.com</p>
                  <p className="text-slate-300">For quotes and general inquiries</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl p-8 animate-fade-in delay-300 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Don't let key problems keep you stranded. Our expert technicians are ready to help with all your automotive key needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse"></div>
                <span>Free quotes and consultations</span>
              </div>
              <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse delay-200"></div>
                <span>Same-day service available</span>
              </div>
              <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse delay-400"></div>
                <span>All work guaranteed</span>
              </div>
              <div className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse delay-600"></div>
                <span>Insurance-friendly pricing</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 0244288005
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105">
                Request Quote Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
