import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'





export const Footer = () => {
  return (
    <>

      <footer className="p-4 bg-gray-900 md:px-6 md:py-8">



        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="w-full text-white font-bold text-3xl">
            <Link to="/">
              Scraply
            </Link>
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <Link to="/">
              <li>
                <div className="m-4 md:mr-6 cursor-pointer">Home</div>
              </li>
            </Link>

            <Link to="/scrapper">
              <li>
                <div className="m-4 md:mr-6 cursor-pointer>">Scrapper</div>
              </li>
            </Link>


            <Tippy content='Shabih'>
              <li>
                <div className='cursor-pointer'
                >Creator</div>
              </li>
            </Tippy>


            <Tippy content='Click to copy my mail.'>
              <li>
                <div className="m-4 md:mr-6 cursor-pointer"
                  onClick={() => { navigator.clipboard.writeText('mailingtoshabih@gmail.com') }}
                >Contact</div>
              </li>
            </Tippy>

            <Tippy content='Visit'>
              <li>
                <div className='cursor-pointer'
                  onClick={() => { window.open("https://www.linkedin.com/in/mailingtoshabih") }}
                >Linkedin</div>
              </li>
            </Tippy>

          </ul>

        </div>



        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023 Scraply. All Rights Reserved.
        </span>

      </footer>

    </>
  )
}