
import { useAnimateOnScroll } from '@/utils/animations';
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const SuccessStories = () => {
  const animationRef = useAnimateOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const stories = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Digital Illustrator",
      quote: "Pathway helped me realize my passion for digital art could be more than a hobby. Within 6 months, I went from occasional doodling to earning a steady income from illustration projects.",
      achievement: "Now makes $4,200/month through freelance work",
      background: "from-pink-50 to-purple-50",
      border: "border-pink-200"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Content Creator",
      quote: "I always loved explaining technical concepts but never thought I could monetize this skill. Pathway's personalized plan showed me how to build an audience and create premium educational content.",
      achievement: "Grew YouTube channel to 250K subscribers in one year",
      background: "from-blue-50 to-cyan-50",
      border: "border-blue-200"
    },
    {
      name: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Freelance Writer",
      quote: "As a literature student, I was told my degree had limited career prospects. Pathway revealed how my writing skills were in high demand for content marketing and helped me find my first clients.",
      achievement: "Replaced her full-time job income in just 3 months",
      background: "from-green-50 to-teal-50",
      border: "border-green-200"
    }
  ];

  const nextStory = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section id="stories" className="section-padding bg-pathway-lightGray" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Success Stories
          </span>
          <h2 className="section-title reveal-animation" data-animation="animate-fade-in">
            From Potential to Prosperity
          </h2>
          <p className="section-subtitle reveal-animation" data-animation="animate-fade-in">
            See how students just like you have discovered their unique paths and transformed their passions into profitable careers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className={`rounded-xl shadow-card overflow-hidden reveal-animation bg-gradient-to-br ${stories[activeIndex].background} border ${stories[activeIndex].border}`}
            data-animation="animate-scale"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={stories[activeIndex].image} 
                    alt={stories[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 p-8">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-pathway-navy opacity-20" />
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{stories[activeIndex].quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold text-pathway-navy">
                    {stories[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {stories[activeIndex].title}
                  </p>
                  
                  <div className="bg-pathway-green bg-opacity-10 text-pathway-green px-4 py-2 rounded-full inline-block text-sm font-medium">
                    {stories[activeIndex].achievement}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              className="p-3 rounded-full bg-white shadow-subtle hover:bg-gray-50"
              onClick={prevStory}
            >
              <ChevronLeft className="w-5 h-5 text-pathway-navy" />
            </button>
            
            <button 
              className="p-3 rounded-full bg-white shadow-subtle hover:bg-gray-50"
              onClick={nextStory}
            >
              <ChevronRight className="w-5 h-5 text-pathway-navy" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal-animation" data-animation="animate-fade-in">
          <a href="#" className="inline-flex items-center gap-2 font-medium text-pathway-navy hover:text-pathway-green transition-colors">
            View All Success Stories
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
