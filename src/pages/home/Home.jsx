import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../../components/filter/Filter'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'

function Home() {
	return (
		<Layout>
			{/* <HeroSection /> */}
			{/* слайдер */}
			<Filter />
			<ProductCard />
			<div className='flex justify-center -mt-10 mb-4'>
				<Link to={'/allproducts'}>
					<button className=' bg-gray-300 px-5 py-2 rounded-xl'>
						Больше
					</button>
				</Link>
			</div>
			<Track />
			<Testimonial />
		</Layout>
	)
}

export default Home
