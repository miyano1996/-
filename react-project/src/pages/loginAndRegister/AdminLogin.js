import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import api from '../../apis/api';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class AdminLogin extends Component {
    onFinish = async (values) => {
        const res = await api.admin.login(values);
        console.log(res)
    };
    render() {
        return (
            <div className="login-box-container">
                <div className="login-box">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            label="账号"
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your account!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <div className="form-bottom-item">
                                <Button type="primary" htmlType="submit">登录</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
