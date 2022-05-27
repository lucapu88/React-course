import React, { useEffect, useState } from 'react';

const ControlledInput = () => {
  const [persona, setPersona] = useState({
    nome: '',
    email: '',
    cellulare: '',
  });
  const [persone, setPersone] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setPersone([...persone, persona]);
  };

  const creaPersona = (e) => {
    /*crea 2 variabili name e value che sono uguali al valore di e.target.name e e.target.value
      questa magia avviene perchè i noi sono uguali, se avessimo scritto pippo al posto di name non avrebbe funzionato*/
    const { name, value } = e.target;

    /*vado a settare l'oggetto persona dando il nome alle chiavi e al valore */
    setPersona({ ...persona, [name]: value });
  };

  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);
  return (
    <form className="bg-white shadow p-4" onSubmit={(e) => handleSumbit(e)}>
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="nome" className="text-left font-weight-bold col-2">
          {' '}
          Nome:{' '}
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className="form-control"
          value={persona.nome}
          onChange={creaPersona}
        />
      </div>
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="email" className="text-left font-weight-bold col-2">
          {' '}
          Email:{' '}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={persona.email}
          onChange={creaPersona}
        />
      </div>
      <div className="form-group d-flex align-items-center container mt-2">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-2">
          {' '}
          Cellulare:{' '}
        </label>
        <input
          type="tel"
          id="cellulare"
          name="cellulare"
          className="form-control"
          value={persona.cellulare}
          onChange={creaPersona}
        />
      </div>
      <button type="submit" className="btn btn-info mt-4">
        {' '}
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
