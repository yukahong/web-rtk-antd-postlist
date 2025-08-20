import { Layout } from "antd";
import { Login } from "../Login/Login";

const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#9CAFAA",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "40px 24px",
  minHeight: "calc(100vh - 64px - 64px)",
  color: "#333",
  backgroundColor: "#d6dac880",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#9CAFAA",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100vw",
};

export const Main = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Login />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default Main;
