import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand='lg' bg='warning' data-bs-theme='light'>
      <Container>
        <Navbar.Brand href='#home'>HAPPY CAKE</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link' to='./inicio'>Inicio</Link>
            <Link className='nav-item nav-link' to='./contacto'>Contacto</Link>
            <Link className='nav-item nav-link' to='./galeria'>Galeria</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
