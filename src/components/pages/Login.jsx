import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // we'll treat this as email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.error("Google Login Error:", err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username + "@gita.com", password); // adding dummy domain
      navigate("/");
    } catch (err) {
      console.error("Signup Error:", err.message);
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username + "@gita.com", password);
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err.message);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#232321">
      <div className="h-[55vh] w-[350px] flex flex-col items-center bg-white text-black p-6 rounded shadow-md">
        <h1 className="text-3xl mb-6 font-bold">Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded mb-2"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <button
          className="bg-green-600 text-white w-full py-2 rounded mb-4"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <button onClick={handleGoogleLogin} className="border w-full px-4 py-2 rounded flex items-center justify-center gap-2">
          <img width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
