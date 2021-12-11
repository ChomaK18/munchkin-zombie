import { useField } from "formik";

const ExtraLevelField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <div name={field.name} className="my-1 input-group">
        <label className="col-4 input-group-text">{label}</label>
        <i
          onClick={() => helpers.setValue(false)}
          className={`col-4 btn ${
            meta.value === false ? "btn-success" : "btn-outline-success"
          }`}
        >
          1 Poziom
        </i>
        <i
          onClick={() => helpers.setValue(true)}
          className={`col-4 btn ${
            meta.value === true ? "btn-success" : "btn-outline-success"
          }`}
        >
          2 Poziomy
        </i>
      </div>
      {meta.touched && meta.error && <div> {meta.error}</div>}
    </div>
  );
};

export default ExtraLevelField;
