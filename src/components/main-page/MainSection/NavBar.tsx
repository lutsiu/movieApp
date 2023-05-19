import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {CgMenuGridO, CgMenu} from 'react-icons/cg'
import styles from './style.module.scss';
import useResize from "../../../hooks/useResize";
export default function NavBar() {
  const {showHamburger} = useResize();



  return (
    <div className="flex justify-between items-center">
      {showHamburger && <CgMenu className="w-[3.5rem] h-[3.5rem] cursor-pointer duration-500 hover:text-gray-400" />}
      <ul className="xl: w-[33rem] 2xl:w-[40rem] flex items-center justify-between">
        <li>
          <NavLink to="../home/movies" className={({isActive}) => isActive ?  styles.linkActive: styles.link}>Movies</NavLink>
        </li>
        <li>
          <NavLink to="../home/tv-shows" className={({isActive}) => isActive ?  styles.linkActive: styles.link}>TV Shows</NavLink>
        </li>
        <li>
          <NavLink to="../home/anime" className={({isActive}) => isActive ?  styles.linkActive: styles.link}>Anime</NavLink>
        </li>
      </ul>
      <form className=" bg-gray-800 xl:w-[25rem] 2xl:w-[30rem] h-[5.6rem] rounded-2xl flex items-center py-[1.6rem] pl-[1rem] gap-[1.5rem]">
        <BsSearch className="flex-1 w-[2.4rem] h-[2.4rem] cursor-pointer"/>
        <input type="text" placeholder="Search" className="flex-[9] bg-transparent text-3xl outline-none" />
      </form>
      {showHamburger && <CgMenuGridO className="w-[3.5rem] h-[3.5rem] cursor-pointer duration-500 hover:text-gray-400" />}
    </div>
  );
}
