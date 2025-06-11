
import './App.css';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';
import { About } from './About';
import { Contact } from './Contact';
import { Link, Route, Routes } from 'react-router';
// import { Link } from 'react-router-dom';
import { Home } from './Home';
// import 'style.css';
// import { Mainarea } from './mainarea';


function App() {
  return (
    <div>
      <h1>JAMSHEDPUR</h1>
      <p>Jamshedpur is the Steel City of Jharkhand</p>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {/* <Header></Header> */}
      {/* <Footer></Footer> */}
      
      
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>      
      </Routes>
    </div>
  );
}

export default App;
