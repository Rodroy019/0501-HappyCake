import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
      <div className='container px-4 px-lg-5'>
        <div className='row align-items-center justify-content-center text-center'>
          <div className='col-lg-8 align-self-end'>
            <h1 className='text-white mt-5'>¡Bienvenido a Happy Cake!</h1>
            <hr className='divider' />
          </div>
          <div className='col-lg-8'>
            <p className='text-white mb-5'>En Happy Cake, nos dedicamos a hacer que cada ocasión sea especial con nuestros deliciosos pasteles y postres. Somos una tienda especializada en repostería artesanal, donde cada creación está hecha con amor y cuidado para deleitar tus sentidos y endulzar tus momentos más preciados.</p>
            <div className='image-container'>
              <img src='src/assets/img/logo.png' alt='pastel' className='logo' />
            </div>
            <p className='text-white mb-5 mt-3'>Nuestro extenso catálogo incluye una variedad de opciones para satisfacer todos los gustos y ocasiones. Desde exquisitas tartas de chocolate y suaves pasteles de frutas frescas hasta cupcakes decorativos y postres personalizados, cada bocado de nuestros productos es una experiencia única.
            </p>

            <Link className='btn btn-warning btn-xl' to='./galeria'>¡Descubre Nuestros Deliciosos Pasteles!</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio
