

/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 老项目域名地址
 * khglUrl: 客户管理域名地址
 * dicUrl : 字典服务器地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * welUrl :默认欢迎页
 * 
 */


let baseUrl = '';
let baseUrl2 = '';
let iconfontVersion = ['567566_lgiis24af44bcsor'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`
if (process.env.NODE_ENV == 'development') {
	baseUrl = `http://localhost`;
	baseUrl2 = `http://192.168.3.24:8080`;
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = `http://localhost`;
	baseUrl2 = `http://192.168.3.24:8080`;
}

export { baseUrl2,baseUrl, iconfontUrl, codeUrl,iconfontVersion }