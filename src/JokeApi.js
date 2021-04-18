import axios from 'axios';
import React, { useState } from 'react';

function JokeApi() {
  const [users, setUsers] = useState('');

  const getUsers = () => {
    axios.get('http://localhost:8080/api/users').then((response) => {
      setUsers(response.data + ' ..');
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {users}
    </div>
  );
}

export default JokeApi;
