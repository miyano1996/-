import React, { Component } from 'react'
import { Table, Space, Button } from 'antd';


export default class Studentlist extends Component {
    state = {
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '联系电话',
                dataIndex: 'telephone',
                key: 'telephone',
            },
            {
                title: '课程',
                dataIndex: 'course',
                key: 'course',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button onClick={() => this.updatedStudent(text)}>修改</Button>
                        <Button type="danger" onClick={() => this.deleteStudent()} >删除</Button>
                    </Space>
                ),
            },
        ],
        data: [
            {
                key: '1',
                name: '落落',
                age: 32,
                address: '不详',
            },
            {
                key: '2',
                name: '轰轰',
                age: 42,
                address: '不详',
            },
            {
                key: '3',
                name: '尼蜜',
                age: 32,
                address: '不详',
            },
        ]
    }
    updatedStudent = (text) => {
        console.log(text);
    }

    deleteStudent = () => {

    }
    render() {
        return (
            <div className="List">
                <Table columns={this.state.columns} dataSource={this.state.data} className="table" />
            </div>
        )
    }
}
