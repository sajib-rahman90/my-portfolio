import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import profileImage from "../../assets/images/my-photo.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 bg-base-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-secondary font-semibold mb-2"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-primary mb-4"
            >
              Sajib Rahman
            </motion.h1>
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-base-content mb-6"
            >
              MERN Stack Developer
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I specialize in building exceptional digital experiences.
              Currently, I'm focused on building responsive, scalable full-stack
              web applications using MongoDB, Express.js, React, and Node.js.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="/My Resume.pdf"
                download="My Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
              <a href="#contact" className="btn btn-outline btn-primary">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <a
                href="https://github.com/sajib-rahman90"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-base-content hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sajib-rahman90"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-base-content hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-base-content hover:text-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-base-content hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-full flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-3xl opacity-30 animate-pulse"></div>

              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-[6px] border-primary/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary bg-base-200 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full  object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
