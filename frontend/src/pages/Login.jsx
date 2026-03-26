import { Home, Users, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const API = "http://localhost:5000/api";

// 🔐 Axios instance with token
const api = axios.create({
  baseURL: API,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---------------- AUTH PAGES ----------------
export function Login({ setPage, setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setAuth(true);
      setPage("dashboard");
    } catch (error) {
      const message = error && error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Login failed";
      alert(message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md text-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
          />

          <button type="submit" className="bg-white text-purple-600 font-semibold py-3 rounded-lg">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <span onClick={() => setPage("register")} className="underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Account created, please login");
      setPage("login");
    } catch (error) {
      const message = error && error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Register failed";
      alert(message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md text-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
          />

          <button type="submit" className="bg-white text-purple-600 font-semibold py-3 rounded-lg">
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <span onClick={() => setPage("login")} className="underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

// ---------------- DASHBOARD ----------------
export default function Dashboard() {
  const [page, setPage] = useState("login");
  const [isAuth, setAuth] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (error) {
        localStorage.removeItem("token");
        setAuth(false);
      }
    }

    if (isAuth) fetchUser();
  }, [isAuth]);

  if (!isAuth) {
    if (page === "register") return <Register setPage={setPage} />;
    return <Login setPage={setPage} setAuth={setAuth} />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <aside className="w-64 bg-black/20 backdrop-blur-md p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold tracking-tight">EMS</h1>

        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 hover:text-pink-300">
            <Home size={20} /> Dashboard
          </button>
          <button className="flex items-center gap-3 hover:text-pink-300">
            <Users size={20} /> Tenants
          </button>
          <button className="flex items-center gap-3 hover:text-pink-300">
            <Settings size={20} /> Settings
          </button>
        </nav>

        <div className="mt-auto">
          <p className="text-sm">{user && user.name}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setAuth(false);
              setPage("login");
            }}
            className="text-sm hover:text-pink-300"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Welcome, {user && user.name ? user.name : "User"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Total Tenants</h3>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Available Rooms</h3>
            <p className="text-2xl font-bold mt-2">15</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Revenue</h3>
            <p className="text-2xl font-bold mt-2">₦2.4M</p>
          </div>
        </div>
      </main>
    </div>
  );
}
