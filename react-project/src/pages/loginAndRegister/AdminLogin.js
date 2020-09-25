import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
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
        try {
            const res = await api.admin.login(values);
            console.log(res)
            const { token, userInfo } = res.rows;
            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            if(res.success){
                message.success(res.msg)
            }else{
                message.error(res.msg)
            }
            this.props.history.push('/home')
        } catch (error) {
            message.error(error.msg)
        }

    };
    render() {
        return (
            <div className="adminLogin-box-container">
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
