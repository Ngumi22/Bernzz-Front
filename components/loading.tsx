// components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
