import React from "react";

const Container = ({ children }) => {
  return (
    <div class="card" style={{ width: "69%" }}>
      <div class="card-body">{children}</div>
    </div>
  );
};

export default Container;
