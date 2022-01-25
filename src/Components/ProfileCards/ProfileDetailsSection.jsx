import React from "react";
import {FiMail} from "react-icons/fi"
import {HiOutlineHome} from "react-icons/hi"
import {MdOutlinePhoneAndroid} from "react-icons/md"


function ProfileDetailsSection() {
  return (
    <div className="proDetSec">
      <div className="proDetContainer">
        <div className="div1st">
          <span className="nameSpan">
            <p>User Name</p>
          </span>
          <p>985 North Canterbury Rd.</p>
          <p>Hopewell Junction, NY 12533</p>
        </div>
        <div className="div2nd">
        <div className="iconsDiv">
        <HiOutlineHome className="icon" />
          <span>Home</span>
        </div>
        <div className="iconsDiv">
        <FiMail className="icon"/>
          <span>E-mail</span>
        </div>
          <div className="iconsDiv">
          <MdOutlinePhoneAndroid className="icon"/>
          <span>Phone</span>
          </div>
        </div>
      </div>

      <div className="proDetContainer">
        <div className="div1st">
          <span className="nameSpan">
            <p>User Name</p>
          </span>
          <p>985 North Canterbury Rd.</p>
          <p>Hopewell Junction, NY 12533</p>
        </div>
        <div className="div2nd">
        <div className="iconsDiv">
        <HiOutlineHome className="icon" />
          <span>Home</span>
        </div>
        <div className="iconsDiv">
        <FiMail className="icon"/>
          <span>E-mail</span>
        </div>
          <div className="iconsDiv">
          <MdOutlinePhoneAndroid className="icon"/>
          <span>Phone</span>
          </div>
        </div>
      </div>

      <div className="proDetContainer">
        <div className="div1st">
          <span className="nameSpan">
            <p>User Name</p>
          </span>
          <p>985 North Canterbury Rd.</p>
          <p>Hopewell Junction, NY 12533</p>
        </div>
        <div className="div2nd">
        <div className="iconsDiv">
        <HiOutlineHome className="icon" />
          <span>Home</span>
        </div>
        <div className="iconsDiv">
        <FiMail className="icon"/>
          <span>E-mail</span>
        </div>
          <div className="iconsDiv">
          <MdOutlinePhoneAndroid className="icon"/>
          <span>Phone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsSection;
