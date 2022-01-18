import React from "react";
import "./Button.css";

function Button({ btnText, customClass, width }) {
  console.log(width,"width")
  console.log(customClass, "customClass");
  return (
    <>
      <button
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
