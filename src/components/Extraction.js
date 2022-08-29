// import { useState } from "react";
import Tippy from '@tippy.js/react'
import { useEffect, useState } from 'react'
import 'tippy.js/dist/tippy.css'



export const Extraction = ({ data }) => {


    const [extract, setExtract] = useState("");
    const [diary, setDiary] = useState("");

    useEffect(() => {
        setExtract(data)
    }, [data])









    const handleDiary = (e) => {
        setDiary(e.target.value);
    }





// ---------------------methods-------------------------------


    const reset = () => {
        setExtract("");
    }

// ---------------------methods-------------------------------







    return (

        <div className='flex flex-row w-full'>


            <div className='mt-8 w-2/5 p-2'>

                <div>
                    <h1 className='text-white font-bold text-3xl'>Extractions</h1>
                </div>

                <div className="mt-7 mb-10 py-2 px-4 bg-white rounded-lg">

                    <Tippy content='Reset'>
                        <button onClick={ () => setExtract("") } type="button" className="p-2 text-red-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            <span className="sr-only">Reset</span>
                        </button>
                    </Tippy>


                    <Tippy content='Copy to clipboard'>
                        <button onClick={() => { navigator.clipboard.writeText(data) }} type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            <span className="sr-only">Copy</span>
                        </button>
                    </Tippy>

                    <textarea id="editor" readOnly={true} rows="10" className="block px-0 w-full text-sm text-gray-800 bg-white border-none focus:ring-0 outline-none" placeholder="Extracted values are copied here..." required=""
                        value={extract}></textarea>

                </div>


            </div>




{/* -----------------------------diary----------------------------------------------------------- */}







            <div className='mt-8 w-3/5 p-2'>


                <div>
                    <h1 className='text-white font-bold text-3xl'>Diary</h1>
                </div>



                <div className="mt-7 mb-10 py-2 px-4 bg-white rounded-lg">

                    <Tippy content='Reset'>
                        <button onClick={ () => setDiary("")} type="button" className="p-2 text-red-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            <span className="sr-only">Reset</span>
                        </button>
                    </Tippy>


                    <Tippy content='Copy to clipboard'>
                        <button onClick={() => { navigator.clipboard.writeText(diary) }} type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            <span className="sr-only">Copy</span>
                        </button>
                    </Tippy>



                    <textarea id="editor" rows="10" className="block px-0 w-full text-sm text-gray-800 bg-white border-none focus:ring-0 outline-none" placeholder="Copy your final results here..." required=""
                        onChange={handleDiary}
                        value={diary}></textarea>



                </div>

            </div>


        </div>
    )
}