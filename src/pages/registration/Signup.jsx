import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'
import myContext from '../../context/data/myContext'
import { auth, fireDB } from '../../fireabase/FirebaseConfig'

function Signup() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const context = useContext(myContext)
	const { loading, setLoading } = context

	const signup = async () => {
		setLoading(true)
		if (name === '' || email === '' || password === '') {
			return toast.error('Все поля обязательны к заполнению')
		}

		try {
			const users = await createUserWithEmailAndPassword(auth, email, password)

			// console.log(users)

			const user = {
				name: name,
				uid: users.user.uid,
				email: users.user.email,
				time: Timestamp.now(),
			}
			const userRef = collection(fireDB, 'users')
			await addDoc(userRef, user)
			toast.success('Регистрация успешна')
			setName('')
			setEmail('')
			setPassword('')
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	return (
		<div className=' flex justify-center items-center h-screen bg-black'>
			{loading && <Loader />}
			<div className=' px-10 py-10 rounded-xl bg-gray-800 '>
				<div className=''>
					<h1 className='text-center text-white text-xl mb-4 font-bold'>
						Регистрация
					</h1>
				</div>
				<div>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						name='name'
						className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
						placeholder='Имя'
					/>
				</div>

				<div>
					<input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						name='email'
						className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
						placeholder='email'
					/>
				</div>
				<div>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
						placeholder='Пароль'
					/>
				</div>
				<div className=' flex justify-center mb-3'>
					<button
						onClick={signup}
						className='  w-full text-white font-bold  px-2 py-2 rounded-lg'
						style={{ backgroundColor: '#d60f9a' }}
					>
						Регистрация
					</button>
				</div>
				<div>
					<h2 className='text-white'>
						Есть аккаунт?
						<Link
							className=' font-bold'
							to={'/login'}
							style={{ color: '#d60f9a' }}
						>
							Войти
						</Link>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Signup
