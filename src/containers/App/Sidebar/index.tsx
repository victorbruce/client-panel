import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to="/client/add" className="btn btn-success btn-block">
        + New
      </Link>
    </div>
  );
};

export default Sidebar;
