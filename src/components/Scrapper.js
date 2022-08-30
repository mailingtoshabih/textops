import Tippy from '@tippy.js/react'
import { useState, useEffect } from 'react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'




export const Scrapper = () => {



    const [data, setData] = useState("");
    const [arr, setArr] = useState([]);

    const [index, setIndex] = useState([]);
    const [count, setCount] = useState(0);

    const [extracts, setExtracts] = useState("");






    const handleChange = (e) => {
        setData(e.target.value);
    }




    const removeBlankLinesData = () => {
        let temp = data;
        temp = temp.replace(/(^[ \t]*\n)/gm, "");
        setData(temp);
    }

    const removeBlankLinesExtracts = () => {
        let temp = extracts;
        temp = temp.replace(/(^[ \t]*\n)/gm, "");
        setExtracts(temp);
    }

    useEffect(() => {
        setData(data);

        let temp = data;
        temp = temp.split("\n");
        setArr(temp);

    }, [data]);


    useEffect(() => {
        removeBlankLinesExtracts();
    });
    // , [extracts]



    const nextLine = () => {

        let sentence = arr;
        sentence = sentence[count].split(" ");
        setIndex(sentence);

        let counter = count;
        counter += 1;
        setCount(counter);

        // To add \n at end of line in extracts column
        if (extracts !== "") {
            setExtracts(extracts + "\n");
        }

    }



    const restartIndexing = () => {
        setCount(0);
        setIndex([""]);

        // let sentence = arr;
        // sentence = sentence[count].split(" ");
        // setIndex(sentence);
    }







    return (
        <>


            <div className='flex flex-row w-full'>


                <div className='h w-3/5 p-1 mr-1'>

                    <div>
                        <h1 className='text-white font-medium text-xl'>Data</h1>

                    </div>

                    <div className="mt-3 mb-10 py-1 px-4 bg-white rounded-lg">

                        <Tippy content='Reset'>
                            <button type="button" className="p-2 text-red-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={() => { setData("") }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </Tippy>

                        <Tippy content='Copy to clipboard'>
                            <button type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={() => { navigator.clipboard.writeText(data) }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            </button>
                        </Tippy>

                        <Tippy content='Remove Blank Lines'>
                            <button type="button" className="p-2 text-indigo-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={removeBlankLinesData}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </button>
                        </Tippy>

                        <textarea id="editor" rows="18" className="text-medium block px-0 w-full text-gray-800 bg-white border-none focus:ring-0 outline-none" placeholder="Paste the sentences line by line..." required=""
                            onChange={handleChange}
                            value={data}></textarea>

                    </div>


                </div>



                {/* -----------------------------playground----------------------------------------------------------- */}



                <div className='  w-1/4 p-1 m-1 '>

                    <h1 className='text-white font-medium text-xl'>Playground</h1>
                    <div className="h-5/6   mt-2 mb-10 py-1 px-4 bg-white rounded-lg">

                        <Tippy content='Restart Indexing'>
                            <button type="button" className="p-2 text-orange-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={restartIndexing}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </button>
                        </Tippy>


                        <Tippy content='Next Line'>
                            <button type="button" className="p-2 text-indigo-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={nextLine}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </Tippy>


                        <div className=" block px-0 w-full text-sm text-gray-800 bg-white border-none focus:ring-0 outline-none" >

                            <div class="overflow-auto h-96 mt-1">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
                                        <tr>
                                            <th scope="col" class="py-1 px-6">
                                                {count !== 0 ? `Line ${count}` : "Index Empty. Click the green arrow to start from Line 1."}
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            index?.map(
                                                (word) => (

                                                    <tr className="bg-white border-b hover:bg-gray-100 "
                                                        onClick={() => setExtracts(extracts + " " + word)}>
                                                        <th scope="row" class="py-1 px-3 text-sm text-gray-600  whitespace-nowrap">
                                                            {word}
                                                        </th>
                                                    </tr>

                                                ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* -----------------------------------------------------------------diary------------------------------------------ */}



                <div className=' w-2/5 p-1 ml-1'>
                    <h1 className='text-white font-medium text-xl'>Extracts</h1>
                    <div className="mt-3 mb-10 py-1 px-4 bg-white rounded-lg">

                        <Tippy content='Reset'>
                            <button type="button" className="p-2 text-red-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={() => { setExtracts("") }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </Tippy>

                        <Tippy content='Copy to clipboard'>
                            <button type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                                onClick={() => { navigator.clipboard.writeText(extracts) }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                            </button>
                        </Tippy>

                        <textarea id="editor" rows="18" className="text-medium text-gray-700 block px-0 w-full bg-white border-none focus:ring-0 outline-none" required=""
                            placeholder="This section automatically removes blank lines..."
                            onChange={(e) => setExtracts(e.target.value)}
                            value={extracts}></textarea>

                    </div>
                </div>


            </div>



        </>
    )
}

