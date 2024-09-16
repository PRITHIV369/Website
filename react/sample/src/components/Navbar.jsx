const Navbar = ({appname}) => {
  return (
    <div className="bg-purple-900 text-white font-extrabold flex justify-center items-center">
        {appname.map((data)=><span className="p-0.5">{data}</span>)}
    </div>
  )
}

export default Navbar