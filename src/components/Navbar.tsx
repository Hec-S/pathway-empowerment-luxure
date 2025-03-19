
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
        isScrolled ? 'bg-pathway-navy bg-opacity-90 backdrop-blur-md shadow-subtle py-4' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            Pathway
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#discover" className="animated-underline text-white font-medium">
            Discover
          </a>
          <a href="#monetize" className="animated-underline text-white font-medium">
            Monetize
          </a>
          <a href="#stories" className="animated-underline text-white font-medium">
            Success Stories
          </a>
          <button className="btn-primary">
            Start Your Journey
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-pathway-navy bg-opacity-95 absolute top-full left-0 right-0 py-4 px-6 shadow-subtle flex flex-col gap-4 animate-fade-in">
          <a href="#discover" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Discover
          </a>
          <a href="#monetize" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Monetize
          </a>
          <a href="#stories" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Success Stories
          </a>
          <button className="btn-primary mt-2">
            Start Your Journey
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
