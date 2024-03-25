// import Banner from "../Home/components/Banner";
import SideMenu from "./components/ForumSideMenu";
import CenterContent from "./components/ForumCenterContent";
import TrendingPosts from "./components/ForumTrendingPosts"
import "../../assets/css/forum.css"

export default function ForumPag() {
  return (
    <>
    <div className="forum-page-body">
      <SideMenu/>
      <CenterContent/>
      <TrendingPosts/>
    </div>
    </>
  );
}
