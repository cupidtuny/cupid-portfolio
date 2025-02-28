import React from "react";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { ButtonLink } from "./Scroller";
import { SiGmail } from "react-icons/si";
const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0">LiuYuan</div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
            <ul className="space-y-4">
              <li>
                <ButtonLink
                  className="text-lg font-medium hover:text-gray-300"
                  buttonText="Home"
                  elementId="hero"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-lg font-medium hover:text-gray-300"
                  buttonText="Previous Work"
                  elementId="previouswork"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-lg font-medium hover:text-gray-300"
                  buttonText="Contact"
                  elementId="contact"
                />
              </li>
            </ul>
            <div className="flex space-x-6">
              <Link href="https://github.com/cupidtuny" target="_blank">
                <FaGithub size={36} />
              </Link>
              {/* <Link href="https://www.linkedin.com/in/noah-gomes" target='_blank'>
                <FaLinkedin size={36}/>
              </Link> */}
              <Link href="liuyuan040620@gmail.com" target="_blank">
                <SiGmail size={36} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
