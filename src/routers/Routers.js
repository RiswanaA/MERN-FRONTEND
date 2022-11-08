
import React from 'react';
import {Routes, Route, Navigate} from  'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import BookCars from '../pages/BookCars';
import Owner from '../pages/Owner';
import CustomerPage from '../pages/CustomerPage';
//import  store  from 'redux'; 
//'./redux/store';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Cars from '../pages/Cars';

const Routers = () => {
    return(
            <Provider store={store}>
            <Routes>
            <Route path="/" element = {<Navigate to = "/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/bookcars" element={<BookCars />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/customer" element={<CustomerPage />} /> 
            
            <Route path="/carsdisplay" element={<Cars />} />
            
            </Routes>
            
    

</Provider>
    
    );
}
export default Routers;