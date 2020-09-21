import React, { Component } from 'react';
import { Form, Button, Upload, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import api from '../apis/api';

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e) => {
    // console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};


export default class AdminPropaganda extends Component {
    state = {
        isSubmit: false
    }

    onFinish = async (values) => {
        console.log(values);
        const data =await api.gym.getGymByText({account:values.select});
        console.log(data.rows[0]._id);
        let arr = [];
        for(let i=0;i<values.upload.length;i++){
            arr.push(values.upload[i].name)
        }
        const obj = await api.carousel.upCarousel({_ids:data.rows[0]._id,images:arr});
        if(obj.success){
            message.success('广告上传成功');

        }else{
            message.error('广告上传失败，请核对信息是否正确');
        }
    }

    render() {
        return (
            <div>
                <h1 style={{fontSize:20,fontWeight:'800'}}>宣传图片上传</h1>
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={this.onFinish}
                    style={{ paddingTop: 40 }}
                >
                    <Form.Item
                        name="select"
                        label="广告投放账号"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入场馆名称!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="上传广告图片"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="最多上传十张"
                    >
                        <Upload name="logo" action="http://localhost:4000/images/upload" listType="picture">
                            <Button icon={<UploadOutlined />}>点击上传图片</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            span: 12,
                            offset: 6,
                        }}
                    >
                        <Button type="primary" htmlType="submit" disabled={this.state.isSubmit}>
                            上传广告
        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
