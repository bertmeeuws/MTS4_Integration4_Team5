import React from "react";

export default function LoadingBar({ percent, action }) {
  return (
    <div className="loadingbar">
      {percent === 0 ? (
        <p className="loadingbar-label">
          {action} - {percent}
        </p>
      ) : (
        ""
      )}
      <div
        style={{ width: percent + "%" }}
        className="loadingbar-progress"
      ></div>
    </div>
  );
}
