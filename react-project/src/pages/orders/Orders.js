import React, { Component } from 'react';
import { Table, Space, Button } from 'antd';
import '../../assets/style/orders.scss'

const dataSource = [
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    },
    {
        id: '1',
        name: '胡彦斌',
        ordersId: '451454852552',
        coachName: '李四',
        className: '瑜伽 · 柔韧提升',
        ordersDate: '2020-9-18'
    }
];

const columns = [
    {
        title: '订单编号',
        dataIndex: 'ordersId',
        key: 'ordersId',
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '课程',
        dataIndex: 'className',
        key: 'className',
    },
    {
        title: '教练',
        dataIndex: 'coachName',
        key: 'coachName',
    },
    {
        title: '日期',
        dataIndex: 'ordersDate',
        key: 'ordersDate',
    },
    {
        title: '操作',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Button>删除</Button>
            </Space>
        ),
    },
];


export default class Orders extends Component {
    render() {
        return (
            <div className="orders-box">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}
