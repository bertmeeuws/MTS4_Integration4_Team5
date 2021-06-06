import React from "react";

export default function LayoutTeacher({ children }) {
  return (
    <div>
      <nav className="dashboard-nav">
        <h1 className="h1">Teacher view</h1>
        <p>Welcome xxx</p>
      </nav>
      {children}
    </div>
  );
}
