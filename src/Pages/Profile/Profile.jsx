import React from "react";
import "./Profile.css";
import TextField from "../../Components/TextFeild/TextField";
import ProfileImageSection from "../../Components/ProfileCards/ProfileImageSection";
import ProfileDetailsSection from "../../Components/ProfileCards/ProfileDetailsSection";

function Profile() {
  return (
    <div className="profileMain">
      <div className="proContainer">
        <ProfileImageSection />
        <ProfileDetailsSection />
      </div>
    </div>
  );
}

export default Profile;
