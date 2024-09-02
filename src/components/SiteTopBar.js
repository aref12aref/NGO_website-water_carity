import { NavLink } from "react-router-dom";
import "./SiteBarsStyle.css";
import { useContext } from "react";
import { WindowSize } from "../context/screenContext";
import { Menu } from "../context/menuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SiteTopBar() {
  const windowContext = useContext(WindowSize);
  const windowsize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const setIsOpen = menu.setIsOpen;

  return (
    <nav className="topbar">
      {windowsize > 600 ? (
        <>
          <div className="topbar-left">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              className="topbar-logo"
            />
            <NavLink to={"/"} className="topbar-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink
              to={"/events"}
              className="topbar-link"
              activeclassname="active"
            >
              Events
            </NavLink>
            <NavLink
              to={"/programs"}
              className="topbar-link"
              activeclassname="active"
            >
              Programs
            </NavLink>
          </div>
          <div className="topbar-right">
            <NavLink
              to={"/donate"}
              className="topbar-link"
              activeclassname="active"
            >
              Donate
            </NavLink>
            <NavLink
              to={"/about"}
              className="topbar-link"
              activeclassname="active"
            >
              About Us
            </NavLink>
            <NavLink
              to={"/contact"}
              className="topbar-link"
              activeclassname="active"
            >
              Contact Us
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="topbar-left">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              className="topbar-logo"
            />
            <FontAwesomeIcon
              icon={faBars}
              fontSize="20px"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="topbar-barsIcon"
            />
          </div>
        </>
      )}
    </nav>
  );
}
