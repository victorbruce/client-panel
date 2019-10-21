import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        {...rest}
        name={name}
        id={name}
        placeholder={name}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
