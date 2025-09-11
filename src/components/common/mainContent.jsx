import Header from "./header";
import bg from "../../../public/background-image.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function setCookie(name,value,days){
  const expire = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${value};expires=${expire}; path=/`;
}

export default function MainContent() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("");
  const [role,setRole]= useState("user");
  const [message,setMessage]= useState(null);
  const handleSubmit= async ()=>{
    try{
    const response = await axios.post(
    `http://localhost:8060/api/${role}/login`,
    {email:email,pass:pass,role:role})
     setMessage(response.data.message);
     setCookie("token",response.data.token,1);
     navigate('/dashboard');
    }catch(err){
       setMessage(err.message);
    }
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}

    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Content above overlay */}
      <div className="relative z-10">
        {/* Header */}
        {/* Sign In Form */}
        <div className="flex justify-center mt-0">
          <div className="bg-gray-900 bg-opacity-80 p-10 rounded-lg w-full max-w-md">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">
              Sign In
            </h2>
            <span className="text-white mb-4 text-center block">
               {message}
            </span>
            {/* Email Input */}
            <input
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              placeholder="Email"
              required="true"
              className="w-full mb-4 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
             value={pass}
             onChange={(e)=>{setPass(e.target.value)}}
              type="password"
              placeholder="Password"
              required="true"
              className="w-full mb-6 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
            onChange={(e)=>{setRole(e.target.value)}}
              className="w-full mb-6 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <div className="mt-4 text-gray-400 text-sm">
             
              <Link to='/signup' className="text-white hover:underline">
                Sign up now
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}