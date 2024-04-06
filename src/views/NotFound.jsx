import Alerta from '../components/Alerta'

const NotFound = () => {
  return (
    <Alerta tipoVariant='danger' error='Error' descripcion='Ups, Ruta no encontrada' />
  )
}

export default NotFound
