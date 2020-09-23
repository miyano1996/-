import React, { Component } from 'react';
import { Form, Input, Button,message } from 'antd';
import api from '../../apis/api';
import {withRouter} from 'react-router-dom'
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


class Login extends Component {
    onFinish = async (values) => {
        try {
            const res = await api.gym.login(values);
            const {token,userInfo} = res.rows;
            localStorage.setItem('token',token);
            localStorage.setItem("gymID",userInfo._id);
            localStorage.setItem('userInfo',JSON.stringify(userInfo));
            if(res.success){
                message.success(res.msg)
            }else{message.error(res.msg)}
            this.props.history.push('/home')
        } catch (error) {
            message.error("账号或密码错误！")
        }

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
                            <Input id="account"/>
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
                                <label onClick={()=>{this.props.openDrawer({account:document.getElementById("account").value})}}>忘记密码？</label>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
export default withRouter(Login)