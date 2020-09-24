import React, { Component } from 'react'
import { Button, Descriptions, Input, Card, Table, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../apis/api';

export default class OneGym extends Component {
    state = {
        disabled: true,
        changeinformation: '修改信息',
        announcementType: '新增',
        rows: { announcement: [], activeContent: [], activeTitle: [], activeImage: [], address: '{}' },
        _id: '',
        orders: [],
        totalCount: 0,
        list: [],
        current: 1,
        loading: false
    }
    async componentDidMount() {
        await this.setState({ _id: localStorage.gymID })
        // this.setState({_id:'5f65a8ffbb2219492cc67b9f'})
        await this.getGymsAsync()
        this.getOrdersAsync()
    }
    //获取订单
    getOrdersAsync = async () => {
        // console.log(localStorage.gymID);
        const _id = localStorage.gymID
        let orders = await api.orders.getAllOrders({ id: _id, pageSize: 3, pageSee: this.state.current });
        console.log(orders);
        this.setState({ orders: orders.rows, totalCount: orders.total })
        // console.log(this.state.orders);
    }
    //获取场馆
    getGymsAsync = async () => {
        const data = await api.gym.getGym(localStorage.gymID);
        this.setState({ rows: data.rows });
        // console.log(data);
    }
    //更改场馆
    updateGymAsync = async (obj) => {
        await api.gym.updateGym(obj)
        this.getGymsAsync()
    }
    //更改基础信息
    changeInformation = () => {
        if (this.state.disabled) {
            this.setState({ changeinformation: '确定' })
        } else {
            this.setState({ changeinformation: '修改信息' });
            this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
        }
        this.setState({ disabled: !this.state.disabled })
    }
    //更改公告
    updateAnnouncement = (index) => {
        // console.log(123);
        const rows = this.state.rows
        rows.announcement[index].statu = !rows.announcement[index].statu
        console.log(rows.announcement[index].btn);
        if (rows.announcement[index].btn === '修改') {
            rows.announcement[index].btn = '确认';
        } else if (rows.announcement[index].btn === '确认') {
            rows.announcement[index].btn = '修改'
        }
        this.setState({ rows: rows })
        // console.log({_id:this.state._id,...this.state.rows});
        this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
    }
    //更改公告状态
    newAnnouncement = (index, e) => {
        const rows = this.state.rows
        rows.announcement[index].content = e.target.value
        this.setState({ rows: rows })
        // this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
    }
    //新增公告
    addAnnouncement = async () => {
        const rows = this.state.rows
        if (rows.announcement.length === 0) {
            rows.announcement.push({ content: '', statu: false, id: 0, btn: '确定' })
        } else {
            rows.announcement.push({ content: '', statu: false, id: rows.announcement[rows.announcement.length - 1].id + 1, btn: '确定' })
        }
        await this.setState({ rows: rows })
        this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
        // console.log(this.state.rows);
        this.setState({ announcementType: '确定' })
        console.log(this.state.rows.announcement);
    }
    deleteAnnouncement = async (index) => {
        const rows = this.state.rows
        rows.announcement.splice(index, 1)
        await this.setState({ rows: rows })
        this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
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
    addActive = () => {
        this.props.history.push('/home/addActive')
    }
    hideModal = (index) => {
        const rows = this.state.rows
        rows.activeContent.splice(index, 1)
        rows.activeTitle.splice(index, 1)
        rows.activeImage.splice(index, 1)
        this.setState({ rows: rows })
        this.updateGymAsync({ _id: this.state._id, ...this.state.rows })
    }
    //删除活动
    delActive = (index) => {
        Modal.confirm({
            title: '警告',
            icon: <ExclamationCircleOutlined />,
            content: '确定要删除此项活动吗？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => this.hideModal(index),
            // onCancel:this.hideModal
        });

    }
    //去教练团
    toCoaches = () => {
        this.props.history.push('/home/coacheslist')
    }
    toStudents = () => {
        this.props.history.push('/home/studentslist')
    }
    onchange = (pageNumber, pageSize) => {
        console.log(pageNumber, pageSize);
        try {
            this.setState({ current: pageNumber })
            this.getOrdersAsync({ pageNumber, pageSize })
            this.setState({ loading: false })
        } catch (error) {
        }
    }
    render() {
        const { totalCount, loading, current, disabled, changeinformation, rows, orders } = this.state
        // const person = JSON.parse(localStorage.gymID).role
        // console.log(123);
        const { owner, name, grade, telephone, address, businessTime, idea, time, activeContent, activeTitle, announcement, activeImage } = rows
        var newAdd = JSON.parse(address)
        var addArr = []
        // console.log(rows);
        for (let a in newAdd) {
            addArr.push(newAdd[a])
        }
        var answer = `${addArr[0]}${addArr[1]}${addArr[2]}`
        const pagination = {
            total: totalCount,
            defaultPageSize: 3,
            onChange: this.onchange,
            current
        }
        const columns = [
            {
                title: '教练',
                render: (item) => (
                    // <Popconfirm
                    //     title={`确认删除${item.account}用户吗`}
                    //     onConfirm={() => this.confirm(item._id)}
                    //     okText="确定"
                    //     cancelText="取消"
                    // >
                    <Button type='primary' size='small'>{item.coaches.name}</Button>
                    // </Popconfirm>

                ),
            },
            {
                title: '费用',
                dataIndex: 'orderPrice',
                key: 'address',
            },
            {
                title: '学员',
                render: (item) => (
                    // <Popconfirm
                    //     title={`确认删除${item.account}用户吗`}
                    //     onConfirm={() => this.confirm(item._id)}
                    //     okText="确定"
                    //     cancelText="取消"
                    // >
                    <Button type='danger' size='small'>{item.students.name}</Button>
                    // </Popconfirm>

                ),
            },
            {
                title: '下单时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '订单状态',
                dataIndex: 'status',
                render: (text) => {
                    return { text } ? <span>已支付</span> : <span>未支付</span>
                },
                key: 'status',
            },
        ];
        return (
            <div style={{ padding: '20px 10px', backgroundColor: 'white', marginBottom: 40 }}>
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
                            <Input disabled value={owner} size='small' onChange />
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
                            <Button onClick={() => this.updateAnnouncement(index)}>修改</Button>
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
                        activeTitle.map((item, index) => {
                            return <div style={{ marginRight: 10, marginBottom: 30 }} key={index}>
                                <Card title={item} extra={<Button type="primary" onClick={() => this.delActive(index)} danger>删除</Button>}
                                    style={{ width: 300 }}>
                                    <p style={{ height: 90 }}>惊喜：{activeContent[index]}</p>
                                    <img style={{ width: 250, height: 140, marginTop: 20 }} src={activeImage[index] ? `http://localhost:4000/temp/${activeImage[index]}` : require(`../assets/images/jianshenActive-1.jpg`)} alt="" />
                                </Card>
                            </div>
                        })
                    }
                    <div style={{ marginRight: 10, marginBottom: 30 }} >
                        <Card title='新增活动'
                            style={{ width: 300 }}>
                            <p onClick={this.addActive} style={{
                                fontSize: 200, lineHeight: 1.3, fontWeight: 100, color: '#f2f2f2', cursor: 'pointer',
                                border: '2px solid #f2f2f2', margin: 0, padding: 0, textAlign: 'center'
                            }}>+
                            </p>
                        </Card>
                    </div>
                </div>
                <div className='title'>
                    课程安排
                    </div>
                <div>
                    <Table rowKey='_id' loading={loading} columns={columns} dataSource={orders} pagination={pagination} />

                </div>
                <div className='title'>
                    馆内人员
                </div>
                <div style={{ marginLeft: 20, marginBottom: 100 }}>
                    <Button type="primary" onClick={this.toCoaches}>荣誉教练团</Button>
                    <Button type="danger" onClick={this.toStudents} style={{ marginLeft: 20 }}>全部学员</Button>
                </div>
            </div>
        )
    }
}
