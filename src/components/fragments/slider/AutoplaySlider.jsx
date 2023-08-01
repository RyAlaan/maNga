// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CardDescription from "../homepage/CardDescript";
import { usePopulars } from "../../../hooks/usePopulars";

export default function AutoplaySlider(props) {
  const { className, children } = props;
  const populars = usePopulars();


  return (
    <div className={className}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="hidden md:flex"
      >
        {populars.slice(0, 8).map((popular, index) => (
          <SwiperSlide key={index} className="mx-auto w-[300px]">
            <div className="flex flex-row py-4 mx-auto">
              <div className="flex w-2/6 lg:w-1/6">
                <img
                  src={popular.images.jpg.image_url}
                  alt=""
                  className="rounded-xl inline-block mx-auto aspect-[2/3]"
                />
              </div>
              <CardDescription>
                <CardDescription.Header
                  title={popular.title}
                  score={popular.score}
                  authors={popular.authors}
                  status={popular.status}
                  id={popular.mal_id}
                />
                <CardDescription.Body
                  genres={popular.genres}
                  synopsis={popular.synopsis}
                />
              </CardDescription>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
