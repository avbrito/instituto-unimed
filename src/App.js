import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component }  from 'react';
import  Home  from "../src/pages/home/home.jsx";
import Institucional from './pages/institucional/institucional.jsx';
import Blog from './pages/blog/blog.jsx';
import Formulario from './pages/formulario/formulario.jsx';



 
function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}> </Route>
        <Route path="/Institucional" element={<Institucional />}> </Route>
        <Route path="/Blog" element={<Blog />}> </Route> 
        <Route path="/Formulario" element={<Formulario />}></Route> 
      </Routes>
    </Router>
  );
}
 
export default App;