

// import React, { useState } from 'react'
// import axios from 'axios'

// const Register = () => {
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('')
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//        try {
//         const response=await axios.post('http://localhost:3000/api/auth/register',{
//           name,
//           email,
//           password
//         })
//         if (response.data.success) {
//           alert('Register successfully')
//         }else{
//           alert('register failed')
//         }

//        } catch (error) {
//         console.log(error); 
//        }
//     }
//   return (
//    <div className="max-w-md mx-auto mt-10 p-8 bg-[#ccc] rounded-lg shadow-lg">
//   <form className="space-y-6" onSubmit={handleSubmit}>
//     <div className="flex flex-col">
//       <label htmlFor="name" className="mb-2 font-semibold text-gray-800">
//         Name:
//       </label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         name="name"
//         placeholder="Enter your name"
//         className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </div>

//     <div className="flex flex-col">
//       <label htmlFor="email" className="mb-2 font-semibold text-gray-800">
//         Email:
//       </label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         name="email"
//         placeholder="Enter your email"
//         className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </div>

//     <div className="flex flex-col">
//       <label htmlFor="password" className="mb-2 font-semibold text-gray-800">
//         Password:
//       </label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//         name="password"
//         placeholder="Enter your password"
//         className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </div>

//     <div className="flex flex-col">
//       <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-800">
//         Confirm Password:
//       </label>
//       <input
//         type="password"
//         id="confirmPassword"
//         name="confirmPassword"
//         placeholder="Confirm your password"
//         className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </div>

//     <button
//       type="submit"
//       className="w-full bg-gray-900 text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
//     >
//       Sign Up
//     </button>
//   </form>
// </div>

//   )
// }

// export default Register


  import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/registration', {
        name,
        email,
        password,
      });
      console.log(response);
      

      if (response.data.success) {
        toast.success('✅ Register successfully');

        navigate('/');
        setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
      } else {
        toast.error(response.data.message || "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-[#ccc] rounded-lg shadow-lg">
      <Toaster />
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-gray-800">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-semibold text-gray-800">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-800">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
