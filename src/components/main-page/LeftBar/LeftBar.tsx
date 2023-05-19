import Logo from "./Logo";
import Section from "./Section";
import * as sections from "./Sections";
import { FaCog, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useSelector} from "react-redux/es/exports";
import { iconClass } from "./Sections";
export default function LeftBar() {

  const {logIn} = useSelector((state: {auth: {logIn: boolean}} ) => state.auth);

  const general = [
    { icon: <FaCog  className={iconClass}/>, title: "Settings" },
    {icon: logIn ? <FaSignOutAlt className={iconClass}/> : <FaSignInAlt className={iconClass}/>, title: logIn ? 'Log out' : 'Log in'}
  ];

  return (
    <div className=" bg-slate-950 w-[17%] pl-[4rem] pr-[2rem] py-[4rem] absolute xl:relative">
      <Logo />
      <Section sections={sections.menu} sectionTitle="Menu" />
      <Section sections={sections.library} sectionTitle="Library" />
      <Section sections={general} sectionTitle="General" />
    </div>
  );
}
