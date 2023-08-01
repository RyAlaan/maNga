import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import MainInfo from "../components/fragments/detailPage/MainInfo";
import SideInfo from "../components/fragments/detailpage/sideInfo";

const MangaDetailPage = () => {
  const { id }  = useParams();

  return (
    <>
      <div className="bg-primary min-h-screen ">
        <Navbar />
        {/* <p className="text-6xl font-bold text-white ">
          manga details : {id}
        </p> */}
        <div className="px-8 py-4 gap-10 flex flex-col md:flex-row-reverse mt-4">
          <MainInfo id={id} />
          <SideInfo id={id} />
        </div>
      </div>
    </>
  );
};

export default MangaDetailPage;
