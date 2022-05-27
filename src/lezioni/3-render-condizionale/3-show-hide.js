import React, { useState, useEffect } from 'react';

const HideorShowComponent = () => {
  const [showOrHide, setShowOrHide] = useState(false);
  return (
    <div>
      <h1>Show or Hide Component</h1>
      <button className="on-hover" onClick={() => setShowOrHide(!showOrHide)}>
        {showOrHide ? 'Nascondi' : 'Mostra'}
      </button>
      {showOrHide && <AltroComponente></AltroComponente>}
    </div>
  );
};

const AltroComponente = () => {
  const [contatore, setContatore] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [contatore]);

  return (
    <div>
      <h2 style={{ color: 'red' }}>Sono l'altro componente</h2>
      {contatore}
    </div>
  );
};

export default HideorShowComponent;
