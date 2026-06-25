import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div>
            <span className="footer-title">Sajib Rahman</span>
            <p className="max-w-xs leading-7">
              MERN Stack Developer passionate about building fast, responsive,
              and user-friendly web applications. I enjoy turning ideas into
              scalable digital solutions with clean code and modern
              technologies.
            </p>
          </div>
          <div>
            <span className="footer-title">Quick Links</span>
            <a href="/#home" className="link link-hover">
              Home
            </a>
            <a href="/#about" className="link link-hover">
              About
            </a>
            <a href="/#skills" className="link link-hover">
              Skills
            </a>
            <a href="/#projects" className="link link-hover">
              Projects
            </a>
          </div>
          <div>
            <span className="footer-title">Social Links</span>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/sajib-rahman90"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sajib-rahman90"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-base-300 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
