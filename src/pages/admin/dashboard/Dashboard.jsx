import React, { useContext } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext'
import DashboardTab from './DashboardTab'

function Dashboard() {
	const sel = useSelector(state => state.cart)
	const context = useContext(myContext)
	const { mode } = context
	return (
		<Layout>
			<section className='text-gray-600 body-font mt-10 mb-10'>
				<div className='container px-5 mx-auto mb-10'>
					<div className='flex flex-wrap -m-4 text-center justify-center'>
						<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
							<div
								className=' border-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100     px-4 py-3 rounded-xl'
								style={{
									backgroundColor: mode === 'dark' ? 'black' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<div
									className=' w-12 h-12 mb-3 inline-block'
									viewBox='0 0 24 24'
									style={{ color: '#d60f9a' }}
								>
									<FaUserTie size={50} />
								</div>
								<h2
									className='title-font font-medium text-3xl text-black fonts1'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									{sel.length}
								</h2>
								<p
									className='  font-bold'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									Все товары
								</p>
							</div>
						</div>
						<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
							<div
								className=' border-2  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl'
								style={{
									backgroundColor: mode === 'dark' ? 'black' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<div
									className=' w-12 h-12 mb-3 inline-block'
									viewBox='0 0 24 24'
									style={{ color: '#d60f9a' }}
								>
									<FaUserTie size={50} />
								</div>
								<h2
									className='title-font font-medium text-3xl text-black fonts1'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									10
								</h2>
								<p
									className='  font-bold'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									Все заказы
								</p>
							</div>
						</div>
						<div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
							<div
								className=' border-2 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl'
								style={{
									backgroundColor: mode === 'dark' ? 'black' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<div
									className=' w-12 h-12 mb-3 inline-block'
									viewBox='0 0 24 24'
									style={{ color: '#d60f9a' }}
								>
									<FaUserTie size={50} />
								</div>
								<h2
									className='title-font font-medium text-3xl text-black fonts1'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									20
								</h2>
								<p
									className='font-bold'
									style={{
										color: mode === 'dark' ? 'white' : '',
									}}
								>
									Все пользователи
								</p>
							</div>
						</div>
					</div>
				</div>
				<DashboardTab />
			</section>
		</Layout>
	)
}

export default Dashboard
