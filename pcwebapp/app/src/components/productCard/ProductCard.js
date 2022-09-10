import React from 'react';
import { Card,Typography,Button,Badge  } from 'antd';
import { ThunderboltTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './ProductCard.css'
const { Meta } = Card;
const {Text} = Typography;
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
    var price = props.price.toLocaleString();
    var oldprice = props.oldprice.toLocaleString();
    var sale = (props.oldprice - props.price).toLocaleString();
    var id = props.id;
    
    return (
        <Badge.Ribbon text={props.note} color="red">
            <Link to={"/" + (props.brand) +"/" + removeMarkUrl(props.name)+ "/"+id } >
                <Card hoverable
                cover={
                <img alt={props.name} src={props.image }/>
                }

                >   
                    <Meta
                        avatar={<ThunderboltTwoTone twoToneColor="red" />}
                        description={props.status}
                    />
                    <Meta
                        title={props.name}
                    />
                    <Meta className="price" avatar={<Text type="danger" >{price}  đ</Text>} />
                    <Meta className="dashedPrice" avatar={<Text delete>{oldprice} đ</Text>} />
                    <Meta 
                        avatar={<Button size="small" type="dashed" danger>Giảm {sale} đ</Button>}
                    />
                </Card>
            </Link>
        </Badge.Ribbon>
    );
}

export default ProductCard;