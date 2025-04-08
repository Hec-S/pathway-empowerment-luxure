import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="relative min-h-screen flex items-center bg-black text-white pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-pathway-green opacity-5 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-pathway-lightGreen opacity-5 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 max-w-2xl mx-auto text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pathway-mediumGray bg-opacity-30 backdrop-blur-sm mb-6 animate-fade-in">
              <Star size={14} className="text-pathway-green mr-2" />
              <span className="text-sm font-medium">Empower Your Future</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
              Find Your Purpose.<br />
              <span className="text-pathway-green">Monetize</span> Your Passion.
            </h1>
            
            <p className="text-lg text-pathway-silver mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in stagger-1">
              Pathway helps students discover their unique strengths and transform them into valuable skills that can be monetized in today's digital economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in stagger-2">
              <Link to="/assessment" className="btn-primary flex items-center justify-center gap-2">
                Start Free Assessment
                <ArrowRight size={18} />
              </Link>
              
            </div>
            
            <div className="mt-12 flex items-center gap-6 justify-center md:justify-start animate-fade-in stagger-3">
              <p className="text-sm text-pathway-silver">
                Joined by <span className="font-semibold">150+</span> students this month
              </p>
            </div>
          </div>
          
          {/* Right side image for desktop */}
          <div className="hidden md:block w-2/5 relative">
            <div className="absolute inset-0 bg-pathway-green bg-opacity-10 rounded-lg overflow-hidden">
              <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full bg-pathway-green opacity-10 animate-float"></div>
              <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-pathway-lightGreen opacity-10 animate-float" style={{
                animationDelay: '1.5s'
              }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#discover" className="flex flex-col items-center text-pathway-silver hover:text-white transition-colors">
          <span className="text-xs mb-2">Scroll to explore</span>
          <ChevronDown size={20} />
        </a>
      </div>
      
      {/* Mobile-optimized padding to account for bottom navigation */}
      {isMobile && <div className="h-16"></div>}
    </section>;
};
export default Hero;
