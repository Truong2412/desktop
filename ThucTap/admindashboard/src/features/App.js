import './App.css';
import 'antd/dist/antd.css'
import NavBar from './navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './AppRouters';
import { Row,Col } from 'antd';

function App() {
  return (
    <AppRouters>
        <Row>
          <Col span={4}>
            <NavBar />
          </Col>
          <Col span={20}>
          

        </Col>
        </Row>
        </AppRouters>
  );
}

export default App;
