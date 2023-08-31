import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Header({ handleDrawerToggle }) {
  const { user, logoutUser, handleLogin } = useAuth();

  return (
    <AppBar
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
        <Button
          autoFocus
          color="inherit"
          onClick={Object.keys(user).length !== 0 ? logoutUser : handleLogin}
          aria-label={Object.keys(user).length !== 0 ? "Logout" : "Login"}
          sx={{ position: "absolute", right: 15 }}
        >
          {Object.keys(user).length !== 0 ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
