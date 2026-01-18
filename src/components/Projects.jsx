import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://maloji-portfolio-backend.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data?.projects ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-xl font-semibold">
        Loading projects...
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project._id || project.id || i}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image || "https://via.placeholder.com/400"}
                  alt={project.title || "Project"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title || "Untitled Project"}
                  </h3>

                  {project.type && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.type === "Major Project"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {project.type}
                    </span>
                  )}
                </div>

                {project.period && (
                  <p className="text-sm text-gray-500 mb-2">
                    {project.period}
                  </p>
                )}

                <p className="text-gray-600 mb-4">
                  {project.description || "No description available."}
                </p>

                {/* Technologies – SAFE */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.technologies ?? []).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
