import { Editor } from "./Editor"
import { Scrapper } from "./Scrapper"
import { Routes, Route } from 'react-router-dom';


export const Homepage = () => {
    return (




        <div className="p-2 bg-orange-400">



            {/* <Editor /> */}

            <Routes>

                <Route path="/" exact element={<Editor />} />
                <Route path="/scrapper" exact element={<Scrapper />} />

            </Routes>



        </div>
    )
}