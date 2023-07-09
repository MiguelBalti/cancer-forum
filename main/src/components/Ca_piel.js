import React from 'react';
import skinCancerImage from '../assets/img/ca/2.1 Cancer de piel.jpg';
import skinCancerImage2 from '../assets/img/ca/2.2 Cancer piel.jpg';
import skinCancerImage3 from '../assets/img/ca/2.3 Cancer piel.jpg';
const Ca_piel = () => {
  

  return (
   
      
      <div className="ca">

      <br></br>
      <br></br>
      <br></br>
      <h1>Cáncer de Piel</h1>
      
      <img src={skinCancerImage} alt="Cáncer de piel"  className='imgleft2'/>
      <p>
        La piel es el órgano más grande del cuerpo. La piel tiene varias capas,
        pero las dos principales son la epidermis (capa superior o externa) y
        la dermis (capa inferior o interna). El cáncer de piel comienza en la
        epidermis, que está compuesta de tres tipos de células.
      </p>

      <h4>Células escamosas:</h4>
      <p>
        Células delgadas y planas que forman la capa superior de la epidermis.
      </p>

      <h4>Células basales:</h4>
      <p>Células redondeadas que están debajo de las células escamosas.</p>

      <h4>Melanocitos:</h4>
      <p>
        Células que producen melanina y que se encuentran en la parte inferior
        de la epidermis. La melanina es el pigmento que le da color a la piel.
        Cuando se expone la piel al sol, los melanocitos producen más pigmento
        y hacen que la piel se oscurezca.
      </p>

      <p>
        Los carcinomas de células basales y de células escamosas son dos de los
        tipos más comunes de cáncer de piel. Comienzan, respectivamente, en las
        capas basales y escamosas de la piel. Por lo general, ambos se pueden
        curar, pero pueden desfigurar y ser muy costosos de tratar.
      </p>

      <p>
        El melanoma, el tercer tipo de cáncer de piel más común, comienza en los
        melanocitos. De todos los tipos de cáncer de piel, el melanoma causa la
        mayoría de las muertes, debido a su tendencia a propagarse a otras
        partes del cuerpo, incluidos los órganos vitales.
      </p>

      <p>
        La mayoría de los casos de cáncer de piel son provocados por la
        exposición excesiva a los rayos ultravioleta (UV) del sol, las camas
        bronceadoras o las lámparas solares. Los rayos UV pueden causar daño a
        las células de la piel. A corto plazo, este daño puede provocar una
        quemadura solar. Con el tiempo, el daño de los rayos UV se acumula,
        causando cambios en la textura de la piel, envejecimiento prematuro de
        la piel y, a veces, cáncer de piel. Los rayos UV también se han
        vinculado a afecciones de los ojos, como cataratas.
      </p>

      <br></br><br></br>
      
      <h3>Síntomas:</h3>
      
      <p>Un cambio en la piel es el signo más común de cáncer de piel. Estos cambios pueden ser una lesión nueva que le salió en la piel, una llaga que no cicatriza o un cambio en un lunar. No todos los cánceres de piel se ven iguales.</p>
      <p>Para el melanoma específicamente, una forma fácil de recordar los signos de advertencia es recordar las primeras letras del abecedario.</p>
      <img src={skinCancerImage2} alt="Cáncer de piel"  className='imgright'/>
      <ul>
        <li>Asimetría: ¿El lunar o la mancha tiene forma irregular con dos partes que se ven muy diferentes?</li>
        <li>Bordes: ¿Los bordes son irregulares o dentados?</li>
        <li>Color: ¿El color es disparejo?</li>
        <li>Diámetro: ¿El lunar o la mancha es más grande que una arveja?</li>
        <li>Evolución: ¿El lunar o la mancha ha cambiado o evolucionado en las últimas semanas o en los últimos meses?</li>
      </ul>

      <br></br>
      <h3>Factores de riesgo del cáncer de piel:</h3>
      <p>La mayoría de los cánceres de piel son provocados por la exposición excesiva a los rayos ultravioleta (UV). Los rayos UV provienen del sol, las camas bronceadoras y las lámparas solares. Los rayos UV pueden causar daño a las células de la piel.</p>
      <p>Para reducir el riesgo de presentar cáncer de piel, usted puede protegerse de los rayos UV del sol, y evitar las fuentes artificiales de exposición a los rayos UV, como camas bronceadoras y lámparas solares.</p>
      <p>Practique la seguridad frente al sol</p>
      <p>Es importante protegerse de los rayos UV todo el año, no solo durante el verano. Los rayos UV lo pueden afectar en días nublados y frescos, y se reflejan desde superficies como el agua, el cemento, la arena y la nieve</p>
      <p>El índice UV pronostica la intensidad de los rayos UV todos los días. Si el índice UV es de 3 o más en su área, protéjase la piel de una exposición excesiva al sol. Los CDC recomiendan formas varias de protegerse la piel cuando el índice UV sea de 3 o más:</p>
      <ul>
        <li>Quédese en la sombra.</li>
        <li>Vístase con ropa que le cubra los brazos y las piernas.</li>
        <li>Use un sombrero de ala ancha para cubrirse la cara, la cabeza, las orejas y el cuello.</li>
        <li>Use gafas de sol que cubran los lados de la cara y bloqueen tanto los rayos UVA como los UVB. </li>
        <li>•	Aplíquese un filtro solar de amplio espectro con un factor de protección solar (FPS) 15 o más</li>
      </ul>
      <br></br><br></br>
      <img src={skinCancerImage3} alt="Cáncer de piel"  className='imgcenter'/>

      
    </div>
  );
}

export default Ca_piel;
