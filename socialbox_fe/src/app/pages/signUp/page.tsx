import Link from "next/link";
import "./signup.css";

export const SignUp = () => {
  return (
    <div className="full_height flex_center">
      <div className="signup_container">
        <div className="signup_title">Sign Up</div>
        <div className="signup_label">Email</div>
        <input className="signup_input signup_m24" placeholder="xxx@xx.xx" />
        <div className="signup_label">User name</div>
        <input className="signup_input signup_m24" placeholder="you name here" />
        <div className="signup_label">User Type</div>
        <input className="signup_input signup_m24" placeholder="type" />
        <div className="signup_label">Password</div>
        <input className="signup_input signup_m24" placeholder="*******" />
     
        <div className="signup_label">Confirm Password</div>
        <input className="signup_input signup_m24" placeholder="*******" />
     
        <button className="signup_button signup_m18">Sign Up</button>
        <div className="signup_signin flex_center">
          Don’t have an Account ?{" "}
          <Link href={"/pages/login"} className="signup_signin_bold">Sign in</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
