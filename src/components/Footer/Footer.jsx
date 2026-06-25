import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer">
          <div>
            <span className="footer-title">Portfolio.</span>
            <p className="max-w-xs">
              MERN Stack Developer focused on building modern, responsive, and robust web applications.
            </p>
          </div>
          <div>
            <span className="footer-title">Quick Links</span>
            <a href="/#home" className="link link-hover">Home</a>
            <a href="/#about" className="link link-hover">About</a>
            <a href="/#skills" className="link link-hover">Skills</a>
            <a href="/#projects" className="link link-hover">Projects</a>
          </div>
          <div>
            <span className="footer-title">Social Links</span>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-base-300 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
