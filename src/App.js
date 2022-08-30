import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>

      <BrowserRouter>

        <Navbar />
        <Homepage />
        <Footer />
        
      </BrowserRouter>

    </>
  );
}

export default App;
