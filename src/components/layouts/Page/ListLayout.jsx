import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMangaAll, getSearchManga } from "../../../services/hero.service";
import { getGenreList } from "../../../services/hero.service";

const ListLayout = (props) => {
  const { type } = props;
  const { id, q, page } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [genreList, setGenreList] = useState([]);
  // const [search, setSearch] = useState([]);

  switch (type) {
    case "SEARCH":
      useEffect(() => {
        getSearchManga(q, page, (data) => {
          setResults(data.data);
          setLoading(false);
        });
      });
      break;

    case "GENRE":
      useEffect(() => {
        getGenreList(id, page, (data) => {
          setResults(data.data);
          setLoading(false);
        });
      });
      break;

    case "LIST":
      useEffect(() => {
        getMangaAll(page, (data) => {
          setResults(data.data);
          setLoading(false);
        });
      });
      break;

    default:
      break;
  }

  return (
    <div className="px-8 py-4">
      {results.map((result, index) => (
        <Link to={`/manga-details/${result.mal_id}`} key={index}>
          <div className="bg-secondary w-full px-4 py-2 my-4 rounded-lg flex flex-row gap-x-3">
            <img
              src={result.images.jpg.image_url}
              className="rounded-lg w-28"
              alt=""
            />
            <div className="">
              <p className="text-white text-2xl font-bold">{result.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListLayout;
