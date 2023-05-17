import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const SignUp = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const {user, signUp } = UserAuth()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await signUp(email, password)
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }


  return (
    <>
      <div className='w-full h-screen'>
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/208b1c11-e8cd-4f70-8ef5-f595d8f6ce34/PH-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='w-full flex flex-col py-16'>
                  <input 
                  className='p-3 my-2 bg-gray-500 rounded' 
                  type='email' 
                  placeholder='Email' 
                  autoComplete='email'/>

                  <input 
                  className='p-3 my-2 bg-gray-500 rounded' 
                  type='password' 
                  placeholder='Password' 
                  autoComplete='current-password'/>

                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                    Sign Up
                  </button>
                  <div className='flex justify-between items-center text-sm text-gray-400'>
                    <p><input className='mr-2' type='checkbox'/>Remember me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-500'>Already subscribed to Netflix?</span>{' '} 
                  <Link to='/signin' >
                    Sign In
                  </Link>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp