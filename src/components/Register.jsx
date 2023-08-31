import { useRef, useState } from "react";
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

function Register() {
  const navigate = useNavigate();
  const { registerUser, registerErrors, loading, resetRegisterErrors } =
    useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const registerForm = useRef(null);

  const switchToLogin = () => {
    resetRegisterErrors(); // Reset login errors when switching to Register
    navigate("/login"); // Add your navigation logic
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };
    registerUser(userInfo);
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
            Sign up
          </Typography>
        </Box>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            aria-required="true"
            fullWidth
            id="name"
            label="Name"
            aria-label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            helperText={registerErrors.name || registerErrors.error}
            error={registerErrors.name || registerErrors.error ? true : false}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={
              registerErrors.email ||
              registerErrors.error ||
              registerErrors.user
            }
            error={
              registerErrors.email ||
              registerErrors.error ||
              registerErrors.user
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
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={registerErrors.password || registerErrors.error}
            error={
              registerErrors.password || registerErrors.error ? true : false
            }
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
            Sign Up
            {loading && <CircularProgress size={30} />}
          </Button>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Already have an account?{" "}
            <Link
              sx={{ ":hover": { cursor: "pointer" } }}
              component="a"
              underline="hover"
              onClick={switchToLogin}
            >
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
}

export default Register;
