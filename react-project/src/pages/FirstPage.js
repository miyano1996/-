import React, { Component } from 'react';
import { Modal, Tabs, Drawer, Button, Input, Form, message } from 'antd';
import Login from './loginAndRegister/Login';
import Register from './loginAndRegister/Register';
import api from '../apis/api'
const { TabPane } = Tabs;
//表单样式
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};
export default class FirstPage extends Component {
    state = {
        visible: false,
        drawerVisible: false,
        telephone: '',
        _id: "",
        name: "",
        childrenDrawer:false
    }
    setVisible = (bool) => {
        this.setState({ visible: bool })
    }
    componentDidMount = () => {
        this.audio.play()
    }
    showDrawer = (accountObj) => {
        this.getGymByAccount(accountObj);
    };
    onClose = () => {
        this.setState({
            drawerVisible: false,
        });
    };
    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };
    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };
    //表单提交
    //验证验证码
    onFinish = async values => {
        const { _id } = this.state;
        try {
            const res = await api.gym.getGymByText({ _id, ...values });
            if (res.success) {
                message.success("验证成功！")
                this.showChildrenDrawer()
            } else {
                message.error("验证失败！")
            }
        } catch (error) {
            message.error("验证码失效")
        }
        console.log('Success:', values);
    };
    //查询账户的信息
    getGymByAccount = async (accountObj) => {
        try {
            const data = await api.gym.getGymByText(accountObj)
            console.log(data)
            const { _id, name, telephone } = data.rows[0];
            this.setState({
                drawerVisible: true,
                _id,
                name,
                telephone,
                loading: false
            });
            this.sendCheckCode({ _id, telephone })
        } catch (error) {
            message.warning("该账号未注册！")
        }
    }
    enterLoading = () => {
        this.setState({ loading: true })
    }
    outLoading = () => {
        this.setState({ loading: false })
    }
    //发送验证码
    sendCheckCode = async ({ _id, telephone }) => {
        try {
            const data = await api.gym.sendCheckCode({ _id, telephone })
            console.log(data)
            //按键进入loading
            this.enterLoading()
            setTimeout(async () => {
                const res = await api.gym.clearCheckCode({ _id })
                console.log(res)
            }, 1000 * 30);
            setTimeout(() => {
                this.outLoading()
            }, 6000);
        } catch (error) {
            message.error("发送失败！")
        }
    }
    changePassword = async values => {

        const { _id } = this.state
        try {
            console.log({ _id, ...values })
            const res = await api.gym.changePassword({ _id, ...values })
            if (res.success) {
                message.success(res.msg)
                //关闭抽屉
                this.onChildrenDrawerClose()
                this.onClose()
            } else {
                message.error("修改的密码不能与原密码相同")
            }
        } catch (error) {
            console.log('err', error)
            message.error("修改的密码不能与原密码相同")
        }
    }
    render() {
        const { visible, telephone, loading, _id } = this.state
        return (
            <div className="first-page">
                <header>
                    <div className="wrapper-container">
                        <div className="wrapper">
                            <div className="brand">
                                <img src={require('../assets/images/icon-logo.svg')} width="100" alt="" />
                                <span className="brand-title">一起健♂身</span>
                            </div>
                            <div className="right-item">
                                <span>关于我们</span>
                                <span>投诉与建议</span>
                            </div>
                        </div>
                        <div className="tagline">
                            <span>一站式数字健身房管理平台</span>
                        </div>
                        <div className="links">
                            <div className="chooseBtn-container" onClick={() => this.setVisible(true)}>
                                <div className="chooseBtn">
                                    <i className="icon icon-facebook"><img src={require('../assets/images/facebook.png')} alt=""
                                        width="20px" /></i>
                                    <span>Facebook</span>
                                </div>
                                <div className="chooseBtn">
                                    <i className="icon icon-Google"><img src={require('../assets/images/google.png')} alt=""
                                        width="20px" /></i>
                                    <span>Google</span>
                                </div>
                                <div className="chooseBtn">
                                    <i className="icon icon-Twitter"><img src={require('../assets/images/twitter.png')} alt=""
                                        width="20px" /></i>
                                    <span>Twitter</span>
                                </div>
                                <div className="chooseBtn">
                                    <i className="icon icon-Apple"><img src={require('../assets/images/Apple.png')} alt=""
                                        width="20px" /></i>
                                    <span>Apple</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-container">
                        <video src={require('../assets/videos/Keep-自律给我自由- 健身跑步瑜伽,达人力荐的运动社区.mp4')} width="100%" ref={(audio) => this.audio = audio} loop  ></video>
                    </div>

                    <Modal
                        centered
                        visible={visible}
                        footer={null}
                        onOk={() => this.setVisible(false)}
                        onCancel={() => this.setVisible(false)}
                        width={800}
                        mask={false}
                        bodyStyle={{
                            height: '400px',
                        }}
                    >
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane tab="登录" key="1">
                                    < Login openDrawer={this.showDrawer} />
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    < Register />
                                </TabPane>
                            </Tabs>
                        </div>


                    </Modal>
                </header>
                {/* 抽屉 */}
                <>
                    <Drawer
                        title="找回密码"
                        width={520}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.drawerVisible}
                    >

                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >

                            <Form.Item>
                                <label>验证码已发送到您的安全手机{telephone}</label>
                            </Form.Item>
                            <Form.Item
                                label="验证码"
                                name="checkCode"
                                rules={[{ required: true, message: '请输入正确的验证码！' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    确认
                            </Button>
                                <Button type='default' loading={loading} onClick={() => { this.sendCheckCode({ _id, telephone }) }}>
                                    重新发送
                            </Button>
                            </Form.Item>
                        </Form>
                        <Drawer
                            title="修改密码"
                            width={420}
                            closable={false}
                            onClose={this.onChildrenDrawerClose}
                            visible={this.state.childrenDrawer}
                        >
                            <Form
                                {...layout}
                                name="basic"
                                onFinish={this.changePassword}
                            >

                                <Form.Item
                                    label="新密码"
                                    name="password"
                                    rules={[{ required: true, message: '请输入您的密码！' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        确认
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Drawer>
                    </Drawer>
                </>
            </div>
        )
    }
}
