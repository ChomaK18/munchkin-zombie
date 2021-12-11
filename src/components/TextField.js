import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-group my-1">
      <label className="input-group-text">{label}</label>
      <input
        {...field}
        {...props}
        className={`form-control ${
          meta.touched && (meta.error ? "is-invalid" : "is-valid")
        }`}
      />
      {meta.touched && meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </div>
  );
};

export default TextField;
