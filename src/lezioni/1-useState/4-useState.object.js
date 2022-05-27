import React, { useState } from 'react';

const StateObject = () => {
  const [person, setPerson] = useState({
    name: 'pippo',
    age: 33,
    saluto: 'ciao',
  });

  const cambiaSaluto = () => {
    setPerson({
      ...person,
      saluto: 'vaffanculo',
    });
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.saluto}</h4>
      <button onClick={cambiaSaluto}> cambia saluto</button>
    </div>
  );
};

export default StateObject;
