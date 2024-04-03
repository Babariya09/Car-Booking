import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import logo from "../Image/logoo.jpg";
import { Navitem } from "./Navitem";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOnLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "84px", height: "62px" }}
          />
        </Link>
      </Typography>
      <Divider />
      <List sx={{ color: "black" }}>
        <div className="view">
          {Navitem.map((item) => {
            return (
              <p className="view1" key={item.id}>
                <Link
                  to={item.path}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    padding: "0px 20px 0px 20px",
                  }}
                >
                  {item.title}
                </Link>
              </p>
            );
          })}
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "white", boxShadow: "none", height: "4rem" }}>
          <Toolbar style={{ justifyContent: "space-between", display: "flex" }}>
            <Toolbar>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "84px", height: "62px" }}
                />
              </Link>
              <p style={{ fontWeight: 600 }}> </p>
            </Toolbar>
            <Typography
              variant="h6"
              component="img"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>

              <Button
                key="Home"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/home" className="btnactive">
                  Home
                </NavLink>
              </Button>
              <Button
                key="About"
                className="hover active"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/About" className="btnactive">
                  About
                </NavLink>
              </Button> <Button
                key="Populer"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/Populer" className="btnactive">
                  Popular Fleets
                </NavLink>
              </Button> <Button
                key="Book"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/service" className="btnactive">
                  Service
                </NavLink>
              </Button> <Button
                key="Book"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/team" className="btnactive">
                  Team
                </NavLink>
              </Button>
              <Button
                key="Driver"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/driverregister" className="btnactive">
                  Driver
                </NavLink>
              </Button>
              <Button
                key="Book"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >

                <NavLink to="/Book" className="btnactive">
                  Book Now
                </NavLink>
              </Button>
              <Button
                key="Contact"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/Contact" className="btnactive">
                  Contact us
                </NavLink>
              </Button>
              <Button
                key="Feedback"
                className="hover"
                sx={{
                  color: "black",
                  textTransform: "none",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <NavLink to="/FeedBack" className="btnactive">
                  Feedback
                </NavLink>
              </Button>
              <Button onClick={handleOnLogout} className="hover" style={{ fontWeight: "bold" }} sx={{
                color: "black",
                textTransform: "none",
                display: { xs: "none", sm: "block" },
              }}>
                Logout
              </Button>
            </Box>
            <Button
              key="Profile"
              className="hover"
              sx={{
                color: "black",
                textTransform: "none",
                display: { xs: "none", sm: "block" },
              }}
            >
              <NavLink to="/ShowProfile" className="btnactive">
                <AccountCircleIcon />
              </NavLink>

            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default DrawerAppBar;
