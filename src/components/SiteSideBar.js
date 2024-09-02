import { NavLink } from "react-router-dom";

export default function SiteSideBar() {
  return (
    <nav className="site-sidebar">
      <div className="site-sidebar-links">
        <NavLink to={"/"} className="siteSide-link" activeclassname="active">
          Home
        </NavLink>
        <NavLink
          to={"/events"}
          className="siteSide-link"
          activeclassname="active"
        >
          Events
        </NavLink>
        <NavLink
          to={"/programs"}
          className="siteSide-link"
          activeclassname="active"
        >
          Programs
        </NavLink>
        <NavLink
          to={"/donate"}
          className="siteSide-link"
          activeclassname="active"
        >
          Donate
        </NavLink>
        <NavLink
          to={"/about"}
          className="siteSide-link"
          activeclassname="active"
        >
          About Us
        </NavLink>
        <NavLink
          to={"/contact"}
          className="siteSide-link"
          activeclassname="active"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
