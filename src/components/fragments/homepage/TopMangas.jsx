import { Link } from "react-router-dom";
import { useRating } from "../../../hooks/useRating";

const TopMangas = () => {
  const ratings = useRating();

  return (
    <div className="w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3">
      {ratings
        .map((rating, index) => (
          <div
            key={index}
            className="w-full h-36 flex bg-secondary rounded-md overflow-hidden gap-2"
          >
            <img src={rating.images.jpg.image_url} alt="" className="w-24" />
            <Link
              className="text-white text-3xl font-bold hover:text-tertiary"
              to={`/manga-details/${rating.mal_id}`}
            >
              {rating.title}
            </Link>
          </div>
        ))
        .reverse()
        .slice(0, 6)}
    </div>
  );
};

export default TopMangas;
