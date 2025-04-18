
import { Building2, Ruler, HardHat, MapPin, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group">
      <div className="text-sbc-blue mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-sbc-gray-dark">{title}</h3>
      <p className="text-sbc-gray">{description}</p>
    </div>
  );
}

export function ServiceTeaser() {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "General Contracting",
      description: "Full-service general contracting with meticulous attention to detail and quality."
    },
    {
      icon: <Ruler size={40} />,
      title: "Civil Engineering",
      description: "Expert civil engineering solutions for infrastructure and development projects."
    },
    {
      icon: <HardHat size={40} />,
      title: "Structural Design",
      description: "Innovative structural design that balances aesthetics with solid engineering."
    },
    {
      icon: <MapPin size={40} />,
      title: "Site Development",
      description: "Comprehensive site development from initial planning to final construction."
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Project Management",
      description: "Efficient project management ensuring on-time, on-budget project delivery."
    }
  ];

  return (
    <section className="bg-gray-100 section-padding">
      <div className="sbc-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sbc-gray-dark mb-4">Our Services</h2>
          <p className="text-sbc-gray max-w-2xl mx-auto">
            We provide comprehensive construction and engineering solutions tailored to meet your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="px-6 py-3 bg-sbc-blue hover:bg-sbc-blue-dark text-white font-semibold rounded-md transition-all inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
