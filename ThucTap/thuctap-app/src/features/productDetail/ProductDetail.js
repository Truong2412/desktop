import React, { useEffect, useState } from 'react';
import {Row, Col,Typography,Radio,Divider,Button, Space, message } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import './ProductDetail.css'
import { useParams } from 'react-router';
import axios from 'axios';
import SameProduct from './SameProduct';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import productDetailSlice from './productDetailSlice';
import cartSlice from '../cartAndOrder/cart/cartSlice';
const {Title} = Typography;

function ProductDetail() {
    const dispatch = useDispatch();

    let param = useParams();
    let {id} = useParams();
    let {brand} = useParams();
    let {name} = useParams();

    const [totalBill, setTotalBill] = useState('');
    const [data, setData] = useState([]);
    const [samedata, setSameData] = useState([]);
    const [option, setOption] = useState([]);
    const [oldprice, setOldprice] = useState(0);
    const [image, setImage] = useState('');
    const [tableCol, setTableCol] = useState([]);
    const [rom, setRom] = useState([]);
    const [review, setReview] = useState([]);

    var selectedProduct = useSelector((state) => state.productOptions);

    useEffect(()=>{
        let totaBill = selectedProduct.colorPrice + selectedProduct.romPrice + selectedProduct.warrantyPrice;
        setTotalBill(totaBill);
        dispatch(productDetailSlice.actions.totalBillChange(totaBill));   
        dispatch(productDetailSlice.actions.priceWithQuantityChange(totaBill));   
    },[selectedProduct,dispatch])


    useEffect(()=>{
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3333/api/dispath/'+brand+'/'+name+"/"+id);
                setData(res.data);

                dispatch(productDetailSlice.actions.nameChange(res.data.name));   

                setOption(res.data.option);
                setOldprice(res.data.oldprice);
                setImage(res.data.image);


                setTotalBill(res.data.price);
                setTableCol(res.data.config);
                setRom(res.data.rom);
                setReview(res.data.review);
        }
        const fetchSameData = () => {
            axios.get('http://localhost:3333/api/same/'+brand+"/"+id)
            .then((same)=>{
                setSameData(same.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        };
        fetchSameData();
        fetchData();
       
    }, [brand,id,name,dispatch])

 
    const mapColor = option.map((value,key)=> {
        if(value.stock === true) {
            return (
                <Radio.Button className="selectColor"   key={key} option={value.color} optionImg={value.img} name="color" spec={value.optionprice}  value={key}>{value.color}</Radio.Button>
            )
        }else {
            return (
                <Radio.Button className="selectColor" disabled  key={key} option={value.color}  optionImg={value.img} name="color" spec={value.optionprice}  value={key}>{value.color}</Radio.Button>
                )
        }

    });
    const mapRom = rom.map((value,key)=> {
        if(value.stock === true) {
            return (
                <Radio.Button className="selectColor" key={key} name="rom" option={value.romtype}  spec={value.romprice}  value={key}>{value.romtype}</Radio.Button>
            )
        }else {
            return (
                <Radio.Button className="selectColor" disabled key={key} option={value.romtype} name="rom" spec={value.romprice} value={key}>{value.romtype}</Radio.Button>
                )
        }

    });
    const mapTable = tableCol.map((value,key) => {
        return (

                <tr key={key}>
                    <td> {value.part}</td>
                    <td> {value.spec}</td>
                </tr>

        )
    });
    const mapReview = review.map((value,key)=> {
        return (
            <div key={key}>
            <Title level={5}>{value.title}</Title>
            <span>
                {value.content}    
            </span> 
            </div>
        )
    })



    // HANDLE COLOR CHANGE
    const handleColorChange = (e) => {
        handleImage(e);
        dispatch(productDetailSlice.actions.colorChange(e.target.option)); 
        dispatch(productDetailSlice.actions.colorPriceChange(e.target.spec)); 
    }
    const handleImage = (e)=> {
        setImage(e.target.optionImg);
        dispatch(productDetailSlice.actions.imgChange(e.target.optionImg)); 
    };

    //HANDLE ROM CHANGE
    const handleRomChange = e => {
        dispatch(productDetailSlice.actions.romChange(e.target.option)); 
        dispatch(productDetailSlice.actions.romPriceChange(e.target.spec)); 
    }
    const handleWarrantyChange = e => {
        dispatch(productDetailSlice.actions.warrantyChange(e.target.option)); 
        dispatch(productDetailSlice.actions.warrantyPriceChange(e.target.spec)); 
    }

    //ADD TO CART
    const addToCart = (e)=> {
        if(selectedProduct.color === ""){
            message.warning("Xin hãy chọn màu ")
        }
        else if(selectedProduct.rom === ""){
            message.warning("Xin hãy chọn Rom-Bộ nhớ trong")
        }
        else if(selectedProduct.warranty === ""){
            message.warning("Xin hãy chọn loại bảo hành")
        }
        else {
            dispatch(cartSlice.actions.addToCart(selectedProduct))
            message.info('Đã thêm vào giỏ hàng !');
        }

    }






    return (
    <Row justify="center">
        <Col span={22}>
            <Row style={{marginTop: 20}}>
                <BreadCrumb crumb={param} name={data.name} />
            </Row>
            <Row className="productDetail">
                <Col xl={20}>
                    <Row>
                        <Col className="productImage" xl={{span:8}} lg={8} md={10} xs={24} sm={24}>
                            <img alt={data.name} src={image} />

                        </Col>
                        <Col className="wrapInfo" xl={16} lg={15} md={13} sm={24} xs={24}>
                            <Row>
                                <Col className="productOption" xl={12} lg={12} md={24} xs={24} sm={24}>
                                    <Divider >*</Divider>
                                    <h3 >{data.name}</h3>
                                    <Title level={3} type="danger">{totalBill.toLocaleString()+ " đ"}</Title> 
                                    <Title level={5} delete>{oldprice.toLocaleString() + " đ"} </Title>
                                    <Title level={5} type="success"> *** Giao hàng siêu tốc 1h ***  </Title>
                                    <Divider orientation="left" >Màu sắc</Divider>
                                    <Radio.Group onChange={e=>handleColorChange(e)}  name="color" buttonStyle="solid">
                                        {mapColor}
                                    </Radio.Group>
                                    <Divider orientation="left" >Bộ nhớ trong</Divider>
                                    <Radio.Group onChange={(e)=>handleRomChange(e)} name="rom" buttonStyle="solid">
                                        {mapRom}
                                    </Radio.Group>
                                    <Divider orientation="left" >Bảo hành</Divider>
                                    <Radio.Group onChange={(e)=>handleWarrantyChange(e)} name="warranty">
                                        <Space direction="vertical">
                                            <Radio value={1} option="BH thường" spec={0}>Bảo hành thông thường</Radio>
                                            <Radio value={2} option="BH vàng" spec={500000}>Bảo hành vàng 1 đổi 1 trong 1 năm (+500.000)</Radio>
                                        </Space>
                                    </Radio.Group>                           
                                    <Divider />
                                    <Button onClick={(e)=> {addToCart(e)}} shape="round" type="primary" block>
                                        <ShoppingCartOutlined  />
                                        Thêm vào giỏ hàng
                                    </Button>
                                </Col>
                                <Col className="productInfo" xl={12} lg={12} md={24} xs={24} md={24} >
                                
                                    <Divider >Thông số kỹ thuật</Divider>
                                    <Row justify="center">
                                    <table>
                                        <tbody >
                                        {mapTable}
                                        </tbody>
                                    </table>    
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Row className="sumary" >
                            <Divider orientation="left">
                                Tổng quan sản phẩm
                            </Divider>
                            {mapReview}
                        </Row>
                    </Row>
                </Col>
                
                <SameProduct sameData={samedata} />
            </Row>
        </Col>
    </Row>
    );
}

export default ProductDetail;