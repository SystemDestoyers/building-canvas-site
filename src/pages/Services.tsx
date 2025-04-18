
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { ScrollAnimation } from '@/components/home/ScrollAnimation';
import { Building2, Ruler, HardHat, MapPin, ClipboardList } from 'lucide-react';

const Services = () => {
  const serviceData = [
    {
      title: "General Contracting",
      description: "Our general contracting services deliver comprehensive construction solutions from concept to completion, with meticulous attention to quality, safety, and timeline management.",
      icon: <Building2 size={32} />,
      features: [
        "End-to-end project execution",
        "Compliance with building codes and regulations",
        "Quality control and assurance",
        "Resource management and optimization",
        "Transparent client communication"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
    },
    {
      title: "Civil Engineering",
      description: "Our civil engineering team provides specialized expertise for infrastructure and development projects, ensuring structural integrity, efficiency, and environmental compliance.",
      icon: <Ruler size={32} />,
      features: [
        "Infrastructure design and analysis",
        "Site evaluation and planning",
        "Utility and drainage systems",
        "Environmental impact assessment",
        "Regulatory compliance management"
      ],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80"
    },
    {
      title: "Structural Design",
      description: "We create innovative structural designs that balance aesthetic appeal with engineering excellence, ensuring buildings that are both beautiful and built to last.",
      icon: <HardHat size={32} />,
      features: [
        "Architectural and engineering coordination",
        "Seismic and wind load analysis",
        "Material optimization",
        "Foundation design",
        "Retrofitting and rehabilitation"
      ],
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80"
    },
    {
      title: "Site Development",
      description: "From initial land assessment to final construction, our site development services transform raw land into functional, accessible, and environmentally sound project sites.",
      icon: <MapPin size={32} />,
      features: [
        "Topographic analysis",
        "Grading and drainage planning",
        "Access road development",
        "Utility installation coordination",
        "Environmental protection measures"
      ],
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80"
    },
    {
      title: "Project Management",
      description: "Our project management expertise ensures that your construction project is delivered on time, within budget, and to the highest quality standards.",
      icon: <ClipboardList size={32} />,
      features: [
        "Comprehensive project planning",
        "Schedule development and monitoring",
        "Budget management and cost control",
        "Risk assessment and mitigation",
        "Stakeholder communication"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sbc-gray-dark py-20 md:py-28">
        <div className="sbc-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive construction and engineering solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Comprehensive Construction Services" 
              subtitle="At SBC, we offer a complete range of construction and engineering services designed to meet the diverse needs of our clients, from initial planning to project completion."
            />
          </ScrollAnimation>
          
          {serviceData.map((service, index) => (
            <ScrollAnimation key={service.title} delay={index * 100}>
              <ServiceDetail 
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                image={service.image}
                reversed={index % 2 !== 0}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-sbc-blue section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Our team is ready to develop tailored solutions for your unique project requirements.
              </p>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-sbc-blue hover:bg-gray-100 font-semibold rounded-md transition-all inline-block"
              >
                Discuss Your Project
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
