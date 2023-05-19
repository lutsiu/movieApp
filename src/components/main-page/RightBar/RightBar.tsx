import Auth from "./Auth/Auth"
import Watchlist from "./Watchlist"
import TopRated from './TopRated';
import Genres from './Genres';
export default function RightBar() {
  
  

  return (
    <div className="bg-slate-950 w-[23%] py-[4rem] xl:pl-[1rem] 2xl:pl-[3rem] overflow-x-hidden">
      <Auth/>
      <Watchlist/>
      <TopRated/>
      <Genres/>
    </div>
  )
}