import myImage from '../img/268_ok.jpg';

const Hero = () => {
    return (
      <section id="home" className="pt-32 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Precious Joy Genodeala</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Software Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900/50 overflow-hidden border-4 border-blue-500">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">
                <img src={myImage} alt="Icon" className="w-2s2 h-25 inline-block" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero