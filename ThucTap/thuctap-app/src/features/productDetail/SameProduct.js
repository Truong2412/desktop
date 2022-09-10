import { Col, Divider, Row } from 'antd';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
function SameProduct(props) {
    let sameData = props.sameData;
    const show = sameData.map((value,key)=>{
        return(
            <Col key={key} span={24} >
                <ProductCard id={value._id} brand={value.brand} image={value.image} status={value.status} note={value.note} name={value.name} price={value.price} oldprice={value.oldprice} />
            </Col>
        )
    })

    return (
        <Col xl={4} style={{padding:10}}>
            <Row justify="center" gutter={[8,8]}>
                <Divider>Sản phẩm tương tự</Divider>
                {show}
             </Row>
         </Col>
    );
}

export default SameProduct;