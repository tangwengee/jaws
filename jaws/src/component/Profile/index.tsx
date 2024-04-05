import React from "react";
import { FC } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Profile: FC = () => {
  return (
    <div style={{ gap: "10px", display: "flex", alignItems: "center", flexDirection: "row" }}>
      <Avatar style={{ backgroundColor: '#7fb9ba' }} icon={<UserOutlined />} />
      <div>Hello Mary!</div>
    </div>
  );
};
