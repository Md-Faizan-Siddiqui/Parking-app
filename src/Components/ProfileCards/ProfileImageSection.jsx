import Button from "../Button/Button";
import React from "react";
import "./profileSection.css";

function ProfileImageSection() {
  return (
    <div className="proImgSec">
      <label className="lable">
        <input type="file" hidden />
        <div className="proImg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatVs7uGep2MFuKhs7HOoFaHFTxfEpY1CrlA&usqp=CAU"
            alt=""
          />
          <div className="praHover"><p>Change Image</p></div>
          <div className="userName"><p>Name</p></div>
        </div>
      </label>
      <div className="OtherFields">
        <Button btnText="Profile" customClass="profileBtn" />
        <Button btnText="Edit Profile" customClass="profileBtn" />
        <Button btnText="Change Password" customClass="profileBtn" />
      </div>
    </div>
  );
}

export default ProfileImageSection;
