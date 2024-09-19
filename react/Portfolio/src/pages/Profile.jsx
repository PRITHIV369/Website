import React from 'react'
import profilepic from '../assets/img/profilepic.jpg'
const Profile = () => {
  return (
    <>
    <div className='w-[100%] h-[90vh] bg-slate-100 flex justify-center items-center'>
        <div className='w-[60%] h-[60%] bg-white flex flex-row'>
                <div className='w-[100%] h-[100%] flex flex-col justify-center px-5 text-justify'>
            <b className='text-[200%] text-yellow-400'>Hi,</b>
            <b className='text-[200%] '>I'm Prithivraj,</b>
            <b className='text-[200%] text-purple-600'>Full-stack developer</b>
            <b>I'm very creative and innovative full-stack developer. I'm very dedicated and always movtivated. I like to expriment new things.</b>
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