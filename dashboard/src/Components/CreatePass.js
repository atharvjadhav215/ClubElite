import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validation for the password
  const validatePassword = (pwd) => {
    const capitalLetter = /[A-Z]/;
    const smallLetter = /[a-z]/;
    const number = /[0-9]/;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (!capitalLetter.test(pwd)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!smallLetter.test(pwd)) {
      return "Password must include at least one lowercase letter.";
    }
    if (!number.test(pwd)) {
      return "Password must include at least one number.";
    }
    if (!specialCharacter.test(pwd)) {
      return "Password must include at least one special character.";
    }
    if (pwd.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !passwordError &&
      !confirmPasswordError &&
      password &&
      confirmPassword
    ) {
      toast.success("Account created successfully!");
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };
  const navigate = useNavigate();

  return (
    <>
      {/* Background Image Container */}
      <div
        className="h-screen w-screen relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1226721039/photo/3d-different-size-squares-technology-dark-gray-conceptual-abstract-background.jpg?s=612x612&w=0&k=20&c=1XkogjrCllXGNmm38IN-Dim7WU16wlhyjtznIGQvZJ8=')",
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10"></div>

        {/* Main Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full"
          style={{
            animation: "fade-in-up 1.0s",
            animationDelay: "0.1s",
            animationFillMode: "forwards",
          }}
        >
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-300">
              Create Password For your account...
            </h1>
          </div>

          {/* Form Section */}
          <form
            className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2 "
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="transform hover:scale-105 transition duration-500 ease-in-out  hover:shadow-lg hover:shadow-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-lg hover:shadow-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Confirm your password"
              />
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-2">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={() => navigate("/club/after_login")}
              type="submit"
              className=" ease-in-out focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-black w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-500 transform hover:scale-110"
            >
              Create Account
            </button>
          </form>
        </div>
        <style>
          {`
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
        </style>
      </div>
    </>
  );
}
