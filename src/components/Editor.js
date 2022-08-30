import { Extraction } from "./Extraction"
import { useState } from 'react'
import { Link } from "react-router-dom"

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

import getUrls from 'get-urls';





export const Editor = () => {


    const [text, setText] = useState("");
    const [extract, setExtract] = useState("");



    const handleChange = (event) => {
        setText(event.target.value);
    }






    // --------------------methods------------------------------------------



    const toUpperCaseClick = () => {

        const newText = text.toUpperCase();
        setText(newText);
    }


    const toLowerCaseClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }


    const removeExtraSpaces = () => {

        let newText = text;
        newText = newText.replace(/\s{2,}/g, ' ').trim();
        setText(newText);
    }


    const removeAllSpaces = () => {

        let newText = text;
        newText = newText.replace(/ /g, '');
        setText(newText);
    }


    const capitalizeEachWord = () => {


        let newText = text.toLowerCase().split(" ");

        for (let i = 0; i < newText.length; i++) {

            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
        }

        newText = newText.join(" ");

        setText(newText);
    }


    const removeAllSymbols = () => {

        let newText = text;
        newText = newText.replace(/[^\w\s]/g, '')
        setText(newText);
    }


    const removeAllNumbers = () => {

        let newText = text;
        newText = newText.replace(/[0-9]/g, '');
        setText(newText);
    }



    const extractNumbers = () => {

        let newText = text;
        let hasNumber = /\d/;

        if (hasNumber.test(newText)) {

            let regex = /[+-]?\d+(\.\d+)?/g;

            let floats = newText.match(regex).map((v) => {
                return parseFloat(v);
            });

            setExtract(floats.join("\n"));
        }

    }




    const extractEmails = () => {

        let newText = text;

        if (newText.includes("@")) {

            newText = newText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

            setExtract(newText.join('\n'));
        }

    }


    const lineByLine = () => {

        let newText = text;

        newText = newText.replace(/\s{2,}/g, ' ').trim();

        if (newText) {

            let lines = newText.split(".");
            let finalText = "";

            for (let line of lines) {

                if (line.charAt(0) === " ") line = line.replace(" ", "");
                finalText += line + "\n";
            }

            setText(finalText);
        }
    }



    const wordLineByLine = () => {

        let newText = text;

        newText = newText.replace(/\s{2,}/g, ' ').trim();

        if (newText) {

            let lines = newText.split(" ");
            let finalText = "";

            for (let line of lines) {

                if (line.charAt(0) === " ") line = line.replace(" ", "");
                finalText += line + "\n";
            }

            setText(finalText);
        }
    }


    const resetTextarea = () => {
        setText("");
    }


    const extractUrl = () => {
        let urls = getUrls(text)
        let tempstr = ""
        for (const url of urls) {
            tempstr = tempstr + "\n" + url;
        }
        setExtract(tempstr);
    }


    const removeUrl = () => {
        let temp = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        setText(temp);
    }

    const removeBlankLines = () => {
        let temp = text;
        temp = temp.replace(/(^[ \t]*\n)/gm, "");
        setText(temp);
    }



    // const countWords = () => {
    //     let temp = text.split(' ');
    //     return temp.length;
    // }



    // --------------------methods------------------------------------------













    return (
        <div>




            <form>
                <div className="mb-4 w-full bg-gray-100 rounded-xl ">
                    <div className="flex justify-between items-center py-2 px-3 border-b">

                        <div className="flex flex-wrap items-center divide-gray-400 sm:divide-x">

                            <div className="flex items-center space-x-1 sm:pr-4 p-1">

                                <Tippy content='Uppercase'>
                                    <button onClick={toUpperCaseClick} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
                                        <span className="sr-only">Uppercase</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Lowercase'>
                                    <button onClick={toLowerCaseClick} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" /></svg>
                                        <span className="sr-only">Lowercase</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Capitalize'>
                                    <button onClick={capitalizeEachWord} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                        <span className="sr-only">Capitalize</span>
                                    </button>
                                </Tippy>


                                <Tippy content='Remove Extra Spaces'>
                                    <button onClick={removeExtraSpaces} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                        <span className="sr-only">Remove Extra Spaces</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Remove all spaces'>
                                    <button onClick={removeAllSpaces} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" /></svg>
                                        <span className="sr-only">Remove all spaces</span>
                                    </button>
                                </Tippy>


                                <Tippy content='Remove all symbols'>
                                    <button onClick={removeAllSymbols} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                                        <span className="sr-only">Remove all symbols</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Remove all numbers'>
                                    <button onClick={removeAllNumbers} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="sr-only">Remove all numbers</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Remove URLs'>
                                    <button onClick={removeUrl} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
                                        <span className="sr-only">Remove URLs</span>
                                    </button>
                                </Tippy>



                            </div>


                            <div className="flex flex-wrap items-center space-x-1 sm:pl-4">

                                <Tippy content='Extract All Numbers'>
                                    <button onClick={extractNumbers} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" /></svg>
                                        <span className="sr-only">Extract All Numbers</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Extract Emails'>
                                    <button onClick={extractEmails} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                                        <span className="sr-only">Extract Emails</span>
                                    </button>
                                </Tippy>


                                <Tippy content='Extract URLs'>
                                    <button onClick={extractUrl} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                        <span className="sr-only">Extract URLs</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Remove Blank Lines'>
                                    <button onClick={removeBlankLines} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </button>
                                </Tippy>

                                <Tippy content='Print sentences line by line'>
                                    <button onClick={lineByLine} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                        <span className="sr-only">Print sentences line by line</span>
                                    </button>
                                </Tippy>

                                <Tippy content='Print words line by line'>
                                    <button onClick={wordLineByLine} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        <span className="sr-only">Print words line by line</span>
                                    </button>
                                </Tippy>


                                <Tippy content='Copy'>
                                    <button onClick={() => { navigator.clipboard.writeText(text) }} type="button" className="p-2 text-green-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                        <span className="sr-only">Copy</span>
                                    </button>
                                </Tippy>


                                <Tippy content='Reset'>
                                    <button onClick={resetTextarea} type="button" className="p-2 text-red-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        <span className="sr-only">Reset</span>
                                    </button>
                                </Tippy>


                                {/* <button onClick={() => { }} type="button" className="p-2 text-blue-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="sr-only">Buttons Info</span>
                                </button> */}


                            </div>
                        </div>

                        <Tippy content='Text Scrapper'>
                            <Link to="/scrapper">
                                <button type="button" className="flex flex-row p-2 text-white bg-indigo-600 rounded cursor-pointer sm:ml-auto hover:text-indigo-600 outline:indigo hover:bg-white border-xl"
                                    onClick={() => { }}>
                                    <span className="font-semibold">Scrapper </span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </button>
                            </Link>
                        </Tippy>



                    </div>


                    <div className="py-2 px-4 bg-white rounded-b-lg">
                        <textarea id="editor" rows="18" className="focus:ring-0 block px-0 w-full text-sm text-gray-800 bg-white border-0 outline-none" placeholder="Write an article..." required=""
                            onChange={handleChange}
                            value={text}></textarea>
                    </div>
                </div>


                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                    Approx. Reading Time : {Math.round((text.length) * 0.10)} sec
                </span>

                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                    {text.length} Characters
                </span>

            </form>


            <Extraction data={extract} />



        </div>
    )
}