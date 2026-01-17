import { useEffect, useState } from 'react';

const About = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('https://maloji-portfolio-backend.onrender.com/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.error('Error fetching portfolio:', err));
  }, []);

  if (!portfolioData) {
    return <div className="py-20 bg-gray-50 text-center">Loading...</div>;
  }

  const { bio, education, certifications } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {bio || "Motivated B.E. Computer Engineering student skilled in Python, SQL, Data Analysis, and Machine Learning."}
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm passionate about building intelligent, AI-driven systems and modern web applications. 
                With a strong foundation in data science, machine learning, and web development, I bring 
                ideas to life through clean code, thoughtful design, and innovative solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                I'm constantly learning new technologies and best practices to stay at the forefront of 
                computer science and artificial intelligence. When I'm not coding, you can find me 
                working on new projects, exploring data science techniques, or contributing to open-source 
                initiatives.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800 text-lg">{education?.degree}</h4>
                  <p className="text-gray-600 font-medium">{education?.college}</p>
                  <p className="text-gray-600">{education?.university}</p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">CGPA:</span> Sem 1: {education?.cgpa?.sem1}, 
                    Sem 2: {education?.cgpa?.sem2}, Sem 3: {education?.cgpa?.sem3}, 
                    Sem 4: {education?.cgpa?.sem4}
                  </p>
                  <p className="text-gray-700 mt-2">{education?.period}</p>
                </div>
              </div>
            </div>

            {certifications && certifications.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Certifications & Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <p className="text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
