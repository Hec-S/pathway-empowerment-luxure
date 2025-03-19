
import { ArrowRight, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pathway-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-display font-semibold mb-5">Pathway</h3>
            <p className="text-gray-400 mb-5">
              Helping students discover their purpose and transform their passions into profitable skills.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-pathway-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pathway-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pathway-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pathway-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Self-Discovery Quiz", "Find Your Path", "Success Stories", "About Us", "Contact"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              {["Blog", "Monetization Guide", "Free Tools", "Career Insights", "Community Forum"].map((resource, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5">Subscribe</h4>
            <p className="text-gray-400 mb-5">
              Get the latest updates and resources directly to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white bg-opacity-10 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-pathway-gold w-full"
              />
              <button className="bg-pathway-green text-white rounded-r-lg px-3 flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pathway. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
