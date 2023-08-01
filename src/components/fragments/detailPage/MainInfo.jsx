import { useEffect, useState } from "react";
import useMangaDetails from "../../../hooks/useMangaDetails";
import Slider from "../slider/Slider";

const MainInfo = (props) => {
  const { id } = props;
  const { data } = useMangaDetails(id);

  if (!Array.isArray(data.authors)) {
    console.error("Genres is not an array");
    return null; // or handle the error in an appropriate way
  }

  return (
    <div className="text-white md:w-3/4">
      {Header()}
      {Info()}
      {Footer()}
    </div>
  );

  function Footer() {
    return (
      <div className="footer grid grid-cols-2">
        <div className="text-gray-400">Rating</div>
        <div>{data.score}</div>
        <div className="text-gray-400">Status</div>
        <div>{data.status}</div>
        <div className="text-gray-400">Release year</div>
        <div>
          {data.published &&
            data.published.prop &&
            data.published.prop.from.year}
        </div>
        <div className="text-gray-400">Author</div>
        <div>
          {data.authors.map((author) => (
            <div key={author.mal_id}>
              <p>{author.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Info() {
    return (
      <div className="info">
        <h6 className="font-bold text-xl">Storyline</h6>
        <p className="py-4">{data.synopsis}</p>
      </div>
    );
  }

  function Header() {
    return (
      <div className="header">
        <h1 className="font-bold text-4xl text-white md:text-6xl">
          {data.title}
        </h1>
        <Slider genres={data.genres} className="py-5" />
      </div>
    );
  }
};

export default MainInfo;
