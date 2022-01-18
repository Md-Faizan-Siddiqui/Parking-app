import React from "react";
import "../../Style/AuthStyle.css";
import Textfield from "../../Components/TextFeild/TextField";
import { Formik, Form } from "formik";
import LoginImg from "../../Assets/loginImg.jpg";
import Button from "../../Components/Button/Button";
import { IoMail } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="main">
      <div className="container">
        <div className="bottom-corner-circle">
          <div className="bottom-corner-circle-child">
            <div className="bottom-corner-circle-child2"></div>
          </div>
        </div>

        <div className="top-corner-circle">
          <div className="top-corner-circle-child"></div>
        </div>
        <div className="main-form">
          <div className="form-container">
            <div className="form-img-div">
              <img src={LoginImg} alt="Form Image" className="signUpFormImg" />
            </div>
            <Formik>
              <div className="form">
                <div className="form-raper">
                  <h1 className="formHeading">Sign In!</h1>
                  <Form>
                    <Textfield placeholder="Email" Icon={IoMail} />
                    <Textfield placeholder="Password" Icon={GiPadlock} />
                    <div className="signUpBtnDiv">
                      <Button btnText="Sign In" width="59%"/>
                      <Button btnText="Sign Up" width="40%"/>
                    </div>
                    <div className="textDiv">
                    <Link to="">Forgot Password?</Link>
                    <p>Don't have an account? <Link to="/signup">SignUp here</Link></p>
                    </div>
                  </Form>
                </div>
              </div>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
