import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import antioquia1 from '../antioquia1.jpg';
import antioquia2 from '../antioquia2.jpg';
import antioquia3 from '../antioquia3.webp';
import antioquia4 from '../antioquia4.jpg';

const GaleriaImagenes = () => {
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
    <h2> Galeria Imagenes de Antioquia </h2>
    <Slider {...settings}>
    <div>
    <h6></h6>
    <img src={antioquia1} alt="Parque Explora" />
    </div>
    <div>
    <h6></h6>
    <img src={antioquia2} alt="El Parque Arví" />
    </div>
    <div>
    <h6></h6>
    <img src={antioquia3} alt="La Reserva Natural Cañón del Río Claro" />
    </div>
    <div>
    <h6></h6>
    <img src={antioquia4} alt="Cerro el Volador" />
    </div>
    </Slider>
    </div>
</>
  );
};

export default GaleriaImagenes;