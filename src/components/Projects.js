import myImage from '../img/write.png';


const projects = [
    {
      title: "Personal Website for School",
      description: "A professional website designed to showcase educational projects, coursework, and academic achievements, providing a detailed overview of the client's academic journey and expertise.",
      technologies: ["Html", "CSS", "FTP", "WordPress"],
      image: "project1.jpg",
      link: "https://writerity.com/",
      github: "https://github.com/thy-preciousgenodeala"
    },
    {
        title: "Personal Website for Stores",
        description: "A sleek and user-friendly online store designed to showcase and sell products, offering a seamless shopping experience with easy navigation, secure checkout, and product details.",
        technologies: ["Html", "CSS", "FTP", "Worspress"],
        image: "project1.jpg",
        link: "https://bishuku.jp/",
        github: "https://github.com/thy-preciousgenodeala"
      },
    {
      title: "PhotoShop Plugin",
      description: "A Photoshop plugin is an add-on that extends the functionality of Photoshop by providing additional tools, effects, or automation to enhance the user's creative workflow.",
      technologies: ["React", "TailwindCSS", "PhotoShop", "UXP"],
      image: "project2.jpg",
      link: "#",
      github: "https://github.com/thy-preciousgenodeala"
    },
    {
        title: "3sPortal",
        description: "3sportal is a medical platform designed to provide seamless access to healthcare services, resources, and expert consultations for clients seeking personalized medical care.",
        technologies: ["React", "TailwindCSS", "Laravel", "Docker", "MySql"],
        image: {myImage},
        link: "https://telemedica.jp/ja/",
        github: "https://github.com/thy-preciousgenodeala"
      },
    {
      title: "AIC-React",
      description: "A comprehensive website with separate dashboards for both admin, staff and clients, where admins can manage room availability, bookings, and schedules, while clients can easily reserve conference rooms, view availability, and manage their bookings in a streamlined, user-friendly interface.",
      technologies: ["React", "TailwindCSS", "GraphQl", "MySql"],
      image: "project3.jpg",
      link: "#",
      github: "https://github.com/thy-preciousgenodeala"
    }
  ]
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  {/* Replace with project image */}
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.link} 
                      className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub: Only my contribution will show.
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects