import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Header(){
  return (
    <header className="d-flex align-items-center justify-content-center">
       <Container>
      <Navbar bg="transparent" expand="lg">
       
        <Navbar.Brand href="./">Marcio Campos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link data-href="#sobre" href="#sobre">Sobre Mim</Nav.Link>
            <Nav.Link data-href="#design" href="#design">Designer Gráfico</Nav.Link>
            <Nav.Link data-href="#webdesign" href="#webdesign">Web Designer</Nav.Link>
            <Nav.Link data-href="#portfolio" href="#portfolio">Portfólio</Nav.Link>
            <Nav.Link data-href="#experiencia" href="#experiencia">Expêriencia Profissional</Nav.Link>
                 
          </Nav>          
        </Navbar.Collapse>       
      </Navbar>
      </Container>
    </header>
  )
}