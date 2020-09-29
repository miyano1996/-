import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Image } from "antd";
import SideBar from "../components/SideBar";
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import Loadable from "react-loadable";
//懒加载

const Complaint = Loadable({
    loader: () => import("./manage/Complaint"),
    loading: () => <div>加载中...</div>,
});
const OneGym = Loadable({
    loader: () => import("./OneGym.js"),
    loading: () => <div>加载中...</div>,
});
const Orders = Loadable({
    loader: () => import('./orders/Orders'),
    loading: () => <div>加载中...</div>
})
//教练列表
const Coacheslist = Loadable({
    loader: () => import('../pages/list/Coacheslist'),
    loading: () => <div>加载中...</div>
})
//学院列表
const Studentslist = Loadable({
    loader: () => import('./list/Studentlist'),
    loading: () => <div>加载中...</div>
})
//场馆列表
const Gymlist = Loadable({
    loader: () => import("../pages/list/Gymlist"),
    loading: () => <div>加载中...</div>
})
const AddCoach = Loadable({
    loader: () => import("./AddCoach"),
    loading: () => <div>加载中...</div>,
});
const AddStudents = Loadable({
    loader: () => import("./AddStudents"),
    loading: () => <div>加载中...</div>,
});
// const Login = Loadable({
//     loader: () => import("./loginAndRegister/Login"),
//     loading: () => <div>加载中...</div>,
// });

//申请场馆
const AddGyms = Loadable({
    loader: () => import("./AddGyms"),
    loading: () => <div>加载中...</div>,
});
const addActive = Loadable({
    loader: () => import("./addActive"),
    loading: () => <div>加载中...</div>,
});

//管理员审核
// const AdminReview = Loadable({
//     loader: () => import('./AdminReview'),
//     loading: () => <div>加载中...</div>
// })

//管理员审核
const AdminReview = Loadable({
    loader: () => import("./AdminReview"),
    loading: () => <div>加载中...</div>,
});

//轮播图上传
const AdminPropaganda = Loadable({
    loader: () => import("./AdminPropaganda"),
    loading: () => <div>加载中...</div>,
});
//学员详细信息
const Sdetails = Loadable({
    loader: () => import("./list/Sdetails"),
    loading: () => <div>加载中...</div>,
});
//教练详细信息
const Cdetails = Loadable({
    loader: () => import("./list/Cdetails"),
    loading: () => <div>加载中...</div>,
});

const { Header, Content } = Layout;
export default class Home extends Component {
    state = {
        userName: ""
    }
    componentDidMount = () => {
        const userName = JSON.parse(localStorage.getItem('userInfo')).owner
        this.setState({ userName })
    }
    logout = ()=>{
        const {role}  = JSON.parse(localStorage.userInfo)
        this.props.history.push( role==="gym"?"/firstPage":"/adminLogin");
        localStorage.setItem("token",'')
    }
    render() {
        const { userName } = this.state
        return (
            <Layout>
                <Header className="header">
                    <Image
                        width={100}
                        src={require("../assets/img/coca-cola.svg")}
                    />
                    {/* <div className="logo" /> */}
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1"><NavLink to="/home/Studentslist">首页</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/home/adminPropaganda">管理中心</NavLink></Menu.Item>
                        <Menu.Item key="3" onClick={this.logout}>退出登录</Menu.Item>
                    </Menu>
                    <p>功夫瑜伽后台管理系统  <span className="showUserName">欢迎您 {userName}</span></p>

                </Header>
                <Layout>
                    <SideBar />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
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
                                    <Redirect
                                        exact
                                        path="/home"
                                        to={JSON.parse(localStorage.userInfo).role=='admin'?"/home/Gymlist":"/home/onegym"}
                                    ></Redirect>
                                    <Route path="/home/Complaint" component={Complaint}></Route>
                                    <Route
                                        path="/home/Studentslist"
                                        component={Studentslist}
                                    ></Route>
                                    <Route
                                        path="/home/Coacheslist"
                                        component={Coacheslist}
                                    ></Route>
                                    <Route path="/home/Gymlist" component={Gymlist}></Route>
                                    <Route path="/home/Orders" component={Orders}></Route>
                                    <Route path="/home/addGyms" component={AddGyms}></Route>
                                    <Route path="/home/addActive" component={addActive}></Route>
                                    {/* <Route path="/home/adminReview" component={AdminReview}></Route> */}
                                    <Route
                                        path="/home/adminReview"
                                        component={AdminReview}
                                    ></Route>
                                    <Route
                                        path="/home/adminPropaganda"
                                        component={AdminPropaganda}
                                    ></Route>
                                    <Route path="/home/oneGym" component={OneGym}></Route>
                                    <Route path="/home/addCoach" component={AddCoach}></Route>
                                    <Route
                                        path="/home/addStudents"
                                        component={AddStudents}
                                    ></Route>
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
