import { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setSkills(data.skills || []))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills categories */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-4xl mb-3">⚛️</div>
              <h4 className="font-semibold text-gray-800">Frontend</h4>
              <p className="text-sm text-gray-600 mt-2">React, HTML, CSS, JavaScript</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-800">Backend</h4>
              <p className="text-sm text-gray-600 mt-2">Node.js, Express, REST APIs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
              <div className="text-4xl mb-3">💾</div>
              <h4 className="font-semibold text-gray-800">Database</h4>
              <p className="text-sm text-gray-600 mt-2">MongoDB, SQL, NoSQL</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="text-4xl mb-3">🛠️</div>
              <h4 className="font-semibold text-gray-800">Tools</h4>
              <p className="text-sm text-gray-600 mt-2">Git, Docker, Vite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
