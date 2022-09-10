import { Col, Row ,Tabs, Modal } from 'antd';
import './CartAndOrder.css'
import Cart from './cart/Cart'
import MyOrder from './myOrder/MyOrder';
import FindOrder from './findOrder/FindOrder';

const { TabPane } = Tabs;
function CartAndOrder() {
  
    return (
        <Row justify="center">
            <Col className="cart" span={20}>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Giỏ hàng của bạn" key="1">
                    <Cart />
                </TabPane>
                <TabPane tab="Đơn hàng của bạn" key="2">
                    <MyOrder />
                </TabPane>
                <TabPane tab="Xem & tra cứu đơn hàng" key="3">
                    <FindOrder />
                </TabPane>
    
            </Tabs>

            </Col>
        </Row>
    );
}

export default CartAndOrder;