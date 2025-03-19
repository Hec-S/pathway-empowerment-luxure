
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
          <div className="w-full md:w-1/2 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pathway-mediumGray bg-opacity-30 backdrop-blur-sm mb-6 animate-fade-in">
              <Star size={14} className="text-pathway-green mr-2" />
              <span className="text-sm font-medium">Empower Your Future</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
              Find Your Purpose.<br />
              <span className="text-pathway-green">Monetize</span> Your Passion.
            </h1>
            
            <p className="text-lg text-pathway-silver mb-8 max-w-lg animate-fade-in stagger-1">
              Pathway helps students discover their unique strengths and transform them into valuable skills that can be monetized in today's digital economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-2">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Free Assessment
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                Explore Success Stories
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 animate-fade-in stagger-3">
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
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="glass-card p-8 animate-slide-up bg-pathway-charcoal bg-opacity-70">
                <h3 className="text-xl font-semibold mb-4">Self-Discovery Quiz</h3>
                <p className="text-pathway-silver mb-6">Discover your unique path in just 5 minutes</p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-pathway-mediumGray bg-opacity-30 backdrop-blur-md p-4 rounded-lg">
                    <p className="font-medium mb-2">What activities make you lose track of time?</p>
                    <input type="text" placeholder="I love spending time..." className="w-full bg-transparent border border-pathway-gray border-opacity-30 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-pathway-green" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Question 1 of 5</span>
                    <button className="bg-pathway-green hover:bg-opacity-90 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-1">
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-pathway-green opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pathway-lightGreen opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
