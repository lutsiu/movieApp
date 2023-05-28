import useFetchData from '../../hooks/useFetchData';
import Slider from "./UI/Slider";
export default function Trending() {

  const {data, isLoading} = useFetchData('popular');

  return (
    <div>
      <Slider movies={data ? data.results : []} title="Popular" />
    </div>
  );
}
