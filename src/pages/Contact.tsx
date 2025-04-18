
import { Layout } from '@/components/layout/Layout';
import { MapComponent } from '@/components/common/MapComponent';
import { ContactForm } from '@/components/contact/ContactForm';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ScrollAnimation } from '@/components/home/ScrollAnimation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sbc-gray-dark py-20 md:py-28">
        <div className="sbc-container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss your project needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Get in Touch" 
              subtitle="Reach out to discuss your project requirements or to learn more about our services."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-sbc-gray-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="text-sbc-blue mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="font-semibold text-sbc-gray-dark">Address</h4>
                      <p className="text-sbc-gray">123 Construction Way, Building City, 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-sbc-blue mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="font-semibold text-sbc-gray-dark">Phone</h4>
                      <p className="text-sbc-gray">(123) 456-7890</p>
                      <p className="text-sbc-gray">(123) 456-7891</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-sbc-blue mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="font-semibold text-sbc-gray-dark">Email</h4>
                      <p className="text-sbc-gray">
                        <a href="mailto:info@sbcconstruction.com" className="hover:text-sbc-blue transition-colors">
                          info@sbcconstruction.com
                        </a>
                      </p>
                      <p className="text-sbc-gray">
                        <a href="mailto:projects@sbcconstruction.com" className="hover:text-sbc-blue transition-colors">
                          projects@sbcconstruction.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-sbc-blue mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="font-semibold text-sbc-gray-dark">Office Hours</h4>
                      <p className="text-sbc-gray">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-sbc-gray">Weekends: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px]">
                  <MapComponent />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-sbc-gray-dark mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-100 section-padding">
        <div className="sbc-container">
          <ScrollAnimation>
            <SectionHeader 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our services and process."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-sbc-gray-dark mb-3">What areas do you serve?</h4>
                <p className="text-sbc-gray">
                  SBC primarily serves the metropolitan area and surrounding counties. For larger projects, we also work throughout the state and occasionally on selected projects nationwide.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-sbc-gray-dark mb-3">How do I get a project estimate?</h4>
                <p className="text-sbc-gray">
                  You can request a project estimate by contacting us through our contact form, by email, or by phone. We'll schedule a consultation to discuss your project requirements and provide a detailed estimate.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-sbc-gray-dark mb-3">What types of projects do you handle?</h4>
                <p className="text-sbc-gray">
                  We handle a wide range of projects including commercial buildings, infrastructure, residential developments, industrial facilities, and specialized construction projects requiring engineering expertise.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-sbc-gray-dark mb-3">Do you offer design-build services?</h4>
                <p className="text-sbc-gray">
                  Yes, we offer comprehensive design-build services that integrate the design and construction phases for greater efficiency, cost control, and seamless project delivery.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
