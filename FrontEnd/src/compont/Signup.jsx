import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
	const [input ,setInput]=useState({
		fullname:"",
		email:"",
		password:""
	  })
	  const navigate=useNavigate()
	const changeHeader  =(e)=>{
		setInput({...input,[e.target.name]:e.target.value})
	  }
	const submithandler = async(e)=>{
		e.preventDefault();
		try {
			
			const res=await axios.post("http://localhost:8080/api/v1/user/register",input,{
				headers:{
					'Content-Type':"application/json"
				},
				withCredentials:true
			});
			if(res.data.success){
				navigate("/login")
				toast.success(res.data.message)
			}
			
		} catch (error) {
			console.log(error);
			toast.success(error.response.data.message)
		}
	}
  return (
	
		<div className="flex  items-center justify-center w-screen mt-10 p-2 m-0" >
		 
		  <form onSubmit={submithandler} className="flex flex-col  gap-4 bg-white p-2  w-[20%]">
			<h1 className=" font-bold text-2xl uppercase my-2">Signup</h1>
			<input onChange={changeHeader} value={input.fullname} name='fullname' type="text" placeholder="Name" className="border border-gray-400  rounded-md p-1" />
			<input onChange={changeHeader} value={input.email}    name='email' type="Email" placeholder="Email" className="border border-gray-400  rounded-md p-1" />
			<input onChange={changeHeader} value={input.password} name='password' type="password" placeholder="password"  className="border border-gray-400  rounded-md p-1" />
		<button type="submit" className="  bg-gray-800 text-white my-2 rounded-md ">Signup</button> 
		<p>Alredy have account ?<Link to='/login' className="text-blue-600">Login</Link></p>
		</form>
		</div>
  )
}

export default Signup
