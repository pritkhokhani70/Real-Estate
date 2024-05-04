import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'

const SignIn = () => {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setLoading(true)
    try {

      const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formdata),
      }
      );
      const data = await res.json();
      // console.log(data,"data");
      if (data.success === false) {
        toast.error(data.message);
        setLoading(false);
        return;
      }
      else{
        toast.success("login successfully");
      }
      setLoading(false);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
