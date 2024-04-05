import { FC } from "react"
import { TestDatePicker } from "../component/TestDatePicker"
import { Layout } from "antd"

const { Header, Content, Footer} = Layout;

export const MainPage: FC = () => {
    return (
    <Layout style={{minHeight: "100vh"}}>
        <Header style={{backgroundColor: "#00b0b2"}}>
            <p>
            header
            </p>
        </Header>
        <Content>
            <p>
           content
           <TestDatePicker/>
            </p>
        </Content>
        <Footer>
            <p>
           footer
            </p>
        </Footer>
    </Layout>
  )
}