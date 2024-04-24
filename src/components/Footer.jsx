import React from 'react'
import footimg from '../assets/img/footer.png'
const Footer = () => {
  return (
    <div className='fixed bottom-0 h-8 w-screen bg-[#FF6720] flex items-center justify-center'>
        <img src={footimg} alt="footer" className='absolute h-10 w-20 right-0 bottom-7'/>
        <p className='font-mono'>© athang training ins private limited.</p>

      
    </div>
  )
}

export default Footer