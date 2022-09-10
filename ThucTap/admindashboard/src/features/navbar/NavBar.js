import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
function NavBar(props) {
    const [current, setCurrent] = useState('')

     const handleClick = e => {
      setCurrent(e.key);
    };
    return (
      
        <Menu
          theme='dark'
          onClick={handleClick}
          style={{ width: 256, minHeight: "961px" }}

          selectedKeys={[current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Quản lý trang & sản phẩm">
            <Menu.Item key="1"><Link to="/pagemanager">Quản lý trang</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/productmanager">Quản lý sản phẩm</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/addproduct">Thêm sản phẩm mới</Link></Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Quản lý đơn hàng">
            <Menu.Item key="5">Đơn hàng mới</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      
    );
}

export default NavBar;    