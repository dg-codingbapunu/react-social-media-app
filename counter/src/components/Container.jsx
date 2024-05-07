import React from "react";

const Container = ({ children }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">{children}</div>
    </div>
  );
};

export default Container;
