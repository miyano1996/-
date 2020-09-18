export default function addrsReducer(state = {
    lng: '',
    lat: '',
    province: '状态机默认',
    city: '状态机默认',
    district: '状态机默认',
    street: '状态机默认',
    streetNumber: '状态机默认',
    name:'',
    phone:'',
    imgs:''
}, action) {
    switch (action.type) {
        case 'changeAddrs':return{
            ...state,
            lng:action.lng,
            lat:action.lat,
            province:action.province,
            city:action.city,
            district:action.district,
            street:action.street,
            streetNumber:action.streetNumber
        };
        case 'changeGym':return{
            ...state,
            name:action.name,
            phone:action.phone,
            imgs:action.imgs
        };
        default: return state
    }
}