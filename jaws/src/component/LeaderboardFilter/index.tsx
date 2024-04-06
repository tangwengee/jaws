import { Menu, Modal } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import "./index.css";
interface MenuItem {
  key: string;
  label: string;
}


interface LeaderboardFilterProps {
  selectedKey: string;
  onMenuItemClick: (key: string) => void;
}

export const LeaderboardFilter: FC<PropsWithChildren<LeaderboardFilterProps>> = ({ children, selectedKey, onMenuItemClick }) => {
  const menuItems: MenuItem[] = [
    { key: "estate", label: "Estate" },
    { key: "block", label: "Block" },
    { key: "organisation", label: "Organisation" },
    { key: "private", label: "Private" },
    { key: "friends", label: "Friends" },
  ];

  const privateItems: MenuItem[] = [
    { key: "test1", label: "TSWifties" },
    { key: "test5", label: "EatGrass4Life" },
    { key: "test6", label: "C4n4dians" },
  ];

  const orgItems: MenuItem[] = [
    { key: "poly", label: "SP Business" },
    { key: "nus", label: "NUS Computing" },
    { key: "work", label: "AIA Team Blue" },
  ];

  const [showPrivateOptions, setShowPrivateOptions] = useState(false);

  const handlePrivateImgClick = () => {
    setShowPrivateOptions(!showPrivateOptions);
  };

  const [showOrgOptions, setShowOrgOptions] = useState(false);

  const handleOrgImgClick = () => {
    setShowOrgOptions(!showOrgOptions);
  };

  return (
    <div
      style={{
        borderRadius: "2%",
        margin: "15px",
        padding: "2px",
        backgroundColor: "#266666",
        boxShadow: "6px 6px #3f7373",
      }}
    >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["friends"]}
        selectedKeys={[selectedKey]}
        onClick={({ key }) => onMenuItemClick(key as string)}
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
          <Menu.Item
            key={item.key}
            style={{
              color: "#ffffff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {item.label}
              {(item.key === "private" || item.key === "organisation") && (
                <img
                  src="/whiteDown.png"
                  width="15"
                  height="15"
                  alt=""
                  onClick={
                    item.key === "private"
                      ? handlePrivateImgClick
                      : handleOrgImgClick
                  }
                />
              )}
            </div>
          </Menu.Item>
        ))}
      </Menu>
      {showPrivateOptions && (
        <Menu
          style={{
            minWidth: 0,
            backgroundColor: "transparent",
            flex: "between",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontSize: "17px",
            fontWeight: "600",
            
          }}
          className = "subMenu"
        >
          {privateItems.map((item) => (
            <Menu.Item
              key={item.key}
              style={{
                color: "#ffffff",
                flex: "between",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}
      {showOrgOptions && (
        <Menu
          style={{
            minWidth: 0,
            backgroundColor: "transparent",
            flex: "between",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontSize: "17px",
            fontWeight: "600",
            borderRadius: "0px",
          }}
          className="subMenu"
        >
          {orgItems.map((item) => (
            <Menu.Item
              key={item.key}
              style={{
                color: "#ffffff",
                flex: "between",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      )}
      {children}
    </div>
  );
};
