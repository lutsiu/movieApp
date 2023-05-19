import series from "../../../assets/DUMMY_IMAGES/series";
import {FaPlus} from 'react-icons/fa';
import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import Slider from "./Slider/Slider";
export default function Watchlist() {
  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(series.length);

  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Top Rated"
        link="swipe/top-rated"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <Slider
        movies={series}
        genres={true}
        yellowBtnTitle="Watch trailer"
        grayBtnTitle={<FaPlus/>}
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
      />
    </div>
  );
}
