"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./signup.css";

export const SignUp = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState<any>({});

  // Validate form fields
  const validate = () => {
    let tempErrors: any = {};

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }

    // Username validation
    if (!formData.userName.trim()) {
      tempErrors.userName = "User name is required";
    }

    // User type validation
    if (!formData.userType) {
      tempErrors.userType = "User type is required";
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords must match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      // Here, you can send data to server or perform other actions
    }
  };

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="full_height flex_center">
      <div className="signup_container">
        <div className="signup_title">Sign Up</div>

        <div className="signup_label">Email</div>
        <input
          className="signup_input signup_m24"
          placeholder="xxx@xx.xx"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <div className="signup_label">User name</div>
        <input
          className="signup_input signup_m24"
          placeholder="Your name here"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && <div className="error">{errors.userName}</div>}

        <div className="signup_label">User Type</div>
        <select
          className="signup_input signup_m24"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select your user type
          </option>
          <option value="Creator">Creator</option>
          <option value="Consumer">Consumer</option>
        </select>
        {errors.userType && <div className="error">{errors.userType}</div>}

        <div className="signup_label">Password</div>
        <input
          className="signup_input signup_m24"
          type="password"
          placeholder="*******"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <div className="signup_label">Confirm Password</div>
        <input
          className="signup_input signup_m24"
          type="password"
          placeholder="*******"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}

        <button className="signup_button signup_m18" onClick={handleSubmit}>
          Sign Up
        </button>

        <div className="signup_signin flex_center">
          Don’t have an Account?{" "}
          <Link className="signup_signin_bold" href={"/pages/login"}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
