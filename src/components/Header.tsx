
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
      <div className={`nav-dropdown ${isOpen ? 'open' : ''} absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-[var(--pb-gold)] z-50`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[var(--pb-dark)]">Music Production</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">BA (Hons) Music Production</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Diploma in Music Production</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Ableton Live Course</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Logic Pro Course</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[var(--pb-dark)]">DJ Courses</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Complete DJ Course</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Advanced DJ Techniques</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Club DJ Masterclass</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Festival DJ Course</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[var(--pb-dark)]">Audio Engineering</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Sound Engineering Diploma</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Mixing & Mastering</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Live Sound Engineering</a></li>
                <li><a href="#" className="text-[var(--pb-medium-gray)] hover:text-[var(--pb-bright-gold)] transition-colors">Pro Tools Certification</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[var(--pb-dark)]">Popular Courses</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-[var(--pb-dark)]">Complete Music Production</h4>
                  <p className="text-sm text-[var(--pb-medium-gray)]">12-week intensive course</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-[var(--pb-dark)]">DJ & Music Production</h4>
                  <p className="text-sm text-[var(--pb-medium-gray)]">Combined diploma program</p>
                </div>
              </div>
              <Button className="w-full mt-4 pb-gradient text-white hover:opacity-90">
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`nav-dropdown ${isOpen ? 'open' : ''} absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-[var(--pb-gold)] z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-6">
          {[
            { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', desc: 'Flagship campus in the heart of London' },
            { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856', desc: 'Hollywood-based studio facilities' },
            { name: 'Ibiza', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c', desc: 'Electronic music paradise' },
            { name: 'Online', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', desc: 'Learn from anywhere in the world' }
          ].map((location) => (
            <div key={location.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-bold text-lg text-[var(--pb-dark)] group-hover:text-[var(--pb-gold)] transition-colors">{location.name}</h3>
              <p className="text-sm text-[var(--pb-medium-gray)] mb-3">{location.desc}</p>
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Courses', hasDropdown: true },
    { name: 'Locations', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Students', hasDropdown: false },
    { name: 'Industry', hasDropdown: false },
    { name: 'Contact', hasDropdown: false }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--pb-dark)]/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white hover:text-[var(--pb-gold)] transition-colors cursor-pointer">
              POINT BLANK
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name.toLowerCase())}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-[var(--pb-bright-gold)] transition-colors font-medium">
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
            
            <Button className="pb-gradient text-white hover:opacity-90 transition-opacity font-semibold px-6">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-[var(--pb-gold)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--pb-dark)] shadow-lg">
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
