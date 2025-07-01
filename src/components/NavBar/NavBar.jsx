import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion as Motion } from "framer-motion";
import { HideOnScroll } from "./HideOnScroll";
import { useNavbarScroll } from "../Hooks/useNavbarScroll";
import "./NavBar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import WineBarIcon from "@mui/icons-material/WineBar";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import logo from "../../assets/images/logo.png";

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const scrolled = useNavbarScroll(100);

  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: () => <HomeIcon />,
    },
    {
      path: "/about-us",
      name: "About us",
      icon: () => <CommentIcon />,
    },
    {
      path: "/services",
      name: "Experiences",
      icon: () => <WineBarIcon />,
    },
    {
      path: "/testimonials",
      name: "Testimonials",
      icon: () => <ShoppingCartIcon />,
    },
  ];

  return (
    <>
      <HideOnScroll {...props}>
        <Motion.div
          initial={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            boxShadow: "none",
          }}
          animate={{
            backgroundColor: scrolled
              ? "rgb(0, 0, 0)"
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
              <Link className="nav-imgBox" to="/">
                <img className="nav-img" src={logo} alt="logo" />
              </Link>
              <div>
                <p className="nav-text">Arcanova Experiences</p>
                <p className="nav-subText">Travel Agency</p>
              </div>
            </div>
            <nav className="nav-enlace">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{ textDecoration: "none" }}
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
                        ? "rgba(255, 255, 255, 0)"
                        : "rgba(0, 21, 155, 0.5)",
                      transition: { duration: 0.1, ease: "easeInOut" },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Motion.p
                      initial={{ color: "rgb(0, 0, 0)" }}
                      animate={{
                        color: scrolled ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
                      }}
                      whileHover={{
                        color: scrolled ? "#b0976d" : "#ffffff",
                        transition: { duration: 0.1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="nav-item"
                    >
                      {item.name}
                    </Motion.p>
                  </Motion.div>
                </Link>
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
