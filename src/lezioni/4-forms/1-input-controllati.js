import React, { useState, useEffect } from 'react';

const ControlledInput = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cellulare, setCellulare] = useState('');
  const [persone, setPersone] = useState([]);

  const inviaDati = (e) => {
    e.preventDefault();

    if (nome && email && cellulare) {
      console.log(`Dati inviati:
      NOME: ${nome}
      EMAIL: ${email}
      CELLULARE: ${cellulare}`);

      setPersone([
        ...persone,
        {
          id: persone.length + 1,
          nome,
          email,
          cellulare: +cellulare,
        },
      ]);

      setNome('');
      setEmail('');
      setCellulare('');
      //alert('Dati inviati: controlla la console');
    } else {
      alert(`Riempi TUTTI i campi coglionazzo!`);
    }
  };

  return (
    <div>
      <h2>Controlled Input Component</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          margin: '0 auto',
          gap: '5px',
        }}
        onSubmit={inviaDati}
      >
        <label htmlFor="nome">Nome: </label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label htmlFor="cellulare">Cellulare: </label>
        <input
          id="cellulare"
          name="cellulare"
          type="tel"
          value={cellulare}
          onChange={(e) => setCellulare(e.target.value)}
        ></input>

        <button
          className="on-hover"
          style={{ width: '100px', alignSelf: 'center', marginTop: '15px' }}
          type="submit"
        >
          Submit
        </button>
      </form>

      {persone.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              border: '2px solid grey',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <p>{el.nome}</p>
            <p>{el.email}</p>
            <p>{el.cellulare}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ControlledInput;
