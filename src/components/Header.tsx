import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'courses' | 'locations';
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ isOpen, onClose, type }) => {
  if (type === 'courses') {
    return (
      <div className={`nav-dropdown ${isOpen ? 'open' : ''} absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-[var(--pb-gold)] z-[9999]`}>
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Music Production Column */}
            <div className="space-y-8">
              <h3 className="font-bold text-xl text-[var(--pb-dark)] border-b-2 border-gray-200 pb-4">
                Music Production
              </h3>
              <div className="space-y-6">
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  BA (Hons) Music Production
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Diploma in Music Production
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Ableton Live Course
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Logic Pro Course
                </a>
              </div>
            </div>

            {/* DJ Courses Column */}
            <div className="space-y-8">
              <h3 className="font-bold text-xl text-[var(--pb-dark)] border-b-2 border-gray-200 pb-4">
                DJ Courses
              </h3>
              <div className="space-y-6">
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Complete DJ Course
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Advanced DJ Techniques
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Club DJ Masterclass
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Festival DJ Course
                </a>
              </div>
            </div>

            {/* Audio Engineering Column */}
            <div className="space-y-8">
              <h3 className="font-bold text-xl text-[var(--pb-dark)] border-b-2 border-gray-200 pb-4">
                Audio Engineering
              </h3>
              <div className="space-y-6">
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Sound Engineering Diploma
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Mixing & Mastering
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Live Sound Engineering
                </a>
                <a href="#" className="block text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-2 text-base leading-6">
                  Pro Tools Certification
                </a>
              </div>
            </div>

            {/* Popular Courses Column */}
            <div className="space-y-8">
              <h3 className="font-bold text-xl text-[var(--pb-dark)] border-b-2 border-gray-200 pb-4">
                Popular Courses
              </h3>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <h4 className="font-semibold text-[var(--pb-dark)] text-base mb-3">Complete Music Production</h4>
                  <p className="text-sm text-[var(--pb-medium-gray)] leading-relaxed">12-week intensive course</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <h4 className="font-semibold text-[var(--pb-dark)] text-base mb-3">DJ & Music Production</h4>
                  <p className="text-sm text-[var(--pb-medium-gray)] leading-relaxed">Combined diploma program</p>
                </div>
                <Button className="w-full mt-8 pb-gradient text-white hover:opacity-90 text-base py-3">
                  View All Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`nav-dropdown ${isOpen ? 'open' : ''} absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-[var(--pb-gold)] z-[9999]`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', desc: 'Flagship campus in the heart of London' },
            { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856', desc: 'Hollywood-based studio facilities' },
            { name: 'Ibiza', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c', desc: 'Electronic music paradise' },
            { name: 'Online', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', desc: 'Learn from anywhere in the world' }
          ].map((location) => (
            <div key={location.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-bold text-lg text-[var(--pb-dark)] group-hover:text-[var(--pb-gold)] transition-colors mb-2">{location.name}</h3>
              <p className="text-sm text-[var(--pb-medium-gray)] mb-4 leading-relaxed">{location.desc}</p>
              <Button variant="outline" size="sm" className="w-full">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Check if we're over a white/light section
      // Adjust these values based on your page sections
      const whiteSection1Start = 600; // Adjust based on your layout
      const whiteSection1End = 1200;
      const whiteSection2Start = 2000;
      const whiteSection2End = 2800;
      
      const isInWhiteSection = (scrollY >= whiteSection1Start && scrollY <= whiteSection1End) ||
                              (scrollY >= whiteSection2Start && scrollY <= whiteSection2End);
      
      setIsOverWhiteSection(isInWhiteSection);
    };

    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Courses', hasDropdown: true },
    { name: 'Locations', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Students', hasDropdown: false },
    { name: 'Industry', hasDropdown: false },
    { name: 'Contact', hasDropdown: false }
  ];

  const handleDropdownToggle = (itemName: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === itemName.toLowerCase() ? null : itemName.toLowerCase());
  };

  // Dynamic text color based on background
  const getTextColor = () => {
    if (isOverWhiteSection) {
      return 'text-[var(--pb-dark)]';
    }
    return 'text-white';
  };

  const getHoverTextColor = () => {
    if (isOverWhiteSection) {
      return 'hover:text-[var(--pb-gold)]';
    }
    return 'hover:text-[var(--pb-bright-gold)]';
  };

  return (
    <header className={`fixed w-full top-0 z-[9998] transition-all duration-300 ${
      isScrolled 
        ? isOverWhiteSection
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-[var(--pb-dark)]/95 backdrop-blur-md shadow-lg border-b border-white/10'
        : 'bg-black/30 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center relative z-[10000]">
            <h1 className={`text-2xl font-bold transition-colors cursor-pointer ${getTextColor()} ${getHoverTextColor()}`}>
              POINT BLANK
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
              >
                <button 
                  className={`flex items-center space-x-1 transition-colors font-medium py-2 px-1 ${getTextColor()} ${getHoverTextColor()}`}
                  onClick={(e) => item.hasDropdown && handleDropdownToggle(item.name, e)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.hasDropdown && (
                  <MegaDropdown 
                    isOpen={activeDropdown === item.name.toLowerCase()}
                    onClose={() => setActiveDropdown(null)}
                    type={item.name.toLowerCase() as 'courses' | 'locations'}
                  />
                )}
              </div>
            ))}
            
            <Button className="pb-gradient text-white hover:opacity-90 transition-opacity font-semibold px-6 relative z-[10000]">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition-colors relative z-[10000] ${getTextColor()} ${getHoverTextColor()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--pb-dark)]/95 backdrop-blur-md shadow-lg border-t border-white/10 z-[9999]">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href="#" className="block text-white hover:text-[var(--pb-gold)] transition-colors font-medium">
                  {item.name}
                </a>
              ))}
              <Button className="w-full pb-gradient text-white hover:opacity-90 transition-opacity font-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
