import { Row,Col,Menu,Layout } from 'antd';
import {AppleOutlined,MobileOutlined,TabletOutlined,LaptopOutlined,FieldTimeOutlined } from '@ant-design/icons';
import React, {useEffect} from 'react';
import Logo from './thegioidientu.png'
import './MenuTop.css'
import { Link } from 'react-router-dom';
import User from '../user/User';
import SearchBox from './SearchBox';
const {SubMenu} = Menu;
const {Header} = Layout;


function MenuTop(props) {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 400 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let headerClasses=[''];
    if(scrolled){
        headerClasses.push('sticky');
    }else{
      headerClasses.pop('sticky');
    }

    
  

    return (
        <Header className={headerClasses.join(" ")}>
            <Row className="rowHeader">
                <Col className="logo"
                xl={{span:5, order: 1}} 
                lg={{span:6, order: 1}} 
                md={{ order: 2,span:8,push:1}}
                sm={{order: 1,span:24}}
                xs={{order:2, span :15,push: 1}}
                >
                    <Link to="/">
                        <img className="logo" src={Logo} alt="The gioi dien tu" />
                    </Link>
                </Col>
                <SearchBox />
                <Col 
                    xl={{span:10, order: 3,push:2}} 
                    lg={{span:10, order: 3,push:1}}
                    md={{order: 1,span: 2}}
                    xs={{order:1, span :4}}
                >
                    <Menu  mode="horizontal">
                        <SubMenu key="apple" icon={<AppleOutlined />} title={
                        <Link to="/apple">Apple</Link> }>
                            <Menu.Item key="1"><Link to="/apple/iphone13">Iphone 13</Link></Menu.Item>       
                            <Menu.Item key="2">  <Link to="/apple/iphone12">Iphone 12  </Link></Menu.Item>               
                            <Menu.Item key="3">  <Link to="/apple/iphone11">Iphone 11 </Link></Menu.Item>     
                            <Menu.Item key="4"><Link to="/apple/iphonex">Iphone x series</Link></Menu.Item>               
                            <Menu.Item key="5"><Link to="/apple/iphone8">Iphone 8 | 8 Plus</Link></Menu.Item> 
                            <Menu.Item key="6"><Link to="/apple/iphone7">Iphone 7 | 7Plus</Link></Menu.Item>
                        </SubMenu>
        
                        <SubMenu key="mobile"  icon={<MobileOutlined />}  title={
                        <Link to="/mobile"> Điện thoại </Link> }>
                            <Menu.Item key="7"><Link to="/mobile/vsmart">VSmart  </Link></Menu.Item> 
                            <Menu.Item key="8"><Link to="/mobile/samsung">SamSung</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/mobile/xiaomi">Xiaomi </Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="tablet"  icon={<TabletOutlined />}  title={
                        <Link to="/tablet">Tablet</Link> }>
                            <Menu.Item key="10"> <Link to="/tablet/samsungtab">Samsung tab </Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/tablet/ipad">Ipad</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="laptop"  icon={<LaptopOutlined />}  title={<Link to="/laptop">Laptop</Link>}>
                            <Menu.Item key="13"><Link to="/laptop/macbook">Macbook</Link></Menu.Item>
                            <Menu.Item key="14"><Link to="/laptop/Dell">Dell</Link></Menu.Item>                        </SubMenu>
                        <SubMenu key="watch"  icon={<FieldTimeOutlined />}  title={<Link to="/watch">Đồng hồ</Link>}>
                            <Menu.Item key="15"><Link to="/watch/applewatch">Apple Watch</Link></Menu.Item>
                            <Menu.Item key="16"><Link to="/watch/samsungwatch">Samsung Watch</Link></Menu.Item>
                        </SubMenu>

                    </Menu>



                </Col>

                    <User />

            </Row>
        </Header>
    );
}

export default MenuTop;