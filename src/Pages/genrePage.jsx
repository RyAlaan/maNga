import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import ListLayout from "../components/layouts/Page/ListLayout";
import PaginationLayout from "../components/layouts/Page/PaginationLayout";

const GenrePage = () => {
  const { name, id, page } = useParams();

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <p className="text-3xl font-bold text-white px-4 py-4">
        search for {name} {id} and page {page}
      </p>
      <ListLayout type="GENRE" />
      <PaginationLayout type="GENRE" />
    </div>
  );
};

export default GenrePage;
