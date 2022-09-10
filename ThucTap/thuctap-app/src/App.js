import 'antd/dist/antd.css'
import './App.css'
import React, { useEffect } from 'react';
import  { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom';
import DirectionRouter from './Router/DirectionRouter'
import MenuTop from './features/menuTop/MenuTop';
import ExInfo from './features/footer/ExInfo'
import FooterInfo from './features/footer/FooterInfo';
import ScrollToTop from './features/ScrollToTop';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import cartSlice from './features/cartAndOrder/cart/cartSlice';

const {Footer} = Layout;

function App() {
  const userId = useSelector((state)=> state.user.userId)
  const userStatus = useSelector((state)=> state.user.isSignIn)
  const cartItem = useSelector((state)=> state.cart.cart);
  const dispatch = useDispatch();
  useEffect(()=> {

    const  getCart = () => {
      axios.get('http://localhost:3333/api/user/cart/' + userId)
          .then(function(res){
              dispatch(cartSlice.actions.getCart(res.data))
          })
          .catch(function(error){
              console.log(error)
          })
      }
    if(!userStatus) {
      dispatch(cartSlice.actions.getCart([]))
    }else{
      getCart();
      console.log("logged");
    }
},[userStatus,dispatch,userId]) 

useEffect(()=> {
  const fetchCart = ()=>{
    axios.post('http://localhost:3333/api/user/cart/' + userId ,{data: cartItem} )
   .then(function(res){
       console.log(res.data)
   })
   .catch(function(error){
       console.log(error)
   })
}
  if(!userStatus){
    console.log("user is not yet login")
  }else{
    fetchCart();
  }
},[cartItem,userId,userStatus])

  return (
    <Router>
      <ScrollToTop />
        <Layout>
          
          <MenuTop />

          <DirectionRouter >

          </DirectionRouter>
          <Footer>
              <FooterInfo />
              <ExInfo />
          </Footer>
        </Layout>

    </Router>
  );
}

export default App;
