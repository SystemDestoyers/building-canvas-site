
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-sbc-gray-dark text-white">
      <div className="sbc-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SBC</h3>
            <p className="text-gray-300 mb-4">
              Solo Base Construction & Development provides premier engineering and construction services tailored to meet your needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-sbc-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-sbc-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-sbc-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-sbc-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-sbc-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'General Contracting', 
                'Civil Engineering', 
                'Structural Design', 
                'Site Development', 
                'Project Management'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-sbc-blue transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-sbc-blue" size={18} />
                <span className="text-gray-300">123 Construction Way, Building City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-sbc-blue" size={18} />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-sbc-blue" size={18} />
                <a href="mailto:info@sbcconstruction.com" className="text-gray-300 hover:text-sbc-blue transition-colors">
                  info@sbcconstruction.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-sbc-blue" size={18} />
                <span className="text-gray-300">Mon-Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Solo Base Construction & Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
