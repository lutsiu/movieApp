import useFetchData from "../../../hooks/useFetchData";
import useSlider from "../../../hooks/useSlider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GrayButton from "../../../UI/Buttons/GrayButton";
import MainButton from "../../../UI/Buttons/MainButton";
import ButtonWatchList from '../../../UI/Buttons/ButtonWatchList'
import Pagination from "../../../UI/Pagination";
import { MOVIE_DATA } from "../../../data/interfaces";
import styles from "./style.module.scss";
import { BiMoviePlay } from "react-icons/bi";
import useResize from "../../../hooks/useResize";
import { IMAGE_PATH } from "../../../data/API";
import { useEffect } from "react";
export default function MainSlider() {
  const {
    data,
    isLoading,
  }: {
    data: {results: MOVIE_DATA[] } | null ;
    isLoading: boolean;
  } = useFetchData("popular");

  const movies = data?.results.filter((d, i) => i < 5);
  
  const movieCount = movies?.length ?? 0;

  const {
    activeMovie,
    handleTranslateLeft,
    handleTranslateRight,
    translateByButton,
  } = useSlider(movieCount);

  const { width } = useResize();

  useEffect(() => {
    const interval = setInterval(() => {
      handleTranslateRight();
    }, 6000);
    return () => {
      clearInterval(interval);
    }
  }, [handleTranslateRight]);

  return (
    <div
      className="mt-[5rem] overflow-hidden rounded-3xl flex h-[35rem]"
      style={{}}
    >
      {movies && movies.map((movie, i) => {
        return (
          <div
          data-id={movie.id}
            key={i}
            className={`${styles.slide} movie`}
            style={{
              transform: `translateX(-${activeMovie * 100}%)`,
              backgroundImage: `url(${IMAGE_PATH}${'original'}${movie.poster_path})`,
            }}
          >
            <h1 className="absolute text-5xl md:text-7xl font-bold top-[3rem] left-[3rem]">
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
              <ButtonWatchList title={true}/>
              <Pagination
                activeMovie={activeMovie}
                amountOfButtons={movies.length}
                translateByButton={translateByButton}
              />
              <MainButton>
                {width > 575 ? (
                  "Watch trailer"
                ) : (
                  <BiMoviePlay className="w-[2rem] h-[2rem]" />
                )}
              </MainButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
