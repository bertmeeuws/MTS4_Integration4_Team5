import React from "react";
import CustomCursor from "../CustomCursor/CustomCursor";

export default function LayoutTeacher({ children }) {
  return (
    <div>
      <CustomCursor />
      <nav className="dashboard-nav">
        <h1 className="h1">Teacher view</h1>
        <p>Welcome xxx</p>
      </nav>
      {children}
    </div>
  );
}
