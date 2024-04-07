import Cards from '../components/Cards'
import { Col, Row, Container } from 'react-bootstrap'

const Galeria = () => {
  const tortas = [
    { id: 1, name: 'Torta San Jorge', img: 'src/assets/img/img1.webp', desc: 'Disfruta de una deliciosa torta de hojarascas , elaborada con los ingredientes más frescos y de calidad.' },
    { id: 2, name: 'Torta Catalina', img: 'src/assets/img/img2.webp', desc: 'Disfruta de esta deliciosa torta bizcocho , elaborada con manjar, frambuesas y mermelada de frambuesa.' },
    { id: 3, name: 'Torta Beatriz', img: 'src/assets/img/img3.webp', desc: 'Disfruta de una deliciosa Torta Hoja con manjar y mermelada de frambuesa.' },
    { id: 4, name: 'Torta Tres Leches', img: 'src/assets/img/img4.webp', desc: 'Disfruta de una deliciosa torta bizcocho de tres leches con la crema pastelera y merengue.' },
    { id: 5, name: 'Torta Celeste', img: 'src/assets/img/img5.webp', desc: 'Esta exquisita torta está rellena con crema de chocolate y mermelada de frambuesa.' },
    { id: 6, name: 'Torta Elisa', img: 'src/assets/img/img6.webp', desc: 'Disfruta de la deliciosa Torta Panqueque con crema de naranja, manjar y almendras.' },
    { id: 7, name: 'Torta 4 Estaciones', img: 'src/assets/img/img7.webp', desc: 'Torta Red Velvet es suave y esponjosa, con un intenso sabor a vainilla y un toque de chocolate rojo.' },
    { id: 8, name: 'Torta Piña', img: 'src/assets/img/img8.webp', desc: 'Esta exquisita torta tiene una textura suave y un sabor dulce que se complementa a la perfección con la cremosa chantilly y los trozos de piña fresca.' }
  ]
  // Renderiza todas las instancias de Cards almacenadas en cardsComponents
  return (
    <>
      <Container className='my-5'>
        <Row xs={1} md={2} lg={3} className='g-5'>
          {tortas.map((torta) => (
            <Col key={torta.id} className=''>
              <Cards
                id={torta.id}
                img={torta.img}
                name={torta.name}
                desc={torta.desc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Galeria
