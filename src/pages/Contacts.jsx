import React from 'react'

const Contacts = () => {
  return (
    <div className='container mx-auto p-4 max-w-3xl'>
        <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Contact Us</h1>
        <p className='text-left mb-4'>We would love to hear from you! Please reach out with any questions or feedback.</p>
        <form>
          <div>
            <label className='block mb-2 font-semibold' htmlFor="name">Name:</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' type="text" id="name" name="name" required />
            <label className='block mb-2 font-semibold' htmlFor="email">Email:</label>
            <input className='w-full p-2 border border-gray-300 rounded mb-4' type="email" id="email" name="email" required />
            <label className='block mb-2 font-semibold' htmlFor="message">Message:</label>
            <textarea className='w-full p-2 border border-gray-300 rounded mb-4' id="message" name="message" rows="4" required></textarea>
            <button className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 rounded-lg shadow transition' type="submit">Send Message</button>

          </div>
        </form>
    </div>
  )
}

export default Contacts