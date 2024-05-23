import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [formData, setFormData] = useState({ name: '', color: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 3 || formData.color.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Ingresa tu color favorito (formato HEX)"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {submitted && <Card name={formData.name} color={formData.color} />}
    </div>
  );
}

export default App;
