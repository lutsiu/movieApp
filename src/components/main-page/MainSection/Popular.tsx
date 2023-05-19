import popular from "../../../assets/DUMMY_IMAGES/popular";
import GrayButton from "../../../UI/Buttons/GrayButton";
import MainButton from "../../../UI/Buttons/MainButton";
import styles from "./style.module.scss";
import { FaPlus } from "react-icons/fa";
export default function Popular() {
  return (
    <div className="mt-[6rem]">
      <h2 className=" text-4xl font-bold">Popular on Lutsiu Movies</h2>
      <div className="w-fullmt-[3rem] flex gap-[3rem] mt-[3rem]">
        {popular.map((movie, i) => {
          return (
            <div key={i} className={styles.popularCard}  style={{backgroundImage: `url(${movie.image})`}}>
              <h3 className="absolute left-[2.1rem] top-[2.1rem] text-4xl font-bold">
                {movie.title}
              </h3>
              <div className="absolute w-full bottom-[7rem] flex justify-between px-[1rem] text-gray-200 text-2xl">
                <span>{`${movie.ep} Ep`}</span>
                <span>{movie.genre}</span>
              </div>
              <div className="absolute bottom-0 p-[1rem] flex justify-between w-full">
                <GrayButton>
                  <FaPlus />
                </GrayButton>
                <MainButton>More info</MainButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
