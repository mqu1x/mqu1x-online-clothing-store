import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';

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
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </Store>
    );
};

export default App;
