import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

// Componente de tarjeta
const Cards = (props) => {
  return (
    <Card bg='secondary' key={props.id} border='primary' text='white' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  )
}

// Definición de tipos de props requeridos
Cards.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Cards
