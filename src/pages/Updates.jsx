import React from 'react'

const Updates = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Updates</h1>
        <p className='text-left mb-4'>Stay informed with the latest updates and announcements from TwixTalks.</p>
        <div className='max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold mb-4'>Latest Updates</h2>
            <ul className='list-disc pl-5'>
                <li className='mb-2'>Update 1: New features added to TwixTalks.</li>
                <li className='mb-2'>Update 2: Performance improvements and bug fixes.</li>
                <li className='mb-2'>Update 3: Enhanced user interface for better experience.</li>
            </ul>
        </div>
    </div>
  )
}

export default Updates