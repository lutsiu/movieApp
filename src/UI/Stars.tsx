import { FaStar, FaStarHalf } from "react-icons/fa";

interface Props {
  rating: number;
}

export default function Stars(props: Props) {
  const amountOfFullStars = Math.floor(props.rating);
  let HalfStar: JSX.Element;

  const rest = props.rating - amountOfFullStars;


  if (rest > 0.3) {
    HalfStar = <FaStarHalf className="text-main  w-[3.8rem] h-[3.8rem]" />;
  }

  const fullStars = Array.from({ length: amountOfFullStars }, (_, i) => {
    return <FaStar key={i} className="text-main w-[3.8rem] h-[3.8rem]" />;
  });

  return <div className="flex gap-[1.2rem]">
    {fullStars}
    {HalfStar!}
  </div>;
}
