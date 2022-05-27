import React, { useState } from 'react';
import { data } from '../../../data';
import Elenco from './Elenco';

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const deletePeople = (id) => {
    const peopleFiltered = people.filter((p) => p.id !== id);

    setPeople(peopleFiltered);
  };

  return (
    <div style={{ border: '2px solid green' }} className="m-2">
      <h2>Passaggio di Proprietà a Cascata</h2>
      <Elenco people={people} deletePeople={deletePeople}></Elenco>
    </div>
  );
};

export default MainComponent;
