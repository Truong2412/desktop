import { Row,Col } from 'antd';
import React from 'react';
import './Notice.css'
import noticeImg from './muadich.png';
function Notice(props) {
    return (
        <Row  className="notice" >
            <Col span={24} xs={{span:23, push: 1}}>
                <img src={noticeImg} alt="thông báo " />
            </Col>
        </Row>
    );
}

export default Notice;  