import HeroContainer from "../components/layouts/HeroContainer";
import Navbar from "../components/layouts/Navbar";

const HomePage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar/>
      <HeroContainer/>
    </div>
  );
};
export default HomePage;
