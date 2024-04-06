import Cards from '../components/Cards'

const Galeria = () => {
  const cardData = [
    { title: 'Torta San Jorge', image: 'src/assets/img/img1.webp', description: 'Disfruta de una deliciosa torta de hojarascas , elaborada con los ingredientes más frescos y de calidad.' },
    { title: 'Torta Catalina', image: 'src/assets/img/img2.webp', description: 'Disfruta de esta deliciosa torta bizcocho , elaborada con manjar, frambuesas y mermelada de frambuesa.' },
    { title: 'Torta Beatriz', image: 'src/assets/img/img4.webp', description: 'Disfruta de una deliciosa Torta Hoja con manjar y mermelada de frambuesa.' },
    { title: 'Torta Tres Leches', image: 'src/assets/img/img4.webp', description: 'Disfruta de una deliciosa torta bizcocho de tres leches con la crema pastelera y merengue.' },
    { title: 'Torta Celeste', image: 'src/assets/img/img5.webp', description: 'Esta exquisita torta está rellena con crema de chocolate y mermelada de frambuesa.' },
    { title: 'Torta Elisa', image: 'src/assets/img/img6.webp', description: 'Disfruta de la deliciosa Torta Panqueque con crema de naranja, manjar y almendras.' },
    { title: 'Torta 4 Estaciones', image: 'src/assets/img/img7.webp', description: 'Torta Red Velvet es suave y esponjosa, con un intenso sabor a vainilla y un toque de chocolate rojo.' },
    { title: 'Torta Piña', image: 'src/assets/img/img8.webp', description: 'Esta exquisita torta tiene una textura suave y un sabor dulce que se complementa a la perfección con la cremosa chantilly y los trozos de piña fresca.' }
  ]
  // Array para almacenar las instancias de Cards
  const cardsComponents = []
  // Bucle for para iterar sobre los datos y generar las instancias de Cards
  for (let i = 0; i < cardData.length; i++) {
    const { title, image, description } = cardData[i]
    // Crea una instancia de Cards con los datos de cada elemento en cardData
    cardsComponents.push(
      <Cards
        key={i}
        name={title}
        img={image}
        desc={description}
      />
    )
  }
  // Renderiza todas las instancias de Cards almacenadas en cardsComponents
  return (
    <>
      {cardsComponents}
    </>
  )
}

export default Galeria
