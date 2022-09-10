import React, { useEffect, useState } from 'react';
import {Row,Col} from 'antd';
import ProductCard from '../productCard/ProductCard';
import axios from "axios";
import { useParams } from 'react-router';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import './ProductFilter.css'
function ProductFilter(props) {
    let [data, setData] = useState([]);
    let param = useParams();
    let brand = useParams().brand;
    let series = useParams().series;
    if(series){}
    else{
        series = '';
    }
    useEffect(()=>{

        const fetchData = async () => {
            const res = await axios.get('http://localhost:3333/api/dispath/'+brand+"/"+series);
            setData(res.data);
        }
        fetchData(); 
    }, [brand,series])
    const show = data.map((value,key)=>{
        return(
            <Col xl={4} lg={6} md={6} sm={6} xs={12} key={key}>
                <ProductCard id={value._id} brand={value.brand} image={value.image} status={value.status} note={value.note} name={value.name} price={value.price} oldprice={value.oldprice} />
            </Col>
        )
    })


    return (
        <Row>
            <Col span={20} push={2}>
                <Row style={{marginTop:20}}>
                    <BreadCrumb crumb={param} />
                </Row>
                <Row className="wrapFilter" gutter={[8,8]} style={{marginTop:20}}>

                        {show}
                    
                </Row>
            </Col>
        </Row>
    );
}

export default ProductFilter;