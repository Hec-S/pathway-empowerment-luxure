
import { useAnimateOnScroll } from '@/utils/animations';
import { ArrowRight, DollarSign, Briefcase, Clock, Sparkle } from 'lucide-react';

const MonetizationHub = () => {
  const animationRef = useAnimateOnScroll();
  
  const paths = [
    {
      title: "Freelancing",
      description: "Offer your skills on demand to clients worldwide",
      timeToStart: "Immediate",
      earningPotential: "Medium to High",
      skills: ["Writing", "Design", "Programming", "Social Media"],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Content Creation",
      description: "Build an audience and monetize through various channels",
      timeToStart: "1-3 months",
      earningPotential: "Low to Very High",
      skills: ["Video", "Writing", "Audio", "Teaching"],
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Digital Products",
      description: "Create once, sell infinitely with scalable digital assets",
      timeToStart: "2-4 weeks",
      earningPotential: "Medium to High",
      skills: ["Design", "Knowledge", "Software", "Art"],
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section id="monetize" className="section-padding bg-white" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Monetization Pathways
          </span>
          <h2 className="section-title reveal-animation" data-animation="animate-fade-in">
            Turn Your Skills Into Income
          </h2>
          <p className="section-subtitle reveal-animation" data-animation="animate-fade-in">
            Explore multiple ways to generate income using your natural abilities and newly developed skills without requiring startup capital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${path.borderColor} bg-gradient-to-br ${path.color} overflow-hidden hover:shadow-lg transition-all duration-300 reveal-animation`}
              data-animation="animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-pathway-navy">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {path.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Time to start:</span> {path.timeToStart}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium">Earning potential:</span> {path.earningPotential}
                  </span>
                </div>
                
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-700 mb-2 block">
                    Relevant skills:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-white bg-opacity-60 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <button className="w-full flex items-center justify-center gap-2 text-pathway-navy font-medium hover:text-pathway-green transition-colors">
                  Explore This Path
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-pathway-navy to-[#132f4c] rounded-xl shadow-lg overflow-hidden reveal-animation" data-animation="animate-fade-in">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-3/5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkle className="w-5 h-5 text-pathway-gold" />
                <span className="text-sm font-medium text-pathway-gold">Premium Feature</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Personalized Monetization Plan
              </h3>
              <p className="text-gray-300 mb-6">
                Get a customized roadmap based on your unique skills, interests, and goals. Our AI mentor will guide you through each step of your journey.
              </p>
              <button className="bg-pathway-gold hover:bg-opacity-90 text-pathway-navy px-6 py-3 rounded-lg font-medium inline-flex items-center gap-1">
                Create Your Plan
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="w-full md:w-2/5 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
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
                    <span className="text-sm text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationHub;
