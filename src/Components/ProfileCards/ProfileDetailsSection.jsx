import React from "react";
import UpdateProfile from "./UpdateProfile";
import PersonalInfoCard from "./PersonalInfoCard";

function ProfileDetailsSection() {
  return (
    <div className="proDetSec">
      <PersonalInfoCard/>
      <div className="proDetContainer">
        <UpdateProfile/>  
      </div>
    </div>
  );
}

export default ProfileDetailsSection;
