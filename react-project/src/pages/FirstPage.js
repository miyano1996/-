import React, { Component } from 'react';
import { Modal, Tabs } from 'antd';
import Login from './loginAndRegister/Login';
import Register from './loginAndRegister/Register';


const { TabPane } = Tabs;
export default class FirstPage extends Component {
    state = {
        visible: false
    }
    setVisible = (bool) => {
        this.setState({ visible: bool })
    }
    componentDidMount = () => {
        this.audio.play()
    }
    render() {
        const { visible } = this.state
        return (
            <div className="first-page">
                <header>
                    <div className="wrapper-container">
                        <div className="wrapper">
                            <div className="brand">
                                <img src={require('../assets/images/icon-logo.svg')} width="100" alt="" />
                                <span className="brand-title">一起摔♂跤</span>
                            </div>
                            <div className="right-item">
                                <a href="#/login">登录</a>
                                <a href="#/register">注册</a>
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
                                    < Login />
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    < Register />
                                </TabPane>
                            </Tabs>
                        </div>


                    </Modal>
                </header>
            </div>
        )
    }
}
