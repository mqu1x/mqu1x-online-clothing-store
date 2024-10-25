import { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
	const context = useContext(myContext)
	const { mode } = context
	return (
		<div>
			<section>
				<div className=' container mx-auto px-5 md:py-5'>
					<div className='flex flex-wrap -m-4 text-center'>
						<div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
							<div
								className='border-2  border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg'
								style={{
									backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<svg
									className='text-pink-600 w-12 h-12 mb-3 inline-block'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>

								<h2
									className='title-font font-medium text-lg text-gray-900'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									Откройте для себя последние модные тренды!
								</h2>
								<p className='leading-relaxed'>
									Наш интернет-магазин предлагает широкий ассортимент одежды для
									мужчин и женщин. Будьте всегда в тренде с нашими новинками и
									коллекциями от лучших дизайнеров.
								</p>
							</div>
						</div>
						<div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
							<div
								className='border-2  border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg'
								style={{
									backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<svg
									className='text-pink-600 w-12 h-12 mb-3 inline-block'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>

								<h2
									className='title-font font-medium text-lg text-gray-900'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									Качество, которому можно доверять!
								</h2>
								<p className='leading-relaxed'>
									Вся наша продукция изготовлена из высококачественных
									материалов. Мы тщательно отбираем ткани и следим за каждой
									деталью, чтобы обеспечить вам максимальный комфорт и стиль.
								</p>
							</div>
						</div>

						<div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
							<div
								className='border-2  border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg'
								style={{
									backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
									color: mode === 'dark' ? 'white' : '',
								}}
							>
								<svg
									className='text-pink-600 w-12 h-12 mb-3 inline-block'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>

								<h2
									className='title-font font-medium text-lg text-gray-900'
									style={{ color: mode === 'dark' ? 'white' : '' }}
								>
									Удобный и быстрый шопинг!
								</h2>
								<p className='leading-relaxed'>
									Наш интернет-магазин предлагает удобный интерфейс и быструю
									доставку. Найдите свою идеальную одежду в несколько кликов и
									наслаждайтесь покупками без лишних хлопот.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Track
