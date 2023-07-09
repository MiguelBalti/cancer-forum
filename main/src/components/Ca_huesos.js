import React from 'react';
import huesosCancerImage from '../assets/img/ca/3.1 Cancer de huesos.jpg';
import huesosCancerImage2 from '../assets/img/ca/3.2 Cancer de huesos.jpeg';
import huesosCancerImage3 from '../assets/img/ca/3.3 Cancer de huesos.jpg';
const Ca_huesos = () => {
  return (
    <div className="ca" >

      <br></br>
      <br></br>
      <br></br>
      <h2>Cáncer de huesos</h2>
      
      <br></br>
   
      <p>El cáncer de hueso puede originarse en cualquier hueso del cuerpo, pero en la mayoría de los casos, afecta la pelvis o los huesos grandes de los brazos y las piernas. El cáncer de hueso es poco frecuente: representa menos del 1 % de todos los tipos de cáncer. De hecho, los tumores óseos no cancerosos son mucho más frecuentes que los cancerosos.
      </p>
      <img src={huesosCancerImage} alt="Cáncer de huesos" className='imgleft' />
      <p>El término “cáncer de hueso” no incluye los tipos de cáncer que se originan en otra parte del cuerpo y se propagan (hacen metástasis) a los huesos. En cambio, a esos tipos de cáncer se los denomina según dónde se originaron, por ejemplo, cáncer de mama que hizo metástasis en los huesos.</p>
      <p>Algunos tipos de cáncer de hueso se manifiestan sobre todo en los niños, mientras que otros afectan principalmente a los adultos. La extirpación quirúrgica es el tratamiento más frecuente, pero también pueden usarse quimioterapia y radioterapia. La decisión de usar cirugía, quimioterapia o radioterapia se basa en el tipo de cáncer de hueso que se desee tratar.</p>
      
      <br></br><br></br>
      
      
      <h3>Síntomas:</h3>
      <p>Los signos y síntomas del cáncer de huesos incluyen los siguientes:</p>
      <img src={huesosCancerImage2} alt="Cáncer de huesos" className='imgright' />
      <ul>
        <li>Dolor de huesos</li>
        <li>Inflamación y dolor a la palpación cerca del área afectada</li>
        <li>Debilidad en los huesos, que provocan fracturas</li>
        <li>Fatiga</li>
        <li>Pérdida de peso involuntaria</li>
        
      </ul>
      
      <br></br>
      <br></br>
      <h3>Factores de riesgo del cáncer de huesos:</h3>
      <br></br>
      <p>Las causas del cáncer de huesos no están claras; sin embargo, los médicos han hallado ciertos factores que se asocian con un mayor riesgo, entre ellos:</p>
      <img src={huesosCancerImage3} alt="Cáncer de huesos" className='imgright' />
      <ul>
        <li>Síndromes genéticos heredados. Ciertos síndromes genéticos poco frecuentes heredados de la familia aumentan el riesgo de presentar cáncer de huesos, entre ellos el síndrome de Li-Fraumeni y el retinoblastoma hereditario.</li>
        <li>Enfermedad ósea de Paget. La enfermedad ósea de Paget, que se observa principalmente en adultos, puede aumentar el riesgo de que se desarrolle cáncer de huesos en el futuro.</li>
        <li>Radioterapia para el cáncer. La exposición a grandes dosis de radiación, como aquellas que se emiten durante la radioterapia para el cáncer, aumenta el riesgo de que se desarrolle cáncer de huesos en el futuro.</li>
       
      </ul>


    </div>
  );
};

export default Ca_huesos;
