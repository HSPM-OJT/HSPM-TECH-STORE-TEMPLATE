import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryList from './component/categories/CategoryList';
import Layout from './component/layout/Layout';
import AddOrderForm from './component/order/AddOrderForm'
import Order from './component/order/Order';
import OrderList from './component/order/OrderList';
import ProductList from './component/product/ProductList';
import Scroll from './component/scrolling/Scroll';
import Login from './component/users/Login';
import Register from './component/users/Register';
import Users from './component/users/Users';
import UserList from './component/users/UserList';
import UpdateUser from './component/users/UpdateUser';
import PrivateRoute from './component/auth/PrivateRoute'
import { getToken } from './component/auth/authSlice';
import AddProductForm from './component/product/AddProductForm';
import Profile from './component/users/Profile';

function App() {
  const token = useSelector(getToken)
  return (
    <Layout>

      <Routes>
       <Route path='/'>
       <Route path='/' index element={<CategoryList />}></Route>
       
          <Route path='user'>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='users' element={<UserList />}></Route>
            <Route path='list' element={<Users />}></Route>
            <Route path='edit/:userId' element={<UpdateUser />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>
       
          <Route path='order'>
            <Route path='r' element={<PrivateRoute token={token}><Order /></PrivateRoute>}></Route>
            <Route path='create' element={<PrivateRoute token={token}><AddOrderForm /></PrivateRoute>}></Route>
            <Route path='all' element={<PrivateRoute token={token}><OrderList /></PrivateRoute>}></Route>
          </Route>
       
          <Route path='product'>
            <Route path='addnewProduct' element={<PrivateRoute token={token}><AddProductForm/></PrivateRoute>}></Route>
            <Route path='productlist' element={<PrivateRoute token={token}><ProductList /></PrivateRoute>}></Route>
          </Route>
        
          
       
       </Route>

      </Routes>
      <Scroll />
    </Layout>
    
  );
}
export default App;