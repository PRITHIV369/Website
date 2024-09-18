import React from 'react'
import Navbar from '../components/Navbar'
const Profile = () => {
  return (
    <>
    <div className='w-[100%] h-[90vh] bg-slate-100 flex justify-center items-center'>
        <div className='w-[60%] h-[60%] bg-white'>
                <div className='w-[50%] h-[100%] flex flex-col justify-center px-5'>
            <b className='text-[200%] text-yellow-400'>Hi,</b>
            <b className='text-[200%] '>I'm Prithivraj,</b>
            <b className='text-[200%] text-purple-600'>Full-stack devloper</b>
            <b>I'm very creative and innovative full-stack developer.I'm very dedicated. I like to expriment new things.</b>
                </div>    
        </div>
    </div>
    </>
  )
}
export default Profile