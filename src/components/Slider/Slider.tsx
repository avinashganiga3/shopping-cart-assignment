import { FC } from "react";
import { Pagination } from "swiper";
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
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
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
    </Swiper>
  );
};

export default Slider;
