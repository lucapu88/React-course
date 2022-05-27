import React, { useState } from 'react';
/* REGOLE:
      Gli Hooks devono essere usasti con use davanti.
      Componenti devono avere la prima lettere Maiuscola o usare use davanti al nome (useComponenteNome oppure ComponenteNome).
      Gli Hook devono essere invocati all'interno del corpo/funzione del componente
      Gli Hook non possono essere utilizzati in maniera condizionale (ovvero dentro if else ecc)*/

const UsoBase = () => {
  const [titolo, changeTitle] = useState('Titoloooo');
  const setTitle = () => {
    changeTitle('titolo cambiato');
  };
  return (
    <>
      <h2> {titolo}</h2>
      <button onClick={setTitle}>cliccami </button>
    </>
  );
};

export default UsoBase;
