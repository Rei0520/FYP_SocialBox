"use client";

import Link from "next/link";
import "./LogIn.css";
import { useContext, useState } from "react";
import { MyyStateContext } from "@/app/provider";
import { useRouter } from "next/navigation";

const onLogIn = () => {};

export const LogIn = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const state = useContext(MyyStateContext);
  console.log(inputs);

  const onLogIn = () => {
    state?.setContext({
      auth: { password: inputs.password, username: inputs.username },
    });
  };

  const validateForm = () => {
    if (!inputs.username.trim()) {
      setValidationMessage("Username is required");
      return false;
    }
    if (inputs.password.length < 6) {
      setValidationMessage("Password must be at least 8 characters long");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      onLogIn();
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...inputs,
          wallet: "metaMask",
          email: "example@gmail.com",
          userType: "creator",
        })
      );
      router.push("/pages/creator");
    }
  };

  return (
    <div className="full_height flex_center">
      <div className="login_container">
        <div className="login_title">Log in</div>
        <form onSubmit={handleSubmit}>
          <div className="login_label">User name</div>
          <input
            className="login_input_username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="you name here"
          />
          <div className="login_label">Password</div>
          <input
            type="password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            value={inputs.password}
            className="login_input_password"
            placeholder="*******"
          />
          <div className="flex">
            <input type="checkbox" />
            <div className="login_remember">Remember me</div>
            <div className="flex_grow" />
            <div className="login_forgot">Forgot Password ?</div>
          </div>
          {validationMessage && (
            <div className="login_errorMessage">{validationMessage}</div>
          )}

          <button className="login_button">Log In</button>
        </form>

        <div className="login_signup flex_center">
          Don’t have an Account ?{" "}
          <Link href={"/pages/signUp"} className="login_signup_bold">
            Sign up
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
