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

export default class Login extends Component {
    onFinish = async (values) => {
        try {
            const res = await api.gym.register({ 
                ...values, 
                role: "gym",
                images: [
                    "-1823576cb007cbbf.gif"
                ],
                address: "{\"province\":\"四川省\",\"city\":\"成都市\",\"district\":\"郫都区\",\"street\":\"美墅街\",\"streetNumber\":\"\",\"lng\":103.97463012422635,\"lat\":30.729378718384197}",
                isDelete:false,
                grade:"3",
                coaches:[],
                students:[],//保存所有学生数据
                name:'',//场馆名字
                JD:'',//招聘信息
                businessTime:'',//营业时间
                idea:'',//经营理念
                time:'',//会馆创建时间
                activeContent:[],//活动详情，对应活动图片
                activeTitle:[],//活动标题
                announcement:[],//公告
                status:"-1",//状态值：0表示正在申请，1表示申请成功，2表示申请失败
                activeImage:[],
                checkCode:'',//验证
            });
            if(res.success){
                message.success(res.msg)
            }else{message.error(res.msg)}
        } catch (error) {
            message.error(error.msg)
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
                        <Form.Item
                            label="手机号"
                            name="telephone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your tel number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="昵称"
                            name="owner"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <div className="form-bottom-item">
                                <Button type="primary" htmlType="submit">注册</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
