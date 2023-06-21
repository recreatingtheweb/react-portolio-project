import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function Home() {
    return (
      <div>
        <Header />
        <Services />
        <Works />
      </div>
    );
  }
  
  export default Home;