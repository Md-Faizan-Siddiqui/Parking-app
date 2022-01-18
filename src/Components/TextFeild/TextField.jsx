import { ErrorMessage, useField } from "formik";
import "./TextField.css";
// import { BsPersonFill } from "react-icons/bs";

const Textfield = ({ label, placeholder, required, Icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div
        className={`${"inputDiv"} ${
          meta.touched && meta.error && "is-invalid"
        }`}
      >
        {Icon && <Icon className="inputIcon" />}
        <input
          required={required}
          placeholder={placeholder}
          className="input"
          // className={`${"input"} ${meta.touched && meta.error && "is-invalid"}`}
          label={label}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          {...field}
          {...props}
        />
      </div>
      {/* <ErrorMessage
                component="div"
                name={field.name}
                style={{ color: "red", fontSize: ".8rem", marginTop: "10px", marginLeft: "10px", }} /> */}
    </div>
  );
};
export default Textfield;
