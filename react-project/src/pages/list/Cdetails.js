import React, { Component } from 'react'
import api from '../../apis/api'
import { Image,Avatar,Button,Divider} from 'antd';


export default class Cdetails extends Component {
    state={
        list:{},
        id:'5f62d528157f00009e001395'
    }
    componentDidMount(){
        this.getData(this.state.id)
    }
    getData=async (id)=>{
        const data=await api.coaches.getone({id});
        this.setState({list:data.getdata[0]})
        console.log(this.state.list)
    }

    render() {
        //course课程项目,students上课时间
        const {name,account,headImage,telephone,loginAdress,isRest,price,workingTime,course,students}=this.state.list;
        console.log(name,account,headImage)
        return (
            <div>
                <div className="cBox">
                    <div className="left">
                        <Avatar size={64}  src={headImage}/>
                         <p>{name}</p>
                         <div className="left-box">
                             <p>账号:</p>
                             <span>{account}</span>
                         </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}
