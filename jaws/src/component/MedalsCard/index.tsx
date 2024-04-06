import { Avatar, Progress, ProgressProps } from "antd";
import { FC } from "react";
import { Leaf } from "../Leaf";
import { UserOutlined } from "@ant-design/icons";

export const MedalsCard: FC = () => {
  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#67bfbf",
    "100%": "#0cf7f7",
  };

  const medal = (medalType: string) => (
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
          padding: "15px",
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
            paddingBottom: "10px",
          }}
        >
          <div>Ally Ang</div>
        </div>
        <img src={`/${medalType}.png`} width="50" height="50" alt="" />
        <div
          style={{
            marginTop: "5px",
            fontWeight: "900",
            borderRadius: "20%",
            height: "25px",
            width: "25px",
            color: "#ccb562",
            backgroundColor: "rgb(255, 219, 135, 0.2.5)",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          11
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      {medal("gold")}
      {medal("silver")}
      {medal("bronze")}
    </div>
  );
};
