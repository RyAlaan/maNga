import clsx from "clsx";
import { useState } from "react";
import Button from "../button/Button";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const { className } = props;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  // const { page } = usePage(q);

  // console.log(page);

  function handleSearch() {
    if (search) {
      window.location.href = `/manga/search/${search}/${page}`;
    }
  }

  return (
    <div
      className={clsx(
        "flex w-full md:w-1/4 bg-secondary rounded-full overflow-hidden",
        className
      )}
    >
      <Button
        onClick={() => {
          handleSearch();
        }}
        className="bg-secondary rounded-md"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
      <Input
        type="text"
        placeholder="Search"
        name="search"
        className="border-0 h-12 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
