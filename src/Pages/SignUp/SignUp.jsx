import React from "react";
import "../../Style/AuthStyle.css";
import Textfield from "../../Components/TextFeild/TextField";
import { Formik, Form } from "formik";
import FormImg from "../../Assets/img1.jpg";
import Button from "../../Components/Button/Button";
import { BsPersonFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";

function SignUp() {
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
              <img src={FormImg} alt="Form Image" className="signUpFormImg" />
            </div>
            <Formik>
              <div className="form">
                <div className="form-raper">
                  <h1 className="formHeading">Welcome!</h1>
                  <Form>
                    <Textfield placeholder="Email" Icon={IoMail} />
                    <Textfield placeholder="Phone" Icon={BsFillTelephoneFill} />
                    <Textfield placeholder="Password" Icon={GiPadlock} />
                    <div className="signUpBtnDiv">
                      <Button btnText="Sign Up" width="59%" />
                      <Button btnText="Sign In"  width="40%" /> {/* customClass="signInBtn" */}
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

export default SignUp;
