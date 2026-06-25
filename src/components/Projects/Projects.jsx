import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div 
              key={project.id}
              className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <figure className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold text-primary">{project.title}</h3>
                <p className="text-base-content/70">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="badge badge-accent badge-outline text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="badge badge-ghost badge-outline text-xs">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <div className="card-actions justify-end mt-auto">
                  <Link to={`/project/${project.id}`} className="btn btn-primary w-full group/btn">
                    View Details 
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
