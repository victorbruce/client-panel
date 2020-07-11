import React from "react";

type AlertProps = {
  message: string | null;
  messageType: string | null;
};

const Alert: React.FC<AlertProps> = ({ message, messageType }) => {
  return (
    <div
      className={`Alert alert ${
        messageType === "success" ? "alert-success" : "alert-danger"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
