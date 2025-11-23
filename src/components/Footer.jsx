import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center p-4 mt-8 bg-gray-800 text-white">
                <p>&copy; {new Date().getFullYear()} TwixTalks     - All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer