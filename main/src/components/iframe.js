import React from 'react';

function iframe() {
  return (
    <div>
      <h1>My Component</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240695.05320074788!2d-99.43471411328122!3d19.504649300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94c06d75fd7%3A0x3fe1567da2190ac9!2sESCOM%20-%20Escuela%20Superior%20de%20C%C3%B3mputo%20-%20IPN!5e0!3m2!1ses!2smx!4v1686117599624!5m2!1ses!2smx" width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default iframe;
