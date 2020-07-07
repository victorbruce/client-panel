import React from "react";

import AppLayout from "../../../layouts/AppLayout";
import Clients from "../../../containers/App/Clients";
import Sidebar from "../../../containers/App/Sidebar";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <Clients />
          </div>
          <div className="col-md-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
