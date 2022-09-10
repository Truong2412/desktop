import { Col, Divider, message, Row, Timeline } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function MyOrder(props) {
    const [orders,setOrders] = useState([]);
    const userStatus = useSelector(state=>state.user.isSignIn)
    const userId = useSelector(state=>state.user.userId)

    useEffect(()=>{
        if(!userStatus) {
            message.info("Hãy đăng nhập để xem đơn hàng của bạn");
            setOrders([]);
        }else{
            axios.get('http://localhost:3333/api/order/'+userId)
                .then(res=> {
                    setOrders(res.data);
                })
        }
    },[userId,userStatus])


    const checkOrder = orders.map((value,key)=> {
                const products = value.products;
                const buyerInfo = value.buyerInfo;
                const status = value.status;
                if(!value) {return <>Bạn chưa có đơn hàng nào !</>}
                else{
                    return(
                    <Row justify="center" className="cartRow" key= {key}>
                        <Col span={16} style={{padding: "10px"}}>
                            <Divider orientation="left"><h4>Mã đơn hàng: {value._id} </h4></Divider>
                            <Row justify="center">
                                <table>
                                    <tbody>
                                        {products.map((product,key)=> {
                                            return (
                                                <tr key= {key}>
                                                    <th><b>Sản phẩm : </b> <i style={{color: "darkCyan"}}>{product.name}</i></th>
                                                    <th><img className="cartImg" src={product.img} alt={product.name} /></th>
                                                    <th><b>Phân loại </b> {product.color},{product.rom},{product.warranty}</th>
                                                    <th><b>Giá tiền  </b>{product.totalBill.toLocaleString}</th>
                                                    <th><b>SL :</b> {product.quantity}</th>       
                                                    <th><b>Đơn giá  </b>{product.priceWithQuantity.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</th>
                                                </tr>
                                                )    
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <td className="totalBill">Tổng tiền</td>
                                        <div className="totalBill">{value.totalprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Vnđ </div>
                                        </tr>
                                    </tfoot>
                                </table>
                            </Row>
                            <Row style={{padding: "10px"}}>
                                <div style={{width: "100%"}}>Người nhận :   <span>{buyerInfo.buyerName}</span> </div>
                                <div style={{width: "100%"}}>Số điện thoại :   <span>{buyerInfo.phone}</span> </div>
                                <div style={{width: "100%"}}>Địa chỉ nhận hàng :   <span>{buyerInfo.address}</span> </div>
                                <div style={{width: "100%"}}>Phương thức thanh toán :   <span>{buyerInfo.paymethod}</span> </div>
                            </Row>
                        </Col>
                        <Col span={8} className="status" >
                            {status.map((value,key)=> {
                                const datetime = new Date(value.time)
                                if(value.status === 'create') {
                                    return (
                                        <Timeline key={key}>
                                            <Timeline.Item color="brown">
                                                <p>{value.text}</p>
                                                <p>{datetime.toLocaleTimeString()} - {datetime.toLocaleDateString()}</p>
                                            </Timeline.Item>
                                            
                                        </Timeline>
                                    )
                                }else if(value.status === 'confirmed') {
                                    return (
                                        <Timeline key={key}>
                                            <Timeline.Item color="yellow">{value.text}</Timeline.Item>
                                        </Timeline>
                                        )
                                    }
                                else if(value.status === 'transfering') {
                                    return (
                                        <Timeline key={key}>
                                            <Timeline.Item color="blue">{value.text}</Timeline.Item>
                                        </Timeline>
                                        )
                                    }
                                else if(value.status === 'done') {
                                    return (
                                        <Timeline key={key}>
                                            <Timeline.Item color="green">{value.text}</Timeline.Item>
                                        </Timeline>
                                        )
                                    }
                                else {
                                    return (
                                        <Timeline key={key}>
                                            <Timeline.Item color="red">{value.text}</Timeline.Item>
                                        </Timeline>
                                        )
                                    }
                            })}
                        </Col>
                    </Row>
    
                    )
                }


                })
  

    


    return (
        
        // <div>  {checkOrder} </div>
        <>{checkOrder} </>        
    );
}

export default MyOrder;