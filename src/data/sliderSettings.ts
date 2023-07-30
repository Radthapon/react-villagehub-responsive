import { SwiperOptions } from 'swiper/types';

export interface SliderSettings {
    slidesPerView: number;
    spaceBetween: number;
    breakpoints: {
      "480": SwiperOptions;
      "600": SwiperOptions;
      "750": SwiperOptions;
      "1100": SwiperOptions;
    };
  }
  
  export const sliderSettings: SliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      "480": { slidesPerView: 1 },
      "600": { slidesPerView: 2 },
      "750": { slidesPerView: 3 },
      "1100": { slidesPerView: 4 },
    },
  };