import React from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
import NavDashboard from "../Dashboard/NavDashboard";

export default function LayoutTeacher({ children, setId, id }) {
  return (
    <>
      <CustomCursor />
      <div className="dashboard-grid">
        <NavDashboard setId={setId} id={id} />
        {children}
      </div>
    </>
  );
}
