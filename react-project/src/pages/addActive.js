import React, { Component } from 'react'
import { Button, Input, Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import api from '../apis/api'
export default class addActive extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            _id: '',
            myRows: { activeTitle: '', activeContent: '', activeImage: '' },
            visible: false,
            rows: {}
        };
        this.getGym()
    }
    getId = () => {
        this.setState({ _id: JSON.parse(localStorage.userInfo)._id });
    }
    getGym = async () => {
        const data = await api.gym.getGym(JSON.parse(localStorage.userInfo)._id);
        this.setState({ rows: data.rows })
    }
    componentDidMount() {
        this.getId()
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            const myRows = this.state.myRows
            myRows.activeImage = info.file.name
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || 'image/jpg';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    addTitle = (e) => {
        const myRows = this.state.myRows
        myRows.activeTitle = e.target.value
        this.setState({ myRows: myRows })
    }
    addContent = (e) => {
        const myRows = this.state.myRows
        myRows.activeContent = e.target.value
        this.setState({ myRows: myRows })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
        // console.log(123);
    };

    hideModal = () => {
        this.setState({
            visible: false,
        });
        // console.log(345);
    };
    onOk = async (e) => {
        this.setState({
            visible: false,
        });
        Modal.success({
            content: '添加成功!',
        });
        const rows = this.state.rows
        rows.activeTitle.push(this.state.myRows.activeTitle)
        rows.activeContent.push(this.state.myRows.activeContent)

        this.state.myRows.activeImage ? rows.activeImage.push(this.state.myRows.activeImage) : rows.activeImage.push('')
        await this.setState({ rows: rows })
        await api.gym.updateGym({ _id: this.state._id, ...this.state.rows })
    }
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <div className='addActive' style={{ backgroundColor: 'white', padding: 20 }}>
                <div><p>活动标题：</p> <Input onChange={this.addTitle}></Input></div>
                <div><p>活动内容：</p> <Input onChange={this.addContent}></Input></div>
                <div><p>活动图片：</p>
                    <div>
                        <Upload
                            name="logo"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://localhost:4000/images/upload"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                    <Button type="primary" onClick={this.showModal} >确定</Button>
                    <Modal
                        title="提示"
                        visible={this.state.visible}
                        onOk={this.onOk}
                        onCancel={this.hideModal}
                        okText="确认"
                        cancelText="取消"
                    >
                        <p>确定新增此活动？</p>
                    </Modal></div>
            </div>
        )
    }
}
