import React,{ useState } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formdata, setFormdata] = useState({
    username: '',

  })
  console.log(formdata);

  const handlechange = (event) => {
    setFormdata(
      {
        ...formdata,
        [event.target.id]: event.target.value
      }
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/auth/signup',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formdata),
    }
    );
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handlechange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handlechange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handlechange}
        />

        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
        Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
