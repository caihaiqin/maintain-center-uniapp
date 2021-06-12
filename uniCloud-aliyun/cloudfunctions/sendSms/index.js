'use strict';

exports.main = async (event, context) => {
	//event为客户端上传的参数
	try {
		let params = event.params || {}
		const {phone,code} = params
		const smsConfig = {
					appid:'__UNI__DC62158',
					smsKey:'5e0b77dc76d4f501b4fff3b7d4c68854',
					smsSecret:'a683377f64ff7775354fe3f1fd625a86',
					templateId:'12103',
		      phone: phone,
		      data: {
		        
		        code: code,
		       
		        expMinute: '1'
		      }}
		console.log(smsConfig)
	    const res = await uniCloud.sendSms(smsConfig)
	    // 调用成功，请注意这时不代表发送成功
	    return res
	  } catch(err) {
	    // 调用失败
	    console.log(err.errCode)
	    console.log(err.errMsg)
	    return {
	      code: err.errCode,
	      msg: err.errMsg
	    }
	  }
	
};
