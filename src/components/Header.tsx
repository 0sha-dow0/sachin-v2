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
      <div className={`nav-dropdown ${isOpen ? 'open' : ''} fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md shadow-2xl z-[9999] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="w-full h-full overflow-y-auto pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--pb-dark)] mb-4">Our Courses</h2>
              <p className="text-lg text-[var(--pb-medium-gray)] max-w-2xl mx-auto">Discover world-class music education programs designed to launch your career in the music industry.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Music Production Column */}
              <div className="bg-gray-50 rounded-lg p-4 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--pb-dark)] mb-4 pb-2 border-b-2 border-[var(--pb-gold)]">
                  Music Production
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    BA (Hons) Music Production
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Diploma in Music Production
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Ableton Live Course
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Logic Pro Course
                  </a>
                </div>
              </div>

              {/* DJ Courses Column */}
              <div className="bg-gray-50 rounded-lg p-4 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--pb-dark)] mb-4 pb-2 border-b-2 border-[var(--pb-gold)]">
                  DJ Courses
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Complete DJ Course
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Advanced DJ Techniques
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Club DJ Masterclass
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Festival DJ Course
                  </a>
                </div>
              </div>

              {/* Audio Engineering Column */}
              <div className="bg-gray-50 rounded-lg p-4 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--pb-dark)] mb-4 pb-2 border-b-2 border-[var(--pb-gold)]">
                  Audio Engineering
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Sound Engineering Diploma
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Mixing & Mastering
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Live Sound Engineering
                  </a>
                  <a href="#" className="block text-sm lg:text-base text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors py-1.5 leading-relaxed">
                    Pro Tools Certification
                  </a>
                </div>
              </div>

              {/* Popular Courses Column */}
              <div className="bg-gradient-to-br from-[var(--pb-gold)] to-[var(--pb-bright-gold)] rounded-lg p-4 lg:p-6 text-white">
                <h3 className="font-bold text-lg lg:text-xl mb-4 pb-2 border-b-2 border-white/30">
                  Popular Courses
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 border border-white/20">
                    <h4 className="font-semibold text-sm lg:text-base mb-2">Complete Music Production</h4>
                    <p className="text-xs lg:text-sm opacity-90">12-week intensive course</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 border border-white/20">
                    <h4 className="font-semibold text-sm lg:text-base mb-2">DJ & Music Production</h4>
                    <p className="text-xs lg:text-sm opacity-90">Combined diploma program</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-white text-[var(--pb-dark)] hover:bg-gray-100 border-white font-semibold text-sm lg:text-base">
                    View All Courses
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={onClose}
                variant="outline" 
                className="px-8 py-3 text-[var(--pb-dark)] border-[var(--pb-dark)] hover:bg-[var(--pb-dark)] hover:text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`nav-dropdown ${isOpen ? 'open' : ''} fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md shadow-2xl z-[9999] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="w-full h-full overflow-y-auto pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--pb-dark)] mb-4">Our Locations</h2>
            <p className="text-lg text-[var(--pb-medium-gray)] max-w-2xl mx-auto">Choose from our world-class campuses and online programs to start your music education journey.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', desc: 'Flagship campus in the heart of London' },
              { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856', desc: 'Hollywood-based studio facilities' },
              { name: 'Ibiza', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c', desc: 'Electronic music paradise' },
              { name: 'Online', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', desc: 'Learn from anywhere in the world' }
            ].map((location) => (
              <div key={location.name} className="group cursor-pointer bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="font-bold text-lg lg:text-xl text-[var(--pb-dark)] group-hover:text-[var(--pb-gold)] transition-colors mb-2">{location.name}</h3>
                  <p className="text-sm lg:text-base text-[var(--pb-medium-gray)] mb-4 leading-relaxed">{location.desc}</p>
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="px-8 py-3 text-[var(--pb-dark)] border-[var(--pb-dark)] hover:bg-[var(--pb-dark)] hover:text-white"
            >
              Close
            </Button>
          </div>
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
