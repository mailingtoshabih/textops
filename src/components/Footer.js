import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'






export const Footer = () => {
  return (
    <>

      <footer className="p-4 bg-gray-800 md:px-6 md:py-8">



        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap ">Textool</span>
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <Tippy content='Shabih'>
              <li>
                <div
                  >Creator</div>
              </li>
            </Tippy>


            <Tippy content='Click to copy my mail.'>
              <li>
                <div className="m-4 md:mr-6 "
                  onClick={() => { navigator.clipboard.writeText('mailingtoshabih@gmail.com') }}
                >Contact</div>
              </li>
            </Tippy>

            <Tippy content='Visit'>
              <li>
                <div
                  onClick={() => { window.open("https://www.linkedin.com/in/mailingtoshabih") }}
                >Linkedin</div>
              </li>
            </Tippy>

          </ul>

        </div>



        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2022 Textool. All Rights Reserved.
        </span>
      </footer>

    </>
  )
}