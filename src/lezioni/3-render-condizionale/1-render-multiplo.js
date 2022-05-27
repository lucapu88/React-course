import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users/QuincyLarson';

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      setIsLoading(false);
      setUser(resp.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h2> Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ color: 'red' }}>Sorry! There is an error :(</h2>;
  }

  return (
    <div style={{ border: '2px solid green' }}>
      <h2>{user.login}</h2>
      <img className="rounded-circle" src={user.avatar_url} alt={user.login} />
    </div>
  );
};

export default ConditionalCompining;
