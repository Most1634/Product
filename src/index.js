import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductList from './admin/products/ProductList';
import CreateProduct from './admin/products/CreateProduct';


function App(){
return  (
<BrowserRouter>  
  <Navbar/> 
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/admin/products' element={<ProductList/>}/>
    <Route path='/admin/products/create' element={<CreateProduct/>}/>
    <Route path='/*'  element={<NotFound/>}/>
  </Routes>

    <Footer/>
</BrowserRouter>)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

