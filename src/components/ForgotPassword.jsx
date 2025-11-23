import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
        <form className='max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Forgot Password</h1>
            <p className='text-left mb-4'>Enter your email address to reset your password.</p>
            <div className='relative'>
              <input type="email" id='email' name='email' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Email" required />
              <label htmlFor='email' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Email</label>
            </div>
            <button type="submit" className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 w-full mt-2 rounded-lg shadow transition'>Reset Password</button>
            <p className='text-center text-sm mt-4'>Remembered your password? <a href="/login" className='text-blue-500'>Login here</a></p>
        <p className='text-center text-sm'>If you need further assistance, please <a href="/support" className='text-blue-500'>contact support</a>.</p>
        </form>
    </div>
  )
}

export default ForgotPassword