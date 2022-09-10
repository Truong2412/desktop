import React from 'react';
import { Card,Typography,Button,Badge, Col  } from 'antd';
import { ThunderboltTwoTone,EditTwoTone,DeleteTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './ProductCard.css'
const { Meta } = Card;
const {Text} = Typography;


function ProductCard(props) {
    const value = props.value;
    var id = value.id;
    return (
        <Col span={4}>
            <Badge.Ribbon text={value.note} color="red">
                <Link to={"/productmanager/"+id } >
                    <Card hoverable
                    cover={
                    <img alt={value.name} src={value.image }/>
                    }
                    actions={[
                        <EditTwoTone twoToneColor={'darkcyan'} key="edit" />,
                        <DeleteTwoTone twoToneColor={'red'} key="ellipsis" />,
                      ]}
                    >   
                        <Meta
                            avatar={<ThunderboltTwoTone twoToneColor="red" />}
                            description={value.status}
                        />
                        <Meta
                            title={value.name}
                        />
                        <Meta className="price" avatar={<Text type="danger" >{value.price}  đ</Text>} />
                        <Meta className="dashedPrice" avatar={<Text delete>{value.oldprice} đ</Text>} />
                    </Card>
                </Link>
            </Badge.Ribbon>
            </Col>
    );
}

export default ProductCard;