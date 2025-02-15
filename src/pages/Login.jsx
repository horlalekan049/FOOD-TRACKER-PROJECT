import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import HouseImage from '../assets/icons/leaf-logo.png';
import FormInput from '../components/FormInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert('Please enter a valid email');
    }

    try {
      const response = await fetch('https://fresh-track-api.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('isAuthenticated', "true");

      navigate('/dashboard'); 
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='w-screen h-screen flex '>
      <div className='w-1/2 h-full bg-[url("https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] flex justify-center items-center bg-no-repeat bg-center bg-cover'>
        
      </div>

      <div className='w-1/2 h-full flex pl-20 items-center'>
      <div className='flex flex-col gap-3 rounded-md p-8 shadow-lg w-[300px]'>
        <img src={HouseImage} alt='leaf logo' className='block mx-auto w-7 h-6' />
        <p className=' text-lg text-center font-bold'>Login to FreshTrack</p>

        <label htmlFor='email'>Email</label>
        <FormInput
          id='email'
          type='email'
          value={email}
          autoComplete='username'
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <FormInput
          id='password'
          type='password'
          value={password}
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className='h-8 w-full text-white text-sm bg-green-500 rounded-md'>
          Login
        </button>






        <p className='text-gray-500 text-sm mx-auto'>
          Don't have an account?&nbsp;
          <Link to='/register' className='text-green-400'>
            Sign up
          </Link>
        </p>
      </div></div>
    </div>
  );
};

export default Login;
