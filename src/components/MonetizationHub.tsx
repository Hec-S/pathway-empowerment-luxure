
import { useAnimateOnScroll } from '@/utils/animations';
import { ArrowRight, Sparkle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MonetizationHub = () => {
  const animationRef = useAnimateOnScroll();
  const isMobile = useIsMobile();


  return (
    <section id="monetize" className="section-padding bg-white" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Monetization Pathways
          </span>
          <h2 className="section-title text-pathway-navy reveal-animation" data-animation="animate-fade-in">
            Turn Your Skills Into Income
          </h2>
          <p className="section-subtitle text-pathway-mediumGray reveal-animation" data-animation="animate-fade-in">
            Explore multiple ways to generate income using your natural abilities and newly developed skills without requiring startup capital.
          </p>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-pathway-navy to-pathway-charcoal rounded-xl shadow-lg overflow-hidden reveal-animation" data-animation="animate-fade-in">
          <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-3/5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle className="w-5 h-5 text-pathway-green" />
                <span className="text-sm font-medium text-pathway-green">Premium Feature</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Personalized Monetization Plan
              </h3>
              <p className="text-pathway-silver mb-6">
                Get a customized roadmap based on your unique skills, interests, and goals. Our AI mentor will guide you through each step of your journey.
              </p>
              <button className="bg-pathway-green hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-1 w-full md:w-auto justify-center md:justify-start">
                Create Your Plan
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="w-full md:w-2/5 bg-pathway-mediumGray bg-opacity-20 backdrop-blur-sm rounded-lg p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-white">Plan Features</h4>
              </div>
              
              <ul className="space-y-3">
                {["Custom skill assessment", "Market opportunity analysis", "Step-by-step guide", "Income projection", "Resource recommendations"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="rounded-full bg-pathway-green bg-opacity-20 p-1 mt-0.5">
                      <svg className="w-3 h-3 text-pathway-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-pathway-silver">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile-optimized padding to account for bottom navigation */}
      {isMobile && <div className="h-16"></div>}
    </section>
  );
};

export default MonetizationHub;
