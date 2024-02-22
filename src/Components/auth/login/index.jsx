import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container } from "@mui/material";
import { useAuth } from "../../contexts/authContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/");
      } catch (error) {
        setIsSigningIn(false);
        setError(error.message);
      }
    }
  };
  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/home");
      } catch (error) {
        setIsSigningIn(false);
        setError(error.message);
      }
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {userLoggedIn && <navigate to="/home" replace />}
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSigningIn}
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          {isSigningIn ? "Signing In..." : "Sign In"}
        </Button>
        <Button
          onClick={onGoogleSignIn}
          variant="contained"
          color="primary"
          disabled={isSigningIn}
          fullWidth
          size="large"
          sx={{ mt: 2 }}
        >
          {isSigningIn ? "Signing In with Google..." : "Sign In with Google"}
        </Button>
      </form>
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
};

export default Login;
