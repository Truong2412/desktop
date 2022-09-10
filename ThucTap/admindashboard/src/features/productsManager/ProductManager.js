import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';

function ProductManager(props) {
    const [list,setList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3333/api/admin/product')
        .then(function (res) {
            setList(res.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
    const mapProduct = list.map((value,key)=> {
        if(value){
            return <ProductCard value={value} key={key} />
        }
    })
    
    return (
        <Row>
            <Row>Filter here</Row>
            <Row gutter={16}>
                {mapProduct}  
            </Row>  
        </Row>
    );
}

export default ProductManager;