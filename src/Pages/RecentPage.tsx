import Recent from "../components/recent-page/Recent"
import BackHomeButton from '../UI/Buttons/BackHomeButton';
export default function RecentPage() {

  return (
    <div className="mt-[3rem] mx-[4rem]">
      <BackHomeButton link="../"/>
      <Recent/>
    </div>
  )
}