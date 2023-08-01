import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useComplete } from "../../../hooks/useComplete";
import { useEffect } from "react";
import { getComplete } from "../../../services/hero.service";

const CompleteSlider = (props) => {
  const completes = useComplete().slice(0, 15);
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
        {completes.map((complete, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div to={`/manga/${complete.mal_id}`}>
              <img
                src={complete.images.jpg.image_url}
                alt=""
                className="rounded-xl w-36 h-60 md:w-56 md:h-80"
              />
              <div className="rating  bg-black text-white w-fit rounded-xl absolute top-0 right-0">
                <div className="py-1 px-2 flex flex-row items-center  gap-x-1">
                  <FontAwesomeIcon icon={faStar} />
                  <p>{complete.score}</p>
                </div>
              </div>
              <Link
                to={`/manga-details/${complete.mal_id}`}
                className="title bg-black opacity-95 h-16 absolute bottom-0 w-full rounded-b-xl"
              >
                <p className="text-white opacity-100 px-2 py-2 md:font-medium md:text-xl">
                  {complete.title}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompleteSlider;
