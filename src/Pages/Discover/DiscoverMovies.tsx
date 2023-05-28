import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import { MOVIE_DATA } from "../../data/interfaces";
import GridPage from "../../components/grid-page/GridPage";
type Option = "top" | "popular" | "upcoming";
export default function DsicoverMovies() {
  const { option } = useParams();

  const { data: movies1 } = useFetchData(option as Option, 1);
  const { data: movies2 } = useFetchData(option as Option, 2);
  const { data: movies3 } = useFetchData(option as Option, 3);

  let movies: MOVIE_DATA[] | [] = [];

  if (movies1 && movies2 && movies3) {
    movies = [movies1.results, movies2.results, movies3.results].flat(1);
  }

  return (
    <div className="mt-[4rem]">
      <h1 className="w-fit mx-auto text-5xl font-black">{`${option!.replace(
        option![0],
        option![0].toUpperCase()
      )} movies`}</h1>
      <GridPage movies={movies} />
    </div>
  );
}
