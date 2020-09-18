import React, { Component } from 'react';
import { Table, Space, Button } from 'antd';
import '../../assets/style/orders.scss'
import api from '../../apis/api'


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`被选中的ID: ${selectedRowKeys}`, '选中的行: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
export default class Orders extends Component {
    componentDidMount() {
        this.getAllOrders();
    }
    state = {
        dataSource: [],
        columns: [
            {
                title: '订单编号',
                dataIndex: '_id',

            },
            {
                title: '用户名',
                dataIndex: 'students',
                render: (item) => {
                    return <>{item.name}</>
                }
            }, {
                title: '课程',
                dataIndex: 'className',
            },
            {
                title: '教练',
                dataIndex: 'coaches',
                render: (item) => {
                    return <>{item.name}</>
                }
            },
            {
                title: '订单价格',
                dataIndex: 'orderPrice',
            },
            {
                title: '日期',
                dataIndex: 'time',
            },
            {
                title: '操作',
                render: () => (
                    <Space size="middle">
                        <Button>删除</Button>
                    </Space>
                ),
            },
        ]
    }
    async getAllOrders() {
        const data = await api.orders.getAllOrders();
        await this.setState({
            dataSource: data.rows
        })
    }
    render() {
        return (
            <div className="orders-box">
                <Table
                    rowSelection={{
                        type: "checkbox",
                        ...rowSelection,
                    }}
                    columns={this.state.columns}
                    rowKey="_id"
                    dataSource={this.state.dataSource}
                />
            </div>
        )
    }
}
