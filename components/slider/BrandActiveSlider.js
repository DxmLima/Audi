'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 6,
        },
        '992': {
            slidesPerView: 5,
        },
        '768': {
            slidesPerView: 4,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
}

export default function BrandActiveSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="brand-item" height='20'>
                    <FontAwesomeIcon className='icon-edit' icon={faBolt}  />  <br />
                       <p className='text-white p-2'>Velocidade Max</p>  <br />
                       <h2 className='text-white p-2'>250Km</h2>
                    </div>
                </SwiperSlide>
               
               
            </Swiper>
        </>
    )
}
