
import { Car, Key, Smartphone, Shield, Wrench, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Car Key Replacement",
      description: "Complete car key replacement for all makes and models including luxury vehicles",
      features: ["Transponder keys", "Remote key fobs", "Smart keys", "Emergency replacement"],
      image: "/img2.jpg"
    },
    {
      icon: Key,
      title: "Motor Key Services",
      description: "Specialized motor key cutting and programming for motorcycles and scooters",
      features: ["Motorcycle keys", "Scooter keys", "ATV keys", "Key duplication"],
      image: "/img3.jpg"
    },
    {
      icon: Smartphone,
      title: "Automated Key Systems",
      description: "Modern automated and smart key solutions for enhanced security",
      features: ["Smart key programming", "Keyless entry", "Push-to-start", "Proximity keys"],
      image: "/img4.jpg"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive automotive security and anti-theft solutions",
      features: ["Alarm systems", "Immobilizer repair", "Security upgrades", "Theft prevention"],
      image: "img5.jpg"
    },
    {
      icon: Wrench,
      title: "Key Programming",
      description: "Professional key programming and ECU synchronization services",
      features: ["ECU programming", "Key synchronization", "Chip key programming", "System diagnostics"],
      image: "img6.jpg"
    },
    {
      icon: Clock,
      title: "Emergency Services",
      description: "24/7 emergency lockout and key replacement services",
      features: ["Lockout assistance", "Emergency key cutting", "Mobile service", "Rapid response"],
      image: "img7.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Key Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From traditional car keys to the latest smart key technology, we provide comprehensive automotive key solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 transition-transform duration-300 hover:translate-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
