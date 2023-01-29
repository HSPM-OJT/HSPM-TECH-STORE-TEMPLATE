import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import AddOrderForm from './component/order/AddOrderForm'
import Order from './component/order/Order';
import OrderList from './component/order/OrderList';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';

function App() {

  return (
    <Layout>

      <Routes>
        <Route path='/'>

         <Route path='/' index element={<CategoryList />}></Route>
         
          <Route path='user'>
            <Route path='login' element={<Login />}></Route>
          </Route>
        
          <Route path='product'>
            <Route path='list' element={<ProductList />}></Route>
          </Route>
          
          <Route path='order'>
            <Route path='r' element={<Order />}></Route>
            <Route path='create' element={<AddOrderForm />}></Route>
            <Route path='all' element={<OrderList />}></Route>
          </Route>

        </Route>
      </Routes>

      <Scroll />
    </Layout>
    
  );
}
export default App;