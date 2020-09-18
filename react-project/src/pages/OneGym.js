import React, { Component } from 'react'
import { Button, Descriptions, Input, Card, Table, Tag, Space } from 'antd';


const columns = [
    {
        title: '教练',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
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
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
    {
        title: '订单状态',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
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
        announcement: [{
            content: '会馆会为所有学员免费购买保险！',
            statu: true,
            btn: '修改',
            id: 0
        }, {
            content: '教练在挂牌工作时不得拒绝学生的邀约。',
            statu: true,
            btn: '修改',
            id: 1
        }],
        announcementType: '新增',
        name: '球球健身馆',
        grade: '3',
        active: [
            {
                id: 0, title: '感恩大回馈！成为会员满一年即送五节课！', imgPath: require("../assets/images/jianshenActive-1.jpg"),
                content: '自2020年10月17日起，凡在本会馆成为会员满一年时间的学员，可在前台小姐姐出进行登记！登记成功即可获得五次免费上课机会！快来参与吧！'
            },
            {
                id: 1, title: '感恩大回馈！成为会员满一年即送五节课！', imgPath: require("../assets/images/jianshenActive-1.jpg"),
                content: '自2020年10月17日起，凡在本会馆成为会员满一年时间的学员，可在前台小姐姐出进行登记！登记成功即可获得五次免费上课机会！快来参与吧！'
            },
            {
                id: 2, title: '感恩大回馈！成为会员满一年即送五节课！', imgPath: require("../assets/images/jianshenActive-1.jpg"),
                content: '自2020年10月17日起，凡在本会馆成为会员满一年时间的学员，可在前台小姐姐出进行登记！登记成功即可获得五次免费上课机会！快来参与吧！'
            },
            {
                id: 3, title: '感恩大回馈！成为会员满一年即送五节课！', imgPath: require("../assets/images/jianshenActive-1.jpg"),
                content: '自2020年10月17日起，凡在本会馆成为会员满一年时间的学员，可在前台小姐姐出进行登记！登记成功即可获得五次免费上课机会！快来参与吧！'
            },
            {
                id: 4, title: '感恩大回馈！成为会员满一年即送五节课！', imgPath: require("../assets/images/jianshenActive-1.jpg"),
                content: '自2020年10月17日起，凡在本会馆成为会员满一年时间的学员，可在前台小姐姐出进行登记！登记成功即可获得五次免费上课机会！快来参与吧！'
            },
        ]
    }
    changeInformation = () => {
        if (this.state.disabled) {
            this.setState({ changeinformation: '确定' })
        } else {
            this.setState({ changeinformation: '修改信息' })
        }
        this.setState({ disabled: !this.state.disabled })
    }
    updateAnnouncement = (index) => {
        const announcement = this.state.announcement
        announcement[index].statu = !announcement[index].statu
        if (announcement[index].btn === '修改') {
            announcement[index].btn = '确认'
        } else if (announcement[index].btn === '确认') {
            announcement[index].btn = '修改'
        }
        this.setState({ announcement: announcement })
    }
    newAnnouncement = (index, e) => {
        const announcement = this.state.announcement
        announcement[index].content = e.target.value
        this.setState({ announcement: announcement })
    }
    addAnnouncement = () => {
        const announcement = this.state.announcement
        announcement.push({ content: '', statu: false, id: announcement.length, btn: '确定' })
        this.setState({ announcement: announcement })
        this.setState({ announcementType: '确定' })
    }
    newName = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        const { disabled, changeinformation, announcement, name, active, grade } = this.state
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
                            <Input disabled={disabled} value='13838388838' size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="创始人">
                            <Input disabled={disabled} value='张大炮' size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="会馆地址">
                            <Input disabled={disabled} value='四川省成都市高新区孵化园' size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="创建时间">
                            <Input disabled={disabled} value='2017-10-10' size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="营业时间">
                            <Input disabled={disabled} value='全年无休' size='small' onChange />
                        </Descriptions.Item>
                        <Descriptions.Item label="会馆说明">
                            <Input disabled={disabled} value='自律给我自由！' size='small' onChange />
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
                        return <div style={{ paddingLeft: 20, marginBottom: 10 }} key={item.id}>
                            <Input
                                value={item.content}
                                disabled={item.statu}
                                style={{ width: 700 }}
                                onChange={(e) => this.newAnnouncement(index, e)}
                            />
                            <Button onClick={() => this.updateAnnouncement(index)}>{item.btn}</Button>
                        </div>
                    })
                }
                <Button style={{ marginLeft: 20 }} onClick={this.addAnnouncement}>新增信息</Button>
                <div className='title'>
                    今日活动
                    </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {
                        active.map(item => {
                            return <div style={{ marginRight: 10, marginBottom: 30 }} key={item.id}>
                                <Card title={item.title} extra={<Button type="primary" danger>删除</Button>}
                                    style={{ width: 300 }}>
                                    <p>惊喜：{item.content}</p>
                                    <img style={{ width: 250, height: 140, marginTop: 20 }} src={item.imgPath} alt="" />
                                </Card>
                            </div>
                        })
                    }
                    <div style={{ marginRight: 10, marginBottom: 30 }} >
                        <Card title='新增活动'
                            style={{ width: 300 }}>
                            <p style={{
                                fontSize: 200, lineHeight: 1.3, fontWeight: 100, color: '#f2f2f2', cursor: 'pointer',
                                border: '3px solid #f2f2f2',margin:0,padding:0,textAlign:'center'
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
