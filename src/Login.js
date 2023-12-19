// Login.js
import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', loginData);
    setLoginData({
      username: '',
      password: '',
    });
  };

  return (
    <div class = "logform">
      
      <h1 class = "kotak">Вход</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя пользователя:
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
