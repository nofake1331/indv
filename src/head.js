 
import React, { Component } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Definition from './pages/definition';
import Parameters from './pages/parameters';
import Chose from './pages/chose';
import Ghost from './pages/ghost';
class Head extends Component
 {
 
  render (){
    return(
      <>
      <header class="p-3 text-bg-dark">
    <div class="  container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center  justify-content-lg-start">
      <b>Довідник шорткості поверхень: </b>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 right">
          <li><Link to="/" class="nav-link px-2 text-white">Визначення</Link> </li>
          <li><Link to="/parameters" class="nav-link px-2 text-white">Параметри </Link></li>
          <li><Link to="/chose" class="nav-link px-2 text-white">Як обирати параметри</Link></li>
          <li><Link to="/ghost" class="nav-link px-2 text-white">Гост(ISO)</Link></li>
        </ul>
      </div>
    </div>

  </header>
    <Routes>
    <Route path="/" element={<Definition/> }></Route>
    <Route path="/parameters" element={<Parameters/> }></Route>
    <Route path="/chose" element={<Chose/> }></Route>
    <Route path="/ghost" element={<Ghost/> }></Route>
    </Routes>
</>
   )

 }
}

export default Head;
