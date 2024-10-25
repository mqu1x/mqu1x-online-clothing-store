import React from 'react'
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MyState from './context/data/myState'
import Dashboard from './pages/admin/dashboard/Dashboard'
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import Allproducts from './pages/allproducts/Allproducts'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import NoPage from './pages/nopage/NoPage'
import Order from './pages/order/Order'
import Privacypolicy from './pages/privacypolicy/Privacypolicy'
import ProductInfo from './pages/productInfo/ProductInfo'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'

function App() {
	return (
		<MyState>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/allproducts' element={<Allproducts />} />
					<Route
						path='/order'
						element={
							<ProtectedRoute>
								<Order />
							</ProtectedRoute>
						}
					/>
					<Route path='/cart' element={<Cart />} />
					<Route
						path='/dashboard'
						element={
							<ProtectedRouteForAdmin>
								<Dashboard />
							</ProtectedRouteForAdmin>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/productinfo/:id' element={<ProductInfo />} />
					<Route
						path='/addproduct'
						element={
							<ProtectedRouteForAdmin>
								<AddProduct />
							</ProtectedRouteForAdmin>
						}
					/>
					<Route
						path='/updateproduct'
						element={
							<ProtectedRouteForAdmin>
								<UpdateProduct />
							</ProtectedRouteForAdmin>
						}
					/>
					<Route path='/privacypolicy' element={<Privacypolicy />} />
					<Route path='/*' element={<NoPage />} />
				</Routes>
				<ToastContainer />
			</Router>
		</MyState>
	)
}

export default App

// user

export const ProtectedRoute = ({ children }) => {
	const user = localStorage.getItem('user')
	if (user) {
		return children
	} else {
		return <Navigate to={'/login'} />
	}
}

// admin

const ProtectedRouteForAdmin = ({ children }) => {
	const admin = JSON.parse(localStorage.getItem('user'))

	if (admin.user.email === 'mich.krs.01@gmail.com') {
		return children
	} else {
		return <Navigate to={'/login'} />
	}
}
