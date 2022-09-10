import React, { useState,useEffect } from 'react';
import {Row, Col,Divider} from 'antd';
import ProductCard from '../productCard/ProductCard';
import './HomePageCategory.css';
import axios from 'axios';

function HomePageCategory(props) {
    let brand = props.kw;

    let [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            let res = await  axios.get('http://localhost:3333/api/home/'+brand)
            setData(res.data)
        }
        fetchData();
    }, [brand])

    const show = data.map((value,key)=>{
        return(
            <Col xl={4} lg={6} md={6} sm={6} xs={12} key={key}>
                <ProductCard brand={value.brand} image={value.image} status={value.status} note={value.note} name={value.name} price={value.price} oldprice={value.oldprice} />
            </Col>
        )
    })

    return (
        <>
            <h2 className="iphoneTitle">{props.title}</h2>
            <Divider orientation="left"><h3>{props.category}</h3></Divider>
            <Row className = "showProduct" gutter={[4,4]}>
                {show}
            </Row>  
        </>
    );
}

export default HomePageCategory;