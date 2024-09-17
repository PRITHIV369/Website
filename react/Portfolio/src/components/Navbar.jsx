import React from 'react'
const Navbar = () => {
  return (
    <div className='w-[100%] h-[4rem] bg-black text-white flex flex-row items-center justify-between fixed'>
        <div className="text-white font-bold px-3 text-2xl">
            PORTFOLIO 
        </div>
        <ul className='flex flex-row px-5 gap-2'>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>profile</li>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>projects</li>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>contact</li>
        </ul>
    </div>
  )
}
export default Navbar