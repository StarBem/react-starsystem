// import { useState } from "react";
import { Button, Input } from "./components";

// const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const onCollapse = (collapsed: boolean) => {
  //   setCollapsed(collapsed);
  // };

  return (
    <>
      <div>
        <h1>Buttons</h1>
        <Button title="Primary" variant="primary" />
        <br />
        <Button title="Secondary" />
        <br />
        <Button title="Black" variant="black" />
        <br />
        <Button title="Outline" type="outline" />
        <br />
        <Button title="Rounded" rounded />
        <br />
        <Button title="Clear" type="clear" />
      </div>
      <div>
        <h1>Input</h1>
        <Input placeholder="Teste 2" label="Nome" />
      </div>
      {/* Layout */}
      {/* <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{ background: "red" }}
        ></Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, backgroundColor: "#FFF" }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout> */}
    </>
  );
};

export default App;
