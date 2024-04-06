import { Avatar, Progress, ProgressProps } from "antd";
import { FC } from "react";
import { Leaf } from "../Leaf";
import { UserOutlined } from "@ant-design/icons";

export const AwardCard: FC = () => {

    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#67bfbf',
        '100%': '#0cf7f7',
      };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
          flexDirection: "row",
          justifyContent: "space-between",
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
            width: "100px",
            fontWeight: "600",
            gap: "5px"
          }}
        >
          <Avatar style={{ backgroundColor: "#7b9696" }} size={50} icon={<UserOutlined />} />
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src="/twentythree.png" width="30" height="30" alt="" />
            <div>
              <div style={{ fontWeight: "900" }}> Level 23 </div>
              <div style={{ fontSize: "12px" }}>
                46 <Leaf /> to next level! Keep going!
              </div>
            </div>
          </div>
          <div>
            <Progress percent={95} strokeColor={twoColors}/>
          </div>
        </div>
      </div>
    </div>
  );
};
