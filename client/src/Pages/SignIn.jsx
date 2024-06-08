import React,{ useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import OAuth from '../Component/OAuth';

const SignUp = () => {
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(formdata);

  const handlechange = (event) => {
    setFormdata(
      {
        ...formdata,
        [event.target.id]: event.target.value
      })
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {

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
      // console.log(data,"data");
      if (data.success === false) {
        toast.error(data.message);
        setLoading(false);
        return;
      }
      else{
        toast.success(data);
      }
      setLoading(false);
      navigate('/sign-in');

    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
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
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
        {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/> 
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
