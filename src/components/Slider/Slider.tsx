import { useRef, FC } from "react";
import { Pagination, Navigation } from "swiper";
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
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      className="swiperSlider"
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
      <div ref={prevRef} className="swiper-button-prev">
        PREV
      </div>
      <div ref={nextRef} className="swiper-button-next">
        NEXT
      </div>
    </Swiper>
  );
};

export default Slider;
