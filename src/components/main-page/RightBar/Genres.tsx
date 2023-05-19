import {genres1, genres2} from "../../../assets/DUMMY_IMAGES/genres";
import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import Slider from "./Slider/Slider";
export default function Watchlist() {
  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(genres1.length);
  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Genres"
        link="swipe/genres"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <Slider
        movies={genres1}
        genres={false}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
        titleCentered={true}
      />
      <Slider
        movies={genres2}
        genres={false}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
        titleCentered={true}
      />
    </div>
  );
}