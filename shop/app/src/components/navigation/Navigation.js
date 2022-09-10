import React, { useState } from 'react';
import { Layout, Menu,Button } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
  WalletTwoTone
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation(props) {
    const [theme,setTheme] = useState("light");


    return (
        <Sider breakpoint="md" collapsedWidth="0" style={{zIndex: 2}} theme={theme} >
          <Menu theme={theme} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Ngọc rồng online">
              <Menu.Item key="1">Acc sơ sinh</Menu.Item>
              <Menu.Item key="2">Dịch vụ</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Tài khoản">
              <Menu.Item icon={<WalletTwoTone />} key="4">Số dư</Menu.Item>
              <Menu.Item key="5">Nạp tiền</Menu.Item>
              <Menu.Item key="6">Rút tiền</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Giao dịch">
              <Menu.Item key="7">Số dư</Menu.Item>
              <Menu.Item key="8">Giao dịch</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
}

export default Navigation;                      