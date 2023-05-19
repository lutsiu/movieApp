import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize";
interface Props {
  data: {
    image: string;
    title: string;
    rate: number;
    date: string;
    descr: string;
  }[];
  activeMovie: number;
  translateUnit: number;
}

export default function Slider(props: Props) {
  const width = useResize();

  let SLIDE_WIDTH = 25;
  if (width <= 992 && width > 576) {
    SLIDE_WIDTH = 50;
  }

  if (width < 576) {
    SLIDE_WIDTH = 100;
  }

  return (
    
    <div className="w-full overflow-hidden flex justify-center pl-[5.5%] sm:pl-[2%]">
      <div
        className="max-w-full flex  mt-[3rem] ease-in-out gap-[10%] sm:gap-[3%] md:gap-[3%] lg:gap-[3%] duration-1000"
        style={{
          transform: `translateX(-${
            props.activeMovie * props.translateUnit * SLIDE_WIDTH
          }%)`,
        }}
      >
        {props.data.map((movie, i) => {
          return (
            <Link
              to="/movie"
              key={i}
              className="max-w-[90%] min-w-[90%] sm:min-w-[47%] sm:max-w-[47%]
              lg:min-w-[22%] lg:max-w-[22%] h-[50rem] rounded-[1.7rem] overflow-hidden duration-500 hover:scale-110"
            >
              <div className="relative h-[70%]">
                <span
                  className="absolute right-0 top-0 w-[7rem] h-[3.8rem] bg-main flex items-center justify-center text-black font-bold text-3xl"
                  style={{ borderRadius: "0 1.7rem" }}
                >
                  {`${movie.rate}`}
                </span>
                <img src={movie.image} className="w-full h-full object-cover" />
              </div>
              <div className="mt-[1rem] h-[30%]">
                <h3 className="text-3xl">{movie.title}</h3>
                <span className="text-lg text-gray-300">{movie.date}</span>
                <p className="mt-[1rem] text-lg">{movie.descr}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
