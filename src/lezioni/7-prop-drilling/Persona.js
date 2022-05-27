import React from 'react';

const Persona = ({ name, id, deletePeople }) => {
  return (
    <div style={{ border: '2px solid red' }} className="m-2 p-2">
      <p>ID: {id}</p>
      <p>Nome: {name}</p>
      <button className="on-hover" onClick={() => deletePeople(id)}>
        Cancella
      </button>
    </div>
  );
};

export default Persona;
