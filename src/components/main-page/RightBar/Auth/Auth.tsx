import { FaUserAlt } from "react-icons/fa";
import Dropdown from "./Dropdown";
import styles from '../style.module.scss';

export default function Auth() {

  return (
    <div className="flex items-center justify-center relative">
      <span className="text-3xl" >Sasha</span>
      <span className={`${styles.auth} bg-gray-700 ml-[2rem] opacity-80 w-[4.4rem] h-[4.4rem] flex items-center justify-center rounded-2xl hover:bg-gray-800 duration-500 cursor-pointer `}>
        <FaUserAlt className="w-[2rem] h-[2rem]"/>
      </span>
      <Dropdown/>
    </div>
  );
}
