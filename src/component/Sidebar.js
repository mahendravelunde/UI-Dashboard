import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/img/faces/user4.jpg";
import probg from "../assets/img/faces/download.jpg";

// import user1 from "../assets/images/users/user4.jpg";
// import probg from "../assets/images/bg/download.jpg";



const navigation = [
  {
    title: "Dashboard",
    href: "/fullLayout",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Notification",
    href: "/fullLayout",
    icon: "bi bi-bell",
  },
  {
    title: "Setting",
    href: "/fullLayout",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/fullLayout",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/fullLayout",
    icon: "bi bi-card-text",
  },
  {
    title: "Forms",
    href: "/fullLayout",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/fullLayout",
    icon: "bi bi-link",
  },
  {
    title: "Grid",
    href: "/fullLayout",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/fullLayout",
    icon: "bi bi-layout-split",
  },
 
  {
    title: "About",
    href: "/fullLayout",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">Mahendra Velunde</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname !== navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
