import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Lightbulb, 
  Heart, 
  Clock, 
  DollarSign, 
  BarChart
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

// Define the steps of the assessment
const steps = [
  "Core Strengths & Abilities",
  "Passion & Interest Mapping",
  "Work Style & Productivity",
  "Monetization Readiness",
  "Personalized Strategy"
];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    naturalStrengths: [] as string[],
    challengeApproach: "",
    workPreference: "",
    excitement: "",
    freeTimeActivity: [] as string[],
    motivation: "",
    environment: "",
    monetizationExperience: "",
    selfPromotion: "",
    incomeGoal: "",
    timeframe: ""
  });
  
  const isMobile = useIsMobile();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleMultiSelectToggle = (field: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[field as keyof typeof prev] as string[] || [];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter(i => i !== value)
        };
      } else {
        return {
          ...prev,
          [field]: [...currentValues, value]
        };
      }
    });
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const submitAssessment = () => {
    console.log("Assessment submitted:", formData);
    setCurrentStep(steps.length - 1);
  };
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-pathway-green" />
              <h2 className="text-2xl font-semibold text-pathway-navy">Core Strengths & Abilities</h2>
            </div>
            
            <p className="text-pathway-mediumGray mb-6">
              Let's discover what you're naturally good at and how you approach challenges.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  What are you naturally good at? (Select all that apply)
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Writing & Communication",
                    "Design & Creativity",
                    "Problem-Solving & Strategy",
                    "Technical & Analytical Thinking",
                    "Teaching & Explaining Concepts",
                    "Leadership & Team Coordination",
                    "Social & Emotional Intelligence"
                  ].map((strength) => (
                    <button
                      key={strength}
                      type="button"
                      onClick={() => handleMultiSelectToggle("naturalStrengths", strength)}
                      className={`px-4 py-3 rounded-lg border text-left ${
                        formData.naturalStrengths?.includes(strength)
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green text-pathway-green"
                          : "border-pathway-silver text-pathway-mediumGray hover:border-pathway-mediumGray"
                      }`}
                    >
                      {strength}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  When given a challenge, what's your first instinct?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Research extensively before taking action.",
                    "Dive in and figure it out along the way.",
                    "Ask someone for guidance or collaboration.",
                    "Experiment and test different solutions."
                  ].map((approach) => (
                    <label
                      key={approach}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.challengeApproach === approach
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="challengeApproach"
                        value={approach}
                        checked={formData.challengeApproach === approach}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.challengeApproach === approach ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {approach}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  Do you prefer working alone or in a team?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Alone, I perform better independently.",
                    "In a team, I thrive on collaboration.",
                    "A mix of both, depending on the task."
                  ].map((preference) => (
                    <label
                      key={preference}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.workPreference === preference
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="workPreference"
                        value={preference}
                        checked={formData.workPreference === preference}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.workPreference === preference ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {preference}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pathway-green" />
              <h2 className="text-2xl font-semibold text-pathway-navy">Passion & Interest Mapping</h2>
            </div>
            
            <p className="text-pathway-mediumGray mb-6">
              Let's explore what excites you and what activities you're drawn to naturally.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  What excites you the most?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Helping others improve their lives.",
                    "Creating art, music, or media.",
                    "Developing technology or solving technical problems.",
                    "Leading projects and making an impact.",
                    "Learning and sharing knowledge."
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.excitement === option
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="excitement"
                        value={option}
                        checked={formData.excitement === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.excitement === option ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  Which activity would you choose to do for free? (Select all that apply)
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Writing or storytelling",
                    "Designing graphics, videos, or websites",
                    "Coaching, mentoring, or teaching",
                    "Analyzing data or solving puzzles",
                    "Building things (software, products, structures, etc.)",
                    "Socializing, networking, or event planning"
                  ].map((activity) => (
                    <button
                      key={activity}
                      type="button"
                      onClick={() => handleMultiSelectToggle("freeTimeActivity", activity)}
                      className={`px-4 py-3 rounded-lg border text-left ${
                        formData.freeTimeActivity?.includes(activity)
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green text-pathway-green"
                          : "border-pathway-silver text-pathway-mediumGray hover:border-pathway-mediumGray"
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-pathway-green" />
              <h2 className="text-2xl font-semibold text-pathway-navy">Work Style & Productivity</h2>
            </div>
            
            <p className="text-pathway-mediumGray mb-6">
              Understanding how you work best will help us recommend the right monetization approach.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  How do you best stay motivated?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Having clear deadlines and structured tasks.",
                    "Working on something I genuinely enjoy.",
                    "Seeing immediate rewards or feedback.",
                    "Competing with others and tracking progress.",
                    "Being part of a larger mission or vision."
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.motivation === option
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="motivation"
                        value={option}
                        checked={formData.motivation === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.motivation === option ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  What type of work environment do you thrive in?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Structured and predictable (set schedule, clear expectations)",
                    "Flexible and dynamic (freedom to experiment and pivot)",
                    "Social and fast-paced (constant collaboration and engagement)",
                    "Quiet and deep-focused (long hours of independent work)"
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.environment === option
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="environment"
                        value={option}
                        checked={formData.environment === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.environment === option ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-pathway-green" />
              <h2 className="text-2xl font-semibold text-pathway-navy">Monetization Readiness</h2>
            </div>
            
            <p className="text-pathway-mediumGray mb-6">
              Let's assess your experience with monetization and your income goals.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  Do you have any experience monetizing a skill or project?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Yes, I have sold services/products before.",
                    "No, but I am eager to learn.",
                    "I have tried but wasn't successful."
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.monetizationExperience === option
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="monetizationExperience"
                        value={option}
                        checked={formData.monetizationExperience === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.monetizationExperience === option ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pathway-navy mb-2">
                  How comfortable are you with promoting yourself or your work?
                </label>
                
                <div className="space-y-3">
                  {[
                    "Very comfortable, I have no problem marketing myself.",
                    "Somewhat comfortable, but I struggle with consistency.",
                    "Not comfortable, I prefer work that sells itself."
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        formData.selfPromotion === option
                          ? "bg-pathway-green bg-opacity-10 border-pathway-green"
                          : "border-pathway-silver hover:border-pathway-mediumGray"
                      }`}
                    >
                      <input
                        type="radio"
                        name="selfPromotion"
                        value={option}
                        checked={formData.selfPromotion === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={formData.selfPromotion === option ? "text-pathway-navy" : "text-pathway-mediumGray"}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="incomeGoal" className="block text-sm font-medium text-pathway-navy mb-2">
                  What is your monthly income goal?
                </label>
                <select
                  id="incomeGoal"
                  name="incomeGoal"
                  value={formData.incomeGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-pathway-silver rounded-lg focus:outline-none focus:ring-2 focus:ring-pathway-green"
                >
                  <option value="">Select income goal</option>
                  <option value="1000-3000">$1,000 - $3,000 per month</option>
                  <option value="3000-5000">$3,000 - $5,000 per month</option>
                  <option value="5000-10000">$5,000 - $10,000 per month</option>
                  <option value="10000+">$10,000+ per month</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium text-pathway-navy mb-2">
                  How quickly do you want to achieve this goal?
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-pathway-silver rounded-lg focus:outline-none focus:ring-2 focus:ring-pathway-green"
                >
                  <option value="">Select timeframe</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="1year">Within 1 year</option>
                  <option value="2years">Within 2 years</option>
                </select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-pathway-green bg-opacity-10 border border-pathway-green text-pathway-green p-4 rounded-lg flex items-start gap-3 mb-6">
              <Check className="w-5 h-5 mt-0.5" />
              <div>
                <h3 className="font-medium">Assessment Complete!</h3>
                <p className="text-sm">Your personalized monetization strategy is ready.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="w-5 h-5 text-pathway-green" />
              <h2 className="text-2xl font-semibold text-pathway-navy">Your Personalized Strategy</h2>
            </div>
            
            <p className="text-pathway-mediumGray mb-6">
              Based on your responses, we've created a customized monetization roadmap for you.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-pathway-silver">
                <h3 className="text-lg font-medium text-pathway-navy mb-4">Primary Recommendation</h3>
                <p className="text-pathway-charcoal">
                  Based on your responses, we recommend focusing on {formData.naturalStrengths.length > 0 ? formData.naturalStrengths[0] : "your selected skills"} as your primary monetization path.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-pathway-silver">
                <h3 className="text-lg font-medium text-pathway-navy mb-4">Next Steps</h3>
                <ul className="space-y-2 text-pathway-charcoal">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pathway-green bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pathway-green text-xs">1</span>
                    </div>
                    <span>Complete your profile to unlock personalized recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pathway-green bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pathway-green text-xs">2</span>
                    </div>
                    <span>Explore skill development opportunities in your interest areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-pathway-green bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pathway-green text-xs">3</span>
                    </div>
                    <span>Connect with mentors who have similar skill profiles</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-pathway-navy to-pathway-charcoal rounded-lg p-6 text-white">
                <h3 className="text-lg font-medium mb-2">Unlock Your Full Results</h3>
                <p className="text-pathway-silver text-sm mb-4">
                  Get your comprehensive assessment report with detailed insights and a personalized action plan.
                </p>
                <button className="bg-pathway-green hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium w-full">
                  Create Your Account
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-pathway-offWhite pt-20">
      {/* Header */}
      <header className="bg-pathway-navy text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Discover Your Potential</h1>
          <p className="text-pathway-silver max-w-2xl">
            Our comprehensive assessment helps you identify your unique strengths and shows you how to transform them into valuable skills that can be monetized.
          </p>
        </div>
      </header>
      
      {/* Progress Steps */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col items-center ${isMobile ? 'text-xs' : ''}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= index
                    ? "bg-pathway-green text-white"
                    : "bg-pathway-silver bg-opacity-30 text-pathway-mediumGray"
                }`}
              >
                {currentStep > index ? <Check size={16} /> : index + 1}
              </div>
              {!isMobile && (
                <span
                  className={`text-sm ${
                    currentStep >= index ? "text-pathway-navy" : "text-pathway-mediumGray"
                  }`}
                >
                  {step}
                </span>
              )}
            </div>
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-pathway-silver bg-opacity-30 rounded-full mb-8">
          <div
            className="h-full bg-pathway-green rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-card p-6 md:p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {renderStepContent()}
            </motion.div>
            
            <div className="flex justify-between mt-8 pt-6 border-t border-pathway-silver border-opacity-30">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-pathway-navy hover:text-pathway-green transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-pathway-green hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitAssessment}
                  className="bg-pathway-green hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Complete Assessment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      
      {/* Mobile-optimized padding to account for bottom navigation */}
      {isMobile && <div className="h-16"></div>}
    </div>
  );
};

export default Assessment;
