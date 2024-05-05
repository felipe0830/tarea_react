
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen1 from '../imagen1.jpg';
import imagen2 from '../imagen2.jpg';
import imagen3 from '../imagen3.jpg';
import imagen4 from '../imagen4.jpg';

const LugaresPopulares = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Cambia esto para ajustar la velocidad del carrusel
  };

  return (
    <>
      <div>
        <h2>Lugares Populares</h2>
        <Slider {...settings}>
          <div>
            <h6>Parque Explora</h6>
            <img src={imagen1} alt="Parque Explora" />
          </div>
          <div>
            <h6>El Parque Arví</h6>
            <img src={imagen2} alt="El Parque Arví" />
          </div>
          <div>
            <h6>La Reserva Natural Cañón del Río Claro situado en la cuenca del Río Magdalena</h6>
            <img src={imagen3} alt="La Reserva Natural Cañón del Río Claro" />
          </div>
          <div>
            <h6>Cerro el Volador, ubicado en la zona urbana de Medellín.</h6>
            <img src={imagen4} alt="Cerro el Volador" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default LugaresPopulares;
