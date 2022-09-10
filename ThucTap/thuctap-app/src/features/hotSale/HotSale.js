import React, {useState,useEffect} from 'react';
import {Row,Col,Divider  } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HotSale.css'
import ProductCard from '../productCard/ProductCard';
import axios from 'axios';


var settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
function HotSale(props) {
  let [data, setData] = useState([]);
  useEffect(()=>{
      fetchData();
  }, [])
  const fetchData = () => {
      axios.get('http://localhost:3333/api/sale')
      .then((res)=>{
          setData(res.data)
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  const showCard = data.map((value,key)=>{

    return(
        <div className="hotSaleSlide" key={key}>
            <ProductCard key={key} id={value._id} brand={value.brand} image={value.image} status={value.status} note={value.note} name={value.name} price={value.price} oldprice={value.oldprice} />
        </div>
    )
    })
    return (
        <div className="hotSale">
             <Divider orientation="left">
                <h3 className="hotSaleTitle">Khuyến mãi HOT</h3>
             </Divider>
            
            <Row>
                <Col span={24}>
                    <Slider {...settings}>

                         {showCard}

                    </Slider>
                </Col>
           
            </Row>
        </div>
    );
}

export default HotSale;