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

const Coacheslist = Loadable({
    loader: () => import('../pages/list/Coacheslist'),
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
const AddCoach = Loadable({
    loader: () => import('./AddCoach'),
    loading: () => <div>加载中...</div>
})
const AddStudents = Loadable({
    loader: () => import('./AddStudents'),
    loading: () => <div>加载中...</div>
})
const Login = Loadable({
    loader: () => import('./loginAndRegister/Login'),
    loading: () => <div>加载中...</div>
})

//申请场馆
const AddGyms = Loadable({
    loader: () => import('./AddGyms'),
    loading: () => <div>加载中...</div>
})
const addActive = Loadable({
    loader: () => import('./addActive'),
    loading: () => <div>加载中...</div>
})

//管理员审核
// const AdminReview = Loadable({
//     loader: () => import('./AdminReview'),
//     loading: () => <div>加载中...</div>
// })

//管理员审核
const AdminReview = Loadable({
    loader: () => import('./AdminReview'),
    loading: () => <div>加载中...</div>
})

//轮播图上传
const AdminPropaganda = Loadable({
    loader: () => import('./AdminPropaganda'),
    loading: () => <div>加载中...</div>
})
//学员详细信息
const Sdetails = Loadable({
    loader: () => import('./list/Sdetails'),
    loading: () => <div>加载中...</div>
})
//教练详细信息
const Cdetails = Loadable({
    loader: () => import('./list/Cdetails'),
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
                                    <Redirect exact path="/home" to="/home/Coacheslist"></Redirect>
                                    <Route path="/home/Complaint" component={Complaint}></Route>
                                    <Route path="/home/Studentslist" component={Studentslist}></Route>
                                    <Route path="/home/Coacheslist" component={Coacheslist}></Route>
                                    <Route path="/home/Orders" component={Orders}></Route>
                                    <Route path="/home/addGyms" component={AddGyms}></Route>
                                    <Route path="/home/addActive" component={addActive}></Route>
                                    {/* <Route path="/home/adminReview" component={AdminReview}></Route> */}
                                    <Route path="/home/adminReview" component={AdminReview}></Route>
                                    <Route path="/home/adminPropaganda" component={AdminPropaganda}></Route>
                                    <Route path="/home/Coacheslist" component={Coacheslist}></Route>
                                    <Route path="/home/oneGym" component={OneGym}></Route>
                                    <Route path="/home/addCoach" component={AddCoach}></Route>
                                    <Route path="/home/addStudents" component={AddStudents}></Route>
                                    <Route path="/home/Sdetails" component={Sdetails}></Route>
                                    <Route path="/home/Cdetails" component={Cdetails}></Route>
                                </Switch>
                            </HashRouter>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
