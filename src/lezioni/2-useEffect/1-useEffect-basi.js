import React, { useEffect, useState } from 'react';

const useEffectBasi = () => {
  const [valore, setValore] = useState(0);
  const cambiaValore = () => {
    setValore((vecchioValore) => vecchioValore + 1);
  };
  useEffect(() => {
    valore >= 1
      ? (document.title = `Valore: ${valore}`)
      : (document.title = 'Nessun Valore');
  }, [valore]); //se lascio le quadre vuote effettuerà tutte ciò che c'è al suo interno solo al primo rendering
  return (
    <div>
      <h4>UseEffect Componente Base</h4>
      <p>{valore}</p>
      <button onClick={cambiaValore}>cambia</button>
    </div>
  );
};

export default useEffectBasi;
