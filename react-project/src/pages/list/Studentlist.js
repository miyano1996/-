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
                title: '操作',
                key: 'action',
                render: (text, { name, _id, isDelete }) => (
                    <Space size="middle">
                        <Button type="primary" onClick={() => this.gotoStudentdetail(text)}>详情</Button>
                        <Popconfirm
                            title={`确定要删除${name}这个学生吗？`}
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
        data: []
    }
    componentDidMount() {
        this.getStudents();
    }
    async getStudents(parmas) {
        try {
            let gymID = localStorage.gymID;
            let { arr, totalCount, pageNumber } = await api.students.getallStudents(parmas = { _id: gymID, pageSize: 10, pageNumber: 1 });
            this.setState({ data: arr, totalCount, current: pageNumber })
        } catch (error) {

        }
    }

    //删除学生
    async confirm(data) {
        try {
            data.isDelete = !data.isDelete
            await api.students.delStudent(data);
            this.getStudents();
            message.success('删除成功');
        } catch (error) {

        }

    }
    //详情信息
    gotoStudentdetail(e) {
        localStorage.studentID = e._id;
        this.props.history.push("/home/Sdetails")
    };
    //分页
    onChange = (pageNumber, pageSize) => {
        console.log(pageNumber, pageSize);
        this.getStudents({ pageNumber, pageSize })
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
