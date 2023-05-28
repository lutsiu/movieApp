import { useEffect, useState } from "react";
import { API_KEY, HTTPS } from "../data/API";
import { MOVIE_DATA, PEOPLE_DATA } from "../data/interfaces";
type Request = "top" | "popular" | "upcoming" | "genre";
export default function useFetchData(request: Request, page = 1, id?  :number) {
  let req = `movie/popular?language=en-US&page=${page}&vote_average.gte=${6}`;

  if (request === "top") {
    req = `movie/top_rated?language=en-US&page=${page}`;
  }

  if (request === "upcoming") {
    req = `movie/upcoming?language=en-US&page=${page}`;
  }
  if (request === 'genre') {
    req = `discover/movie?language=en-US&with_genres=${id}&page=${page}&vote_average.gte=7`
  }

  const [data, setData] = useState<{ results: MOVIE_DATA[] } | null>(null);
  const [people, setPeople] = useState<{results: PEOPLE_DATA[]}>({results: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      setIsLoading(true);
      try {
        const res = await fetch(`${HTTPS}${req}&api_key=${API_KEY}`);
        const data = await res.json();
        setData(data);
      } catch (e) {
        ("");
      }
      setIsLoading(false);
    }
    fetchData();
  }, [req, request]);

  return { data, isLoading};
}
