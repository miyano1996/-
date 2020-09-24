import React, { Component } from "react";
import { Layout, Menu } from "antd";
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";
import { withRouter } from "react-router-dom"; //组件加入history的高阶配置
import { filterSider, siderArr } from "../config/siderArr"; //一个遍历权限后sider数组的方法  要动态渲染的内容

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideBar extends Component {
  myclick = (promise) => {//侧边点击回调
    const { key, keyPath } = promise;
    if (keyPath[1]) {//如果点击的是二级文件夹 keyPath[1]保存的key父级  存放在本地用来设置默认打开项目
      localStorage.keyFar = keyPath[1];
    }
    this.props.history.push(key);
  };

  mapsider = (data) => {//封装递归遍历sider数组  打印  包含了二级数组
    return filterSider(data).map((item) => {
      const { farKey, icon, fartitle, son, key, title } = item; //解构数据   便于简写
      if (son && son.length) {//有二级路径 且二级路径有内容  就递归处理
        return (
          <SubMenu key={farKey} icon={icon} title={fartitle}>
            {this.mapsider(son)}
          </SubMenu>
        ); //return过后就不会执行后面的程序
      }
      return <Menu.Item key={key}>{title}</Menu.Item>;
    });
  };

  render() {
    const { location } = this.props;//获取当前网页地址 用来确认key选中状态
    const keyFar = localStorage.keyFar;

    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}//默认选中的对象
          defaultOpenKeys={[keyFar]}//默认打开的对象
          onClick={this.myclick} //点击事件回调函数
          style={{ height: "100%", borderRight: 0 }}
        >
          {this.mapsider(siderArr)}
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="列表">
                    <Menu.Item key="1">学员列表</Menu.Item>
                    <Menu.Item key="2">教练列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="场馆">
                    <Menu.Item key="5">场馆列表</Menu.Item>
                    <Menu.Item key="6">场馆审批</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="活动策划">
                    <Menu.Item key="9">添加广告</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                   
                </SubMenu> */}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideBar);
