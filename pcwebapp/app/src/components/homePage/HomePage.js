import { Col, Row } from 'antd';
import React from 'react';
import NewsCarousel from '../newsCarousel/NewsCarousel';

function HomePage(props) {
    return (
        <Row gutter={[16,16]}>
            <Col span={18}>
                <NewsCarousel />
            </Col>
            <Col span={6}>
                
            </Col>
        </Row>
    );
}

export default HomePage;