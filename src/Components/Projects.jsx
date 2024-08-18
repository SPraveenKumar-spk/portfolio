import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/Anomaly.jpg';
import AgriSmart from '../assets/agrismart.png';
import ClassSync from '../assets/ClassSync.png';
import Amazon from '../assets/Amazon_clone.png';
import Speech from '../assets/Speech.jpg';

function ProjectCard({ title, imageUrl, link, animation, isVisible }) {
  return (
    <div
      className={`mt-4 card  mb-3 rounded rounded-4 customShadow ${isVisible ? `${animation} visible` : 'invisible'}`}
      style={{maxHeight : "25rem",maxWidth : "25rem"}}
    >
      <div className="card-header text-center text-success fs-5 fw-medium">{title}</div>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="card-img" src={imageUrl} alt={title} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="container p-5">
      <h2 className="text-info">Projects</h2>
      <div className="d-flex flex-wrap justify-content-around"  ref={ref}>
        <ProjectCard
          title="Network Anomaly Detection"
          imageUrl={Image1}
          link="https://github.com/SPraveenKumar-spk/Network_Anomaly_Detection"
          animation="slideInFromTop"
          isVisible={inView}
        />
        <ProjectCard
          title="ClassSync"
          imageUrl={ClassSync}
          link="https://github.com/SPraveenKumar-spk/ClassSync"
          animation="slideInFromBottom"
          isVisible={inView}
        />
        <ProjectCard
          title="AgriSmart"
          imageUrl={AgriSmart}
          link="https://github.com/SPraveenKumar-spk/AgriSmart"
          animation="slideInFromLeft"
          isVisible={inView}
        />
        <ProjectCard
          title="Speech-Text-Speech"
          imageUrl={Speech}
          link="https://github.com/SPraveenKumar-spk/Speech-Text-Speech"
          animation="slideInFromRight"
          isVisible={inView}
        />
        <ProjectCard
          title="To Do"
          imageUrl="https://media.istockphoto.com/id/528917900/photo/top-view-of-smart-phone-coffee-pen-and-notepad.jpg?s=612x612&w=0&k=20&c=1HjiOR44dg1BIIi0ah_5d7rryGPajoUzCaiUvx4jUZY="
          link="https://github.com/SPraveenKumar-spk/todo"
          animation="slideInFromTop"
          isVisible={inView}
        />
        <ProjectCard
          title="Amazon Clone"
          imageUrl={Amazon}
          link="https://github.com/SPraveenKumar-spk/Amazon_Clone"
          animation="slideInFromBottom"
          isVisible={inView}
        />
      </div>
    </div>
  );
}

export default Projects;
