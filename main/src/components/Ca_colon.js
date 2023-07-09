import React from 'react';
import colonCancerImage from '../assets/img/ca/4.1 Cancer de colon.jpg';
import colonCancerImage2 from '../assets/img/ca/4.2 Cancer de colon.jpg';
import colonCancerImage3 from '../assets/img/ca/4.3 Cancer de colon.jpg';
const Ca_colon = () => {
  return (
    <div className="ca" >

      <br></br>
      <br></br>
      <br></br>
      <h2>Cáncer de Colon </h2>
      
      <br></br>
      <p>El cáncer de colon es un tipo de cáncer que comienza en el intestino grueso (colon). El colon es la parte final del tubo digestivo.
      </p>
      <img src={colonCancerImage } alt="Cáncer de colon" className='imgleft' />
      <p>
      El cáncer de colon suele afectar a los adultos mayores, aunque puede ocurrir a cualquier edad. Por lo general, comienza como grupos pequeños y no cancerosos (benignos) de células llamados pólipos que se forman en el interior del colon. Con el tiempo, algunos de estos pólipos pueden convertirse en cáncer de colon.
      </p>
      <p>Los pólipos pueden ser pequeños y generar pocos síntomas o ningún síntoma. Por esta razón, los médicos recomiendan pruebas de detección regulares para ayudar a prevenir el cáncer de colon mediante la identificación y extirpación de pólipos antes de que se conviertan en cáncer.</p>
      <p>Si aparece un cáncer de colon, hay muchos tratamientos disponibles para ayudar a controlarlo, incluidos la cirugía, la radioterapia y los tratamientos farmacológicos, como la quimioterapia, la terapia con diana específica y la inmunoterapia.</p>
      <p>El cáncer de colon a veces se denomina cáncer colorrectal, que es un término que combina el cáncer de colon y el cáncer rectal, que comienza en el recto.</p>
    
      <br></br><br></br>
      
      <h3>Síntomas:</h3>
      <p>Los signos y síntomas del cáncer de colon incluyen los siguientes:</p>
 
      <ul>
        <li>Un cambio persistente en tus hábitos intestinales, incluidos diarrea o estreñimiento, o un cambio en la consistencia de tus heces</li>
        <li>Sangrado rectal o sangre en las heces</li>
        <li>Molestia abdominal persistente, como calambres, gases o dolor.</li>
        <li>Una sensación de que el intestino no se vacía por completo</li>
        <li>Debilidad o fatiga</li>
        <li>Pérdida de peso sin causa aparente</li>
       
      </ul>
      <br></br>
      <img src={colonCancerImage2} alt="Cáncer de mama" className='imgleft' />
      <p>Muchas personas con cáncer de colon no experimentan síntomas en las primeras etapas de la enfermedad. Cuando aparecen los síntomas, es probable que varíen, según el tamaño del cáncer y de su ubicación en el intestino grueso.</p>

      <br></br>
      <h3>Factores de riesgo del cáncer de mama:</h3>

      <p>Los factores que pueden aumentar el riesgo de cáncer de colon incluyen los siguientes:</p>
      <ul>
        <li>Edad avanzada. El cáncer de colon se puede diagnosticar a cualquier edad, pero la mayoría de las personas con cáncer de colon son mayores de 50 años. Las tasas de cáncer de colon en personas menores de 50 años han estado aumentando, pero los médicos no están seguros del motivo.</li>
        <li>Raza afroamericana. Los afroamericanos tienen un mayor riesgo de padecer cáncer de colon que las personas de otras razas.</li>
        <li>Antecedentes personales de cáncer colorrectal o pólipos. Si ya has tenido cáncer de colon o pólipos no cancerosos en el colon, tienes un mayor riesgo de padecer cáncer de colon en el futuro.</li>
        <li>Afecciones intestinales inflamatorias. Las enfermedades inflamatorias crónicas del colon, como la colitis ulcerativa y la enfermedad de Crohn, pueden aumentar el riesgo de cáncer de colon.</li>
        <li>Síndromes hereditarios que aumentan el riesgo de cáncer de colon. Algunas mutaciones genéticas transmitidas a través de las generaciones de tu familia pueden aumentar significativamente tu riesgo de padecer cáncer de colon. Solo un pequeño porcentaje de los casos de cáncer de colon están relacionados con genes heredados. Los síndromes hereditarios más comunes que aumentan el riesgo de cáncer de colon son la poliposis adenomatosa familiar (PAF) y el síndrome de Lynch, también conocido como cáncer colorrectal hereditario no polipósico (HNPCC).</li>
        <li>Antecedentes familiares de cáncer de colon. Tienes mayor probabilidad de desarrollar cáncer de colon si tiene un pariente consanguíneo que haya tenido la enfermedad. Si más de un miembro de la familia tiene cáncer de colon o de recto, tu riesgo es aún mayor.</li>
        <li>Dieta con bajo contenido de fibra y alto contenido de grasas. El cáncer de colon y el cáncer de recto pueden estar asociados con una dieta occidental típica, que tiene un bajo contenido de fibra y un alto contenido de grasas y calorías. La investigación en esta área ha tenido resultados desiguales. Algunos estudios han encontrado un mayor riesgo de cáncer de colon en personas que cuyas dietas tienen un alto contenido de carne roja y carne procesada.</li>
        <li>Un estilo de vida sedentario. Las personas inactivas son más propensas a desarrollar cáncer de colon. Hacer actividad física regular puede reducir el riesgo de cáncer de colon.</li>
        <li>Diabetes. Las personas con diabetes o resistencia a la insulina tienen un mayor riesgo de cáncer de colon.</li>
        <li>Obesidad. Las personas obesas tienen un mayor riesgo de cáncer de colon y un mayor riesgo de morir de cáncer de colon en comparación con las personas consideradas de peso normal.</li>
        <li>Tabaquismo. Las personas que fuman pueden tener un mayor riesgo de cáncer de colon.</li>
        <li>Alcohol. El consumo excesivo de alcohol aumenta el riesgo de cáncer de colon.</li>
        <li>Radioterapia contra el cáncer. La radioterapia dirigida al abdomen para tratar casos de cáncer anteriores aumenta el riesgo de cáncer de colon.</li>
      </ul>
      <br></br>
      <img src={colonCancerImage3} alt="Cáncer de mama" className='imgcenter' />


    </div>
  );
};

export default Ca_colon;
