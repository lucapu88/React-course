import React, { useState } from 'react';

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);
  const resetta = () => {
    setContatore(0);
  };
  const aumenta = () => {
    // setContatore(contatore + 1);
    //setContatore((vecchioValore) => vecchioValore + 1);
    setTimeout(() => {
      setContatore((vecchioValore) => vecchioValore + 1);
    }, 1000);
  };
  const diminuisci = () => {
    setContatore(contatore - 1);
  };
  return (
    <div className="bg-white shadow rounded p-5 w-75 col-6 offset-3">
      <h3>{contatore}</h3>
      <div className="d-flex justify-content-between">
        <button className="button my-2" onClick={diminuisci}>
          Diminuisci
        </button>
        <button className="button my-2" onClick={aumenta}>
          Aumenta
        </button>
      </div>
      <button className="button reset-button" onClick={resetta}>
        Resetta
      </button>
    </div>
  );
};

export default CounterComponent;
