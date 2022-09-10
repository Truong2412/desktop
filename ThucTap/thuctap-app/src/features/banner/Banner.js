import React from 'react';
import { Carousel,Row,Col } from 'antd';
import './Banner.css'
import carouselData from './image.json';
import motion from './motion.png'
const carousel = carouselData.map((item,key)=> {
  return(
    <div key={key}>
            <img className="carouselItem"  src={item.image} alt={item.imagealt} />
    </div>
  )
})

function CarouselCustom(props) {

    return (
      <Row>
        <Col lg={15}
             md={{span: 22,push: 1}}
             xs={{span:24}}
          >
          <Carousel autoplay>

            {carousel}

          </Carousel>
        </Col>
        <Col 
          lg={{span:6, push: 2}} 
          md={{span:22, push: 1}}
          xs={{span: 24}}
        >
          <Row className="motion" gutter={8}>
            <Col className="motionItem" lg={24} md={{span:8}} xs={12}>
                <img src={motion} alt="Khuyến mãi laptop" />
            </Col>
            <Col className="motionItem" lg={24} md={{span:8}} xs={12}>

                <img src={motion} alt="Khuyến mãi laptop" />

            </Col>
          </Row>
        </Col>
      </Row>
        
    );
}

export default CarouselCustom;