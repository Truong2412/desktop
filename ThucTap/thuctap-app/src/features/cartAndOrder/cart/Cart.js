import { Button, Col, Divider, Row ,Popconfirm, message,Tabs, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import cartSlice from './cartSlice';

function Cart() {
    const userId = useSelector((state)=> state.user.userId)
    const cartItem = useSelector((state)=> state.cart.cart); 
    const dispatch = useDispatch();
    const [item, setItem] = useState(cartItem)
    const [buyerInfo, setBuyerInfo] = useState({})
    const [totalBill,setTotalBill] = useState(0);
    const[ notice, setNotice] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
   

    useEffect(()=> {
        setItem(cartItem);
        // console.log("CartItem:" +cartItem)
    },[cartItem])
    useEffect(()=> {
        var sum = 0;
        if(item){
            for (let i = 0; i < item.length; i++) {
                sum = sum + item[i].priceWithQuantity
            setTotalBill(sum);
            dispatch(cartSlice.actions.updateTotal(sum))
            }
        }else {
            sum=0;
        }

    },[item,dispatch])



    const mapCartItem = item.map((value,key)=> {
        // console.log(value)
                return (
                    <tr key={key} >
                    <td>
                        <img className="cartImg" src={value.img} alt={value.name} />
                    </td>
                    <td>{value.name}</td>
                    <td>{value.color},{value.rom},{value.warranty}</td>
                    <td>{value.totalBill.toLocaleString()}</td>
                    <td key={key}>
                        <input className="quantity"  type="number" defaultValue={value.quantity}  onChange={(e)=>quantityChange(key,e)} />
                    </td>
                    <td> {value.priceWithQuantity.toLocaleString()}</td>
                    
                    <td>
                    <Popconfirm 
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        title="Bạn có muốn xóa sản phẩm này không ?"
                        onConfirm={(e)=>deleteItem(key,e)}
                        okText="Có"
                        cancelText="Không">
                        <Button danger type="dashed">Xóa</Button>
                    </Popconfirm>
                    </td>
                
                </tr>
                )
            })



    // console.log(totalBill)
    const quantityChange = (key, e)=> {
        let listItem = [...item];
        let changeItem = {...listItem[key]};
            changeItem.quantity = e.target.value;
            changeItem.priceWithQuantity = e.target.value * changeItem.totalBill;
        listItem[key] = changeItem;
        setItem(listItem);
        dispatch(cartSlice.actions.productQuantityChange({"key": key,changeItem}));
    }
    // console.log(item);
    const deleteItem = (key,e)=> {
        let listItem = [...item];
            listItem.splice(key, 1);

        setItem(listItem);
        dispatch(cartSlice.actions.deleteProduct(key));
        message.info('Đã xóa sản phẩm !');
    }






    const buyerInfoChange = (e)=> {
        setBuyerInfo({
            ...buyerInfo,
            [e.target.name]: e.target.value
        })
        
    }
    useEffect(()=> {
        dispatch(cartSlice.actions.buyerInfoChange(buyerInfo))
    },[dispatch,buyerInfo])

    const toOrder = e=> {
            var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
            var phone = buyerInfo.phone;
                if(phone){
                    var checkphone = phone.match(regExp);
                }else {message.warning('Hãy nhập đầy đủ thông tin')}
            
            if(buyerInfo.buyerName === ''){message.warning("Hãy nhập họ tên !!")}
            else if(buyerInfo.phone === ''){message.warning("Hãy nhập sdt !!")}
            else if(checkphone === false) {message.warning("Số điện thoại không phù hợp !!")}
            else if(buyerInfo.address === '') {message.warning("Hãy điền địa chỉ !!")}
            else if(buyerInfo.paymethod === 'select') {message.warning("Hãy chọn phương thức thanh toán !!")}
            else if(buyerInfo.paymethod === 'cod'){
                const date = new Date();
                const data ={ item,buyerInfo,totalBill,userId,date}
                async function postOrder(){
                    await axios.post('http://localhost:3333/api/order',{data: data} )
                    .then(function(response){
                        setNotice(response.data);
                        setIsModalVisible(true);
                        setItem([]);
                        setTotalBill(0);
                        dispatch(cartSlice.actions.getCart([]));
                        dispatch(cartSlice.actions.updateTotal(0))
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                }
                postOrder();
                // setItem([]);
                // console()
                // console.log(order)
                // console.log(userId)
            }
        }
        
    
    // console.log(item)
    const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <>
                    <Row justify="center" className="cartRow">
                    <table>

                    <tbody>
                    <tr>
                    <th>Ảnh</th>
                    <th>Tên</th>
                    <th>Phân loại</th>
                    <th>Giá</th>

                    <th>Số lượng</th>
                    
                    <th>Tổng tiền</th>
                    </tr>
                </tbody>
                        <tbody>
                            
                        {
                          mapCartItem
                        }  
                          
                           
                        </tbody>
                        <tfoot>
                            <tr>
                            <td className="totalBill">Tổng tiền</td>
                            <div className="totalBill">{totalBill.toLocaleString()} VND</div>
                            </tr>
                        </tfoot>
                    </table>
                    </Row>
                    <Row justify="center" style={{marginTop:20}}>
                        <Divider>Thông tin đặt hàng</Divider>
                        <Col span={10} className="guestinfo">
                        <form>  
                            <Row>
                            <label for="buyerName">Họ tên </label>
                            <input onChange={e=> buyerInfoChange(e)} name="buyerName" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="phone">Số điện thoại </label>
                            <input  onChange={e=> buyerInfoChange(e)}  name="phone" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="address">Địa chỉ nhận hàng</label>
                            <input  onChange={e=> buyerInfoChange(e)}  name="address" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="paymethod">Phương thức thanh toán</label>
                            
                            <select defaultValue="select"  onChange={e=> buyerInfoChange(e)}  name="paymethod" style={{width: 360,marginBottom: 10}}>
                                <option value="select">Chọn phương thức thanh toán</option>
                                <option value="cod">COD - Thanh toán khi nhận hàng</option>
                                <option value="online">thanh toán online gì đấy</option>
                            </select>
                            </Row>
                            <Button  type="submit" onClick={e=> toOrder(e)} >Đặt hàng</Button>
                        </form>   
                        </Col>

                   
                    </Row>
                <Modal title="Đặt hàng thành công , mã đơn hàng" visible={isModalVisible} footer={null} onCancel={handleCancel}>

                    <p>{notice}</p>
                    <p>Cảm ơn quý khách đã đặt hàng !!!</p>
                </Modal>
        </>
    );
}

export default Cart;