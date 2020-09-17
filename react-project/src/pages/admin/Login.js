import React, { Component } from 'react'
import api from '../../apis/api'
export default class Login extends Component {
    submit = async ()=>{
        const data = {
            account:this.account.value,
            password:this.password.value
        }
        const res = await api.admin.login(data)
        console.log(res)
    }
    render() {
        return (
            <div>
                <div>
                   账号：
                    <input type="text" ref={(account)=>this.account = account}/>
                </div>
                <div>
                    密码：
                    <input type="text" ref={(password)=>this.password = password}/>
                </div>
                <button onClick={this.submit}>登录</button>
            </div>
        )
    }
}
