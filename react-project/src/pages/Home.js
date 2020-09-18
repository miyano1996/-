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
const OneGym = Loadable({
    loader: () => import('./OneGym.js'),
    loading: () => <div>加载中...</div>
})
const Orders = Loadable({
    loader: () => import('./orders/Orders'),
    loading: () => <div>加载中...</div>
})
const Sdetails = Loadable({
    loader: () => import('./list/Sdetails'),
    loading: () => <div>加载中...</div>
})
const Cdetails = Loadable({
    loader: () => import('./list/Cdetails'),
    loading: () => <div>加载中...</div>
})
const Studentslist = Loadable({
    loader: () => import('./list/Studentlist'),
    loading: () => <div>加载中...</div>
})
const Coacheslist = Loadable({
    loader: () => import('./list/Coacheslist'),
    loading: () => <div>加载中...</div>
})
const Venuelist = Loadable({
    loader: () => import('./list/Venuelist'),
})
//申请场馆
const AddGyms = Loadable({
    loader: () => import('./AddGyms'),
    loading: () => <div>加载中...</div>
})

//申请场馆
// const AddGyms = Loadable({
//     loader: () => import('./AddGyms'),
//     loading: () => <div>加载中...</div>
// })

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
                                    <Redirect exact path="/home" to="/home/Coacheslist"></Redirect>
                                    {/* <Route path="/home/login" component={Login}></Route> */}
                                    <Route path="/home/Complaint" component={Complaint}></Route>
                                    <Route path="/home/Studentslist" component={Studentslist}></Route>
                                    <Route path="/home/Coacheslist" component={Coacheslist}></Route>
                                    <Route path="/home/Orders" component={Orders}></Route>
                                    <Route path="/home/Coacheslist" component={Coacheslist}></Route>
                                    <Route path="/home/Venuelist" component={Venuelist}></Route>
                                    <Route path="/home/Sdetails" component={Sdetails}></Route>
                                    <Route path="/home/Cdetails" component={Cdetails}></Route>
                                    <Route path="/home/addGyms" component={AddGyms}></Route>
                                    <Route path="/home/oneGym" component={OneGym}></Route>
                                </Switch>
                            </HashRouter>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    );
  }
}
