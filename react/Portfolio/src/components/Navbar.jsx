import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../pages/Profile'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import {User2} from 'lucide-react'
const Navbar = () => {
  return (
    <div className='w-[100%] h-[10vh] bg-black text-white flex flex-row items-center justify-between'>
        <div className="text-white font-bold px-3 text-2xl">
            PORTFOLIO 
        </div>
        <ul className='flex flex-row gap-2 justify-center items-center pr-5'>
        <Link to={"/"} element={<Profile/>}>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>profile</li>
        </Link>
        <Link to={"/projects"} element={<Projects/>}>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>projects</li>
        </Link>
        <Link to={"/contact"} element={<Contact/>}>
            <li className='p-3 hover:bg-slate-600 rounded-sm'>contact</li>
        </Link>
        <User2 className='h-8 w-8 text-white rounded-full border-2 border-white hover:bg-white  hover:border-gray-500 hover:text-gray-500'/>
        </ul>
    </div>
  )
}
export default Navbar