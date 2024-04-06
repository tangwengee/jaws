import { Avatar, Progress, ProgressProps } from "antd";
import { FC } from "react";
import { Leaf } from "../Leaf";
import { UserOutlined } from "@ant-design/icons";

export const MedalsCard: FC = () => {
  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#67bfbf",
    "100%": "#0cf7f7",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "30%",
        width: "100vw",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#bae7e8",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "3px 3px #bcd4d4",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontWeight: "800",
            paddingBottom: "10px"
          }}
        >
          <div>Ally Ang</div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(255,255,255)",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            borderRadius: "15px",
            padding: "15px",
            color: "#000000",
            fontWeight: "600",
            gap: "5px",
            boxShadow: "3px 3px #bcd4d4",
          }}
        >
          hello
        </div>
      </div>
    </div>
  );
};
