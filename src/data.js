//个人信息，求职意向，专业技能，我的文章，求职经历 自我评价

var title = {
  name: "个人信息",
  colom: 1,
  data: ["姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄鹏", "求职意向：前端开发", "手&nbsp;机&nbsp;&nbsp;号：13155183095"]
};
var info = {
  name: "求职意向",
  colom: 2,
  data: [
    "性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别： 黄鹏",
    "年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄： 23",
    "学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历： 本科",
    "邮箱地址： 915414300@qq.com",
    "专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业： 计算机电子信息工程专业",
    "工作年限： 2年",
    "联系电话： 13155183095"
  ]
};

var intention = {
  name: "专业技能",
  colom: 2,
  data: [
    "求职意向：前端开发工程师",
    "工作性质：全职",
    "期望薪资：面议",
    "目前状态：离职",
    "期望地点：合肥"
  ]
};
var skill = {
  name: "我的技能",
  colom: 1,
  data: [
    "熟练使用 Html，Css ，JavaScript，能够合理完成pc端和移动端页面的编写和维护",
    "掌握移动端编程，熟练使用Bootstrap 框架响应式布，开发基于移动端的页面",
    "熟悉jquery等实用插件的应用,轮播图，tab栏，瀑布流，延迟加载，全屏滚动等等常用功能的实现",
    "熟练原生js, 了解js面向对象原理，闭包以及原型结构",
    "熟练Ajax交互，promise,fecth根据后台接口能够合理完成前后台交互",
    "熟练使用less,sass预处理语言和gulp，webpack代码打包工具",
    "熟练使用javascrtipt设计模式，可以采用面向对象编程进行页面开发。",
    "熟悉html5,css3新特性，可用css3制作动画",
    "熟练使用 angularJS（ng1）,vue.js，react可以完成无需刷新的单页面应用",
    "了解Node.js，express，koa等web框架，会使用npm命令行以git版本管理工具",
    "了解cordova，ngCorderva,曾改写过别人的插件",
    "了解mysql的使用"
  ]
};

var article = {
  name: "我的文章",
  colom: 1,
  data: [
    "简书账号：https://www.jianshu.com/u/0e190d5b2e72",
    "segmentfault : https://segmentfault.com/u/believe_dream/articles",
    "github: https://github.com/hpstream"
  ]
};


var experience = {
    name:'我的经历',
    colom:1,
    data:[{
        time:['2017.4-至今','安徽富驰信息技术有限公司','web前端工程师'],
        children:[{
            protectName:'负责项目1：类安指引 (http://36.7.159.17:8088/fd-court-guide/login)',
            protectInfo:'项目简介：基于es大数据进行分析，获取海量数据，为司法部门公平公正建立系统，做到司法透明。',
            protectDuty:' 主要职责：类安指引，量刑辅助',
            data:[
                '1． 使用echarts进行图表绘制。',
                '2．使用自己封装的高亮插件实现批注，高亮功能highlight.js。',
                '3．使用ztree插件指引下拉树，使用select2显示下拉菜单',
                '4．使用fileupload实现文件上传 ',
                '5．使用http://basscss.com/，http://clrs.cc/为基础，做成基础样式进行封装。',
                '6. 根据UI的规范开发自己的UI组件。'
            ]
        },{
            protectName:'负责项目2：统一服务平台',
            protectInfo:'项目简介：把后台接口做成服务，开发统一服务平台以服务的形式提供接口',
            protectDuty:' 主要职责：页面开发，权限开发，组件开发',
            data:[
                '1．基于vue.js进行开发。',
                '2．基于elementUI进行二次发开。',
                '3．根据需求封装自定义组件。',
                '4. 深入理解vuex状态管理的机制，与vue-router路由管理机制。',
                '5. 会使用相关的富文本插件'
            ]
        }]	

    },{
        
	    


        time:['2016.1-2016.12','合肥耐特信息技术有限公司','web前端工程师'],	
        children:[{
            protectName:'负责项目1：三栖生活（微信端）',
            protectInfo:'项目简介：此项目主要是做学生平台，主要与学校食堂，及其附近的商品进行合作，为学生提供便利。',
            protectDuty:' 主要职责：主要模块主页模块，餐饮模块，购物模块，旅游模块。',
            data:[
                '1、使用div+css页面搭建，能够100%还原psd设计图',
                '2、使用NetJoint-UI完成UI页面样式，基于bootstrap 开发',
                '3、使用bootstrap的栅格系统制作响应式开发',
                '4、使用angular实现页面跳转，实现无须晒新的单页应用',
                '5、使用angular内置对象$http技术获取后台数据，动态渲染页面',
                '6、使用less编写样式表，使用gulp自动化管理工具编译less',
                '7、使用jquery的unslider编写轮播图。',
                '8、使用jquery的fadeIn和fadeOut来完成轮播图的淡入淡出效果',
                '9、使用lazylody插件来实现图片的懒加载，以提高浏览器性能'
            ]
        },{
            protectName:'负责项目2：优惠券扫描--app',
            protectInfo:'项目简介：三栖生活项目上线，前期与学校食堂合作，需要发行优惠券，我们需要使用app进行二维码扫描，用蓝牙打印机打印出消费，给食堂予以证明。',
            protectDuty:' 主要职责：app登录界面，主页模块，蓝牙调用模块',
            data:[
                '1、	使用Ionic + angular 制作混合式app开发',
                '2、	采用Ionic组件样式和自定义css制作app页面样式，',
                '3、	使用ajax技术获取后台数据，动态渲染页面',
                '4、	使用Inoic的ionic-slide-box制作轮播图',
                '5、	使用 HTML5的localstorage缓存技术实现页面一些数据缓存。',
                '6、	使用ng-cordova插件，实现控制二维码扫描。',
                '7、	使用cordova插件，实现控制蓝牙打印机，打印优惠券。',
                '8、	使用ion-tabs实现tabs栏切换'
            ]
        }]	

    }]
};
var review = {
  name: "自我评价",
  colom: 1,
  data: [
    "有责任，工作踏实，性格开朗乐观，积极上进",
    "喜欢前端开发，非常热爱编程，喜欢钻研新的技术",
    "能够很好的与产品、设计师和后台开发人员沟通协作，具有良好的团队合作精神",
    "具有很强的自学能力和良好的学习方法，喜欢研究各种新的框架"
  ]
};

export default  {
  title: title,
  infos: [info, intention, skill, article, experience, review]
};
