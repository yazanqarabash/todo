import { AppBar, Button, Toolbar } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

function LoginHeader() {
  const { user, logoutUser, handleLogin } = useAuth();

  return (
    <AppBar>
      <Toolbar>
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

export default LoginHeader;
