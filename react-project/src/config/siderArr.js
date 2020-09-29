//动态侧边栏
import React from "react"; //图标样式所需要
import { UserOutlined, LaptopOutlined,BankOutlined,SoundOutlined} from "@ant-design/icons";

export const siderArr = [
  //   { key: "/home/system", title: "首页" },
  {
    farKey: "sub5",
    icon: <BankOutlined/>,
    fartitle: "主页",
    son: [
      { key: "/home/oneGym", title: "我的场馆"},
      { key: "/home/addGyms", title: "申请场馆"},
    ],
      roles:['gym']//显示权限

    //   roles:['超级管理员']//显示权限
  },
  {
    farKey: "sub1",
    icon: <UserOutlined />,
    fartitle: "列表",
    son: [
      { key: "/home/Studentslist", title: "学员列表" },
      // { key: "/home/Coacheslist", title: "教练列表",roles:['超级管理员']},
      { key: "/home/Coacheslist", title: "教练列表" },
    ],
      roles:['gym']//显示权限

  },
  {
    farKey: "sub2",
    icon: <BankOutlined/>,
    fartitle: "场馆",
    son: [
      { key: "/home/Orders", title: "订单列表"},
      { key: "/home/Complaint", title: "投诉管理"},
    ],
      roles:['gym']//显示权限

    //   roles:['超级管理员']//显示权限
  },
  
  {
    farKey: "sub4",
    icon:<LaptopOutlined />,
    fartitle: "场馆管理",
    son: [
      { key: "/home/Gymlist", title: "场馆列表" },
      { key: "/home/adminReview", title: "场馆审批" },
    ],
      roles:['admin']//显示权限
  },
  {
    farKey: "sub3",
    icon:<SoundOutlined />,
    fartitle: "广告投放",
    son: [{ key: "/home/adminPropaganda", title: "添加广告" }],
    roles:['admin']//显示权限
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
