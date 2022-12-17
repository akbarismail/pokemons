import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://kobarsept.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });

      const data = await res.json();
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/');
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className='flex justify-center items-center'
      style={{
        height: '100vh',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Username:
          </label>
          <input
            type='text'
            placeholder='Username'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password:
          </label>
          <input
            type='password'
            placeholder='Type your password'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className='flex items-center justify-center'>
          <input
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          />
        </div>
      </form>
    </section>
  );
}
