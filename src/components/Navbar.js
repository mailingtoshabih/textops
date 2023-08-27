import { Link } from "react-router-dom"



export const Navbar = () => {
  return (
    <div className="">



      <nav className="bg-gray-900 p-2">
        
        <div className="container flex flex-wrap justify-between items-center mx-auto">


          <div className="w-full text-white font-bold text-3xl">
            <Link to="/">
              Scraply
            </Link>
          </div>




        </div>
      </nav>




    </div>
  )
}