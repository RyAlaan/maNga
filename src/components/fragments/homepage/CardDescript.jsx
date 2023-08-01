import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Button from "../../elements/button/Button";

const CardDescription = (props) => {
  const { children } = props;
  return <div className=" text-white w-4/6 md:px-16 lg:w-5/6">{children}</div>;
};

const Header = (props) => {
  const { title, score, authors, status, id } = props;

  return (
    <div className="header">
      <Link
        className="font-bold text-6xl hover:text-tertiary"
        to={`/manga-details/${id}`}
      >
        {title}
      </Link>
      <div className="flex flex-row pt-2 gap-x-2">
        <p>
          <FontAwesomeIcon icon={faStar} /> {score}
        </p>
        <p>{status}</p>
        {authors.map((author, index) => (
          <p key={index}>{author.name}</p>
        ))}
      </div>
    </div>
  );
};

const Body = (props) => {
  const { genres, synopsis } = props;

  return (
    <div className="body pt-4">
      <div className="flex flex-row gap-x-4">
        {genres.map((genre, index) => (
          <Button className="border-tertiary border rounded-full rounded-tl-none max-w-[400px] whitespace-nowrap overflow-hidden text-ellipsis text-xs font-normal" key={index}>
            <Link
              className="text-lg hover:text-tertiary"
              to={`/genre/${genre.mal_id}`}
            >
              {genre.name}
            </Link>
          </Button>
        ))}
      </div>
      <p className="text-sm pt-2">{synopsis}</p>
    </div>
  );
};

CardDescription.Header = Header;
CardDescription.Body = Body;

export default CardDescription;
