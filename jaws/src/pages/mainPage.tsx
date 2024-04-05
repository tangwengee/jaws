import { FC } from "react";
import { Layout } from "antd";
import { Profile } from "../component/Profile";
import { ProgressCard } from "../component/ProgressCard";
import { Banner } from "../component/Banner";

const { Content, Footer } = Layout;

export const MainPage: FC = () => {

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(#ffffff, #7fb9ba)",
        gap: "30px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Profile/>
      <Content>
        <ProgressCard/>
      </Content>
      <Footer
        style={{
          backgroundColor: "#7fb9ba",
          padding: 0,
          width: "100vw",
        }}
      >
      <Banner/>
      </Footer>
    </Layout>
  );
};
