
function Navbar({onContactClick}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 fs-3 fw-medium " style={{color:"#20c997"}} href="#">Hello!</a>
        <button className="navbar-toggler text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active  fs-5" aria-current="page" href="#">Home<span></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  fs-5" href="#">About<span></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  fs-5"  onClick={onContactClick} style={{cursor:"pointer"}}>Contact<span></span></a>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
