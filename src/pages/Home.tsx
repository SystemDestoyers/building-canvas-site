import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { ServiceTeaser } from '@/components/home/ServiceTeaser';
import { ScrollAnimation } from '@/components/home/ScrollAnimation';

const Home = () => {
  return (
    <Layout>
      <div className="pt-0">
        <Hero />
        
        <ScrollAnimation>
          <ServiceTeaser />
        </ScrollAnimation>
        
        <section className="section-padding">
          <div className="sbc-container">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-sbc-gray-dark mb-4">Featured Projects</h2>
                <p className="text-sbc-gray max-w-2xl mx-auto">
                  Take a look at some of our recent work showcasing our commitment to quality and innovation.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                    alt="Commercial Building" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Commercial Tower</h3>
                      <p className="text-sm">Modern office building in downtown area</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                    alt="Bridge Construction" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Infrastructure Project</h3>
                      <p className="text-sm">Urban bridge with innovative engineering solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" 
                    alt="Waterway Development" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Waterway Development</h3>
                      <p className="text-sm">Sustainable water management project</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <div className="text-center mt-12">
              <a 
                href="/projects" 
                className="px-6 py-3 bg-sbc-blue hover:bg-sbc-blue-dark text-white font-semibold rounded-md transition-all inline-block"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
        
        <section className="bg-sbc-blue section-padding">
          <div className="sbc-container">
            <ScrollAnimation>
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto">
                  Partner with SBC for your next construction or engineering project and experience excellence in every detail.
                </p>
                <a 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-sbc-blue hover:bg-gray-100 font-semibold rounded-md transition-all inline-block"
                >
                  Contact Us Today
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
