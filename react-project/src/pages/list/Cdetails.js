import React, { Component } from 'react'
import api from '../../apis/api'
import { Avatar, Button } from 'antd';
import { TrademarkOutlined, EnvironmentOutlined, WhatsAppOutlined, FireOutlined, ContactsOutlined, ReadOutlined } from '@ant-design/icons';

export default class Cdetails extends Component {
    state = {
        list: {
            headImage:'sweet.jpg',//默认值
        },
        gym: '',
        workingTime: [],
        course: [],
        students: [],
    }
    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        let id = localStorage.coachesID;
        const data = await api.coaches.getone({ id });
        //工作日  字符串转数组遍历
        const workingTime = (data.getdata[0].workingTime).split(',')
        this.setState({
            list: data.getdata[0], gym: data.getdata[0].gym.name,
            course: data.getdata[0].course, workingTime,
            students: data.getdata[0].students
        });
    }

    render() {
        //course课程项目,students上课时间
        const {name,account,headImage,telephone,loginAddress,isRest,price,}=this.state.list;
        const {gym,course,workingTime,students}=this.state;
        const imgpath="http://localhost:4000/temp/"+headImage;
        // console.log(headImage,this.list)

        return (
            <div className="c-details">
                <div className="cBox">
                    <div className="left">
                        <div className="left-head">
                            <Avatar size={64} src={imgpath}/>
                            <p>{name}</p>
                        </div>
                        <div className="left-box">
                            <p>账号:</p>
                            <span>{account}</span>
                        </div>
                        <div className="left-box">
                            <p>场馆:</p>
                            <span>{gym}</span>
                        </div>
                        <div className="left-box">
                            <p>课时费:</p>
                            <span>￥:{price}/节</span>
                        </div>
                        <div className="left-box">
                            <p><TrademarkOutlined /></p>
                            {isRest ? <span>工作中</span> : <span>休息</span>}
                        </div>
                        <div className="left-box">
                            <p><WhatsAppOutlined /></p>
                            <span>{telephone}</span>
                        </div>
                        <div className="left-box">
                            <p><EnvironmentOutlined /></p>
                            <span className="live-id">{loginAddress}</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-box">
                            <p><ReadOutlined />课程</p>
                            <ul>
                                {course.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="right-box">
                            <p><ContactsOutlined />工作日</p>
                            <ul>
                                {workingTime.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="right-del">
                            <p>目前学员:{students.length > 0 && <FireOutlined />} <span>{students.length}</span>人</p>
                            <div className="right-btn">
                                <Button type="primary" size="large" style={{ height: "40px", borderRadius: "4px" }} block danger>封禁用户</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
