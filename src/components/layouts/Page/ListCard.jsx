const ListCard = () => {
  return (
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
  );
};
