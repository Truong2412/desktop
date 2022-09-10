import { Layout } from "antd";
import BreadcrumbC from "./breadcrumb/BreadcrumbC";
import Navigation from "./navigation/Navigation";
import 'antd/dist/antd.css';
import HeaderC from "./header/HeaderC";
const {  Content, Footer } = Layout;
function App() {
  return (
    <Layout  style={{ minHeight: '100vh' }}>
      <HeaderC />

        <Layout className="site-layout">
          
            <Navigation />
          
          
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbC />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        
      </Layout>
  );
}

export default App;
