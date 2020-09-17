import React, { Component } from 'react';
import '../../assets/style/complaint.scss';

export default class Complaint extends Component {
    render() {
        return (
            <div className="complaint-box">
                <div className="complaint-item">
                    <div className="item-top">
                        <span>用户名:
                            <span className="username">
                                张三
                            </span>
                        </span>
                        <span>订单编号:
                            <span className="orderid">65161655161</span>
                        </span>
                        <span>教练:
                            <span className="orderid">李四</span>
                        </span>
                        <span>日期:
                            <span className="orderid">2020-9-18</span>
                        </span>
                    </div>
                    <div className="item-body">
                        <span>投诉内容:</span>
                        <div className="complaint-text">
                            老骗子了!
                        </div>
                    </div>
                    <div className="complaint-footer">
                        <span className="active">有异议?点击申诉</span>
                        <span >立即处理</span>
                    </div>
                </div>
                <div className="complaint-item">
                    <div className="item-top">
                        <span>用户名:
                            <span className="username">
                                张三
                            </span>
                        </span>
                        <span>订单编号:
                            <span className="orderid">65161655161</span>
                        </span>
                        <span>教练:
                            <span className="orderid">李四</span>
                        </span>
                        <span>日期:
                            <span className="orderid">2020-9-18</span>
                        </span>
                    </div>
                    <div className="item-body">
                        <span>投诉内容:</span>
                        <div className="complaint-text">
                            老骗子了!
                        </div>
                    </div>
                    <div className="complaint-footer">
                        <span className="active">有异议?点击申诉</span>
                        <span >立即处理</span>
                    </div>
                </div>

            </div>
        )
    }
}
