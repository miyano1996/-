import React, { Component } from 'react';
import { Table, Space, Button, Avatar, Popconfirm, message } from 'antd';

import api from '../../apis/api'

export default class Studentlist extends Component {
    state = {
        totalCount: 0,
        current: 1,
        columns: [
            {
                title: '头像',
                render: (text, record) => (
                    <Space size="middle">
                        <Avatar size={60} src={require(`../../assets/images/${text.headImage}`)} />
                    </Space>
                ),

            },
            {
                title: '姓名',
                dataIndex: 'name',

            },
            {
                title: '性别',
                dataIndex: 'gender',

            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '联系电话',
                dataIndex: 'telephone',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, { name, _id, isDelete }) => (
                    <Space size="middle">
                        <Button onClick={() => this.updatedStudent(text)}>修改</Button>
                        <Popconfirm
                            title={`确定要删除${name}教练吗？`}
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
        data: [],
    }
    componentDidMount() {
        this.getallCoaches();
    }
    async getallCoaches(parmas = { pageSize: 10, pageNumber: 1 }) {
        try {
            let { rows, totalCount, pageNumber } = await api.coaches.getCoaches(parmas);
            this.setState({ data: rows, totalCount, current: pageNumber })
        } catch (error) {
            console.log('错误=====================================');
        }
    }
    updatedStudent = (text) => {
        console.log(text);
    }

    deleteStudent = () => {

    }
    onChange = (pageNumber, pageSize) => {
        this.getallCoaches({ pageNumber, pageSize })

    }
    async confirm(data) {
        try {
            data.isDelete = !data.isDelete
            await api.coaches.delCoaches(data);
            this.getallCoaches();
            message.success('删除成功');
        } catch (error) {

        }

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
