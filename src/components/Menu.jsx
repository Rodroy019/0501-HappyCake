import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand='lg' bg='warning' data-bs-theme='light'>
      <Container>
        <Navbar.Brand href=''><i className='fa-solid fa-cake-candles' /> HAPPY CAKE  <i className='fa-solid fa-cake-candles' /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link' to='./'><i className='fa-solid fa-house' /> Inicio</Link>
            <Link className='nav-item nav-link' to='./contacto'><i className='fa-solid fa-id-badge' /> Contacto</Link>
            <Link className='nav-item nav-link' to='./galeria'><i className='fa-solid fa-images' /> Galeria</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
