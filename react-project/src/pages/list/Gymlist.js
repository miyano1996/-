import React, { Component } from 'react'
import { Table, Space, Button, Popconfirm, message } from 'antd';
import api from '../../apis/api';


export default class Studentlist extends Component {
    state = {
        totalCount: 0,
        current: 1,
        layout: {
            labelCol: {
                span: 5,
            },
            wrapperCol: {
                span: 16,
            },
        },
        tailLayout: {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        },
        columns: [
            {
                title: '馆名',
                dataIndex: 'name',
            },
            {
                title: '联系电话',
                dataIndex: 'telephone',
            },
            {
                title: '馆长',
                dataIndex: 'owner',
            },
            {

                title: '操作',
                key: 'action',
                render: (text, { name, _id, isDelete }) => (
                    <Space size="middle">
                        <Button type="primary" onClick={() => this.gotoGymdetail(text)}>详情</Button>
                        <Popconfirm
                            title={`确定要删除${name}健身馆吗？`}
                            onConfirm={() => { this.confirm({ _id, isDelete }) }}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type='danger'>删除</Button>
                        </Popconfirm>

                    </Space>
                ),
            },
        ],
        data: [
        ]
    }
    componentDidMount() {
        this.getAllGym();
    }
    //刷新信息
    rsetform() {
        this.Myform.resetFields();
    }
    //详情信息
    gotoGymdetail(e) {
        localStorage.gymID = e._id;
        this.props.history.push("/home/oneGym")
    };
    //获取教练
    async getAllGym(parmas = { pageSize: 10, pageNumber: 1 }) {
        try {
            let { rows, totalCount, pageNumber } = await api.gym.getAllGym(parmas);
            console.log(rows);
            this.setState({ data: rows, totalCount, current: pageNumber })
        } catch (error) {
        }

    }
    updatedGym = (text) => {
        console.log(text);
    }
    //删除教练
    async confirm(data) {
        try {
            data.isDelete = !data.isDelete
            await api.gym.delGym(data);
            this.getAllGym();
            message.success('删除成功');
        } catch (error) {

        }
    }
    //分页
    onChange = (pageNumber, pageSize) => {
        console.log(pageNumber, pageSize);
        this.getAllGym({ pageNumber, pageSize })
    }
    render() {
        const { data, columns, totalCount, current } = this.state;
        const pagination = {
            total: totalCount,
            current,
            onChange: this.onChange
        }
        return (
            <div className="List">
                <Table rowKey="_id" pagination={pagination} columns={columns} dataSource={data} className="table" />
            </div>
        )
    }
}
