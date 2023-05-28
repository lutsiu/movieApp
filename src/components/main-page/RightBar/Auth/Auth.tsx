import { FaUserAlt } from "react-icons/fa";
import Dropdown from "./Dropdown";
import styles from "../style.module.scss";
import { CgMenuGridO } from "react-icons/cg";
import useResize from "../../../../hooks/useResize";
import { useDispatch } from "react-redux";
import { menuIconsActions } from "../../../../store/menuIcons";
export default function Auth() {
  const { showHamburger } = useResize();
  const dispatch = useDispatch();
  const handleShowRightMenu = () => {
    dispatch(menuIconsActions.toggleRightMenu());
  };

  return (
    <div className="flex items-center justify-evenly xl:justify-center relative">
      {showHamburger && (
        <CgMenuGridO
          className="w-[3.5rem] h-[3.5rem] cursor-pointer duration-500 hover:text-gray-400"
          onClick={handleShowRightMenu}
        />
      )}
      <span className="text-3xl">Sasha</span>
      <span
        className={`${styles.auth} bg-gray-700 ml-[2rem] opacity-80 w-[4.4rem] h-[4.4rem] flex items-center justify-center rounded-2xl hover:bg-gray-800 duration-500 cursor-pointer `}
      >
        <FaUserAlt className="w-[2rem] h-[2rem]" />
      </span>
      <Dropdown />
    </div>
  );
}
