import { faCalendar, faHome, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../elements/button/Button";
import SearchBar from "../elements/input/SearchBar";

const Navbar = () => {
  return (
    <div className="font-poppins flex flex-col py-4 px-8 md:py-4 md:px-16">
      <nav className="bg-primary flex items-center justify-between ">
        <Logo />
        <Navigation />
        <SearchBar className={"hidden md:flex"} />
      </nav>
      <div className="w-full h-5 py-4">
        <SearchBar className={"flex md:hidden"} />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-white font-bold ">
        ma<span className="text-tertiary"> N </span>ga.
      </h1>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="bg-secondary gap-x-4 absolute z-[-1] left-0 top-[71px] w-full md:w-auto md:z-auto md:flex md:items-center md:static md:rounded-full">
      <div className=" gap-x-4 m-2 md:flex">
        <div className="flex flex-row items-center gap-x-2 md:rounded-full bg-tertiary">
          <Link to="/">
            <div className=" font-bold py-2 px-4 flex flex-row items-center gap-x-2 md:rounded-full ">
              <FontAwesomeIcon icon={faHome} className="text-primary" />
              <h1 className="text-primary">Home</h1>
            </div>
          </Link>
        </div>
        {/* <div className="text-white flex flex-row items-center gap-x-2 md:rounded-full hover:bg-tertiary hover:text-primary">
          <Link to="/">
            <div className="font-bold py-2 px-4 flex flex-row items-center gap-x-2 rounded-full ">
              <FontAwesomeIcon icon={faCalendar} />
              <h1>Schedule</h1>
            </div>
          </Link>
        </div> */}
        <div className="text-white flex flex-row items-center gap-x-2 md:rounded-full hover:bg-tertiary hover:text-primary">
          <Link to="/manga/list/1">
            <div className="font-bold py-2 px-4 flex flex-row items-center gap-x-2 rounded-full">
              <FontAwesomeIcon icon={faList} />
              <h1>List</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Toggle = () => {
  return <></>;
};

export default Navbar;
