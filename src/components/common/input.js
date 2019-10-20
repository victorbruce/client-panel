import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={name}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
