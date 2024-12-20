// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage('E-mail enviado com sucesso!');
        setEmail('');
      } else {
        setMessage('Erro ao enviar o e-mail.');
      }
    } catch (error) {
      setMessage('Erro ao enviar o e-mail.');
    }
  };

  return (
    <div>
      <h2>Envie-nos seu e-mail</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Digite seu e-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
