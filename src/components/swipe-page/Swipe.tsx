import useResize from "../../hooks/useResize";
import useSlider from "../../hooks/useSlider";
import data from "../../assets/DUMMY_IMAGES/DUMMY_MOVIES/dummy_swipe";
import BackHomeButton from "../../UI/Buttons/BackHomeButton";
import Slider from "./Slider";
import Controls from "./Controls";
export default function SwipePage() {
  const width = useResize();

  let MOVIES_PER_SLIDE = 4;

  if (width <= 992 && width > 576) {
    MOVIES_PER_SLIDE = 2;
  }

  if (width < 576) {
    MOVIES_PER_SLIDE = 1;
  }

  const SLIDES = data.length / MOVIES_PER_SLIDE;

  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(SLIDES);

  return (
    <div className="pt-[2rem] flex flex-col relative items-center">
      <div className="pl-[2rem] sm:pl-0 absolute left-[2rem]">
        <BackHomeButton link="../../" />
      </div>
      <h1 className="text-5xl font-black mt-[6rem]">
        Top rated Movies
      </h1>
      <Slider
        data={data}
        activeMovie={activeMovie}
        translateUnit={MOVIES_PER_SLIDE}
      />
      <Controls
        handleTranslateLeft={handleTranslateLeft}
        handleTranslateRight={handleTranslateRight}
        translateByButton={translateByButton}
        amountOfButtons={SLIDES}
        activeMovie={activeMovie}
      />
    </div>
  );
}
