
import { Award, Users, Wrench, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Satisfied Customers" },
    { icon: Wrench, number: "15+", label: "Years Experience" },
    { icon: Award, number: "500+", label: "Vehicle Models Supported" },
    { icon: Star, number: "4.9", label: "Customer Rating" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About KeyMax Automotive
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 15 years of experience in automotive security solutions, KeyMax Automotive has become the trusted name for car key services, motor key replacement, and automated key systems.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our team of certified technicians specializes in all types of automotive keys, from traditional metal keys to the latest smart key technology. We work with all major vehicle manufacturers and stay up-to-date with the latest automotive security innovations.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you need emergency lockout assistance, key replacement, or advanced key programming services, we provide fast, reliable, and professional solutions to get you back on the road.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group transition-transform duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl p-8 text-white animate-fade-in delay-300 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6">Why Choose KeyMax?</h3>
            <div className="space-y-4">
              <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Technicians</h4>
                  <p className="text-blue-100">Certified professionals with extensive automotive key experience</p>
                </div>
              </div>
              <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0 animate-pulse delay-300"></div>
                <div>
                  <h4 className="font-semibold mb-1">Latest Technology</h4>
                  <p className="text-blue-100">State-of-the-art equipment for all key types and programming</p>
                </div>
              </div>
              <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0 animate-pulse delay-500"></div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Service</h4>
                  <p className="text-blue-100">Quick turnaround times with emergency availability</p>
                </div>
              </div>
              <div className="flex items-start transition-transform duration-300 hover:translate-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0 animate-pulse delay-700"></div>
                <div>
                  <h4 className="font-semibold mb-1">Guaranteed Work</h4>
                  <p className="text-blue-100">All services backed by our satisfaction guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
