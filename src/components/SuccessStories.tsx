
import { useAnimateOnScroll } from '@/utils/animations';
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const SuccessStories = () => {
  const animationRef = useAnimateOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextStory();
    } else if (isRightSwipe) {
      prevStory();
    }
  };
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevStory();
      } else if (e.key === 'ArrowRight') {
        nextStory();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const stories = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Digital Illustrator",
      quote: "Pathway helped me realize my passion for digital art could be more than a hobby. Within 6 months, I went from occasional doodling to earning a steady income from illustration projects.",
      achievement: "Now makes $4,200/month through freelance work",
      background: "bg-gradient-to-br from-pathway-offWhite to-white",
      border: "border-pathway-lightGray"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Content Creator",
      quote: "I always loved explaining technical concepts but never thought I could monetize this skill. Pathway's personalized plan showed me how to build an audience and create premium educational content.",
      achievement: "Grew YouTube channel to 250K subscribers in one year",
      background: "bg-gradient-to-br from-pathway-offWhite to-white",
      border: "border-pathway-lightGray"
    },
    {
      name: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Freelance Writer",
      quote: "As a literature student, I was told my degree had limited career prospects. Pathway revealed how my writing skills were in high demand for content marketing and helped me find my first clients.",
      achievement: "Replaced her full-time job income in just 3 months",
      background: "bg-gradient-to-br from-pathway-offWhite to-white",
      border: "border-pathway-lightGray"
    }
  ];

  const nextStory = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section id="stories" className="section-padding bg-pathway-offWhite" ref={animationRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-pathway-green font-medium text-sm uppercase tracking-wider mb-3 reveal-animation" data-animation="animate-fade-in">
            Success Stories
          </span>
          <h2 className="section-title text-pathway-navy reveal-animation" data-animation="animate-fade-in">
            From Potential to Prosperity
          </h2>
          <p className="section-subtitle text-pathway-mediumGray reveal-animation" data-animation="animate-fade-in">
            See how students just like you have discovered their unique paths and transformed their passions into profitable careers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={sliderRef}
            className={`rounded-xl shadow-card overflow-hidden reveal-animation ${stories[activeIndex].background} border ${stories[activeIndex].border}`}
            data-animation="animate-scale"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            tabIndex={0}
            role="region"
            aria-label="Success stories carousel"
          >
            <div className="flex flex-col md:flex-row">
              <div className={`${isMobile ? 'w-full' : 'w-2/5'}`}>
                <div className={`relative ${isMobile ? 'h-48' : 'h-64 md:h-full'}`}>
                  <img 
                    src={stories[activeIndex].image} 
                    alt={stories[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pathway-navy/30 to-transparent"></div>
                </div>
              </div>
              
              <div className={`w-full ${isMobile ? 'p-6' : 'md:w-3/5 p-8'}`}>
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-pathway-green opacity-20" />
                </div>
                
                <blockquote className={`${isMobile ? 'text-base' : 'text-lg'} text-pathway-mediumGray mb-6`}>
                  "{stories[activeIndex].quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold text-pathway-navy">
                    {stories[activeIndex].name}
                  </h3>
                  <p className="text-pathway-gray mb-4">
                    {stories[activeIndex].title}
                  </p>
                  
                  <div className="bg-pathway-green bg-opacity-10 text-pathway-green px-4 py-2 rounded-full inline-block text-sm font-medium">
                    {stories[activeIndex].achievement}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Story pagination indicators */}
          <div className="flex justify-center mt-6 mb-2">
            {stories.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-pathway-green w-6' : 'bg-pathway-silver'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons - hidden on mobile (using swipe instead) */}
          <div className={`${isMobile ? 'hidden' : 'flex'} justify-between mt-4`}>
            <button 
              className="p-3 rounded-full bg-white shadow-subtle hover:bg-pathway-offWhite focus:outline-none focus:ring-2 focus:ring-pathway-green"
              onClick={prevStory}
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5 text-pathway-navy" />
            </button>
            
            <button 
              className="p-3 rounded-full bg-white shadow-subtle hover:bg-pathway-offWhite focus:outline-none focus:ring-2 focus:ring-pathway-green"
              onClick={nextStory}
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5 text-pathway-navy" />
            </button>
          </div>
          
          {/* Swipe instruction for mobile */}
          {isMobile && (
            <p className="text-center text-xs text-pathway-mediumGray mt-4">
              Swipe left or right to navigate stories
            </p>
          )}
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
