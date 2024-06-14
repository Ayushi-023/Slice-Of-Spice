import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Viewcart from './Pages/Viewcart'
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/menu' element={<Menu/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/viewcart' element={<Viewcart/>} />
          {/* <Route exact path='/login' element={<Login/>} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
