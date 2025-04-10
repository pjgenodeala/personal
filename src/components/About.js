import myImage from '../img/268_ok.jpg';

const About = () => {
    return (
      <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-500">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">
                  <img src={myImage} alt="Icon" className="w-2s2 h-25 inline-block" />
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a software developer with 3 years of experience building web applications and solving real-world problems through clean, efficient code. 
              Over the years, I've worked across the stack, developing everything from responsive frontends to robust backends.
               I enjoy working with modern technologies and am always eager to learn and grow with every project I take on. Whether it's optimizing performance, designing scalable systems, or collaborating with teams, 
               I bring a strong sense of ownership and curiosity to everything I do.              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Info</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li><strong>Name:</strong> Precious Joy M. Genodeala</li>
                    <li><strong>Email:</strong> pj.genodeala@outlook.com</li>
                    <li><strong>Location:</strong> Bacolod City, Negros Occidental</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hobbies</h4>
                  <ul className="text-gray-600 dark:text-gray-300 grid grid-cols-2 gap-y-1">
                  <li>Photography</li>
                    <li>Reading</li>
                    <li>Gaming</li>
                    <li>Running</li>
                    <li>Badminton</li>
                    <li>Cycling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About