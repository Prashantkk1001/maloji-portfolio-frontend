import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

// ✅ Correct image import (NO spaces, exact name)
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch("https://maloji-portfolio-backend.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolioData(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-300 text-white pt-20"
    >
      <div className="container mx-auto px-6 text-center">

        {/* PROFILE IMAGE */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {portfolioData?.name || "Your Name"}
        </h1>

        {/* TITLE */}
        <p className="text-2xl md:text-3xl mb-6 text-blue-100">
          {portfolioData?.title || "Full Stack Developer"}
        </p>

        {/* BIO */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          {portfolioData?.bio ||
            "Passionate developer creating amazing web experiences"}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 justify-center mb-10">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-blue-300 hover:bg-blue-200 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Get In Touch
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            View My Work
          </button>
        </div>

        {/* SOCIAL LINKS */}
        {portfolioData?.socialLinks && (
          <div className="flex justify-center gap-6 mb-10">
            {portfolioData.socialLinks.linkedin && (
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            )}

            {portfolioData.socialLinks.github && (
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
            )}

            {portfolioData.socialLinks.email && (
              <a
                href={`mailto:${portfolioData.socialLinks.email}`}
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            )}
          </div>
        )}

        {/* SCROLL DOWN */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-3xl hover:text-blue-300"
        >
          <FaArrowDown />
        </button>

      </div>
    </section>
  );
};

export default Hero;
