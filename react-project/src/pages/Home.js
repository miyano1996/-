import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import SideBar from "../components/SideBar";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import "../assets/style/home.css";
//懒加载

const Complaint = Loadable({
  loader: () => import("./manage/Complaint"),
  loading: () => <div>加载中...</div>,
});
const Sdetails = Loadable({
  loader: () => import("./system/Sdetails"),
  loading: () => <div>加载中...</div>,
});

const { Header, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            {/* 侧边栏 */}
            <SideBar />
            <Layout style={{ padding: "0 24px 24px" }}>
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              {/* 侧边栏内容区域 */}
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
                    <Redirect exact path="/" to="/home/login"></Redirect>
                    <Route path="/home/login" component={Sdetails}></Route>
                  </Switch>
                </HashRouter>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
