import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const response = await axios.post(
        `http://localhost:8060/api/${role}/login`,
        { email: email, pass: password, role: role }
      );
      alert(response.data.message || "Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold text-center mb-4">Sign In</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="text-white border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPass(e.target.value)}
          className="text-white border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="text-white border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
