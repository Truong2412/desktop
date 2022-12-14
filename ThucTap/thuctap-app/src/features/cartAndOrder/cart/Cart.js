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
                        title="B???n c?? mu???n x??a s???n ph???m n??y kh??ng ?"
                        onConfirm={(e)=>deleteItem(key,e)}
                        okText="C??"
                        cancelText="Kh??ng">
                        <Button danger type="dashed">X??a</Button>
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
        message.info('???? x??a s???n ph???m !');
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
                }else {message.warning('H??y nh???p ?????y ????? th??ng tin')}
            
            if(buyerInfo.buyerName === ''){message.warning("H??y nh???p h??? t??n !!")}
            else if(buyerInfo.phone === ''){message.warning("H??y nh???p sdt !!")}
            else if(checkphone === false) {message.warning("S??? ??i???n tho???i kh??ng ph?? h???p !!")}
            else if(buyerInfo.address === '') {message.warning("H??y ??i???n ?????a ch??? !!")}
            else if(buyerInfo.paymethod === 'select') {message.warning("H??y ch???n ph????ng th???c thanh to??n !!")}
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
                    <th>???nh</th>
                    <th>T??n</th>
                    <th>Ph??n lo???i</th>
                    <th>Gi??</th>

                    <th>S??? l?????ng</th>
                    
                    <th>T???ng ti???n</th>
                    </tr>
                </tbody>
                        <tbody>
                            
                        {
                          mapCartItem
                        }  
                          
                           
                        </tbody>
                        <tfoot>
                            <tr>
                            <td className="totalBill">T???ng ti???n</td>
                            <div className="totalBill">{totalBill.toLocaleString()} VND</div>
                            </tr>
                        </tfoot>
                    </table>
                    </Row>
                    <Row justify="center" style={{marginTop:20}}>
                        <Divider>Th??ng tin ?????t h??ng</Divider>
                        <Col span={10} className="guestinfo">
                        <form>  
                            <Row>
                            <label for="buyerName">H??? t??n </label>
                            <input onChange={e=> buyerInfoChange(e)} name="buyerName" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="phone">S??? ??i???n tho???i </label>
                            <input  onChange={e=> buyerInfoChange(e)}  name="phone" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="address">?????a ch??? nh???n h??ng</label>
                            <input  onChange={e=> buyerInfoChange(e)}  name="address" required placeholder="" />
                            </Row>
                            <Row>
                            <label for="paymethod">Ph????ng th???c thanh to??n</label>
                            
                            <select defaultValue="select"  onChange={e=> buyerInfoChange(e)}  name="paymethod" style={{width: 360,marginBottom: 10}}>
                                <option value="select">Ch???n ph????ng th???c thanh to??n</option>
                                <option value="cod">COD - Thanh to??n khi nh???n h??ng</option>
                                <option value="online">thanh to??n online g?? ?????y</option>
                            </select>
                            </Row>
                            <Button  type="submit" onClick={e=> toOrder(e)} >?????t h??ng</Button>
                        </form>   
                        </Col>

                   
                    </Row>
                <Modal title="?????t h??ng th??nh c??ng , m?? ????n h??ng" visible={isModalVisible} footer={null} onCancel={handleCancel}>

                    <p>{notice}</p>
                    <p>C???m ??n qu?? kh??ch ???? ?????t h??ng !!!</p>
                </Modal>
        </>
    );
}

export default Cart;