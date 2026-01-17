import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.error('Error fetching portfolio:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (!portfolioData) {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                
                {status.message && (
                  <div
                    className={`p-3 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a 
                      href={`mailto:${portfolioData.email || portfolioData.socialLinks?.email || 'malojighorpade07@gmail.com'}`} 
                      className="text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {portfolioData.email || portfolioData.socialLinks?.email || 'malojighorpade07@gmail.com'}
                    </a>
                  </div>
                </div>

                {portfolioData.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <a 
                        href={`tel:${portfolioData.phone}`} 
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {portfolioData.socialLinks?.linkedin && (
                      <a
                        href={portfolioData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 touch-manipulation"
                        aria-label="LinkedIn Profile"
                      >
                        <FaLinkedin className="text-2xl md:text-3xl text-white group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-3 py-1 rounded-full pointer-events-none z-10">
                          LinkedIn
                        </span>
                      </a>
                    )}
                    
                    {portfolioData.socialLinks?.github && (
                      <a
                        href={portfolioData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/50 active:scale-95 touch-manipulation"
                        aria-label="GitHub Profile"
                      >
                        <FaGithub className="text-2xl md:text-3xl text-white group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-3 py-1 rounded-full pointer-events-none z-10">
                          GitHub
                        </span>
                      </a>
                    )}
                    
                    {portfolioData.socialLinks?.email && (
                      <a
                        href={`mailto:${portfolioData.socialLinks.email}`}
                        className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 active:scale-95 touch-manipulation"
                        aria-label="Email"
                      >
                        <FaEnvelope className="text-2xl md:text-3xl text-white group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-3 py-1 rounded-full pointer-events-none z-10">
                          Email
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
