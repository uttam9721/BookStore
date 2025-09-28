

import React from 'react'

const Register = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
   <div className="max-w-md mx-auto mt-10 p-8 bg-[#ccc] rounded-lg shadow-lg">
  <form className="space-y-6" onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2 font-semibold text-gray-800">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2 font-semibold text-gray-800">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="mb-2 font-semibold text-gray-800">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-800">
        Confirm Password:
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
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

  )
}

export default Register
