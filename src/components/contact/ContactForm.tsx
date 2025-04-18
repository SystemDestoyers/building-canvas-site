
import { useState, FormEvent } from 'react';
import { Send, Check } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", service: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Check size={32} />
          </div>
          <h3 className="text-2xl font-bold text-sbc-gray-dark mb-2">Thank You!</h3>
          <p className="text-sbc-gray">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sbc-gray-dark mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sbc-blue"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sbc-gray-dark mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sbc-blue"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-sbc-gray-dark mb-2">
                Service Inquiry
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sbc-blue"
              >
                <option value="">Select a service</option>
                <option value="General Contracting">General Contracting</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Structural Design">Structural Design</option>
                <option value="Site Development">Site Development</option>
                <option value="Project Management">Project Management</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sbc-gray-dark mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sbc-blue"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-sbc-blue hover:bg-sbc-blue-dark text-white font-semibold rounded-md transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
