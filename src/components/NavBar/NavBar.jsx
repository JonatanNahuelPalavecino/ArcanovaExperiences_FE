import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { HideOnScroll } from "./HideOnScroll";
import { useNavbarScroll } from "../Hooks/useNavbarScroll";
import MenuIcon from "@mui/icons-material/Menu";
import SailingIcon from '@mui/icons-material/Sailing'
import { Sidebar } from "../Sidebar/Sidebar";
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from "@mui/icons-material/Home";
import ReviewsIcon from '@mui/icons-material/Reviews'
import logo from "../../assets/images/logo.PNG";
import "./NavBar.scss";
import { handleScrollOrNavigate } from "../utils/otros/handleScrollOrNavigate";

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const scrolled = useNavbarScroll(100);
  const navigate = useNavigate();
  const location = useLocation();

const navItems = [
  { id: "home", name: "Home", icon: () => <HomeIcon /> },
  { id: "about-us", name: "About us", icon: () => <GroupIcon /> },
  { id: "experiences", name: "Experiences", icon: () => <SailingIcon /> },
  { id: "testimonials", name: "Testimonials", icon: () => <ReviewsIcon /> },
];

  return (
    <>
      <HideOnScroll {...props}>
        <Motion.div
          initial={{
            backgroundColor: "rgb(46, 62, 165)",
            boxShadow: "none",
          }}
          animate={{
            backgroundColor: scrolled
              ? "#000C66"
              : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled
              ? "0 0 1em 0.25em #121212, 0 0 rgb(0 0 0), 0 0 0.75em 0.25em rgb(255 255 255)"
              : "none",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="nav"
        >
          <div className="nav-content">
            <div className="nav-logo">
              <div className="nav-imgBox" onClick={() => handleScrollOrNavigate("home", navigate, location)}>
                <img className="nav-img" src={logo} alt="logo" />
              </div>
              <div>
                <p className="nav-text">Arcanova Experiences</p>
                <p className="nav-subText">Travel Agency</p>
              </div>
            </div>
            <nav className="nav-enlace">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleScrollOrNavigate(item.id, navigate, location)}
                >
                  <Motion.div
                    initial={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(10px)",
                    }}
                    animate={{
                      backgroundColor: scrolled
                        ? "rgba(255, 255, 255, 0)"
                        : "rgba(255, 255, 255, 0.3)",
                      backdropFilter: scrolled ? "none" : "blur(10px)",
                      borderRadius: "0.5em",
                      overflow: "hidden",
                    }}
                    whileHover={{
                      backgroundColor: scrolled
                        ? "rgb(255, 255, 255)"
                        : "rgba(0, 21, 155, 0.5)",
                      transition: { duration: 0.1, ease: "easeInOut" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Motion.p
                      initial={{ color: "#000000" }}
                      animate={{
                        color: scrolled ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
                      }}
                      whileHover={{
                        color: scrolled ? "#000000" : "#ffffff",
                        transition: { duration: 0.1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="nav-item"
                    >
                      {item.name}
                    </Motion.p>
                  </Motion.div>
                </div>
              ))}
            </nav>
            <div className="nav-burger">
              <MenuIcon
                onClick={() => setOpen(!open)}
                sx={{
                  color: scrolled ? "white" : "black",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
            </div>
            <Sidebar open={open} setOpen={setOpen} navItems={navItems} />
          </div>
        </Motion.div>
      </HideOnScroll>
    </>
  );
};
