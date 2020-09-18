import React, { Component } from 'react';
import { Steps, Form, Button, Upload, Input } from 'antd';
import { UserOutlined, SolutionOutlined, ClockCircleOutlined, SmileOutlined, UploadOutlined } from '@ant-design/icons';
import BaiDu from '../components/BMap';
const { Step } = Steps;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

export default class addGyms extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    render() {
        return (
            <div>
                <Steps>
                    <Step status="finish" title="场馆注册人登陆" icon={<UserOutlined />} />
                    <Step status="finish" title="提交场馆信息" icon={<SolutionOutlined />} />
                    <Step status="finish" title="管理员审核" icon={<ClockCircleOutlined />} />
                    <Step status="finish" title="申请完成" icon={<SmileOutlined />} />
                </Steps>
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={this.onFinish}
                    style={{paddingTop:40}}
                >
                    <Form.Item
                        name="select"
                        label="场馆名称"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入注册场馆名称!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="联系电话"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入电话号码!',
                                pattern: '[0-9]'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="上传场馆图片"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="最多上传十张"
                    >
                        <Upload name="logo" action="http://localhost:4000/images/upload" listType="picture">
                            <Button icon={<UploadOutlined />}>点击上传图片</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                    name="upaddres"
                    label="上传场馆地址"
                    >
                        <BaiDu/>
                    </Form.Item>
                    
                    <Form.Item
                        wrapperCol={{
                            span: 12,
                            offset: 6,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            提交申请
        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

