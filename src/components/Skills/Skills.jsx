import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 95 },
      { name: 'VS Code', level: 95 },
      { name: 'Firebase', level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, index) => (
            <motion.div 
              key={categoryGroup.category}
              className="bg-base-200 p-8 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center border-b border-base-300 pb-2">
                {categoryGroup.category}
              </h3>
              <div className="space-y-6">
                {categoryGroup.skills.map((skill, i) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-base-content">{skill.name}</span>
                      <span className="text-sm text-base-content/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="bg-primary h-2.5 rounded-full group-hover:bg-accent transition-colors duration-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
