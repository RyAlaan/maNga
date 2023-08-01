import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../elements/button/Button";
import { Link } from "react-router-dom";
import { Scrollbar } from "swiper/modules";

const Slider = (props) => {
  const { className, children, genres } = props;

  // Add a check to ensure that the genres prop is defined and is an array
  if (!Array.isArray(genres)) {
    console.error("Genres is not an array");
    console.log(genres);
    return null; // or handle the error in an appropriate way
  }

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
      >
        {genres.map((genre, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <Button className="border-tertiary border rounded-full rounded-tl-none max-w-[400px] hover:text-tertiary font-normal">
              <Link
                to={`/genre/${genre.name}/${genre.mal_id}/1`}
              >{`${genre.name}`}</Link>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
