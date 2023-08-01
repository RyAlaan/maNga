import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  getGenreList,
  getMangaAll,
  getSearchManga,
} from "../../../services/hero.service";
import { data } from "autoprefixer";

const PaginationLayout = (props) => {
  const { type } = props;
  const { q, page, id, name } = useParams();
  const [pagination, setPagination] = useState([]);
  const [link, setLink] = useState("");

  switch (type) {
    case "SEARCH":
      useEffect(() => {
        getSearchManga(q, page, (data) => {
          setPagination(data.pagination);
          console.log(data.pagination);
          setLink(`/manga/search/${q}/`);
        });
      }, []);

      break;

    case "GENRE":
      useEffect(() => {
        getGenreList(id, page, (data) => {
          setPagination(data.pagination);
          console.log(data.pagination);
          setLink(`/genre/${name}/${id}/`);
        });
      }, []);
      break;

    case "LIST":
      useEffect(() => {
        getMangaAll(page, (data) => {
          setPagination(data.pagination);
          setLink(`/manga/list/`);
        });
      });
      break;

    default:
      break;
  }

  const prevPage = parseInt(page) - 1;
  const nextPage = parseInt(page) + 1;

  return (
    <>
      <div className="flex pb-6 justify-center gap-x-6">
        {pagination.current_page > 1 && (
          <a
            className="flex items-center justify-center px-3 h-8 mr-3 text-sm gap-x-3 font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            href={`${link}${prevPage}`}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            Previous
          </a>
        )}
        {pagination.has_next_page && (
          <a
            className="flex items-center justify-center px-3 h-8 mr-3 text-sm gap-x-3 font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            href={`${link}${nextPage}`}
          >
            <FontAwesomeIcon icon={faAngleRight} />
            Next
          </a>
        )}
      </div>
    </>
  );
};

export default PaginationLayout;
