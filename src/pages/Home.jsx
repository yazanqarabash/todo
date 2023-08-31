// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotesIcon from "@mui/icons-material/Notes";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import TasksList from "../components/TasksList";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const drawerWidth = 240;

function Home({ mobileOpen, handleDrawerToggle }) {
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {user && (
            <Button
              autoFocus
              color="inherit"
              onClick={logoutUser}
              aria-label={user ? "Logout" : "Login"}
              // sx={{ position: "absolute", right: 15 }}
            >
              {user ? "Logout" : "Login"}
            </Button>
          )}
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
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
          <List>
            <ListItemButton key="Todo">
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItemButton>

            {/* <ListItemButton key="Account" onClick={loadAccountPage}>
            <ListItemIcon>
            <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton> */}

            {/* <ListItemButton key="Logout" onClick={logoutHandler}>
            <ListItemIcon>
            <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton> */}
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* <Divider />
        <center>
        <Avatar src={state.profilePicture} />
        <p>
        {state.firstName} {state.lastName}
        </p>
      </center> */}
          <Divider />
          <List>
            <ListItemButton key="Todo">
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItemButton>

            {/* <ListItemButton key="Account" onClick={loadAccountPage}>
            <ListItemIcon>
            <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton> */}

            {/* <ListItemButton key="Logout" onClick={logoutHandler}>
            <ListItemIcon>
            <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton> */}
          </List>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* <Account /> */}
        <TasksList />
      </Box>
    </Box>
  );
}

export default Home;
