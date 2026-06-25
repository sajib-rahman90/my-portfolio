import { motion } from "framer-motion";
import profileImage from "../../assets/images/my-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden bg-base-100 shadow-xl border-2 border-base-300 flex items-center justify-center group">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-base-100 p-8 md:p-10 rounded-2xl shadow-lg border border-base-200">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                My Programming Journey
              </h3>

              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong className="text-base-content">
                    Passion for Development:
                  </strong>{" "}
                  My journey started with a simple curiosity about how websites
                  work. That curiosity quickly blossomed into a deep passion for
                  software engineering, specifically within the MERN stack. I
                  love transforming complex problems into elegant, intuitive,
                  and user-friendly web experiences.
                </p>
                <p>
                  <strong className="text-base-content">
                    Problem Solving:
                  </strong>{" "}
                  I view bugs not as obstacles, but as puzzles waiting to be
                  solved. My approach is highly analytical, and I take pride in
                  writing clean, modular, and efficient code that stands the
                  test of time.
                </p>
                <p>
                  <strong className="text-base-content">
                    Learning Mindset:
                  </strong>{" "}
                  The tech world evolves rapidly, and so do I. I am a lifelong
                  learner, constantly exploring new libraries, frameworks, and
                  best practices to stay at the forefront of modern web
                  development.
                </p>
                <p>
                  <strong className="text-base-content">Personality:</strong>{" "}
                  Beyond the code, I am a collaborative team player who thrives
                  in agile environments. I believe in open communication,
                  sharing knowledge, and building products that genuinely make
                  an impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
