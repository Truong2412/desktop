import { Breadcrumb } from 'antd';
import React, { useEffect } from 'react';

function BreadCrumb(props) {
    let crumb = props.crumb;
    
    const checkSeries = ()=> {
        if(crumb.series ){
            return (
                <Breadcrumb.Item>
                    <>{crumb.series}</>
                </Breadcrumb.Item>)
        }
        else {
        }
    }
    useEffect(()=>{
        checkSeries();
    })

    return (
                    <Breadcrumb>
                        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>

                        <Breadcrumb.Item>
                            <>{crumb.brand}</>
                        </Breadcrumb.Item>
                        {checkSeries()}
                        <Breadcrumb.Item>
                            {props.name}
                        </Breadcrumb.Item>
                    </Breadcrumb>
    );
}

export default BreadCrumb;