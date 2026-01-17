import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.error('Error fetching portfolio:', err));
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              © {currentYear} Maloji Vijay Ghorpade. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React and Node.js
            </p>
          </div>
          
          {portfolioData?.socialLinks && (
            <div className="flex gap-4 items-center">
              {portfolioData.socialLinks.linkedin && (
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl md:text-2xl" />
                </a>
              )}
              
              {portfolioData.socialLinks.github && (
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 active:scale-95"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl md:text-2xl" />
                </a>
              )}
              
              {portfolioData.socialLinks.email && (
                <a
                  href={`mailto:${portfolioData.socialLinks.email}`}
                  className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl md:text-2xl" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

