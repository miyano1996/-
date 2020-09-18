export const changeAddrsAC = ({lng,lat,province,city,district,street,streetNumber})=>({
    type:'changeAddrs',
    lng,lat,province,city,district,street,streetNumber
})

export const changeGymAC = ({name,phone,imgs})=>({
    type:'changeGym',
    name,phone,imgs
})