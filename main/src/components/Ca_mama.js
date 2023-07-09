import React from 'react';
import mamaCancerImage from '../assets/img/ca/5.1 Cancer de mama.avif';
import mamaCancerImage2 from '../assets/img/ca/5.2 Cancer de mama.jpg';
const Ca_mama = () => {
  return (
    <div className="ca" >

      <br></br>
      <br></br>
      <br></br>
      <h2>Cáncer de mama</h2>
      
      <br></br>
      <p>El cáncer de mama es una enfermedad en la cual las células de la mama se multiplican sin control. Existen distintos tipos de cáncer de mama. El tipo de cáncer de mama depende de qué células de la mama se vuelven cancerosas.
      </p>
      <img src={mamaCancerImage} alt="Cáncer de mama" className='imgleft' />
      <p>
      El cáncer de mama puede comenzar en distintas partes de la mama. Las mamas constan de tres partes principales: lobulillos, conductos y tejido conectivo. Los lobulillos son las glándulas que producen leche. Los conductos son los tubos que transportan la leche al pezón. El tejido conectivo (formado por tejido fibroso y adiposo) rodea y sostiene todas las partes de la mama. La mayoría de los cánceres de mama comienzan en los conductos o en los lobulillos.
      </p>
      <br></br><br></br>
      
      <h3>Síntomas:</h3>
      <p>Los signos de advertencia del cáncer de mama pueden ser distintos en cada persona. Algunas personas no tienen ningún tipo de signos o síntomas.</p>
      <p>Algunas señales de advertencia del cáncer de mama son:</p>
      <img src={mamaCancerImage2} alt="Cáncer de mama" className='imgright' />
      <ul>
        <li>Un bulto nuevo en la mama o la axila (debajo del brazo).</li>
        <li>Aumento del grosor o hinchazón de una parte de la mama.</li>
        <li>Irritación o hundimientos en la piel de la mama.</li>
        <li>Enrojecimiento o descamación en la zona del pezón o la mama.</li>
        <li>Hundimiento del pezón o dolor en esa zona.</li>
        <li>Secreción del pezón, que no sea leche, incluso de sangre.</li>
        <li>Cualquier cambio en el tamaño o la forma de la mama.</li>
        <li>Dolor en cualquier parte de la mama.</li>
        <li>Tenga en cuenta que estos signos de advertencia pueden darse con otras afecciones que no son cáncer.</li>
      </ul>
      <br></br>
      <h3>Factores de riesgo del cáncer de mama:</h3>
      <br></br>
      <p>Algunos estudios han demostrado que el riesgo de tener cáncer de mama se debe a una combinación de factores. Los principales factores que influyen en el riesgo de una persona incluyen ser mujer y hacerse mayor. La mayoría de los cánceres de mama se detectan en mujeres de 50 años o más.</p>
      <p>Algunas mujeres tienen cáncer de mama aunque no tengan ningún otro factor de riesgo conocido. Tener un factor de riesgo no significa que la persona tendrá la enfermedad, y no todos los factores de riesgo tienen el mismo efecto. La mayoría de las mujeres tienen algunos factores de riesgo, pero la mayoría de las mujeres no tienen cáncer de mama. Si usted tiene factores de riesgo de cáncer de mama, hable con su médico sobre las maneras en que puede disminuir el riesgo y acerca de las pruebas de detección de esta enfermedad.</p>

      <h4>Factores de riesgo que no pueden cambiar:</h4>
      <br></br>

      <ul>
        <li>Hacerse mayor. El riesgo de cáncer de mama aumenta con la edad. La mayoría de los cánceres de mama se diagnostica después de los 50 años de edad.</li>
        <li>Mutaciones genéticas. Las mujeres que han heredado cambios (mutaciones) heredados en ciertos genes, tales como en el BRCA1 y el BRCA2, tienen mayor riesgo de presentar cáncer de mama y de ovario.</li>
        <li>Historial reproductivo. El comienzo de la menstruación antes de los 12 años de edad y de la menopausia después de los 55 años de edad exponen a las mujeres a hormonas por más tiempo, lo cual aumenta el riesgo de cáncer de mama.</li>
        <li>Tener mamas densas. Las mamas densas mamas densas tienen más tejido conjuntivo que tejido adiposo, lo cual, a veces, puede hacer difícil la detección de tumores en una mamografía. Las mujeres con mamas densas tienen más probabilidades de tener cáncer de mama.</li>
        <li>Antecedentes personales de cáncer de mama o ciertas enfermedades de las mamas que no son cancerosas. Las mujeres que han tenido cáncer de mama tienen mayores probabilidades de tener esta enfermedad por segunda vez. Algunas enfermedades de las mamas que no son cancerosas, como la hiperplasia atípica o el carcinoma lobulillar in situ, están asociadas a un mayor riesgo de tener cáncer de mama.</li>
        <li>Antecedentes familiares de cáncer de mama o cáncer de ovario. El riesgo de una mujer de tener cáncer de mama es mayor si su madre, una hermana o una hija (parientes de primer grado) o varios integrantes de la familia por el lado paterno o materno han tenido cáncer de mama o cáncer de ovario. Tener un pariente de primer grado de sexo masculino con cáncer de mama también aumenta el riesgo para la mujer.</li>
        <li>Tratamientos previos con radioterapia. Las mujeres que han recibido radioterapia en el pecho o las mamas antes de los 30 años de edad (por ejemplo, para el tratamiento del linfoma de Hodgkin) tienen un riesgo mayor de presentar cáncer de mama más adelante en la vida.</li>
        <li>Exposición al medicamento dietilestilbestrol. Dietilestilbestrol se administró a algunas mujeres embarazadas en los Estados Unidos entre los años 1940 y 1971 para prevenir el aborto espontáneo. Las mujeres que tomaron dietilestilbestrol, o cuyas madres tomaron dietilestilbestrol cuando estaban embarazadas de ellas, tienen un mayor riesgo de tener cáncer de mama.</li>
      </ul>





    </div>
  );
};

export default Ca_mama;
