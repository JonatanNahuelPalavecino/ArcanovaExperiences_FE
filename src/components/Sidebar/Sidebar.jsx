import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from "../../assets/images/logo-nuevo.png"
import nombreLogo from "../../assets/images/nombre-logo.png"
import "./Sidebar.scss"
import { handleScrollOrNavigate } from "../utils/otros/handleScrollOrNavigate";

export const Sidebar = ({ open, setOpen, navItems }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const navTo = (path) => {
    setOpen(!open)
    handleScrollOrNavigate(path, navigate, location)
  }

  const DrawerList = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem 
            key={index} 
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "#0033CC",
                color: "#fff",
              },
              color: "black",
            }}
          >
            <ListItemButton onClick={() => navTo(item.id)}>
              <ListItemIcon sx={{minWidth: "40px"}}>{item.icon()}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer onClose={() => setOpen(!open)} open={open} anchor="right" disableScrollLock>
      <div className="sidebar">
        <MenuOpenIcon onClick={() => setOpen(!open)} sx={{ width: "30px", height: "30px", color: "white", cursor: "pointer"}}/>
        <div className="sidebar-box">
          <img
            className="sidebar-img"
            src={logo}
            alt="logo"
          />
          <img
            className="sidebar-nombreImg"
            src={nombreLogo}
            alt="logo"
          />
        </div>
      </div>
      <Divider/>
      {DrawerList}
    </Drawer>
  );
};
