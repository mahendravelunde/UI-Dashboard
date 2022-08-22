import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Header from "./Header";

const FullLayout = () => {
  return (
    <main>
      
      <Header />
      <div className="pageWrapper d-lg-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Container className="p-4" fluid>
                <Dashboard/>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
