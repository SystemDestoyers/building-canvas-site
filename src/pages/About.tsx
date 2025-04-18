
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TeamMember } from '@/components/about/TeamMember';
import { Timeline } from '@/components/about/Timeline';
import { Testimonial } from '@/components/about/Testimonial';
import { ScrollAnimation } from '@/components/home/ScrollAnimation';

const About = () => {
  const teamMembers = [
    {
      name: "Michael Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "With over 25 years of construction experience, Michael founded SBC with a vision to combine quality engineering with exceptional service.",
      email: "michael@sbcconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Sarah Williams",
      position: "Civil Engineering Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Sarah leads our civil engineering team with expertise in sustainable infrastructure and innovative design solutions.",
      email: "sarah@sbcconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "David Chen",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "David specializes in managing complex projects, ensuring they're delivered on time and within budget while exceeding client expectations.",
      email: "david@sbcconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rebecca Torres",
      position: "Structural Design Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "Rebecca brings innovative structural design solutions to our projects, balancing aesthetics with sound engineering principles.",
      email: "rebecca@sbcconstruction.com",
      linkedin: "https://linkedin.com"
    }
  ];
  
  const testimonials = [
    {
      quote: "SBC consistently delivered beyond our expectations. Their attention to detail and commitment to quality made our commercial building project a great success.",
      author: "Jonathan Reed",
      position: "Development Director",
      company: "Axis Properties",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      quote: "Working with SBC on our infrastructure project was a seamless experience. Their engineering expertise and project management skills ensured everything was completed on schedule.",
      author: "Lisa Mendez",
      position: "City Engineer",
      company: "Westlake Municipality",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      quote: "The team at SBC provided creative solutions to our complex structural challenges. They're not just contractors; they're valuable partners in our development projects.",
      author: "Marcus Johnson",
      position: "Operations Manager",
      company: "Horizon Developments",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sbc-gray-dark py-20 md:py-28">
        <div className="sbc-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300">
              Building excellence through quality construction and innovative engineering
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section-padding">
        <div className="sbc-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-sbc-gray-dark mb-4">Our Story</h2>
                <p className="text-sbc-gray mb-4">
                  Founded in 2010, Solo Base Construction & Development began with a simple mission: to provide quality construction services that combine engineering excellence with outstanding client service.
                </p>
                <p className="text-sbc-gray mb-4">
                  Over the years, we've grown from a small local contractor into a comprehensive construction and engineering firm serving clients across the region, while maintaining our commitment to quality and personal attention.
                </p>
                <p className="text-sbc-gray">
                  Today, SBC is recognized as an industry leader in general contracting, civil engineering, and project management, with a portfolio of successful projects spanning commercial buildings, infrastructure, and specialized construction.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                alt="SBC Office Building" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="bg-gray-100 section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Our Mission & Values" 
              subtitle="We are guided by a clear mission and strong values that shape everything we do."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-sbc-blue mb-4">Our Mission</h3>
                <p className="text-sbc-gray">
                  To deliver exceptional construction and engineering solutions that exceed client expectations while maintaining the highest standards of quality, safety, and integrity.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-sbc-blue mb-4">Our Vision</h3>
                <p className="text-sbc-gray">
                  To be the most trusted and respected construction and engineering firm, recognized for excellence in our work, our people, and our contribution to the built environment.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-sbc-blue mb-4">Core Values</h3>
                <ul className="text-sbc-gray space-y-2">
                  <li>• Excellence in everything we do</li>
                  <li>• Integrity and transparency</li>
                  <li>• Innovation and continuous improvement</li>
                  <li>• Safety as our top priority</li>
                  <li>• Sustainability and environmental responsibility</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Our Leadership Team" 
              subtitle="Meet the experienced professionals who lead SBC's commitment to construction excellence."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <TeamMember {...member} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="bg-gray-100 section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Our Journey" 
              subtitle="Key milestones in SBC's growth and development over the years."
            />
          </ScrollAnimation>
          
          <ScrollAnimation>
            <Timeline />
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Client Testimonials" 
              subtitle="What our clients say about working with SBC."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Testimonial {...testimonial} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
