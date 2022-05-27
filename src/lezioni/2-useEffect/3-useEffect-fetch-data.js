import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Fetch Component</h1>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url: github } = el;
          return (
            <li
              key={id}
              style={{
                padding: '5px',
                border: '1px solid black',
                borderRadius: '10px',
                backgroundColor: '#FFFF',
              }}
            >
              <img
                src={img}
                alt="user_img"
                style={{ width: '200px', heigth: '250px' }}
              />
              <p>
                Name: <strong>{login}</strong>
              </p>
              <a href={github} target="_blank">
                {' '}
                GitHub Profile
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;
