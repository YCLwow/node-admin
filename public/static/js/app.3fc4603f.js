(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"db4130af"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"068d":function(e,t,n){},"06d2":function(e,t,n){"use strict";var r=n("068d"),o=n.n(r);o.a},"0f9a":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("d3b7");var r=n("c24f"),o=n("5f87"),a={token:Object(o["a"])()},i={SET_TOKEN:function(e,t){e.token=t}},u={login:function(e,t){var n=e.commit,a=t.name,i=t.password;return new Promise((function(e,t){Object(r["a"])({name:a,password:i}).then((function(t){var r=t;console.log(r.token),n("SET_TOKEN",r.token),Object(o["c"])(r.token),e()})).catch((function(e){t(e)}))}))}};t["default"]={state:a,actions:u,mutations:i,namespaced:!0}},2173:function(e,t,n){},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0");var r=n("2b0e"),o=n("2f62"),a=(n("b0c0"),{token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},roles:function(e){return e.user.roles}}),i=a;r["default"].use(o["a"]);var u=n("c653"),s=u.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=u(t);return e[n]=r.default,e}),{}),c=new o["a"].Store({modules:s,getters:i});t["a"]=c},5220:function(e,t,n){"use strict";var r=n("2173"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),f=n("5f87"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"status-icon":"","label-width":"100px",model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("el-form-item",{attrs:{label:"账号",prop:"name"}},[n("el-input",{attrs:{type:"name",autocomplete:"off",clearable:""},model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name",t)},expression:"loginForm.name"}})],1),n("el-form-item",{attrs:{label:"确认密码",prop:"password"}},[n("el-input",{attrs:{type:"password",autocomplete:"off",clearable:""},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.loginSubmit("loginForm")}}},[e._v("提交")]),n("el-button",{on:{click:function(t){return e.oginReset("loginForm")}}},[e._v("重置")])],1)],1)],1)},m=[],p=(n("96cf"),n("1da1"));n("c975"),n("498a");function g(e){var t=["admin","editor","actest"];return t.indexOf(e.trim())>=0}n("c24f"),n("b0c0"),n("d4ec"),n("bee2"),n("3ca3"),n("ddb0"),n("2b3d");function v(e,t,n){var r,o,a=n;return function(){var i=arguments,u=this;r&&clearTimeout(r),o&&clearTimeout(o),a?(e.apply(this,arguments),a=!1,o=setTimeout((function(){a=!0}),t)):r=setTimeout((function(){a=n,e.apply(u,i)}),t)}}var h={name:"login",components:{},data:function(){var e=function(e,t,n){g(t)?n():n(new Error("请输入正确的用户名"))},t=function(e,t,n){t.length<6?n(new Error("密码不得少于6位数")):n()};return{loginForm:{name:"",password:""},loginRules:{name:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},index:0,flag:!0,timer:""}},methods:{loginSubmit:v((function(){var e=this;console.log("提交"),this.$refs.loginForm.validate((function(t){if(!t)return console.log("错误的提交"),!1;console.log("校验通过"),e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:"/home"})})).catch((function(e){console.log(e)})),e.loading=!1}))}),2e3,!0),oginReset:function(){console.log("重置"),this.loginForm={name:"",password:""}},register:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.register(e.loginForm);case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}}),t)})))()}}},b=h,w=(n("e330"),n("5220"),Object(i["a"])(b,d,m,!1,null,"7a5239fc",null)),y=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"},attrs:{id:"home"}},[n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("el-container",{staticStyle:{height:"100%"}},[n("el-header",[n("div",{staticClass:"avatar"})]),n("el-main",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航一")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],1)],1),n("el-menu-item",{attrs:{index:"2"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])]),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航三")])]),n("el-menu-item",{attrs:{index:"4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航四")])])],1)],1)],1)],1),n("el-container",[n("el-header",[n("el-button",{on:{click:e.loginOut}},[e._v("退出登录")])],1),n("el-main")],1)],1)],1)},j=[],x=(n("a78e"),{data:function(){return{}},methods:{loginOut:function(){Object(f["b"])(),this.$router.push({path:"/login"})},handleChange:function(e){console.log(e)}}}),_=x,k=(n("06d2"),Object(i["a"])(_,O,j,!1,null,"5a1e5c07",null)),E=k.exports;r["default"].use(l["a"]);var T=[{path:"/login",name:"login",component:y},{path:"/home",name:"home",component:E},{path:"/",redirect:"/login"},{path:"/404",name:"404",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}}],F=new l["a"]({mode:"history",base:"",routes:T}),P=F,S=n("4360"),$=n("5c96"),C=n.n($);n("0fae");P.beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=Object(f["a"])(),console.log(o),o?"/login"===t.path?r("/home"):r():(console.log("未登录,请去登录"),"login"===t.name?r():r("login"));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),r["default"].use(C.a),r["default"].config.productionTip=!1,new r["default"]({router:P,store:S["a"],render:function(e){return e(c)}}).$mount("#app")},"5b24":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n("a78e"),o=n.n(r),a="vue_admin_template_token";function i(){return o.a.get(a)}function u(e){return o.a.set(a,e)}function s(){return o.a.remove(a)}},"9c0c":function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("d3b7");var r=n("bc3a"),o=n.n(r),a=n("5c96"),i=n("4360"),u=n("5f87"),s=o.a.create({baseURL:"/prod",timeout:4e3});s.interceptors.request.use((function(e){return"login"===e.url||i["a"].getters.token&&(e.headers["L-Token"]=Object(u["a"])()),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e;return 200!==t.status&&Object(a["Message"])({message:t.message||"Error",type:"error",duration:5e3}),401===t.status||402===t.status||403===t.status?(MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登陆",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),console.log("响应错误"),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=s;n("a78e");function l(e){return console.log("登录请求"),c({url:"/auth/login",method:"post",data:e})}},c653:function(e,t,n){var r={"./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},e330:function(e,t,n){"use strict";var r=n("5b24"),o=n.n(r);o.a}});
//# sourceMappingURL=app.3fc4603f.js.map