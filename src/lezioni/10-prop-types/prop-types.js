import React from 'react';
import { datiIncompleti } from '../../data';
import propTypes from 'prop-types';

const defaultImg =
  'https://images.pexels.com/photos/12180997/pexels-photo-12180997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        return <Prodotto key={el.id} {...el}></Prodotto>;
      })}
    </div>
  );
};

const Prodotto = ({ nome, prezzo, image }) => {
  return (
    <div>
      <h3>{nome}</h3>
      <img
        style={{ width: '250px', heigth: '300px' }}
        src={image.url}
        alt={nome}
      />
      <p>{prezzo}</p>
    </div>
  );
};

Prodotto.propTypes = {
  nome: propTypes.string.isRequired,
  prezzo: propTypes.number.isRequired,
  image: propTypes.object.isRequired,
};

Prodotto.defaultProps = {
  nome: 'senza nome',
  prezzo: 0,
  image: { url: defaultImg },
};

export default PropComponent;
