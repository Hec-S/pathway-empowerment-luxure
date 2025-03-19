
import { useAnimateOnScroll } from '@/utils/animations';
import { Compass, Lightbulb, Target, Sparkles } from 'lucide-react';

const DiscoverySection = () => {
  const animationRef = useAnimateOnScroll();
  
  const cards = [
    {
      icon: <Compass className="w-8 h-8 text-pathway-navy" />,
      title: "Discover Your Path",
      description: "Our AI-driven assessment helps you uncover your unique strengths, interests, and potential career pathways aligned with your passions."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-pathway-navy" />,
      title: "Personalized Insights",
      description: "Receive detailed insights about your natural talents and how they can be developed into marketable skills in today's economy."
    },
    {
      icon: <Target className="w-8 h-8 text-pathway-navy" />,
      title: "Actionable Steps",
      description: "Get a clear roadmap with practical steps to develop your skills and begin monetizing them, regardless of your starting point."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pathway-navy" />,
      title: "Expert Guidance",
      description: "Access guidance from successful mentors who have turned their passions into profitable careers in various industries."
    }
  ];

  return (
    <section id="discover" className="section-padding bg-pathway-lightGray" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Self-Discovery Journey
          </span>
          <h2 className="section-title reveal-animation" data-animation="animate-fade-in">
            Unlock Your Potential
          </h2>
          <p className="section-subtitle reveal-animation" data-animation="animate-fade-in">
            Our comprehensive self-discovery approach helps you identify your unique strengths and shows you how to transform them into valuable skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-card p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] reveal-animation" 
              data-animation="animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-pathway-lightGray p-3 rounded-lg inline-block mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pathway-navy">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary reveal-animation" data-animation="animate-fade-in">
            Start Your Discovery
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
