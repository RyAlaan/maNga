import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import ListLayout from "../components/layouts/Page/ListLayout";
import PaginationLayout from "../components/layouts/Page/PaginationLayout";

const ListPage = () => {
  const { page } = useParams();

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <p className="text-3xl font-bold text-white px-4 py-4">
        search for All and page {page}
      </p>
      <ListLayout type="LIST" />
      <PaginationLayout type="LIST" />
    </div>
  );
};

export default ListPage;
