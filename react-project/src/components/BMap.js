import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeAddrsAC} from '../store/actions/index';

const width = 500 + 'px';
const height = 500 + 'px';

class Bmap extends Component {
    constructor(){
        super();
        this.state = {
            lng:'',
            lat:'',
            province:'尚未选择',
            city:'',
            district:'',
            street:'',
            streetNumber:''
        };
    }
    componentDidMount() {
        var BMap = window.BMap
        var map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableInertialDragging();
        map.enableContinuousZoom();
        var size = new BMap.Size(10, 20);
        map.addControl(new BMap.CityListControl({
            offset: size
        }));
        
        let changeLng=(point)=> {
            this.setState({
                lng:point.lng,
                lat:point.lat
            })
        }
        function showInfo(e) {
            changeLng(e.point);
            var new_point = new BMap.Point(e.point.lng, e.point.lat);
            var marker = new BMap.Marker(new_point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);
        }
        map.addEventListener("click", showInfo);

        var geoc = new BMap.Geocoder();

        let changeData = (addComp)=> {
            this.setState({
                province:addComp.province,
                city:addComp.city,
                district:addComp.district,
                street:addComp.street,
                streetNumber:addComp.streetNumber
            });
            this.props.dispatch(changeAddrsAC({
                province:addComp.province,
                city:addComp.city,
                district:addComp.district,
                street:addComp.street,
                streetNumber:addComp.streetNumber,
                lng:this.state.lng,
                lat:this.state.lat
            }))
        }
        map.addEventListener("click", function (e) {//经纬度逆解析
            var pt = e.point;
            geoc.getLocation(pt, function (rs) {
                var addComp = rs.addressComponents;
                changeData(addComp)
            });
        });
    }
    render() {
        const {province,city,district,street,streetNumber} = this.state;
        return (
            <div>
                <p>当前选择地址：{province},{city},{district},{street},{streetNumber}</p>
                <div id='allmap' style={{ width: width, height: height }}></div>
            </div>
        )
    }
}

//获取状态机数据
const mapStateToProps = (state)=>{
    const {city,district,lat,lng,province,street,streetNumber} = state.addrs;
    return{
        city,district,lat,lng,province,street,streetNumber
    }
}

export default connect(mapStateToProps)(Bmap)
