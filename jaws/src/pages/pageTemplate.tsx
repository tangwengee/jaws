import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import { Banner } from "../component/Banner";

const { Content, Footer } = Layout;

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(#ffffff, #7fb9ba)",
      }}
    >
      <Content>{children}</Content>
      <Footer
        style={{
          backgroundColor: "#7fb9ba",
          padding: 0,
          width: "100vw",
        }}
      >
        <Banner />
      </Footer>
    </Layout>
  );
};
