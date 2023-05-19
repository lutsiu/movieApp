import BackHomeButton from "../../UI/Buttons/BackHomeButton";
import styles from "./styles.module.scss";
import lokiBig from "../../assets/DUMMY_IMAGES/loki_big.jpg";
import lokiSmall from "../../assets/DUMMY_IMAGES/loki_small.jpg";
import GrayButton from "../../UI/Buttons/GrayButton";
import MainButton from "../../UI/Buttons/MainButton";
import { FaPlus } from "react-icons/fa";
import Stars from "../../UI/Stars";
import useResize from "../../hooks/useResize";
export default function Movie() {
  const width = useResize();

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${lokiBig})` }}
    >
      <div className="absolute">
        <BackHomeButton link="/home/movies" />
      </div>
      <div className="relative w-[100%] mt-[8rem] h-fit flex justify-evenly gap-[5rem]">
        <div className=" w-full sm:w-[75%] lg:w-[40%]">
          <h1 className="text-6xl font-black mb-[2rem]">Loki</h1>
          <Stars rating={4.7} />
          <span className="text-2xl mt-[3rem] inline-block">
            Fantasy, heroes
          </span>
          <p className="mt-[3rem] text-3xl lg:text-4xl">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="flex flex-col sm:flex-row gap-[4.5rem] mt-[5rem] mx-auto sm:mx-0 w-fit">
            <GrayButton>
              <FaPlus />
              <span>Watchlist</span>
            </GrayButton>
            <MainButton>Watch now</MainButton>
          </div>
        </div>
        {width > 768 && (
          <div className="w-[35rem] min-h-full bg-center overflow-hidden rounded-3xl">
            <img
              src={lokiSmall}
              alt="small image"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
