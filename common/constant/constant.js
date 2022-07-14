// 设置机房位置方圆半径
export const LOCATION_RADIUS =300
export const ANALYTICS_LINE_COLOR = ["#5c8cd8","#5c9f70","#e9a943","#a42516","#d155b4","#ffffff","#323864"]
export const PAGE_SIZE =15
export const SMS_CONFIG = {
	appid:'__UNI__DC62158',
	smsKey:'5e0b77dc76d4f501b4fff3b7d4c68854',
	smsSecret:'a683377f64ff7775354fe3f1fd625a86',
	templateId:'12103'
}
export const DEPARTMENT = [{
          value: 'datacenter',
          label: 'IDC部'
        }, {
          value: 'network',
          label: '网络部'
        }, {
          value: 'bigdata',
          label: '大数据部'
        }, {
          value: 'cloud',
          label: '云平台部'
        }, {
          value: 'services',
          label: '服务台'
        }]
export const CYCLE = [{
          value: 'month',
          label: '月'
        }, {
          value: 'week',
          label: '周'
        },
				{
				  value: 'quarter',
				  label: '季度'
				}]
export const REPORT_CYCLE ={
	'week':'周','month':'月','quarter':'季度'
}
export const REPORT_DEPARTMENT={
	'network':'网络部',
	'datacenter':'IDC部',
	'bigdata':'大数据部',
	'cloud':'云平台部',
	'services':'服务台'
}