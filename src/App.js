import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Home from "./Home";
import Portfolio from "./Portfolio";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>   
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
