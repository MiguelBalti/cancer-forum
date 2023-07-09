import React from 'react';
import sangreCancerImage from '../assets/img/ca/6.1 Leucemia.png';
import sangreCancerImage2 from '../assets/img/ca/6.2 Leucemia.jpg';
const Ca_mama = () => {
  return (
    <div className="ca" >

      <br></br>
      <br></br>
      <br></br>
      <h2>Leucemia</h2>
      
      <br></br>
      <p>La leucemia es el cáncer de los tejidos que forman la sangre en el organismo, incluso la médula ósea y el sistema linfático.
      </p>
      <p>Existen muchos tipos de leucemia. Algunas formas de leucemia son más frecuentes en niños. Otras tienen lugar, principalmente, en adultos.</p>
      <img src={sangreCancerImage} alt="Leucemia" className='imgleft' />
      <p>
      La leucemia, por lo general, involucra a los glóbulos blancos. Los glóbulos blancos son poderosos combatientes de infecciones; por lo general, crecen y se dividen de manera organizada, a medida que el cuerpo los necesita. Pero en las personas que tienen leucemia, la médula ósea produce una cantidad excesiva de glóbulos blancos anormales que no funcionan correctamente.
      </p>
      <p>El tratamiento para la leucemia puede ser complejo, según el tipo de leucemia y según otros factores. Pero existen estrategias y recursos que pueden ayudar a hacer que el tratamiento sea exitoso.</p>
      <br></br><br></br>
      
      <h3>Síntomas:</h3>
      <p>Los síntomas de la leucemia varían según el tipo de leucemia. Los signos y síntomas comunes incluyen los siguientes:</p>
      <img src={sangreCancerImage2} alt="Cáncer de sangre" className='imgright' />
      <ul>
        <li>Fiebre o escalofríos</li>
        <li>Fatiga persistente, debilidad</li>
        <li>Infecciones frecuentes o graves</li>
        <li>Pérdida de peso sin intentarlo</li>
        <li>Ganglios linfáticos inflamados, agrandamiento del hígado o del bazo</li>
        <li>Sangrado y formación de hematomas con facilidad</li>
        <li>Sangrados nasales recurrentes</li>
        <li>Pequeñas manchas rojas en la piel (petequia)</li>
        <li>Hiperhidrosis, sobre todo por la noche</li>
        <li>Dolor o sensibilidad en los huesos</li>
      </ul>
      <br></br>
      <h3>Factores de riesgo de la leucemia:</h3>
      <br></br>
      <p>Los factores que pueden aumentar los riesgos de manifestar algunos tipos de leucemia son los siguientes:</p>

      <br></br>

      <ul>
        <li>Tratamientos oncológicos previos. Las personas que se sometieron a determinados métodos de quimioterapia y radioterapia por otros tipos de cáncer corren un mayor riesgo de manifestar ciertos tipos de leucemia.</li>
        <li>Trastornos genéticos. Las anomalías genéticas parecen influir en el desarrollo de la leucemia. Ciertos trastornos genéticos, como el síndrome de Down, están asociados con un mayor riesgo de padecer leucemia.</li>
        <li>Exposición a ciertas sustancias químicas. La exposición a ciertas sustancias químicas, como el benceno (el cual se encuentra en la gasolina y se utiliza en la industria química), está relacionada con un mayor riesgo de padecer algunos tipos de leucemia.</li>
        <li>Tabaquismo. Fumar cigarrillos aumenta el riesgo de padecer leucemia mielógena aguda.</li>
        <li>Antecedentes familiares de leucemia. Si a algún miembro de tu familia se le ha diagnosticado leucemia, tu riesgo de padecer la enfermedad puede aumentar.</li>
      </ul>

       <br></br>
      <p>Sin embargo, la mayoría de las personas que presentan factores de riesgo conocidos no padecen leucemia. Y muchas personas con leucemia no presentan ninguno de estos factores.</p>





    </div>
  );
};

export default Ca_mama;
