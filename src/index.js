import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nabbar from './hotel/Nabbar';
import About from './hotel/About';
import ContantUs from './hotel/ContantUs';
import Login from './hotel/Login';
import Product from './hotel/Product';
import Registration from './hotel/Registration';
import Home from './Home';
import Footer from './hotel/Footer';
// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Nabbar/>
   <Routes>
   <Route path='about' element={<About/>}/>
   <Route path='contantus' element={<ContantUs></ContantUs>}></Route>
   <Route path='' element={<Home/>}/>
   <Route path='home' element={<Home/>}/>
   <Route path='login' element={<Login></Login>}></Route>
   <Route path='product' element={<Product></Product>}></Route>
   <Route path='registration' element={<Registration></Registration>}></Route>
   </Routes>
   <Footer/>
   {/* <Carousel/> */}
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
