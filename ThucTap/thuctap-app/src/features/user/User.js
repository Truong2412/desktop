import { Badge, Col, Modal, Row, Form,Input, Button, message, Popconfirm } from 'antd';
import {ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import userSlice from './userSlice';
function User(props) {
    const dispatch = useDispatch();
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [isUserForm, setisUserForm] = useState(false);
    let [signInData, setSignInData] = useState({});
    let [isSignIn, setIsSignIn] = useState(false);
    let [cart, setCart] = useState(0);

    
    const cartItem = useSelector((state)=> state.cart.cart); 

    useEffect(()=> {
        if(cartItem){
            setCart(cartItem.length);
        }
        else{
            setCart(0);
        }
        // if(isSignIn === false){
        //     window.localStorage.removeItem('userId')
        // }
    },[cartItem])
    //bat tat modal
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    // kiem tra loai form dang ki . dang nhap
    const changeForm =()=> {
        setisUserForm(!isUserForm);
    }

    const onSignIn = async (value) => {
        console.log(value);
        await axios.post('http://localhost:3333/api/user/signin',(value))
            .then((res)=>
            {
                if(res.data === ''){
                    console.log("no data")
                    message.error('Tên người dùng hoặc mật khẩu không chính xác !!');
                }
                else{
                    console.log(res.data)
                    dispatch(userSlice.actions.signIn({userId: res.data,userName: value.username, status : true}))

                    setSignInData(value.username);
                    setIsSignIn(true);
                    setIsModalVisible(false);
                    window.localStorage.setItem('userId', res.data)
                    message.success('Xin chào quý khách '+ value.username );
                }
                
            }
        )
    };

 
    
      const onFinishFailed = () => {
        message.error('Tên người dùng hoặc mật khẩu không chính xác !!');
      };

    const checkUserBtn = ()=> {
        if(isSignIn === false) {
            return(
                <div className="user">
                    <div className="userButton"  onClick={showModal}>Đăng nhập</div>
                </div>
            )
        }
        else {
            return(
                <div className="user">
                     <Popconfirm title="Bạn muốn đăng xuất ?" onConfirm={signOut} okText="Đăng xuất" >
                    <div className="userButton" >{signInData}</div>
                    </Popconfirm>
                </div>
            )
        }
    }
    const signOut =()=> {
        setIsSignIn(false);
        dispatch(userSlice.actions.signIn({userId: '',userName: '', status : false}))
    }
    const signUp =async (value) => {
        await axios.post('http://localhost:3333/api/user/signup', (value))
        .then(res=> {
            if(res.data === 'ok'){
                setisUserForm(!isUserForm);
                message.success("Đăng ký tài khoản thành công !!");
            }
            else {
                message.warning("Số điện thoại đã được dùng  !!");
            }
        })
   
    }
    const showForm = ()=> {
        if(isUserForm === false){
            return(
                <div>
                    <Form
                    name="user"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onSignIn}
                    onFinishFailed={onFinishFailed}
                    autoComplete="true"
                    >
                    <Form.Item
                        label="Số điện thoại"
                        name="username"
                        rules={[{ required: true, message: 'Hãy nhập tên người dùng!' }]}

                    >
                        <Input/>
                    </Form.Item>
        
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Hãy nhập mật khẩu !' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Đăng nhập
                        </Button>
                    </Form.Item>
                    </Form>
                    <div>Chưa có tài khoản, hãy đăng ký</div>
                <Button type="dashed" danger block onClick={(e)=>changeForm(e)}>Đăng ký</Button>
            </div>
            )
        }
        else{
            return(
                <div>
    
                <Form
                name="user"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={signUp}
                onFinishFailed={onFinishFailed}
                autoComplete="true"
                >
                <Form.Item
                    label="Số điện thoại"
                    name="username"
                    rules={[{ required: true, message: 'Hãy nhập SDT !' }]}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Hãy nhập mật khẩu !' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Đăng ký
                    </Button>
                </Form.Item>
                </Form>
                <div>Đã có tài khoản, hãy đăng nhập</div>
                <Button type="dashed" danger block onClick={(e)=>changeForm(e)}>Đăng Nhập</Button>
            </div>
            )
        }
    }
    

    return (
        <Col xl={{span:4, order: 4}} 
            lg={{span:1, order: 4}}
            md={{span:2, order:4,push: 2}}
            xs={{order:3, span :4}}    
        >
            <Row>

            {checkUserBtn()}
            <Link to="/cart">
                <Badge count={cart}>
                    <ShoppingCartOutlined />
                </Badge>
            </Link>
            </Row>
            <Modal footer={null} title="" visible={isModalVisible} onCancel={handleCancel}>


                {showForm()}

            

            </Modal>
       
        </Col>
    );
}

export default User;