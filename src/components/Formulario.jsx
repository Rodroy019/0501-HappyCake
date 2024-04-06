import { Form, Container, Button } from 'react-bootstrap'

const Formulario = () => {
  return (
    <Container className='my-5'>
      <Form>
        <Form.Group text='white' className='mb-3'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='email' placeholder='Ingrese su Nombre' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Comentario</Form.Label>
          <Form.Control as='textarea' rows={6} placeholder='Por Favor, ingrese un comentario' />
        </Form.Group>
        <div className='d-grid gap-2'>
          <Button variant='primary' size='lg'>
            Enviar
          </Button>
        </div>
      </Form>

    </Container>
  )
}

export default Formulario
