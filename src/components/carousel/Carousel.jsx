import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperSlide } from '../../data/swiperSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles.css';

export const Carousel = () => {
  return (
    <div className="carousel-container carouselgrid carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        navigation={true}
        loop={true}
        className="carouselSwiper"
      >
        
        {swiperSlide.map(({source, texto}) => <SwiperSlide><img src={source} alt={texto} className="carouselSwiperSlide"/></SwiperSlide>)}
    
      </Swiper>
    </div>
  );
};

