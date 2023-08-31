import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const { user, loginUser, loading, loginErrors, resetLoginErrors } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const loginForm = useRef(null);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      navigate("/");
    }
  });

  const switchToRegister = () => {
    resetLoginErrors(); // Reset login errors when switching to Register
    navigate("/register"); // Add your navigation logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    };

    console.log("handle login,", userInfo);

    loginUser(userInfo);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toolbar />
      <div>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: "red" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Box>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            aria-required="true"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={
              loginErrors.email || loginErrors.error || loginErrors.user
            }
            error={
              loginErrors.email || loginErrors.error || loginErrors.user
                ? true
                : false
            }
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            aria-required="true"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={loginErrors.password || loginErrors.error}
            error={loginErrors.password || loginErrors.error ? true : false}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 1 }}
          >
            Sign In
            {loading && <CircularProgress size={30} />}
          </Button>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Dont have an account?{" "}
            <Link
              sx={{ ":hover": { cursor: "pointer" } }}
              component="a"
              underline="hover"
              onClick={switchToRegister}
            >
              Register
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
}

export default Login;
