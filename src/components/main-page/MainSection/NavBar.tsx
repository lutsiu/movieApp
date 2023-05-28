import { NavLink } from "react-router-dom";
import SearchBar from "../../../UI/Navigation/SearchBar";
import { LeftIcon, RightIcon } from "./Icons";
import styles from '../../../UI/Navigation/style.module.scss';
import useResize from "../../../hooks/useResize";
export default function NavBar() {
  const { showHamburger, width } = useResize();

  return (
    <>
      <div className="flex justify-between items-center">
        {showHamburger && width > 575 && <LeftIcon />}
        <ul className="w-full sm:w-[22rem] md:w-[33rem] 2xl:w-[40rem] flex items-center justify-between">
          <li>
            <NavLink
              to="../home/movies"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="../home/tv-shows"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="../home/anime"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Anime
            </NavLink>
          </li>
        </ul>
        {width >= 576 && <SearchBar />}
        {showHamburger && width > 575 && <RightIcon />}
      </div>
      {width < 576 && (
        <div className="mt-[3rem] w-full flex justify-between items-center">
          <LeftIcon/>
          <SearchBar />
          <RightIcon/>
        </div>
      )}
    </>
  );
}
