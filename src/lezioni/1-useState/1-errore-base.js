import React from 'react';
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
let titolo = 'Sono il TITOLO';
const cambiaTitolo = () => {
  titolo = 'Ho cambiato il TITOLO';
  console.log('suka');
};
const ErroreBase = () => {
  return (
    <React.Fragment>
      <h2>{titolo}</h2>

      <button onClick={cambiaTitolo}>cliccami</button>
    </React.Fragment>
  );
};

export default ErroreBase;
