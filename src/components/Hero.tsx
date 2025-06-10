import { Key, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen  text-white overflow-hidden pt-16">
      {/* Background image + overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/img1.jpg"
            alt="Automotive background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50 "></div>
        </div>


      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl  font-extrabold mb-6 text-white bg-clip-text text-transparent animate-fade-in">
            KeyMax Automotive
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl mb-10 text-slate-300 leading-relaxed animate-fade-in delay-200">
            Your trusted partner for car keys, motor keys, automated keys, and all automotive security solutions.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in delay-300">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0244288005
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              View Services
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-500">
            {[
              {
                Icon: Shield,
                title: "24/7 Emergency",
                description: "Available round the clock for your automotive key emergencies.",
              },
              {
                Icon: Key,
                title: "All Key Types",
                description: "Car keys, motor keys, smart keys, transponder keys & more.",
              },
              {
                Icon: Phone,
                title: "Fast Response",
                description: "Quick service with professional results guaranteed.",
              },
            ].map(({ Icon, title, description }, i) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-md hover:bg-white/15 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
