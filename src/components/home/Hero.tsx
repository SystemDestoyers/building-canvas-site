
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')", 
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sbc-gray-darker/80 to-sbc-gray-darker/50 z-10"></div>
      
      {/* Content */}
      <div className="sbc-container relative z-20 text-white text-center md:text-left">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Building Excellence,</span>
            <span className="block text-sbc-blue">Engineering Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Solo Base Construction & Development delivers premium construction and engineering solutions tailored to your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              to="/services"
              className="px-8 py-3 bg-sbc-blue hover:bg-sbc-blue-dark text-white font-semibold rounded-md transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-semibold rounded-md transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
