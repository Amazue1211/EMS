import React, { useState } from "react";

export function Register({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    // Mock API response
    setTimeout(() => {
      setLoading(false);
      // Simulate success
      if (email.includes("@")) {
        alert("Account created, please login");
        setPage("login");
      } else {
        // Simulate error
        alert("Register failed: Invalid email");
      }
    }, 1500);
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
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/20 outline-none placeholder-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white/30 hover:bg-white/50 transition-colors p-3 rounded-lg font-semibold mt-2 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-white/80">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;