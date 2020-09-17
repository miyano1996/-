import React, { Component } from 'react'
import { Table, Space } from 'antd';
export default class Studentlist extends Component {
    state = {
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="https://www.baidu.com">{text}</a>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '家庭地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '联系电话',
                dataIndex: 'telephone',
                key: 'telephone',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a href="https://www.baidu.com">Invite {record.name}</a>
                        <a href="https://www.baidu.com">Delete</a>
                    </Space>
                ),
            },
        ],
        data: [
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
        ]
    }
    render() {
        return (
            <div className="Studentslist">
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
