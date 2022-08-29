// import { useState } from "react";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'



export const Extraction = ({ data }) => {





    return (
        <div className='mt-8'>

            <div>
                <h1 className='text-white font-bold text-3xl'>Extractions</h1>
            </div>





            <div className="mt-7 mb-10 py-2 px-4 bg-white rounded-lg">

                <Tippy content='Copy to clipboard'>
                    <button onClick={() => { navigator.clipboard.writeText(data) }} type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                        <span className="sr-only">Copy</span>
                    </button>
                </Tippy>

                {/* <button onClick={resetExtractions} type="button" className="p-2 text-red-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <span className="sr-only">Reset</span>
                </button> */}

                <textarea id="editor" readOnly="true" rows="8" className="block px-0 w-full text-sm text-gray-800 bg-white border-none focus:ring-0 outline-none" placeholder="Extracted values are copied here..." required=""
                    value={data}></textarea>





            </div>


        </div>
    )
}