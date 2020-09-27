import React, { Component } from "react";
import {
  Table,
  Space,
  Button,
  Avatar,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
} from "antd";
import api from "../../apis/api";

export default class Studentlist extends Component {
  state = {
    totalCount: 0,
    current: 1,
    gymInfo: {},
    visible: false,
    updatecoache: {
      name: "",
    },
    layout: {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 16,
      },
    },
    tailLayout: {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    },
    columns: [
      {
        title: "头像",
        render: (text, record) => (
          <Space size="middle">
            <Avatar
              size={60}
              src={require(`../../assets/images/${text.headImage}`)}
            />
          </Space>
        ),
      },
      {
        title: "姓名",
        dataIndex: "name",
      },
      {
        title: "性别",
        dataIndex: "gender",
      },
      {
        title: "年龄",
        dataIndex: "age",
      },
      {
        title: "联系电话",
        dataIndex: "telephone",
      },
      {
        title: "操作",
        key: "action",
        render: (text, { name, _id, isDelete }) => (
          <Space size="middle">
            <Button type="primary" onClick={() => this.gotoCoachesdetail(text)}>
              详情
            </Button>
            <Button type="primary" onClick={() => this.showModal(text)}>
              修改
            </Button>
            <Popconfirm
              title={`确定要删除${name}教练吗？`}
              onConfirm={() => {
                this.confirm({ _id, isDelete });
              }}
              okText="确定"
              cancelText="取消"
            >
              <Button type="danger">删除</Button>
            </Popconfirm>
            <Modal
              visible={this.state.visible}
              title={`正在修改教练${this.state.updatecoache.name}的信息`}
              centered={true}
              mask={false}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <Form
                {...this.state.layout}
                name="basic"
                ref={(instance) => (this.Myform = instance)}
                initialValues={{
                  name: this.state.updatecoache.name,
                  age: this.state.updatecoache.age,
                  gender: this.state.updatecoache.gender,
                  telephone: this.state.updatecoache.telephone,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  label="姓名"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "请输入姓名!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="性别"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "请输入性别!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="年龄"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: "请输入年龄!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="联系电话"
                  name="telephone"
                  rules={[
                    {
                      required: true,
                      message: "请输入电话号码!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...this.state.tailLayout}>
                  <Button type="primary" htmlType="submit">
                    确认修改
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Space>
        ),
      },
    ],
    data: [],
  };
  //教练详情
  gotoCoachesdetail(e) {
    localStorage.coachesID = e._id;
    this.props.history.push("/home/Cdetails");
  }
  //提交//修改信息
  onFinish = async (values) => {
    try {
      let CoachesId = this.state.updatecoache._id;
      // console.log('Success:', values, CoachesId);
      const { success, msg } = await api.coaches.updateCoaches(
        (values = {
          data: values,
          _id: CoachesId,
        })
      );
      if (success) {
        message.success(msg);
      }
      this.getallCoaches();
    } catch (error) {}
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //发接口
  componentDidMount() {
    this.getallCoaches();
  }
  async getallCoaches(parmas) {
    try {
      let gym = JSON.parse(localStorage.userInfo);
      let { rows, totalCount, pageNumber } = await api.coaches.getCoaches(
        (parmas = {
          pageSize: 10,
          pageNumber: 1,
          _id: gym._id,
        })
      );
      console.log(rows);
      this.setState({
        data: rows,
        totalCount,
        current: pageNumber,
        gymInfo: gym,
      });
    } catch (error) {
      console.log("错误=====================================");
    }
  }
  //刷新信息
  rsetform() {
    this.Myform.resetFields();
  }
  //修改信息
  showModal(e) {
    setTimeout(() => {
      this.rsetform();
    }, 200);
    this.setState({ updatecoache: e, visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  };
  //分页
  onChange = (pageNumber, pageSize) => {
    this.getallCoaches({ pageNumber, pageSize });
  };
  //删除教练
  async confirm(data) {
    try {
      data.isDelete = !data.isDelete;
      await api.coaches.delCoaches(data);
      this.getallCoaches();
      message.success("删除成功");
    } catch (error) {}
  }
  render() {
    const { data, columns, totalCount, current } = this.state;
    const pagination = {
      total: totalCount,
      current,
      onChange: this.onChange,
    };
    return (
      <div className="List">
        <Table
          rowKey="_id"
          pagination={pagination}
          columns={columns}
          dataSource={data}
          className="table"
        />
      </div>
    );
  }
}
