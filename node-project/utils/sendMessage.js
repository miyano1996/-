/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */

const SMSClient = require('@alicloud/sms-sdk')
// const { saveCode } = require("../dao/codeDao")

// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAI4GEmKrvcFgvQFPFfHEa1'
const secretAccessKey = 'izHV9x1smnhh1eaOpFsPhXLkwOzj7u'
const getCode = require('./randomCode')
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})
const code = getCode(4)
//发送短信
module.exports = function sendMessage(telephone){
    smsClient.sendSMS({
        PhoneNumbers: telephone,
        SignName: '一起摔跤',
        TemplateCode: 'SMS_203180239',
        TemplateParam:JSON.stringify({code})
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数 
            console.log(res)
        }
    }, function (err) {
        console.log(err)
    })
    return code
}

			