import React from "react";
import "./Button.css";

function Button({ btnText, customClass, width, onClick }) {
  console.log(width, "width");
  console.log(customClass, "customClass");
  return (
    <>
      <button
        onClick={onClick}
        className={`${customClass ? customClass : "btn"} `}
        type="button"
        style={{ width: width ? width : null }}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
