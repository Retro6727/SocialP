import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <form className='max-w-2xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Login</h1>
            <p className='text-left mb-4'>Welcome back! Please login to your account.</p>
            <div className='relative'>
              <input type="text" id="login-username" className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Username" />
              <label htmlFor="login-username" className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Username</label>
            </div>
            <div className='relative'>
              <input type="email" id="login-email" className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Email" />
              <label htmlFor="login-email" className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Email</label>
            </div>
            <div className='relative'>
              <input type="tel" id="login-phone" className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Phone number (optional)" />
              <label htmlFor="login-phone" className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Phone Number (optional)</label>
            </div>
            <div className='relative'>
              <input type="password" id="login-password" className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Password" />
              <label htmlFor="login-password" className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Password</label>
            </div>
            <Link to="/forgot-password" className='text-blue-500 mb-2'>Forgot Password?</Link>
            <div className='flex justify-between items-center mb-2'> 
                <label className='flex items-center'>
                    <input type="checkbox" className='accent-blue-500 mr-2' />
                    Remember Me
                </label>
                <Link to="/registration" className='text-blue-500'>Create an Account</Link>
            </div>
            <button type="submit" className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 w-full mt-2 rounded-lg shadow transition'>Login</button>
        </form>
    </div>
  )
}

export default Login