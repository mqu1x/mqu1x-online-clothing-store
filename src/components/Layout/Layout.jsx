import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout({ children }) {
	const context = useContext(myContext)
	const { mode } = context
	return (
		<div>
			<Navbar />
			<div
				className='content'
				style={{
					backgroundColor: mode === 'dark' ? 'black' : '',
					color: mode === 'dark' ? 'white' : '',
					borderColor: '#d60f9a',
				}}
			>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout
