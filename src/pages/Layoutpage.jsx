import { Outlet } from "react-router-dom";
import NavBar from "../componenets/NavBar/NavBar";
import MainContainer from "../componenets/MainContainer/MainContainer";
import Footer from "../componenets/Footer/Footer";
import ContentContainer from "../componenets/ContentContainer/ContentContainer";

function Layout() {
  return (
    <>
    <ContentContainer>
      <NavBar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </ContentContainer>
    </>
  );
}

export default Layout;
