import SecondaryNav from "../../UI/Navigation/SecondaryNav";
import useResize from "../../hooks/useResize";
import useSlider from "../../hooks/useSlider";
import Slider from "./Slider";
import Controls from "../swipe-page/Controls";
import { useSelector } from "react-redux";
import useFetchMovie from "../../hooks/useFetchMovie";
export default function SwipePage() {
  const {watchlist} = useSelector((state: {watchlist: number[]}) => state);
  const { width } = useResize();

  const {movies} = useFetchMovie(watchlist);


  let MOVIES_PER_SLIDE = 4;

  if (width <= 992 && width > 576) {
    MOVIES_PER_SLIDE = 2;
  }

  if (width < 576) {
    MOVIES_PER_SLIDE = 1;
  }

  const SLIDES = Math.ceil(watchlist.length / MOVIES_PER_SLIDE);

  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(SLIDES);

  return (
    <div className="py-[2rem]">
      <SecondaryNav links={[
          { link: "../", title: "Home" },
          { link: "../discover", title: "Discover" },
          { link: "../celebrities", title: "Celebrities" },
          { link: "../genres", title: "Genres" },
          { link: "../watchlist", title: "Watchlist" },
        ]} />
      <div className="pt-[2rem] flex flex-col relative items-center">
        <h1 className="text-5xl font-black mt-[6rem]">Top rated Movies</h1>
        <Slider
          data={movies ? movies : null}
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
    </div>
  );
}
