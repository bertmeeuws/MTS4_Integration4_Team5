import React from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
import NavDashboard from "../Dashboard/NavDashboard";

export default function LayoutTeacher({ children }) {
  return (
    <>
      <CustomCursor />
      <div className="dashboard-grid">
        <NavDashboard />
        {children}
      </div>
    </>
  );
}
