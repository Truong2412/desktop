import { Col, Row } from 'antd';
import React from 'react';
import Filter from '../filter/Filter';
import NewsCarousel from '../newsCarousel/NewsCarousel';
import ProductCard from '../productCard/ProductCard';

function HomePage(props) {
    return (
        <>
        <Row gutter={[16,16]}>
            <Col span={18}>
                <NewsCarousel />
            </Col>
            <Col span={6}> :B</Col>
        </Row>


        <Filter />
        <Row gutter={[16,16]}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>


        </>
    );
}

export default HomePage;