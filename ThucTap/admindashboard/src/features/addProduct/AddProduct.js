import { Col, Divider, Input, Radio, Row, Space } from 'antd';
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddProduct() {
    const [brand,setBrand] = useState('')
    const brandChange = (e)=> {
        setBrand(e.target.value)
    }
    return (
        <Row>
            <Col span={3}>
                <Divider ><div style={{color: "pink"}}> Thương hiệu </div></Divider>
                <Radio.Group >
                    <Space direction="vertical" onChange={e=>brandChange(e)} value={brand}>
                    <Radio value={1}>Apple</Radio>
                    <Radio value={2}>Samsung</Radio>
                    <Radio value={3}>Xiaomi</Radio>
                    <Radio value={4}>
                        More...
                        {brand === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                    </Space>
                </Radio.Group>
            </Col>

            
            <Col span={3}>
                <Divider ><div style={{color: "pink"}}> Phân loại </div></Divider>
                <Radio.Group >
                    <Space direction="vertical" onChange={e=>brandChange(e)} value={brand}>
                    <Radio value={1}>Điện thoại</Radio>
                    <Radio value={2}>Laptop</Radio>
                    <Radio value={3}>Tablet - máy tính bảng</Radio>
                    <Radio value={4}>
                        More...
                        {brand === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                    </Space>
                </Radio.Group>
            </Col>

            <Col span={3}>
                <Divider ><div style={{color: "pink"}}> Series </div></Divider>
                <Radio.Group >
                    <Space direction="vertical" onChange={e=>brandChange(e)} value={brand}>
                    <Radio value={1}>Điện thoại</Radio>
                    <Radio value={2}>Laptop</Radio>
                    <Radio value={3}>Tablet - máy tính bảng</Radio>
                    <Radio value={4}>
                        More...
                        {brand === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                    </Space>
                </Radio.Group>
            </Col>

            <Col span={3}>
                <Divider ><div style={{color: "pink"}}> Trạng thái </div></Divider>
                <Radio.Group >
                    <Space direction="vertical" onChange={e=>brandChange(e)} value={brand}>
                    <Radio value={1}>Hết hàng</Radio>
                    <Radio value={2}>Hàng sắp về</Radio>
                    <Radio value={3}>Còn hàng</Radio>
                    <Radio value={4}>Ngừng kinh doanh</Radio>
                    <Radio value={5}>
                        More...
                        {brand === 5 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                    </Space>
                </Radio.Group>
            </Col>

            <Col span={6}>
                <Divider>Tên sản phẩm</Divider>
                <Input style={{ padding: "10px" }} />
                
            </Col>

            {/* <div>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div> */}
        </Row>
    );
}

export default AddProduct;