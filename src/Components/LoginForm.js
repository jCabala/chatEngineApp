import axios from 'axios';
import { useState } from 'react';
import configData from '../config.json';

//@TODO log out, handle logging in differently

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const authObject = {
      ProjectId: configData.CHAT_ENGINE_ID,
      'User-Name': username,
      'User-Secret': password,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });
      localStorage.setItem('ChatAppUsername', username);
      localStorage.setItem('ChatAppPassword', password);

      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat App</h1>

        <form onSubmit={handleSubmit}>
          <input
            className='input'
            placeholder='username...'
            required
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            className='input'
            placeholder='username...'
            required
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
