import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const SignIn = () => {
  const [formdata, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handlechange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.id]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (!data.success) {
        dispatch(signInFailure(data.message));
        toast.error(data.message);
        return;
      }
      
      dispatch(signInSuccess(data));
      toast.success("Login success");
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handlechange}
        />
        <input
          type='password'
          placeholder='Password'
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
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {/* {error && <p className='text-red-600'>{error}</p>} */}
    </div>
  )
}

export default SignIn;
