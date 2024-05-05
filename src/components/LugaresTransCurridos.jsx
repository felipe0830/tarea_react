
import Piedra from '../image/Piedra.jpg';
import Santafe from '../image/Santafe.jpg';
import Medellin from '../image/Medellin.jpg';
import Guatape from '../image/Guatape.jpg';
import { useState } from 'react';

function LugaresTransCurridos() {

  //Estado
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  //Ciclo de vida
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar el comentario a través de una llamada a una API, guardar en una base de datos, etc.
    console.log('Comentario enviado:', comment);
    // Luego podrías reiniciar el campo de comentario si lo deseas
    setComment('');
  };
  return (
  <>
<div className="Lugar1">

<h2>(sesion de Lugares mas Transcurridos 🚕)</h2>

<h5>1. Piedra del Peñol  <p>Esta impresionante formación natural se encuentra en el municipio de Guatapé, 
a 30 minutos en autobús desde Medellín. 
Con más de 700 escalones, 
puedes caminar hasta la cima y disfrutar de vistas panorámicas del paisaje montañoso. Además, 
puedes explorar los mitos asociados con esta roca y aprender sobre su historia12.</p></h5>

<img src={Piedra} />


      <h5>Deja tu opinión:</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    

</div>

<div className="Lugar2">

<h5>2. Santa Fe de Antioquia  <p> A solo 35 minutos de Medellín, 
este pueblo es conocido por su arquitectura colonial y su hermoso puente colgante de Occidente. 
Pasea por sus calles empedradas y admira las instalaciones coloniales que rodean el río Cauca</p> </h5>

<img src={Santafe}/>


<h5>Por Favor deja tu opinión Aqui </h5>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    
</div>

<div className="Lugar3">
  
<h5>3. Medellín  <p> La vibrante ciudad de Medellín ha transformado su pasado conflictivo en un centro moderno y cultural. 
Explora el Museo de la Memoria, 
admira el arte callejero en la Comuna 13 y visita el Museo de Antioquia para ver las obras de Fernando Botero. 
También puedes disfrutar de la vida nocturna y la gastronomía local</p></h5>
    
<img src={Medellin}/>


<h5>Deja tu opinión:</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    

</div>

<div className="Lugar4">

<h5>4. Guatapé  <p>Este colorido pueblo en la región de Antioquia es famoso por su Embalse Guatapé, 
  un enorme lago artificial rodeado de islas pintorescas. 
  No te pierdas la oportunidad de subir al Peñón de Guatapé para disfrutar de vistas impresionantes del lago y el pueblo</p></h5>
<img src={Guatape}/>


<h5>Deja tu opinión:</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    

</div>

</>
  )
}
export default LugaresTransCurridos
