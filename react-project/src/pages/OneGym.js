import React, { Component } from 'react'
import { Button, Descriptions, Input, Card, Table, Tag, Space } from 'antd';
import api from '../apis/api';

const columns = [
    {
        title: '教练',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
    },
    {
        title: '课时',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '费用',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '学员',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '时间',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <span>Invite {record.name}</span>
                <span>Delete</span>
            </Space>
        ),
    },
    {
        title: '订单状态',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <span>Invite {record.name}</span>
                <span>Delete</span>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export default class OneGym extends Component {
    state = {
        disabled: true,
        changeinformation: '修改信息',
        announcementType: '新增',
        rows:{announcement:[],activeContent:[],activeTitle:[],activeImage:[],address:'{}'},
    }
    componentDidMount(){
        this.setState({_id:JSON.parse(localStorage.userInfo)._id})
        // this.setState({_id:'5f65a8ffbb2219492cc67b9f'})
        this.getGymsAsync()
    }
    //获取场馆
    getGymsAsync=async ()=>{
        const data =await api.gym.getGym(JSON.parse(localStorage.userInfo)._id);
        // const data =await api.gym.getGym('5f65a8ffbb2219492cc67b9f');
        this.setState({rows:data.rows})
        // console.log(data);
    }
    //更改场馆
    updateGymAsync = async (obj)=>{
        const data  = await api.gym.updateGym(obj)
        // this.getGymsAsync()
    }
    //更改基础信息
    changeInformation = () => {
        if (this.state.disabled) {
            this.setState({ changeinformation: '确定' })
        } else {
            this.setState({ changeinformation: '修改信息' });
            this.updateGymAsync({_id:this.state._id,...this.state.rows})
        }
        this.setState({ disabled: !this.state.disabled })
    }
    //更改公告
    updateAnnouncement = (index) => {
        const rows = this.state.rows
        rows.announcement[index].statu = !rows.announcement[index].statu
        if (rows.announcement[index].btn === '修改') {
            rows.announcement[index].btn = '确认'
        } else if (rows.announcement[index].btn === '确认') {
            rows.announcement[index].btn = '修改'
        }
        this.setState({ rows: rows })
        // console.log({_id:this.state._id,...this.state.rows});
        this.updateGymAsync({_id:this.state._id,...this.state.rows})
    }
    //更改公告状态
    newAnnouncement = (index, e) => {
        const rows  = this.state.rows
        rows.announcement[index].content = e.target.value
        this.setState({ rows: rows })
        this.updateGymAsync({_id:this.state._id,...this.state.rows})
    }
    //新增公告
    addAnnouncement =async () => {
        const rows = this.state.rows
        rows.announcement.push({ content: '', statu: false, id: rows.announcement.length, btn: '确定' })
        await this.setState({ rows: rows })
        this.updateGymAsync({_id:this.state._id,...this.state.rows})
        console.log(this.state.rows);
        this.setState({ announcementType: '确定' })
    }
    deleteAnnouncement = async(index)=>{
        const rows = this.state.rows
        rows.announcement.splice(index,1)
        await this.setState({ rows: rows })
        this.updateGymAsync({_id:this.state._id,...this.state.rows})
    }
    //新名字
    newName = (e) => {
        const rows = this.state.rows
        rows.name = e.target.value
        this.setState({ rows })
    }
    //新电话
    newTelephone = (e) => {
        const rows = this.state.rows
        rows.telephone = e.target.value
        this.setState({ rows })
    }
    //新营业时间
    newBusinessTime = (e) => {
        const rows = this.state.rows
        rows.businessTime = e.target.value
        this.setState({ rows })
    }
    //新理念
    newIdea = (e) => {
        const rows = this.state.rows
        rows.idea = e.target.value
        this.setState({ rows })
        // console.log(rows.idea);
    }
    newName = (e) => {
        const rows = this.state.rows
        rows.name = e.target.value
        this.setState({ rows })
    }
    newName = (e) => {
        const rows = this.state.rows
        rows.name = e.target.value
        this.setState({ rows })
    }
    addActive = ()=>{
        this.props.history.push('/home/addActive')
    }
    //删除活动
    delActive = (index)=>{
        const rows = this.state.rows
        rows.activeContent.splice(index,1)
        rows.activeTitle.splice(index,1)
        rows.activeImage.splice(index,1)
        this.setState({ rows: rows })
        this.updateGymAsync({_id:this.state._id,...this.state.rows})
    }
    render() {
        const { disabled, changeinformation,rows, } = this.state
        const person = JSON.parse(localStorage.userInfo).role
        // console.log(rows);
        const {name,grade,telephone,address, businessTime,idea,time,activeContent,activeTitle,announcement,activeImage} = rows
        var newAdd = JSON.parse(address)
        var addArr = []
        // console.log(rows);
        for(let a in newAdd){
            addArr.push(newAdd[a])
        }
        var answer = `${addArr[0]}${addArr[1]}${addArr[2]}`
        return (
            <div style={{ padding: '20px 10px',backgroundColor:'white',marginBottom:40 }}>
                <div className='title'>
                    基础信息
                    </div>
                <div style={{ marginLeft: '20px' }}>
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="馆名">
                            <Input disabled={disabled} value={name} size='small' onChange={this.newName} />
                        </Descriptions.Item>
                        <Descriptions.Item label="咨询热线">
                            <Input disabled={disabled} value={telephone} size='small' onChange={this.newTelephone} />
                        </Descriptions.Item>
                        <Descriptions.Item label="创始人">
                            <Input disabled value={person} size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="会馆地址">
                            <Input disabled value={answer} size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="创建时间">
                            <Input disabled value={time} size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="营业时间">
                            <Input disabled={disabled} value={businessTime} size='small' onChange={this.newBusinessTime} />
                        </Descriptions.Item>
                        <Descriptions.Item label="会馆理念">
                            <Input disabled={disabled} value={idea} size='small' onChange={this.newIdea} />
                        </Descriptions.Item>
                        <Descriptions.Item label="会馆星级">
                            <Input disabled value={grade} size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="">
                            <Button onClick={this.changeInformation}>{changeinformation}</Button>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
                <div className='title'>
                    公告
                    </div>
                {
                    announcement.map((item, index) => {
                        return <div style={{ paddingLeft: 20, marginBottom: 10 }} key={index}>
                            <Input
                                value={item.content}
                                disabled={item.statu}
                                style={{ width: 700 }}
                                onChange={(e) => this.newAnnouncement(index, e)}
                            />
                            <Button onClick={() => this.updateAnnouncement(index)}>{item.btn}</Button>
                            <Button type="primary" danger onClick={() => this.deleteAnnouncement(index)}>删除</Button>
                        </div>
                    })
                }
                <Button style={{ marginLeft: 20 }} onClick={this.addAnnouncement}>新增信息</Button>
                <div className='title'>
                    今日活动
                    </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {
                        activeTitle.map((item,index) => {
                            return <div style={{ marginRight: 10, marginBottom: 30 }} key={index}>
                                <Card title={item} extra={<Button type="primary" onClick={()=>this.delActive(index)}  danger>删除</Button>}
                                    style={{ width: 300 }}>
                                    <p style={{height:90}}>惊喜：{activeContent[index]}</p>
                                    <img style={{ width: 250, height: 140, marginTop: 20 }} src={require(`../assets/images/${activeImage[index]}`)} alt="" />
                                </Card>
                            </div>
                        })
                    }
                    <div style={{ marginRight: 10, marginBottom: 30 }} >
                        <Card title='新增活动'
                            style={{ width: 300 }}>
                            <p onClick={this.addActive} style={{
                                fontSize: 200, lineHeight: 1.3, fontWeight: 100, color: '#f2f2f2', cursor: 'pointer',
                                border: '2px solid #f2f2f2',margin:0,padding:0,textAlign:'center'
                            }}>+
                            </p>
                        </Card>
                    </div>
                </div>
                <div className='title'>
                    课程安排
                    </div>
                <div>
                    <Table columns={columns} dataSource={data} />
                </div>
                <div className='title'>
                    馆内人员
                </div>
                <div style={{marginLeft:20,marginBottom:100}}>
                    <Button type="primary">荣誉教练团</Button>
                    <Button type="primary" style={{marginLeft:20}}>全部学员</Button>
                </div>
            </div>
        )
    }
}
