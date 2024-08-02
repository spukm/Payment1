import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/appSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeHeader = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submithandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setAuthUser(res.data.message));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex  items-center justify-center w-screen  h-screen">
      <form
        onSubmit={submithandler}
        action=""
        className="flex flex-col  gap-4 bg-white mb-40  w-[20%]"
      >
        <h1 className=" font-bold text-2xl uppercase my-2">Login</h1>
        <input
          onChange={changeHeader}
          value={input.email}
          name="email"
          type="Email"
          placeholder="Email"
          className="border border-gray-400  rounded-md p-1"
        />
        <input
          onChange={changeHeader}
          value={input.password}
          name="password"
          type="password"
          placeholder="password"
          className="border border-gray-400  rounded-md p-1"
        />
        <button
          type="submit"
          className="  bg-gray-800 text-white my-2 rounded-md "
        >
          Login
        </button>
        <p>
          Don't have account ?
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
