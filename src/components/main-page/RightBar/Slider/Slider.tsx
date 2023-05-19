import GrayButton from "../../../../UI/Buttons/GrayButton";
import MainButton from "../../../../UI/Buttons/MainButton";
import styles from "../style.module.scss";
import { Link } from "react-router-dom";
interface Props {
  movies: { title: string; image: string;  link:string , ep?: number; genres?: string[],}[];
  genres? : boolean;
  yellowBtnTitle?: string;
  grayBtnTitle?: string | JSX.Element;
  activeMovie: number;
  TRANSLATE: number;
  titleCentered?: boolean
}
export default function MyMovies(props: Props) {

  return (
    <div className="mt-[3rem]">
      <div
        className="flex mt-[3rem] h-[14rem] gap-[3rem] w-max duration-500 ease-in-out"
        style={{
          transform: `translateX(-${props.TRANSLATE * props.activeMovie}rem)`,
        }}
      >
        {props.movies.map((movie, i) => {
          return (
            <Link
              to={movie.link}
              key={i}
              className={`${styles.image} ${props.titleCentered && 'flex justify-center items-center'}`}
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <span className="text-3xl font-semibold relative">
                {movie.title}
              </span>
              {props.genres && (
                <div className="w-full flex justify-between px-[1rem] text-2xl text-gray-300 font-bold absolute right-[0rem] top-[50%] translate-y-[-50%]">
                  <span>{movie.ep}</span>
                  <span>{movie.genres}</span>
                </div>
              )}
              {props.yellowBtnTitle && props.grayBtnTitle && (
                <div className="absolute bottom-[1rem] flex gap-[1rem]">
                  <GrayButton>{props.grayBtnTitle}</GrayButton>
                  <MainButton>{props.yellowBtnTitle}</MainButton>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
