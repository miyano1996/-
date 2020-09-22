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
                title: '已购课程',
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
        data: []
    }
    updatedStudent = (text) => {
        console.log(text);
    }

    deleteStudent = () => {

    }
    render() {
        const { data, columns } = this.state
        return (
            <div className="List">
                <Table columns={columns} dataSource={data} className="table" />
            </div>
        )
    }
}
