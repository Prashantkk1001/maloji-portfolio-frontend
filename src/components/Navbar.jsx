// Navbar.jsx
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900/95 backdrop-blur-sm text-white px-6 flex items-center z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold hover:text-blue-400 transition-colors cursor-pointer"
        >
          My Portfolio
        </button>

        <ul className="flex gap-6">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 hover:bg-gray-800 rounded transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 hover:bg-gray-800 rounded transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 hover:bg-gray-800 rounded transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 hover:bg-gray-800 rounded transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
