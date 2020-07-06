import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className="AppLayout">
      <Navbar />
      <div className="AppLayout__body">{props.children}</div>
    </div>
  );
};

export default AppLayout;
