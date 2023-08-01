// import GenreList from "../fragments/homepage/GenreList";
import AutoplaySlider from "../fragments/slider/AutoplaySlider";
import CoverflowSlider from "../fragments/slider/CoverflowSlider";
import CompleteSlider from "../fragments/homepage/CompleteSlider";
import Slider from "../fragments/slider/Slider";
import PublishingSlider from "../fragments/homepage/PublishingSlider";
import TopMangas from "../fragments/homepage/TopMangas";
import { useGenres } from "../../hooks/useGenres";

const HeroContainer = () => {
  const genres = useGenres()

  return (
    <div className="bg-primary px-8 py-4">
      <AutoplaySlider className="hidden md:flex" />
      <CoverflowSlider className="md:hidden" />
      <div className="genre pt-5">
        <h3 className="text-white font-bold text-4xl">Genres</h3>
        <Slider className="py-5" genres={genres}/>
      </div>
      <div className="list py-10">
        <div className="header">
          <h3 className="text-white font-bold text-4xl py-5">Top Mangas</h3>
        </div>
        <TopMangas />
      </div>
      <div className="list py-10">
        <div className="header">
          <h3 className="text-white font-bold text-4xl py-5">Publishing</h3>
        </div>
        <PublishingSlider />
      </div>
      <div className="list py-10">
        <div className="header">
          <h3 className="text-white font-bold text-4xl py-5">Completed</h3>
        </div>
        <CompleteSlider />
      </div>
    </div>
  );
};

export default HeroContainer;
