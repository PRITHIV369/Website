import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  const appname="WELCOME"
  return (
    <>
    <div className="w-full">
      <Navbar appname={appname} />
    </div>
    <div className="h-screen w-screen flex justify-center bg-slate-900 items-center">
      <div className="h-[60%] w-[30%] flex justify-center items-center bg-slate-200 rounded-md shadow-4xl">
      <form className="h-[90%] w-[80%] flex flex-col justify-center items-center gap-3">
        <b>LOGIN</b>
        <input type="text" placeholder="name" className="p-3 w-full bg-slate-300 outline-none focus:border-b-2 focus:border-gray-800" />
        <input type="email" placeholder="email" className="p-3 w-full  bg-slate-300 outline-none focus:border-b-2 focus:border-gray-800" />
        <input type="password" placeholder="password" className="p-3 w-full  bg-slate-300 outline-none focus:border-b-2 focus:border-gray-800" />
        <button type="submit" className="w-full bg-gradient-to-r from-slate-900 to-purple-600 hover:bg-slate-600 text-slate-200 h-[15%] rounded-md font-bold">SUBMIT</button>
        <a href='' className=''><small>Forget Password?</small></a>
      </form>
      </div>
    </div>
    </>
  )
}
export default App
