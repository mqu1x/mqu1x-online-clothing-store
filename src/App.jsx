import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProducts from './pages/admin/pages/UpdateProducts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Store from './context/data/Store';

const App = () => {
    return (
        <Store>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/product/:id' element={<ProductInfo />} />
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/updateproduct' element={<UpdateProducts />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </Store>
    );
};

export default App;

export const ProtectedRoutes = ({ children }) => {
    //?
    if (localStorage.getItem('user')) {
        return children;
    } else {
        return <Navigate to='/login' />;
    }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('user'));
    console.log(admin);
    if (admin.user.email === 'mich.krs.01@gmail.com') {
        return children;
    } else {
        return <Navigate to='/login' />;
    }
};