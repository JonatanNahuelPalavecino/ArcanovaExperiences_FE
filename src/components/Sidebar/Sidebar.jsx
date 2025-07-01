import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./Sidebar.scss"

export const Sidebar = ({ open, setOpen, navItems }) => {
  const navigate = useNavigate();

  const navTo = (path) => {
    setOpen(!open)
    navigate(path)
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
                backgroundColor: "#b0976d", // color hover
                color: "#fff",
              },
              color: "black", // color por defecto
            }}
          >
            <ListItemButton onClick={() => navTo(item.path)}>
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
        <MenuOpenIcon onClick={() => setOpen(!open)} sx={{ width: "30px", height: "30px", cursor: "pointer"}}/>
        <div className="sidebar-box">
          <img
            className="sidebar-img"
            src="https://res.cloudinary.com/dabgfr6qn/image/upload/v1742325732/uploads/logo.png"
            alt="logo"
          />
          <p className="sidebar-text">Arcanova Experiences</p>
        </div>
      </div>
      <Divider/>
      {DrawerList}
    </Drawer>
  );
};
