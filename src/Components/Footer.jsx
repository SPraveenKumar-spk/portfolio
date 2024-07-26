import { FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
function Footer(){
  return (
    <>
    <footer className=" mb-0">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h3 className="text-light">Contact Me</h3>
      <ul className="contact">
        <li>
          <a href="https://github.com/SPraveenKumar-spk" target="_blank"><FaGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/s-praveenkumar/" target="_blank"><FaLinkedin /></a>
        </li>
        <li>
          <a href="mailto:99210042006@klu.ac.in" target="_blank"><MdAttachEmail /></a>
        </li>
        <li>
          <a href="https://x.com/im_praveen_s" target="_blank"><FaTwitter /></a>
        </li>
      </ul>
      <p className="mt-2 text-light">&copy;2024 S.Praveen Kumar | All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer;