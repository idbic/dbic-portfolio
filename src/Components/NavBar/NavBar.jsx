import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/dbic-portfolio">Daniel Bicheler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/dbic-portfolio/projects">Projects</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
             
              <NavDropdown.Item href="#action/3.2">
               Resume
              </NavDropdown.Item>
              <NavDropdown.Item href="/dbic-portfolio/contact">Email Me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Download Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;