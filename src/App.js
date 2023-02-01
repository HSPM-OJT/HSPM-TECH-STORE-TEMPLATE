import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import AddProductForm from './component/product/AddProductForm';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';



function App() {

  return (
    <Layout>

      <Routes>
       <Route path='/' element={<CategoryList />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/addnewProduct' element={<AddProductForm/>}></Route>
       <Route path='productlist' element={<div className='row'><ProductList /></div>}></Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;