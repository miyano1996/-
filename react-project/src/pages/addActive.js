import React, { Component } from 'react'
import { Button, Input, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import api from '../apis/api'
export default class addActive extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            _id:'',
            rows:{activeTitle:[],activeContent:[]}
        };
        this.getGym()
    }
    getId = ()=>{
        this.setState({_id:JSON.parse(localStorage.userInfo)._id});
    }
    getGym = async ()=>{
        const data =await api.gym.getGym(JSON.parse(localStorage.userInfo)._id);
        this.setState({rows:data.rows})
    }
    componentDidMount(){
        this.getId()
    }
    addActive=async ()=>{
        console.log({_id:this.state._id,...this.state.rows});
        const data = await api.gym.updateGym({_id:this.state._id,...this.state.rows})
        console.log(data);
        
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
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
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' ||'image/jpg';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    addTitle = (e)=>{
        const rows = this.state.rows
        rows.activeTitle.push(e.target.value)
        this.setState({rows:rows})
    }
    addContent = (e)=>{
        const rows = this.state.rows
        rows.activeContent.push(e.target.value)
        this.setState({rows:rows})
    }
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        const {rows} = this.state
        return (
            <div className='addActive' style={{ backgroundColor: 'white', padding: 20 }}>
                <div><p>活动标题：</p> <Input  onChange={this.addTitle}></Input></div>
                <div><p>活动内容：</p> <Input  onChange={this.addContent}></Input></div>
                <div><p>活动图片：</p>
                <div>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://localhost:4000/images/upload"
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </div>
                <Button type="primary" onClick={this.addActive}>确定</Button></div>
            </div>
        )
    }
}
