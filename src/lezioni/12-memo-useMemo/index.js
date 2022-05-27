import React, { useMemo, useState } from 'react';
import useFetch from '../../9-custom-hooks/risultato/useFetch';
const url = 'https://api.github.com/users';

//React.memo controlla l'aggiornamento delle props, renderizza solo dove e quando cambiano le props ricevute.
//React.memo si usa per renderizzare i componenti al cambio props.

//useMemo controlla e memorizza un valore specifico e fa cose solo se quel valore che gli viene passato cambia.
//useMemo si usa sulle funzioni, ad esempio se una funzione impiega molto tempo per fare cose, la si fa chiamare solo se veramente deve essere chiamata, ovvero al cambio di valori che la interpellano.

const trovaMaggiore = (array) => {
  console.log('maggiore');
  return array.reduce((total, item) => {
    if (item.id > total) {
      total = item.id;
    }
    return total;
  }, 0);
};

const Index = () => {
  const { data } = useFetch(url);
  const [contatore, setContatore] = useState(0);
  useMemo(() => trovaMaggiore(data), [data]);

  return (
    <>
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <button
          className="btn btn-info"
          onClick={() => setContatore(contatore + 1)}
        >
          Aggiungi
        </button>
        <h4>{contatore}</h4>
      </div>
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        {data.map((el) => {
          return <Elenco key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};

const Elenco = React.memo(({ avatar_url: image, login: name }) => {
  console.log('pippo');
  return (
    <article className="card bg-white my-3 shadow-sm">
      <img
        src={image}
        alt={name}
        className="img my-3"
        style={{ width: '30%', borderRadius: '50%', margin: 'auto' }}
      />
      <h4>{name}</h4>
    </article>
  );
});

export default Index;
