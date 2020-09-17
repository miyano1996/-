import React, { Component } from 'react'
import api from '../../apis/api';
import { Image } from 'antd';

export default class Sdetails extends Component {
    state={
      id:'5f6307fb157f00009e001398',
      list:{}
    }
    getData=async (id)=>{
        const {getone}=api.students;
       const data= await getone({id});
       this.setState({list:data.data.getdata[0]})
        console.log(this.state.list)
    }
    componentDidMount(){
        // console.log(students.getone);
        this.getData(this.state.id)
    }
    render() {
        const {name,account,headImage,telephone,loginAdress}=this.state.list;
        console.log(headImage)
        return (
            <div className="sDetails">
                <div className="box">
                    <div className="headimg">
                        <Image  src={headImage} alt=""/>
                         <p>{name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

