import { FC } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { Profile } from "../component/Profile";
import { ProgressCircle } from "../component/ProgressCircle";
import { CurrentWeek } from "../component/CurrentWeek";

const { Content, Footer } = Layout;

export const MainPage: FC = () => {
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
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(#ffffff, #7fb9ba)",
        gap: "40px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ justifyContent: "left", display: "flex", padding: "10px" }}>
        <Profile />
      </div>
      <Content>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "93vw",
            padding: "20px",
            backgroundColor: "rgb(43, 201, 204, 0.2)",
            borderRadius: "20px",
          }}
        >
          <CurrentWeek />
          <ProgressCircle />
          <div>Daily Challenges</div>
          <div>Update your goals</div>
        </div>
      </Content>
      <Footer
        style={{
          backgroundColor: "#7fb9ba",
          padding:0,
          width: "100vw",
        
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{
            minWidth: 0,
            flex: "auto",
            backgroundColor: "#7fb9ba",
            fontSize: "10px"
          }}
        />
      </Footer>
    </Layout>
  );
};
