import {
  FaHome,
  FaRegCompass,
  FaTrophy,
  FaRegCheckCircle,
  FaRegClock,
  FaRegStar,
  FaRegHeart,
  FaPlus,
} from "react-icons/fa";


export const iconClass = 'w-[2.5rem] h-[2.5rem]';

type Section = { icon: JSX.Element; title: string }[];
export const menu: Section = [
  { icon: <FaHome  className={iconClass}/>, title: "Home" },
  { icon: <FaRegCompass  className={iconClass}/>, title: "Genres" },
  { icon: <FaTrophy  className={iconClass}/>, title: "Awards" },
  { icon: <FaRegCheckCircle  className={iconClass}/>, title: "Celebrities" },
];

export const library: Section = [
  { icon: <FaRegClock className={iconClass}/>, title: "Recent" },
  { icon: <FaRegStar  className={iconClass}/>, title: "Top Rated" },
  { icon: <FaRegHeart  className={iconClass}/>, title: "Playlists" },
  {icon: <FaPlus className={iconClass}/>, title: 'Watchlist'},
];



