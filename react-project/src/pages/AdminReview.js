import { Table, notification, Space, Image, Popconfirm, message, Button } from 'antd';
import React, { Component } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import api from '../apis/api';

export default class AdminReview extends Component {
    state = {
        columns: [
            {
                title: '场馆名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <span>{text}</span>,
            },
            {
                title: '联系电话',
                dataIndex: 'telephone',
                key: 'telephone',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '申请账号',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '申请时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '图片',
                dataIndex: 'images',
                key: 'images',
                render: (text, record) => (
                    this.renderImgs(text)
                ),
            },
            {
                title: '申请码',
                dataIndex: '_id',
                key: '_id',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle" key={text._id}>
                        <Popconfirm
                            title="确定同意该场馆的申请?"
                            onConfirm={() => this.confirm('同意')}
                            onCancel={this.cancel}
                            okText="同意"
                            cancelText="取消"
                        >
                            <Button type="primary" onClick={() => this.clickHidel(text, '同意')}>同意</Button>
                        </Popconfirm>

                        <Popconfirm
                            title="确定拒绝该场馆申请?"
                            onConfirm={() => this.confirm('拒绝')}
                            onCancel={this.cancel}
                            okText="拒绝"
                            cancelText="取消"
                        >
                            <Button type="waring" onClick={() => this.clickHidel(text, '拒绝')}>拒绝</Button>
                        </Popconfirm>
                    </Space>
                ),
            },
        ],
        gymInfo: []
    }

    renderImgs = (text) => {
        let arr = [];
        arr = text.map(ele => {
            return <Image key={ele}
                width={40}
                src={`http://localhost:4000/temp/${ele}`}
                style={{ paddingLeft: 10 }}
            />
        })
        return arr
    }

    componentDidMount() {
        this.getGyms();
        setTimeout(() => {
            this.openNotification();
        }, 1000);

    }

    getGyms = async () => {
        try {
            const data = await api.gym.getGymByStatus({ status: '0' });
            for (let i = 0; i < data.rows.length; i++) {
                let address = JSON.parse(data.rows[i].address)
                data.rows[i].address = address.province + address.city + address.district + address.street + address.streetNumber;
            }
            this.setState({
                gymInfo: data.rows
            })
        } catch (error) {
            console.log('catch');
            await this.setState({
                gymInfo: []
            })
        }
    }

    changeGymStatus = async (text, status) => {
        try {
            await api.gym.changeGymStatus({ _id: text._id, status: status });
        } catch (error) {

        }

    }

    clickHidel = async (text, btn) => {
        switch (btn) {
            case '同意':
                await this.changeGymStatus(text, '1')
                // console.log(data);
                break;
            case '拒绝':
                await this.changeGymStatus(text, '2')
                // console.log(obj);
                break;
            default: break;
        }
    }

    confirm = (e) => {
        message.success(`已${e}`);
        this.getGyms();
    }

    cancel = (e) => {
        message.error('已取消');
    }

    openNotification = () => {
        notification.open({
            message: '场馆申请提醒',
            description:
                `当前共有${this.state.gymInfo.length}条待处理申请`,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ fontSize: 20, fontWeight: '800' }}>场馆申请列表</h1>
                <Table rowKey="_id" columns={this.state.columns} dataSource={this.state.gymInfo} />
            </div>
        )
    }
}
