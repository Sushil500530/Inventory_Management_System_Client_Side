import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from "../components/Shared/Container";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Header>
          <Outlet></Outlet>
        </Header>
      </Container>
    </div>
  );
};

export default MainLayout;