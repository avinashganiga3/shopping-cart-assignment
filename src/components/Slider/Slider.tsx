import { useRef, FC } from "react";
import { Pagination, Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.scss";

export type BannerItems = {
  bannerImageAlt: string;
  bannerImageUrl: string;
  id: string;
  isActive: boolean;
  order: number;
};

export type SliderProp = {
  items: BannerItems[];
};

const Slider: FC<SliderProp> = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      modules={[Pagination, Navigation, Keyboard]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      className="swiperSlider"
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        enabled: true,
      }}
      keyboard={{ enabled: true, onlyInViewport: true }}
    >
      {items.map(({ bannerImageUrl, bannerImageAlt, id }: BannerItems) => (
        <SwiperSlide key={id}>
          <img
            src={bannerImageUrl}
            alt={bannerImageAlt}
            className="swiperImage"
          />
        </SwiperSlide>
      ))}
      <button ref={prevRef} className="swiper-button-prev">
        PREV
      </button>
      <button ref={nextRef} className="swiper-button-next">
        NEXT
      </button>
    </Swiper>
  );
};

export default Slider;
