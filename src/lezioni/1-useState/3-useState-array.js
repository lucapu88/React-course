import React, { useState } from 'react';
import { data } from '../../data';

const ArrayState = () => {
  const [people, setPeople] = useState(data);
  const cancella = (id) => {
    let newPeople = people.filter((p) => p.id !== id);

    setPeople(newPeople);
  };
  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div key={id} className="item shadow">
            <h3>{name}</h3>
            <button onClick={() => cancella(id)}>DELETE</button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
