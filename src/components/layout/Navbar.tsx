
import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change on scroll
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Back to top button visibility
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}>
        <div className="sbc-container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold transition-colors",
              scrolled ? "text-sbc-blue" : "text-white"
            )}>SBC</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden rounded-md p-2 transition-colors",
              scrolled ? "text-sbc-gray-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={cn(
                  "font-medium hover:text-sbc-blue-light transition-colors",
                  scrolled ? "text-sbc-gray-dark" : "text-white"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className={cn(
          "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="sbc-container py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sbc-gray-dark hover:text-sbc-blue py-2 font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 bg-sbc-blue hover:bg-sbc-blue-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
}
