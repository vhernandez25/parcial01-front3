import React from 'react';

function Card({ name, color }) {
  return (
    <div>
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es {color}</p>
    </div>
  );
}

export default Card;
