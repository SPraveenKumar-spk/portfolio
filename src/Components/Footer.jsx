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
      <ul className="contact">
        <li>
          <a href=""><FaGithub /></a>
        </li>
        <li>
          <a href=""><FaLinkedin /></a>
        </li>
        <li>
          <a href=""><MdAttachEmail /></a>
        </li>
        <li>
          <a href=""><FaTwitter /></a>
        </li>
      </ul>
      <p className="text-light">&copy;2024 S.Praveen Kumar | All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer;