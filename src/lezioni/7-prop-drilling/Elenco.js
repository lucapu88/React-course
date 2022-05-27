import React from 'react';
import Persona from '../inizio/Persona';

const Elenco = ({ people, deletePeople }) => {
  return (
    <div style={{ border: '2px solid blue' }} className="m-2">
      {people.map((el) => (
        // <Persona key={el.id} name={el.name} id={el.id}></Persona>
        //oppure come qui sotto è la stessa cosa di sopra, gli passo tutto ciò che c'è in el
        <Persona key={el.id} {...el} deletePeople={deletePeople}></Persona>
      ))}
    </div>
  );
};

export default Elenco;
