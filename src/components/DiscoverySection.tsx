
import { useAnimateOnScroll } from '@/utils/animations';
import { Compass, Lightbulb, Target } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const DiscoverySection = () => {
  const animationRef = useAnimateOnScroll();
  const isMobile = useIsMobile();
  
  const cards = [
    {
      icon: <Compass className="w-8 h-8 text-pathway-green" />,
      title: "Discover Your Path",
      description: [
        "AI-driven assessment of your unique strengths",
        "Uncover interests aligned with your passions",
        "Identify potential career pathways"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-pathway-green" />,
      title: "Personalized Insights",
      description: [
        "Detailed analysis of your natural talents",
        "Learn how to develop marketable skills",
        "Understand your fit in today's economy"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-pathway-green" />,
      title: "Actionable Steps",
      description: [
        "Clear roadmap for skill development",
        "Practical steps to begin monetization",
        "Progress tracking regardless of starting point"
      ]
    }
  ];

  return (
    <section id="discover" className="section-padding bg-pathway-offWhite" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Self-Discovery Journey
          </span>
          <h2 className="section-title text-pathway-navy reveal-animation" data-animation="animate-fade-in">
            Unlock Your Potential
          </h2>
          <p className="section-subtitle text-pathway-mediumGray reveal-animation" data-animation="animate-fade-in">
            Our comprehensive self-discovery approach helps you identify your unique strengths and shows you how to transform them into valuable skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-card p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] reveal-animation" 
              data-animation="animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-pathway-offWhite p-3 rounded-lg inline-block mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-pathway-navy">
                {card.title}
              </h3>
              <ul className="text-pathway-mediumGray list-disc pl-5 space-y-1 text-sm md:text-base">
                {card.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <Link to="/assessment" className="btn-primary reveal-animation w-full md:w-auto inline-flex" data-animation="animate-fade-in">
            Start Your Discovery
          </Link>
        </div>
        
        {/* Mobile-optimized padding to account for bottom navigation */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </section>
  );
};

export default DiscoverySection;
