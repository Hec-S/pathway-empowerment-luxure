
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-pathway-navy to-pathway-dark text-white pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-pathway-green opacity-5 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-pathway-lightGreen opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
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
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Free Assessment
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                Explore Success Stories
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 justify-center md:justify-start animate-fade-in stagger-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-pathway-silver bg-pathway-mediumGray"></div>
                <div className="w-10 h-10 rounded-full border-2 border-pathway-silver bg-pathway-gray"></div>
                <div className="w-10 h-10 rounded-full border-2 border-pathway-silver bg-pathway-lightGray"></div>
                <div className="w-10 h-10 rounded-full border-2 border-pathway-silver flex items-center justify-center bg-pathway-navy">
                  <span className="text-xs font-medium">+2k</span>
                </div>
              </div>
              <p className="text-sm text-pathway-silver">
                Joined by <span className="font-semibold">2,000+</span> students this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
