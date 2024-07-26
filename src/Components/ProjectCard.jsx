function ProjectCard({ title, imageUrl, link, animation, isVisible }) {
  return (
    <div
      className={`mt-4 card mb-3 ${animation} ${isVisible ? 'visible' : 'hidden'}`}
      style={{ maxWidth: '25rem', maxHeight: '25rem' }}
    >
      <div className="card-header text-center text-success fs-5 fw-medium">{title}</div>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="card-img " loading='lazy' src={imageUrl} alt={title} />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
