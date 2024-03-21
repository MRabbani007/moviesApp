import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./Navbar";
import SkeletonContentPage from "../../skeletons/SkeletonContentPage";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";

const displayFooter = ["", "myivi", "movies", "search"];

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="page-container">
        <Suspense fallback={<SkeletonContentPage />}>
          <Outlet />
        </Suspense>
        {displayFooter.findIndex(
          (item) => item === location?.pathname.replace("/", "")
        ) >= 0 && <Footer />}
      </div>
      <BottomMenu />
    </>
  );
};
export default Layout;
