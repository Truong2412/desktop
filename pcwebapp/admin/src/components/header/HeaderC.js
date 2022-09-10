import { Col, Layout, Row } from 'antd';
import React from 'react';
import logo from './logo.png'
import './style.css'
const { Header } = Layout;
function HeaderC() {
    return (
        <Header  style={{ padding: 0,background: "white" }} >
            <Row style={{height: "100%"}}>
                <Col className='logoBox' push={2} span={6}>
                     <img className='logo' src={logo} alt="TC" />
                </Col>
            </Row>

        </Header>

    );
}

export default HeaderC;