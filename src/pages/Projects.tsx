
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ScrollAnimation } from '@/components/home/ScrollAnimation';

const Projects = () => {
  // Categories for filtering projects
  const categories = ['All', 'Commercial', 'Infrastructure', 'Residential', 'Industrial'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Project data
  const projects = [
    {
      title: "Skyline Tower",
      category: "Commercial",
      description: "Modern 15-story commercial office building in the heart of downtown.",
      fullDescription: "The Skyline Tower project involved the construction of a state-of-the-art 15-story commercial office building featuring floor-to-ceiling windows, a green roof system, and LEED Gold certification. Our team managed all aspects of construction, from foundation work to interior finishes, delivering the project ahead of schedule and under budget. The building includes advanced energy management systems, high-speed elevators, and a sophisticated security infrastructure.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      year: "2023",
      client: "Meridian Development Group",
      location: "Downtown Financial District"
    },
    {
      title: "Harbor Bridge Renovation",
      category: "Infrastructure",
      description: "Major rehabilitation of a 120-year-old suspension bridge including structural reinforcement and roadway expansion.",
      fullDescription: "This challenging infrastructure project involved the comprehensive renovation of a historic suspension bridge while maintaining its architectural significance. Our team implemented innovative structural reinforcement techniques, expanded the roadway capacity, and installed modern lighting and safety systems. The project required careful coordination with local transportation authorities to minimize traffic disruption and preserve the bridge's heritage features while bringing it up to modern safety standards.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
      year: "2022",
      client: "Metropolitan Transportation Authority",
      location: "Harbor District"
    },
    {
      title: "Riverside Apartments",
      category: "Residential",
      description: "Luxury residential complex with 120 units featuring modern amenities and sustainable design.",
      fullDescription: "Riverside Apartments is a luxury residential development comprising 120 units across three buildings. The complex features a mix of one, two, and three-bedroom apartments with high-end finishes, floor-to-ceiling windows, and private balconies. Our team managed all construction aspects, including site preparation, foundation work, structural framing, and interior finishes. The development includes shared amenities such as a fitness center, rooftop terrace, and underground parking garage. Sustainable design features include solar panels, rainwater harvesting, and energy-efficient systems throughout.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      year: "2021",
      client: "Riverfront Properties LLC",
      location: "East Riverside District"
    },
    {
      title: "Central Water Treatment Facility",
      category: "Infrastructure",
      description: "State-of-the-art water treatment plant with capacity to serve 250,000 residents.",
      fullDescription: "The Central Water Treatment Facility project involved the design and construction of a modern water treatment plant capable of processing 50 million gallons per day. Our engineering team developed custom solutions for filtration, disinfection, and distribution systems while meeting strict environmental regulations. The facility incorporates advanced automation technology, energy recovery systems, and sustainable waste management processes. The completed project has significantly improved water quality and supply reliability for the region while reducing operational costs and environmental impact.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
      year: "2022",
      client: "Regional Water Authority",
      location: "North County"
    },
    {
      title: "Greenfield Corporate Campus",
      category: "Commercial",
      description: "Sustainable corporate headquarters featuring four buildings on a 15-acre campus.",
      fullDescription: "The Greenfield Corporate Campus project encompassed the development of a 15-acre site featuring four interconnected office buildings totaling 350,000 square feet. Our team managed all aspects of this complex project, from initial site preparation to final landscaping. The campus incorporates numerous sustainable features including geothermal heating and cooling, solar panels, rainwater collection systems, and native landscaping. The buildings feature flexible floor plans, collaborative spaces, and state-of-the-art technology infrastructure. This LEED Platinum certified development has become a benchmark for sustainable corporate campus design in the region.",
      image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80",
      year: "2020",
      client: "Greenfield Technologies",
      location: "West Business District"
    },
    {
      title: "Heritage Apartments Restoration",
      category: "Residential",
      description: "Historical building conversion into luxury apartments with preserved architectural features.",
      fullDescription: "This challenging project involved the sensitive restoration and conversion of a 1920s department store building into 45 luxury apartments. Our team worked meticulously to preserve and restore key architectural features including terrazzo floors, ornate plasterwork, and the building's iconic façade. Modern amenities and systems were carefully integrated while respecting the historical integrity of the structure. The project required close collaboration with heritage preservation experts and local authorities. The completed development offers a unique living experience that combines historical character with contemporary luxury.",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80",
      year: "2019",
      client: "Heritage Development Group",
      location: "Historic Downtown District"
    },
    {
      title: "Advanced Manufacturing Facility",
      category: "Industrial",
      description: "State-of-the-art manufacturing facility with automated production lines and optimized workflow.",
      fullDescription: "This 200,000 square foot manufacturing facility was designed and built to house precision electronics production with stringent requirements for climate control, dust management, and utility systems. Our team implemented specialized flooring systems, advanced HVAC solutions, and custom utility infrastructure to meet the client's exacting specifications. The facility features automated material handling systems, modular production lines, and integrated quality control stations. Energy efficiency measures include heat recovery systems, LED lighting, and smart building controls. The completed project has enabled the client to significantly increase production capacity while reducing energy consumption and improving product quality.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      year: "2021",
      client: "TechPrecision Manufacturing",
      location: "North Industrial Zone"
    },
    {
      title: "Mountain View Resort",
      category: "Commercial",
      description: "Luxury mountain resort with hotel, conference center, and recreational facilities.",
      fullDescription: "The Mountain View Resort project encompassed the development of a comprehensive hospitality complex featuring a 120-room luxury hotel, 15,000 square foot conference center, spa facilities, and multiple dining venues. Our team managed all construction aspects in this challenging mountain terrain, implementing specialized foundation systems and environmentally sensitive site development practices. The buildings incorporate local materials and architectural elements that complement the natural surroundings while providing modern amenities. Sustainable features include ground-source heat pumps, rainwater harvesting, and native landscaping. The completed resort has become a premier destination for both leisure and business travelers.",
      image: "https://images.unsplash.com/photo-1537572263231-4314a30d444f?auto=format&fit=crop&q=80",
      year: "2020",
      client: "Alpine Hospitality Group",
      location: "Mountain Valley Region"
    },
    {
      title: "Urban Transit Center",
      category: "Infrastructure",
      description: "Multi-modal transportation hub connecting bus, light rail, and bicycle infrastructure.",
      fullDescription: "The Urban Transit Center project created a seamless transportation hub connecting multiple modes of public transit including bus, light rail, and bicycle infrastructure. Our team designed and constructed this complex facility featuring covered platforms, digital information systems, secure bicycle storage, and accessible connections between transit modes. The center incorporates sustainable design elements including photovoltaic canopies, rainwater collection, and energy-efficient lighting. Special attention was given to pedestrian flow, weather protection, and security features. This project has significantly improved transit accessibility and rider experience while supporting the city's sustainable transportation goals.",
      image: "https://images.unsplash.com/photo-1565636422148-832d8c1c01ee?auto=format&fit=crop&q=80",
      year: "2022",
      client: "Metropolitan Transit Authority",
      location: "Central District"
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sbc-gray-dark py-20 md:py-28">
        <div className="sbc-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Showcasing our expertise and commitment to excellence in construction and engineering
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Explore our portfolio of completed projects across various sectors."
            />
          </ScrollAnimation>
          
          {/* Category Filter */}
          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-md transition-all ${
                    activeCategory === category 
                      ? 'bg-sbc-blue text-white' 
                      : 'bg-gray-100 text-sbc-gray-dark hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimation>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 100}>
                <ProjectCard {...project} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-sbc-blue section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Let's discuss how SBC can bring your vision to life with our expertise in construction and engineering.
              </p>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-sbc-blue hover:bg-gray-100 font-semibold rounded-md transition-all inline-block"
              >
                Start Your Project
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
