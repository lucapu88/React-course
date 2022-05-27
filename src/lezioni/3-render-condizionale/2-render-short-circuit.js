import React, { useState } from 'react';

const ShortRender = () => {
  const [parola, setParola] = useState('parola');

  const esempioOr = parola || 'parola diversa';
  const esempioAnd = parola && 'parola diversa';
  return (
    <div>
      <h2>Or: {esempioOr}</h2>
      <h2>And: {esempioAnd}</h2>

      {/* in react non si possono utilizzare gli if nell'html */}
      {parola || <p>pippo</p>}
      {parola && <p>mimmo</p>}

      {/* ma si possono usare i ternati */}
      {parola === 'stopipolo' ? (
        <h1>pirupiru</h1>
      ) : (
        <h2>dottore chiami un dottore</h2>
      )}
      <button onClick={() => setParola('stopipolo')}>cambia dottore</button>
    </div>
  );
};

export default ShortRender;
