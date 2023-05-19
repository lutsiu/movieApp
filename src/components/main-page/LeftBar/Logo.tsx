import logo from "../../../assets/logo.svg";
import styles from "./style.module.scss";

export default function Logo() {

  return (
    <div className="flex items-center gap-[1rem] mb-[3rem]">
      <img src={logo} alt="logo" className="w-[5.9rem] h-[5.9rem]"/>
      <span className={`${styles.logo} text-4xl w-[10rem] text-main`}>Lutsiu Movies</span>
    </div>
  )
}