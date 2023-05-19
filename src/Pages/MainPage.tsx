import LeftBar from "../components/main-page/LeftBar/LeftBar";
import Main from "../components/main-page/MainSection/Main";
import RightBar from "../components/main-page/RightBar/RightBar";

export default function MainPage() {
  return (
    <div className="flex justify-between">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}
