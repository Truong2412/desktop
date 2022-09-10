import { Layout } from "antd";
import BreadcrumbC from "./breadcrumb/BreadcrumbC";
import Navigation from "./navigation/Navigation";
import 'antd/dist/antd.css';
import HeaderC from "./header/HeaderC";
import HomePage from "./homePage/HomePage";
import './App.css'
import bg from "./img/bg.jpg"; 
const {  Content, Footer } = Layout;
function App() {
  return (
    <Layout  style={{ minHeight: '100vh' }}>
      <HeaderC />

        <Layout className="site-layout">
          
            <Navigation />
          
          
          <Content className="contentSite" style={{ margin: '0 16px',backgroundImage:`url(${bg})`,backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundAttachment: "fixed" }}>
            <BreadcrumbC />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
              
              <HomePage />


            </div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        
      </Layout>
  );
}

export default App;
