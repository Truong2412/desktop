import { Col,Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuTop.css'
const {Search}= Input;
const removeMarkUrl = (str) => {
    str = str.toLowerCase();     
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}
function SearchBox(props) {
    const [itemFound, setItemFound] = useState([]);
    const handleChange =async e =>{
        let searchText = e.target.value;


        await axios.get('http://localhost:3333/api/search')
        .then(res=> {
            console.log(res.data)
            var foundList = [];
            if(searchText===''){
                foundList = [];
            }
            else{
                res.data.forEach(item => {
                    var name = item.name;
    
                    if (name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                        foundList.push(item);
                    }
    
                });
            }

            setItemFound(foundList);
        })
    }
    const removeFound = (e) => {
        setItemFound([]);
    }
    const showFound = itemFound.map((value,key)=> {
        var id = value._id;
        return(
            <div key={key} className="showItem" >
                <Link onClick={e=>removeFound(e)} to={"/" + (value.brand) +"/" + removeMarkUrl(value.name)+ "/"+id }>{value.name}</Link>
            </div>
        )
    })
    const onSearch = value=> {
        // console.log(value);
    }
    return (
        <Col className="searchBox"
        xl={{span:4, order: 2}}
        lg={{span:4, order: 2}}
        md={{ order: 3,span:8,push:1}}
        xs={{order:4, span :22,push:1}}
    >
            <Search onSearch={onSearch} onChange={e=>handleChange(e)} placeholder="Tìm kiếm...."  enterButton />
            <div className="showFound">
                {showFound}
            </div>
        </Col>
    );
}

export default SearchBox;