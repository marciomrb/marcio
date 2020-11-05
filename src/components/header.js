import { Nav, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Header(){
  return (
    <header className="d-flex align-items-center justify-content-center sticky-top">
       <Container>
      <Navbar bg="transparent" expand="lg">
       
        <Navbar.Brand href="./">Marcio Campos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
            <Link href="#sobreMim">Sobre Mim</Link>
            <Link href="#designer">Designer Gráfico</Link>
            <Link href="#webdesign">Desenvolvimento</Link>
            <Link href="#port">Portfólio</Link>
            <Link href="#experiencia">Expêriencia Profissional</Link>
          
                 
          </Nav>          
        </Navbar.Collapse>       
      </Navbar>
      </Container>
    </header>
  )
}