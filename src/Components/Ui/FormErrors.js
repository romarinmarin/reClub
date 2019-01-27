import React from "react";

const FormErrors = ({ formErrors }) => {
  return (
    <div className="error_label">
      {Object.keys(formErrors).map((fe, i) => {
        if (formErrors[fe].length > 0) {
          return (
            <p key={i}>
              {fe} {formErrors[fe]}
            </p>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default FormErrors;
