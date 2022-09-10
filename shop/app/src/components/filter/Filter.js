import { Row,Col, Select,Typography,Space  } from 'antd';
import React from 'react';

const { Option } = Select;
const { Text } = Typography;
function Filter(props) {
    return (
        <Row style={{backgroundColor:"white", opacity: 0.8,marginTop:20,marginBottom: 20,padding:5}}>
            <Col lg={{span:4}}>
                <Space>
                    <Text strong>Vũ trụ</Text>
                    <Select size='small' style={{ width: 90 }}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                    </Select>
                </Space>
            </Col>
            <Col lg={{span:5}}>
                <Space>
                    <Text strong>Hành tinh</Text>
                    <Select size='small' style={{ width: 90 }}>
                        <Option value="xd">Xayda</Option>
                        <Option value="nm">Namek</Option>
                        <Option value="td">Trái đất</Option>
                    </Select>
                </Space>
            </Col>
            <Col lg={{span:5}}>
                <Space>
                    <Text strong>Phân loại</Text>
                    <Select size='small' style={{ width: 100 }}>
                        <Option value="1">Tầm trung</Option>
                        <Option value="2">SS có đệ tử</Option>
                        <Option value="3">Zin</Option>
                        <Option value="4">Xác max chỉ số</Option>
                    </Select>
                </Space>
            </Col>
            <Col lg={{span:5}}>
                <Space>
                    <Text strong>Giá</Text>
                    <Select size='small' style={{ width: 140 }}>
                        <Option value="1">0-50.000</Option>
                        <Option value="2">50.000-100.000</Option>
                        <Option value="3">100.000-200.000</Option>
                        <Option value="4">200.000-500.000</Option>
                        <Option value="4">Trên 500.000</Option>

                    </Select>
                </Space>
            </Col>
            <Col lg={{span:4}}>
                <Space>
                    <Text strong>Sắp xếp</Text>
                    <Select size='small'  style={{ width: 80 }}>
                        <Option value="1">Thấp tới cao</Option>
                        <Option value="2">Cao tới thấp</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>

                    </Select>
                </Space>
            </Col>
        </Row>
    );
}

export default Filter;              