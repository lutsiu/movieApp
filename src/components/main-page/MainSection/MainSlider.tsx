import data from "../../../assets/DUMMY_IMAGES/mainSlider";
import useSlider from "../../../hooks/useSlider";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import GrayButton from "../../../UI/Buttons/GrayButton";
import MainButton from "../../../UI/Buttons/MainButton";
import Pagination from "../../../UI/Pagination";
import styles from './style.module.scss';
export default function MainSlider() {
  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(data.length);

  /* const paginationBtns = Array.from({ length: data.length }, (_, i) => {
    const isActive = i === activeMovie;

    return (
      <span
        key={i}
        className={`${
          isActive ? "bg-main" : "bg-white"
        } ${"inline-block w-[1rem] h-[1rem] rounded-full cursor-pointer hover:bg-main duration-500"}`}
        onClick={() => {translateByButton(i)}}
      ></span>
    );
  }); */

  return (
    <div
      className="mt-[5rem] overflow-hidden rounded-3xl flex h-[35rem]"
      style={{}}
    >
      {data.map((movie, i) => {
        return (
          <div
            key={i}
            className={styles.slide}
            style={{
              transform: `translateX(-${activeMovie * 100}%)`,
              backgroundImage: `url(${movie.image})`, 
            }}
          >
            <h1 className="absolute text-7xl font-bold top-[3rem] left-[3rem]">
              {movie.title}
            </h1>
            <div className="w-full flex absolute top-[50%] translate-y-[-50%] justify-between  p-[2rem]">
              <GrayButton onClick={handleTranslateLeft}>
                <FaChevronLeft />
              </GrayButton>
              <GrayButton onClick={handleTranslateRight}>
                <FaChevronRight />
              </GrayButton>
            </div>
            <div className="w-full absolute flex justify-between  bottom-[2rem]  p-[2rem]">
              <GrayButton>
                <FaPlus />
                <span>Watchlist</span>
              </GrayButton>
              <Pagination activeMovie={activeMovie} amountOfButtons={data.length} translateByButton={translateByButton}/>
              <MainButton>Watch trailer</MainButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
