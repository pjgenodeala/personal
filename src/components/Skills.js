const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'WordPress', level: 65 },
    { name: 'Laravel', level: 75 },
    { name: 'Docker', level: 65 },
    { name: 'UI/UX Design', level: 75 },

  ]
  
  const Skills = () => {
    return (
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills