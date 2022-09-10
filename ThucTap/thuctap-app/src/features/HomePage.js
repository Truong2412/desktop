import React from 'react';
import {Row,Col } from 'antd';
import HotSale from './hotSale/HotSale';
import Notice from './notice/Notice';
import Banner from './banner/Banner';
import HomePageCategory from './homePageCategory/HomePageCategory';
import { Layout } from 'antd';


const {Content} = Layout;
function HomePage(props) {

    return (
        <Content>
            <Row justify="center" style={{marginTop: '16px'}}>
                <Col lg={20} md={{span:22}} xs={22}>
                <Banner />
                <Notice />

                </Col>
            </Row>
            <Row justify="center">
                <Col lg={{span:20}}>
                    <HotSale />
  
                    <HomePageCategory kw="apple" title="IPHONE BẢO HÀNH RƠI VỠ - VÀO NƯỚC" category="Iphone nổi bật" />
                    <HomePageCategory kw="samsung" title="" category="SamSung nổi bật" />
                    <HomePageCategory kw="mobile" title="" category="Điện thoại di động" />
                    <HomePageCategory kw="tablet" title="" category="Máy tính bảng" />
                    <HomePageCategory kw="laptop" title="" category="Laptop" />
                    <HomePageCategory kw="watch" title="" category="Đồng hồ thông minh" />
                    <HomePageCategory kw="accessory" title="" category="Phụ kiện giá rẻ" />
                </Col>
            </Row>
        </Content>   
    );
}

export default HomePage;