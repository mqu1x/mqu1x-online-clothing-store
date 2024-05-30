import { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=' container mx-auto px-5 py-10'>
                    <h1
                        className=' text-center text-3xl font-bold text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                        Отзывы
                    </h1>
                    <h2
                        className=' text-center text-2xl font-semibold mb-10'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                        Что говорят наши <span className=' text-pink-500'>клиенты</span>
                    </h2>
                    <div className='flex flex-wrap -m-4'>
                        <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                            <div className='h-full text-center'>
                                {/* <img
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src='https://i.pinimg.com/originals/6a/cf/3f/6acf3f041a250277801d73e8d54e2487.jpg'
                                /> */}
                                <h2 className=' text-2xl w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                                    М И
                                </h2>
                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='leading-relaxed'
                                >
                                    Я заказала платье для особого случая, и оно превзошло все мои
                                    ожидания! Ткань очень качественная, сидит идеально. Доставка
                                    была быстрой, и упаковка очень красивая. Обязательно закажу
                                    здесь снова!
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4' />
                                <h2
                                    style={{ color: mode === 'dark' ? '#ff4162' : '' }}
                                    className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'
                                >
                                    Мария Иванова
                                </h2>
                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='text-gray-500'
                                >
                                    {/* 5 звезд */}
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                            <div className='h-full text-center'>
                                {/* <img
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src='https://experum.ru/uploads/media/avatar/0001/08/thumb_7352_avatar_portrait285.png'
                                /> */}
                                <h2 className=' text-2xl w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                                    А П
                                </h2>
                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='leading-relaxed'
                                >
                                    Куртка, которую я купил, оказалась немного меньше, чем я ожидал,
                                    но качество отличное. Убедитесь, что внимательно смотрите на
                                    таблицу размеров перед заказом. В целом, я доволен покупкой.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4' />
                                <h2
                                    style={{ color: mode === 'dark' ? '#ff4162' : '' }}
                                    className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'
                                >
                                    Алексей Петров
                                </h2>
                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='text-gray-500'
                                >
                                    {/*  */}
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-1/3 lg:mb-0 p-4'>
                            <div className='h-full text-center'>
                                {/* <img
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src='https://webknudocs.vercel.app/logo/react.png'
                                /> */}

                                <h2 className=' text-2xl w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'>
                                    Е С
                                </h2>

                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='leading-relaxed'
                                >
                                    Обувь была не совсем того цвета, как на фото, но качество на
                                    высоте. Очень удобные и стильные ботинки, которые привлекли
                                    много комплиментов. Доставка немного задержалась, но в целом я
                                    довольна.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4' />
                                <h2
                                    style={{ color: mode === 'dark' ? '#ff4162' : '' }}
                                    className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'
                                >
                                    Елена Смирнова
                                </h2>
                                <p
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                    className='text-gray-500'
                                >
                                    {/*  */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
