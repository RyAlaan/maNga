import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMangaDetails from "../../../hooks/useMangaDetails";
import { faBookmark, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/button/Button";

const SideInfo = (props) => {
  const { id } = props;
  const { image } = useMangaDetails(id);

  const actions = [
    {
      icon: faStar,
      text: "favorite",
    },
    {
      icon: faBookmark,
      text: "watch later",
    },
    {
      icon: faEye,
      text: "watched",
    },
  ];

  return (
    <div className="image items-center flex flex-col text-gray-400 w-1/4">
      <img src={image} alt="" className="rounded-xl md:w-80" />
      <div className="action flex flex-row gap-x-4 mt-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            className="fav items-center flex flex-col font-normal"
            // onClick={() => {}}
          >
            <FontAwesomeIcon icon={action.icon} className="w-16" />
            <p>{action.text}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SideInfo;
