import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPublishing } from "../../../services/hero.service";
import { Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useComplete } from "../../../hooks/usePublishing";

const PublishingSlider = (props) => {
  const publishes = useComplete().slice(0, 15);
  const { className, children } = props;

  return (
    <div className={className}>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        spaceBetween={20}
        slidesPerView={"auto"}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className=""
      >
        {publishes.map((publish, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="rounded-xl w-36 h-60 md:w-56 md:h-80 overflow-hidden">
              <img src={publish.images.jpg.image_url} alt="" />
              <div className="rating  bg-black text-white w-fit rounded-xl absolute top-0 right-0">
                <div className="py-1 px-2 flex flex-row items-center  gap-x-1">
                  <FontAwesomeIcon icon={faStar} />
                  <p>{publish.score}</p>
                </div>
              </div>
              <Link
                to={`/manga-details/${publish.mal_id}`}
                className="title bg-black opacity-95 h-16 absolute bottom-0 w-full rounded-b-xl"
              >
                <p className="text-white opacity-100 px-2 py-2 md:font-medium md:text-xl">
                  {publish.title}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PublishingSlider;
