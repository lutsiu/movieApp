import useSlider from "../../../hooks/useSlider";
import SliderButtons from "./Slider/SliderButtons";
import images from "../../../assets/DUMMY_IMAGES/images";
import Slider from "./Slider/Slider";
export default function Watchlist() {
  const { activeMovie, handleTranslateLeft, handleTranslateRight, TRANSLATE } =
    useSlider(images.length);

  return (
    <div className="mt-[3rem]">
      <SliderButtons
        title="Watchlist"
        link="swipe/watchlist"
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
      />
      <Slider
        movies={images}
        genres={false}
        yellowBtnTitle="Watch now"
        grayBtnTitle="Drop"
        TRANSLATE={TRANSLATE}
        activeMovie={activeMovie}
      />
    </div>
  );
}
