import { FC } from "react";
import { TestDatePicker } from "../component/TestDatePicker";
import { Layout } from "antd";
import { Profile } from "../component/Profile";
import { ProgressCircle } from "../component/ProgressCircle";

const { Content, Footer } = Layout;

export const MainPage: FC = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(#ffffff, #7fb9ba)",
      }}
    >
      <div style={{justifyContent: "left", display:'flex', padding: "10px"}}>
        <Profile />
      </div>
      <Content>
        <div>
            <ProgressCircle/>
        </div>
      </Content>
      <Footer>
        <p>footer</p>
      </Footer>
    </Layout>
  );
};
