import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 text-base-content">Project Not Found</h2>
        <Link to="/" className="btn btn-primary mt-4">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className='bg-base-100'>
      <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto min-h-screen ">
        <Link to="/#projects" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map(tech => (
              <span key={tech} className="badge badge-accent badge-lg badge-outline font-semibold">
                {tech}
              </span>
            ))}
          </div>

          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img
              src={project.bannerImage}
              alt={`${project.title} Banner`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-bold text-secondary mb-4 border-b border-base-300 pb-2">Overview</h3>
                <p className="text-base-content/80 text-lg leading-relaxed">{project.description}</p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-secondary mb-4 border-b border-base-300 pb-2">Challenges Faced</h3>
                <p className="text-base-content/80 text-lg leading-relaxed">{project.challenges}</p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-secondary mb-4 border-b border-base-300 pb-2">Future Improvements</h3>
                <p className="text-base-content/80 text-lg leading-relaxed">{project.futureImprovements}</p>
              </section>
            </div>

            <div className="md:col-span-1">
              <div className="bg-base-200 p-6 rounded-2xl shadow-lg border border-base-300 sticky top-24">
                <h4 className="text-xl font-bold text-primary mb-6">Links</h4>
                <div className="space-y-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-full"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-primary w-full"
                  >
                    <FaGithub className="mr-2 text-xl" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default ProjectDetails;
