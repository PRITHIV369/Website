import React from 'react'
import profilepic from '../assets/img/profilepic.jpg'
const Profile = () => {
  return (
    <>
    <div className='w-[100%] h-[90vh] bg-slate-950 flex justify-center items-center'>
        <div className='w-[55%] h-[60%] bg-slate-950 flex'>
                <div className='w-[100%] h-[100%] flex flex-col justify-center px-5 text-justify'>
                  <span>
            <b className='text-[200%] text-yellow-400'>Hello, </b>
            <b className='text-[200%] text-white'>I'm Prithivraj,</b>
                  </span>
            <b className='text-[200%] te xt-purple-600'>Full-stack developer</b>
            <b className='text-white'>I'm very creative and innovative full-stack developer. I'm very dedicated and always movtivated. I like to expriment new things.</b>
                </div>    
                <div className='flex justify-center items-center w-full'>
                  <img src={profilepic} alt='profilepic' className="rounded-full h-40 w-40" />
                </div>
        </div>
    </div>
    </>
  )
}
export default Profile