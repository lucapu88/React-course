import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProfile = () => {
  const { id } = useParams();

  return (
    <div style={{ color: 'red' }}>
      <strong>{`This is the Single Profile Screen of id ${id}`}</strong>
    </div>
  );
};

export default SingleProfile;
