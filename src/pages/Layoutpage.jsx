import { Outlet } from "react-router-dom";
import NavBar from "../componenets/NavBar/NavBar";
import MainContainer from "../componenets/MainContainer/MainContainer";
import Footer from "../componenets/Footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Layout;
