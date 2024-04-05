import { FC } from "react";
import { Leaf } from "../Leaf";

export const CurrentWeek: FC = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(26, 33, 25, 0.6)",
        width: "150px",
        height: "60px",
        color: "#ffffff",
        fontWeight: "600",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        filter: "drop-shadow(3px 3px #b6d3d4)"
      }}
    >
      <div
        style={{
          position: "relative",
          top: "-12px",
          backgroundColor: "#ffffff",
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          border:"2px solid rgb(26, 33, 25, 0.6)",
        }}
      >
        <Leaf />
      </div>
      <div
        style={{
          marginTop: "-10px",
          backgroundColor: "rgb(26, 33, 25)",
          width: "90px",
          fontSize: "12px",
          height: "20px",
          color: "#ffffff",
          fontWeight: "600",
          borderRadius: "10px",
          alignContent: "center",
          textAlign: "center"
        }}
      >
        Week 1 Day 5
      </div>
      Check your journey!
    </div>
  );
};
