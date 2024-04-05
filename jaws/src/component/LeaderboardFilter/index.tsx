import { Menu } from "antd";
import { FC, PropsWithChildren } from "react";

interface MenuItem {
  key: string;
  label: string;
}

export const LeaderboardFilter: FC<PropsWithChildren> = ({ children }) => {
  const menuItems: MenuItem[] = [
    { key: "estate", label: "Estate" },
    { key: "block", label: "Block" },
    { key: "organisation", label: "Organisation" },
    { key: "private", label: "Private" },
  ];
  return (
    <div
      style={{
        borderRadius: "2%",
        margin: "5px",
        padding: "2px",
        backgroundColor: "#266666",
      }}
    >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          minWidth: 0,
          backgroundColor: "transparent",
          flex: "between",
          justifyContent: "center",
          fontSize: "17px",
          fontWeight: "600",
        }}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} style={{color: "#ffffff"}}>{item.label}</Menu.Item>
        ))}
      </Menu>
      {children}
    </div>
  );
};
