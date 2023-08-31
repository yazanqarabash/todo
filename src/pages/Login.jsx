import LockOutlinedIcon from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { authenticateUser } from "../api/users";

function Login() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setUser((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  };

  const handleSubmitUser = () => {
    setLoading(true)
    authenticateUser(user)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={errors.email || errors.error}
            error={errors.email || errors.error ? true : false}
            onChange={handleLogin}
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
            helperText={errors.password || errors.error}
            error={errors.password || errors.error ? true : false}
            onChange={handleLogin}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading || !state.email || !state.password}
          >
            Sign In
            {loading && <CircularProgress size={30} />}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {errors.general && (
            <Typography variant="body2">{errors.general}</Typography>
          )}
        </form>
      </div>
    </Container>
  );
}

export default Login;
