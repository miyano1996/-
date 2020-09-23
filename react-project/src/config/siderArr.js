//动态侧边栏
import React from "react"; //图标样式所需要
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";

export const siderArr = [
  //   { key: "/home/system", title: "首页" },
  {
    farKey: "sub1",
    icon: <UserOutlined />,
    fartitle: "列表",
    son: [
      { key: "/home/Studentslist", title: "学员列表" },
      // { key: "/home/Coacheslist", title: "教练列表",roles:['超级管理员']},
      { key: "/home/Coacheslist", title: "教练列表" },
    ],
  },
  {
    farKey: "sub2",
    icon: <LaptopOutlined />,
    fartitle: "场馆",
    son: [
      { key: "/home/Gymlist", title: "场馆列表" },
      { key: "/home/adminReview", title: "场馆审批", roles: ['gym'] },
    ],
    //   roles:['超级管理员']//显示权限
  },
  {
    farKey: "sub3",
    icon: <LaptopOutlined />,
    fartitle: "活动策划",
    son: [{ key: "/home/adminPropaganda", title: "添加活动" }],
  },
];

export function filterSider(data) {
  //在sider组件导入
  const { role } = JSON.parse(localStorage.userInfo); //读取登录人信息  读取权限 parse将字符串转化为对象{role，name}
  //   console.log(role,'权限');
  return data.filter((item) => {
    //返回适配权限的数组
    return !item.roles || item.roles.includes(role); //返回没有定义权限要求的  或是达到权限要求的  符合的都是true
  });
}
