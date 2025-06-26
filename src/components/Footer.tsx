
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const footerLinks = {
    courses: [
      'Music Production',
      'DJ Courses',
      'Audio Engineering',
      'Bachelor Degrees',
      'Online Courses'
    ],
    locations: [
      'London',
      'Los Angeles',
      'Ibiza',
      'Online Learning'
    ],
    support: [
      'Contact Us',
      'Student Support',
      'Career Services',
      'Alumni Network',
      'FAQs'
    ],
    company: [
      'About Us',
      'Our Story',
      'Careers',
      'Press',
      'Partners'
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'SoundCloud', icon: '🎵', url: '#' }
  ];

  return (
    <footer className="bg-[var(--pb-dark)] text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[var(--pb-gold)] to-[var(--pb-bright-gold)] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-[var(--pb-dark)] mb-4">
            Stay Connected
          </h3>
          <p className="text-xl text-[var(--pb-dark)]/80 mb-8 max-w-2xl mx-auto">
            Get the latest news, course updates, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/90 border-0 text-[var(--pb-dark)] placeholder:text-[var(--pb-dark)]/60"
            />
            <Button 
              className="bg-[var(--pb-dark)] text-white hover:bg-[var(--pb-dark)]/90 px-8 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 hover:text-[var(--pb-gold)] transition-colors cursor-pointer">
                POINT BLANK
              </h2>
              <p className="text-[var(--pb-light-gray)] mb-6 leading-relaxed">
                30+ years of music education excellence. From London to Los Angeles, 
                we're shaping the future of music through innovative education and 
                industry connections.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--pb-gold)] transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-text-gradient">Courses</h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-text-gradient">Locations</h4>
              <ul className="space-y-3">
                {footerLinks.locations.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6 pb-text-gradient">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold mb-3 text-[var(--pb-gold)]">London Campus</h5>
                <p className="text-[var(--pb-light-gray)] text-sm">
                  23-28 Penn Street<br />
                  London N1 5DL<br />
                  +44 20 7729 4884
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-3 text-[var(--pb-gold)]">Los Angeles Campus</h5>
                <p className="text-[var(--pb-light-gray)] text-sm">
                  1041 N Formosa Ave<br />
                  West Hollywood, CA 90046<br />
                  +1 323 656 2500
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-3 text-[var(--pb-gold)]">Ibiza Campus</h5>
                <p className="text-[var(--pb-light-gray)] text-sm">
                  Carrer de sa Creu, 6<br />
                  07800 Ibiza, Spain<br />
                  +34 971 39 46 75
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[var(--pb-light-gray)] text-sm mb-4 md:mb-0">
              © 2024 Point Blank Music School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[var(--pb-light-gray)] hover:text-[var(--pb-gold)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
