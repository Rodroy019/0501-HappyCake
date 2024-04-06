import { useState } from 'react'
import Alerta from './Alerta'

const Formulario = () => {
  const [form, setForm] = useState({ nombre: '', email: '', desc: '' })
  const [alerta, setAlerta] = useState(null)

  const validar = (e) => {
    e.preventDefault()
    if (form.nombre === '' || form.email === '') {
      setAlerta(<Alerta tipoVariant='warning' error='Advertencia' descripcion='Por favor, ingrese su Nombre y/o Email.' />)
      return
    }
    if (form.desc === '') {
      setAlerta(<Alerta tipoVariant='danger' error='Error' descripcion='Por favor, ingrese un comentario para nosotros.' />)
      return
    }
    setAlerta(<Alerta tipoVariant='success' error='Éxito' descripcion='¡Su mensaje a sido enviado! ¡Pronto lo Contactaremos!' />)
  }
  return (
    <form onSubmit={validar}>
      <input
        type='text'
        placeholder='Nombre'
        value={form.nombre}
        onChange={e => {
          setForm({
            ...form,
            nombre: e.target.value
          })
        }}
      />
      <input
        type='email'
        placeholder='Email'
        value={form.email}
        onChange={e => {
          setForm({
            ...form,
            email: e.target.value
          })
        }}
      />
      <input
        type='text'
        placeholder='Escriba un mensaje para nosotros'
        value={form.desc}
        onChange={e => {
          setForm({
            ...form,
            desc: e.target.value
          })
        }}
      />
      <button type='submit'>Enviar</button>
      <br />
      {alerta}
    </form>
  )
}

export default Formulario
