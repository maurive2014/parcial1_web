import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<Home />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
