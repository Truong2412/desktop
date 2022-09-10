import React from 'react';
import {Row,Col } from 'antd';
import './Footer.css'
import logoNeu from './Logo-NEU.png'
function FooterInfo(props) {
    return (
        <Row  className="footerInfo">
            <Col xl={{span:8}} xs={{span:24}}>
                <h3 className="infoTitle">Thông tin hỗ trợ</h3>
                <ul className="infoList">
                    <li>
                        Chính sách bảo hành    
                    </li>
                    <li>
                        Chính sách mua online
                    </li>
                    <li>
                        Chính sách bảo mật thông tin khách hàng
                    </li>
                    <li>
                        <img className="logoNeu" src={logoNeu} alt="NEU"  />
                    </li>
                </ul>
            </Col>
            <Col xl={{span:8}} xs={{span:24}} >
                <h3>Thông tin Liên hệ</h3>
                <ul className="infoList">
                    <li>
                       Về sản phẩm: <b>0343241299</b>    
                    </li>

                </ul>
            </Col>
            <Col xl={{span:8}} xs={{span:24}} >
                <h3>Khu vực miền bắc</h3>
                <ul className="infoList">
                    <li>
                        Đại học kinh tế Quốc Dân    
                    </li>

                </ul>
            </Col>
        </Row>
    );
}

export default FooterInfo;