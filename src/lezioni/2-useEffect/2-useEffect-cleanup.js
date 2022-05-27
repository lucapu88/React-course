import React, { useState, useEffect } from 'react';

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  console.log('rendering');

  const dimensioneFinestra = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', dimensioneFinestra);
    console.log('sto stringendo');
    return () => {
      //QUESTA È LA CLEAN UP FUNCTION. Senza di essa ci sarebbe un sovraccarico di event listner ogni volta che stringiamo il display;
      window.removeEventListener('resize', dimensioneFinestra);
      console.log('sto pulendo');
    };
  });

  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow p-4 mx-auto"
      style={{ textAlign: 'center' }}
    >
      <h1> window width: {size}</h1>
    </div>
  );
};

export default CleanUp;
