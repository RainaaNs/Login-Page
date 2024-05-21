import React from 'react'
import man from '../assets/man.jpg'


function Login () {
  return (
    <div className='grid grid-cols-1 sm:grid cols-2 h-screen w-full'>

     <div className='flex flex-col justify-center mt-6'>

            <form className='max-w-[250px] w-full mx-auto'>
              <p className='font-bold text-xl text-center py-4'>Welcome</p>

              <div>
                    <img className='object-cover rounded-full aspect-square w-[70px] h-[70px] mx-auto my-[16px]' src={man} alt='/'/>
              </div> 

              <div className='flex flex-col pt-[40px] pb-[9px]'>
              <input type="text" className='placeholder-gray-400 text-[14px]' placeholder=' Username'/>
              </div>
              <div className='border-b border-gray-400 '></div>

              <div className='flex flex-col pt-[25px] pb-[9px]'>
              <input type="password" className='placeholder-gray-400 text-[14px]' placeholder=' Password'/>
              </div>
              <div className='border-b border-gray-400  '></div>

              <button className='w-full border bg-lime-600 my-9 py-2 text-white font-bold text-[14px] shadow-lg rounded-full'>LOGIN</button>

              <div >
              <ul className='flex flex-col space-y-[4px] mt-[55px] text-[13px]'>
                <li className='text-gray-400 list-disc'>Forgot <span className='text-lime-600'>Username/Password?</span></li>
                <li className='text-gray-400 list-disc'>Don't have an account? <span className='text-lime-600'>Sign up</span></li>
              </ul>
              </div>
              
            </form>
     </div>
    
    </div>  
  )
}

export default Login