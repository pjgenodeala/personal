import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  return (
<header className="fixed w-full z-10 bg-gray-700 text-white backdrop-blur-sm">      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white dark:text-white">
          My<span className="text-blue-500">Portfolio</span>
        </a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-white dark:text-white hover:text-blue-500">About</a>
          <a href="#skills" className="text-white dark:text-white hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-white dark:text-white hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-white dark:text-white hover:text-blue-500">Contact</a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header