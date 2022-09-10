import React from 'react';
import { Card, Badge,Col } from 'antd';
import { CrownTwoTone} from '@ant-design/icons';
import './ProductCard.css'
import img from '../img/test.png'
const { Meta } = Card;

const removeMarkUrl = (str) => {
    str = str.toLowerCase();     
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}

function ProductCard(props) {
    // var price = props.price.toLocaleString();
    // var oldprice = props.oldprice.toLocaleString();
    // var sale = (props.oldprice - props.price).toLocaleString();
    // var id = props.id;
    
    return (
        <Col lg={{span:8}}>
        <Badge.Ribbon text="sale to ơi là to" color="red">
            
            <Card
                hoverable
                style={{ width: "100%",opacity: 0.9 }}
                cover={
                <img
                    alt="example"
                    src={img}
                />
                }
            >
                <Meta
                title="ôi bạn ơi"
                description="200.000 đ"
                />
            </Card>
           
        </Badge.Ribbon>
        </Col>
    );
}

export default ProductCard;