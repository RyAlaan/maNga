// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { usePopulars } from "../../../hooks/usePopulars";
import { Link } from "react-router-dom";

export default function CoverflowSlider(props) {
  const { className, children } = props;
  const populars = usePopulars();

  return (
    <div className={className}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        rewind={true}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="flex md:hidden"
      >
        {populars.slice(0, 8).map((popular, index) => (
          <SwiperSlide key={index} className="mx-auto flex md:hidden">
            <div className="flex py-4 flex-row mx-auto">
              <div className="flex 1/5">
                <Link to={`/manga-details/${popular.mal_id}`}>
                  <img
                    src={popular.images.webp.image_url}
                    alt=""
                    className="block w-xs"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
