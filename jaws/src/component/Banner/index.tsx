import { Menu, MenuProps } from "antd";
import { FC } from "react";

export const Banner: FC = () => {

    const items1: MenuProps["items"] = [
        "Progress",
        "Awards",
        "Community",
        "Journey",
        "Eco Tracking",
      ].map((key) => ({
        key,
        label: key,
      }));
      
    return (
        <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
        style={{
          minWidth: 0,
          flex: "auto",
          backgroundColor: "#7fb9ba",
          fontSize: "10px",
        }}
      />
    );
  };