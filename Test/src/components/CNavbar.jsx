import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/netflix_logo.png"
const CNavbar = () => {
  const styleLogo = { height: "40px" };

  return (
    <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Netflix logo"
            style={styleLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-secondary" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-link active text-secondary me-3">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-link active text-light me-3">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="nav-link active text-secondary me-3">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="nav-link active text-secondary me-3">
              Recently added
            </Nav.Link>
            <Nav.Link href="#" className="nav-link active text-secondary me-3">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <NavDropdown
              title="Altro"
              id="basic-nav-dropdown"
              className="text-white me-3"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            </NavDropdown>
            <button class="btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            <button class="btn btn-outline-light border-0">KIDS</button>
            <button class="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </button>
            
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CNavbar;
