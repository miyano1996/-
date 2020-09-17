import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideBar from '../components/SideBar';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
//懒加载

const Complaint = Loadable({
    loader: () => import('./manage/Complaint'),
    loading: () => <div>加载中...</div>
})
const Login = Loadable({
    loader: () => import('./Login'),
    loading: () => <div>加载中...</div>
})
const Orders = Loadable({
    loader: () => import('./orders/Orders'),
    loading: () => <div>加载中...</div>
})
const { Header, Content } = Layout;

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <SideBar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <HashRouter>
                                <Switch>
                                    <Redirect exact path="/" to="/home/Orders"></Redirect>
                                    <Route path="/home/login" component={Login}></Route>
                                    <Route path="/home/Complaint" component={Complaint}></Route>
                                    <Route path="/home/Orders" component={Orders}></Route>
                                </Switch>
                            </HashRouter>
                        </Content>

                    </Layout>
                </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
