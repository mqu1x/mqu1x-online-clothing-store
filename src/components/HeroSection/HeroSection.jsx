// function HeroSection() {
//     return (
//         <div>
//             <img className='w-full' src='' alt='' />
//         </div>
//     );
// }

// export default HeroSection;

import { useState, useEffect } from 'react';

const slides = [
    '/img/banner-img.jpg',
    '/img/banner-img-2.jpg',

    // Добавьте больше слайдов, если необходимо
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Интервал в 3 секунды

        return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
    }, []);

    return (
        <div className='slider'>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <img src={slide} className='w-full h-full' alt='' />
                </div>
            ))}
        </div>
    );
};

export default Slider;
