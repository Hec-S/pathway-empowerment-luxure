
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, Search, User, LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user, profile, signOut } = useAuth();

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
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            Pathway
          </span>
        </Link>

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
          
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/assessment" className="btn-primary">
                Start Your Journey
              </Link>
              <div className="flex items-center gap-2 text-white">
                <span>{profile?.username || user.email}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={signOut} 
                  className="text-white hover:bg-pathway-charcoal"
                  title="Sign Out"
                >
                  <LogOut size={18} />
                </Button>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="btn-primary">
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      
      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-pathway-navy bg-opacity-95 absolute top-full left-0 right-0 py-4 px-6 shadow-subtle flex flex-col gap-4 animate-fade-in z-50">
          <a href="#discover" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Discover
          </a>
          <a href="#monetize" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Monetize
          </a>
          <a href="#stories" className="text-white font-medium py-2 px-4 rounded-md hover:bg-pathway-charcoal">
            Success Stories
          </a>
          
          {user ? (
            <>
              <Link 
                to="/assessment" 
                className="btn-primary mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Journey
              </Link>
              <div className="flex items-center justify-between text-white py-2 px-4">
                <span>{profile?.username || user.email}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }} 
                  className="text-white hover:bg-pathway-charcoal"
                >
                  Sign Out <LogOut size={16} className="ml-2" />
                </Button>
              </div>
            </>
          ) : (
            <Link 
              to="/auth" 
              className="btn-primary mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
        </nav>
      )}
    
      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-pathway-navy bg-opacity-95 backdrop-blur-md shadow-subtle py-2 px-4 z-40">
          <div className="flex justify-around items-center">
            <Link to="/" className="flex flex-col items-center p-2 text-white">
              <Home size={20} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <a href="#discover" className="flex flex-col items-center p-2 text-white">
              <Search size={20} />
              <span className="text-xs mt-1">Discover</span>
            </a>
            <Link to={user ? "/assessment" : "/auth"} className="flex flex-col items-center p-2 text-white">
              <User size={20} />
              <span className="text-xs mt-1">{user ? "Profile" : "Sign In"}</span>
            </Link>
          </div>
        </div>
      )}
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="bg-pathway-green h-full transition-all duration-300"
          style={{ width: `${isScrolled ? Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100) : 0}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
