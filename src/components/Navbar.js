import { Link } from "react-router-dom"



export const Navbar = () => {
  return (
    <div>



      <nav className="bg-orange-500 p-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">


          <Link to="/">
            <div className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8 sm:h-8" alt="Scraply" />
              <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Scraply</span>
            </div>
          </Link>




        </div>
      </nav>




    </div>
  )
}