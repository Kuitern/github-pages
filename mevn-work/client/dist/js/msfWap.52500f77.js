(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,h=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={msfWap:0},c={msfWap:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08c71fcb":"d7dad6f6","chunk-0d08b4f6":"36972889","chunk-1eaf10ad":"d47a37cf","chunk-29c71de1":"c28da428","chunk-2ad0ce35":"f73a8757","chunk-21e98278":"a6431f26","chunk-2d21e366":"4a2b9c24","chunk-3da30343":"b9aea655","chunk-585e317b":"5614aecd","chunk-61d4a92a":"773a73a8","chunk-e2bbf33e":"94b78e55","chunk-2d0a3e47":"3157b1ca","chunk-2d0cf125":"8b047c0a","chunk-2d0da00f":"476db506","chunk-2d0e2134":"13c0ff59","chunk-627047af":"3ffd45b5","chunk-9f27eeb6":"6b9f0f7a","chunk-c63d662e":"ad37ca72","chunk-d57784a0":"8a72efac","chunk-e113e410":"5f8110cc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-08c71fcb":1,"chunk-0d08b4f6":1,"chunk-1eaf10ad":1,"chunk-29c71de1":1,"chunk-2ad0ce35":1,"chunk-3da30343":1,"chunk-585e317b":1,"chunk-61d4a92a":1,"chunk-e2bbf33e":1,"chunk-627047af":1,"chunk-9f27eeb6":1,"chunk-c63d662e":1,"chunk-d57784a0":1,"chunk-e113e410":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-08c71fcb":"2ecbc253","chunk-0d08b4f6":"3fc659e1","chunk-1eaf10ad":"7bca259d","chunk-29c71de1":"0b5d46e9","chunk-2ad0ce35":"412b5f3b","chunk-21e98278":"31d6cfe0","chunk-2d21e366":"31d6cfe0","chunk-3da30343":"76c8e33d","chunk-585e317b":"bae0375b","chunk-61d4a92a":"7d7509b7","chunk-e2bbf33e":"59d0cc57","chunk-2d0a3e47":"31d6cfe0","chunk-2d0cf125":"31d6cfe0","chunk-2d0da00f":"31d6cfe0","chunk-2d0e2134":"31d6cfe0","chunk-627047af":"51144a2b","chunk-9f27eeb6":"bf3143bb","chunk-c63d662e":"fe8e8438","chunk-d57784a0":"4855bb7e","chunk-e113e410":"abde3e4c"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],s.parentNode.removeChild(s),n(o)},s.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var h=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://kuitern.github.io/github-pages/mevn-work/client/dist/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var s=d;o.push([4,"chunk-vendors"]),n()})({"037f":function(e,t,n){"use strict";var r=n("2b0e"),a=n("cadd");r["default"].use(a["a"])},1049:function(e,t,n){},4:function(e,t,n){e.exports=n("d9c9")},"47de":function(e,t,n){"use strict";var r=n("8606"),a=n.n(r);a.a},"48b8":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return h}));n("96cf");var r=n("3b8d"),a=(n("7618"),n("ac6a"),n("28a5"),n("386d"),function(){var e={};if(""===location.search)return e;var t=location.href,n=t.split("?")[1].split("&");return n.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]})),e}),c=function(e){var t=a(),n=t[e]||"";return n},o=function(e){var t=e.self,n=e.dataSelector,r=e.textConcat,a=e.timeout,c=e.callback,o=a,u=setInterval((function(){o--,t[n]=r(o),0===o&&(c(),clearInterval(u))}),1e3)};n("3e8f"),n("df7c");function u(e){var t=this,n=arguments,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!0===a){var c=null;return function(){var a=t,o=n,u=+new Date;(null===c||u>=c+r)&&(e.apply(a,o),c=u)}}var o=null,u=null;return function(){var t=this,n=arguments,a=Date.now();null===o?null===u&&(u=setTimeout((function(){e.apply(t,n),o=a+r}),r)):a>=o+r&&(e.apply(t,n),o=a)}}function i(e,t){Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return r=n.sent,n.next=5,r.blob();case 5:a=n.sent,c=window.URL.createObjectURL(a),o=document.createElement("a"),o.href=c,o.download=t,document.body.appendChild(o),o.click(),setTimeout((function(){return document.body.removeChild(o)}),1e3);case 13:case"end":return n.stop()}}),n)})))()}function l(e){if(d(e))return"";var t=e.split("."),n=t.length-1;return 1===n?e:t[n-1]+"."+t[n]}function d(e){var t=/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,n=t.test(e);return!!n}function h(){var e=location.hostname,t=location.pathname,n=l(e);return!!(n&&"herokuapp.com"!=n&&t.indexOf(".html")<0)}},"65cb":function(e,t,n){},8606:function(e,t,n){},"8e9d":function(e,t,n){"use strict";var r=n("65cb"),a=n.n(r);a.a},"9dad":function(e,t,n){"use strict";var r=n("1049"),a=n.n(r);a.a},d257:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));n("ac6a"),n("456d");var r=n("7618");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,n=null;return function(){var r=arguments,a=this;n&&clearTimeout(n),n=setTimeout((function(){e.apply(a,r)}),t)}}function c(e){return void 0===e||"object"===Object(r["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}function o(e,t){var n=-1,r=Object.keys(t)[0],a=t[r];return e.some((function(e,t){if(e[r]==a)return n=t,!0})),n}},d9c9:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("037f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e.isShowDebugDialog?n("DebugDialog"):e._e(),e.isShowTabBar?n("TabBar",{attrs:{prop:e.propTabBar}}):e._e()],1)}),c=[],o=n("d225"),u=n("b0b4"),i=n("308d"),l=n("6bb5"),d=n("4e2b"),h=n("9ab4"),s=n("48b8"),f=n("d257"),p=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{staticClass:"debugBtn",on:{click:e.showClose}},[e._v("调试")])])},m=[],k=function(e){function t(){return Object(o["a"])(this,t),Object(i["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"showClose",value:function(){var e=this;this.$createDialog({type:"prompt",title:"域名配置",content:"默认为localhost:8080,线上调试可填写域名（如api.daokoujihua.com），开发可填写本地api服务地址（如10.10.2.22:8080)",prompt:{value:this.$store.state.domainApi,placeholder:"输入api域名配置"},onConfirm:function(t,n){e.$store.commit("setDomainApi",n),e.$createToast({type:"warn",time:2e3,txt:"请求api域名已修改为: ".concat(n||"")}).show()}}).show()}}]),t}(p["d"]);k=Object(h["a"])([Object(p["a"])({components:{}})],k);var v=k,g=v,y=(n("9dad"),n("2877")),O=Object(y["a"])(g,b,m,!1,null,"46911b86",null),w=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("cube-tab-bar",{attrs:{data:e.tabs},on:{click:e.clickHandler,change:e.changeHandler},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}})],1)},D=[],S={props:{prop:{tab:{}}},data:function(){return{transitionName:"slide-right",selectedLabelDefault:"",tabs:[{label:"首页",icon:"cubeic-home",path:"/project/list"},{label:"我的",icon:"cubeic-person",path:"/user/mine"}]}},watch:{$route:function(e,t){this.changeHandlerByPath(e.path)}},methods:{clickHandler:function(e){this.changeHandler(e)},changeHandler:function(e){switch(e){case"首页":this.$router.push({path:"/project/list"});break;case"我的":this.$router.push({path:"/user/mine"});break;case"测试":this.$router.push({path:"/test"});break}},changeHandlerByPath:function(e){switch(e){case"/project/list":this.selectedLabelDefault="首页";break;case"/user/mine":this.selectedLabelDefault="我的";break;case"/test":this.selectedLabelDefault="测试";break;default:this.selectedLabelDefault=""}}},created:function(){this.changeHandlerByPath(this.$route.path);var e=this.prop.tab;Object(f["c"])(e)||this.tabs.push(e)},mounted:function(){document.body.style.marginBottom="100px"},beforeDestroy:function(){document.body.style.marginBottom="60px"}},A=S,x=(n("47de"),Object(y["a"])(A,j,D,!1,null,"9819beb4",null)),P=x.exports,C=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(i["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.isShowTabBar=!0,e.isShowDebugDialog=!1,e.propTabBar={},e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"handleRouteChange",value:function(e){if(!(location.host.indexOf("daokoudai")<0)){var t=P.data().tabs||[],n=e.path;Object(f["b"])(t,{path:n})<0?this.isShowTabBar=!1:this.isShowTabBar=!0}}},{key:"created",value:function(){Object(s["e"])()||(this.isShowDebugDialog=!0,this.propTabBar={tab:{label:"测试",icon:"cubeic-tag",path:"/test"}})}}]),t}(p["d"]);Object(h["a"])([Object(p["e"])("$route")],C.prototype,"handleRouteChange",null),C=Object(h["a"])([Object(p["a"])({components:{DebugDialog:w,TabBar:P}})],C);var T=C,E=T,$=(n("8e9d"),Object(y["a"])(E,a,c,!1,null,null,null)),B=$.exports,_=n("8c4f"),q=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),L=n("2f62"),N=n("0e44");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(q["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}r["default"].use(L["a"]);var U="https:"===location.protocol?":5001":":5000",M=location.port?location.hostname+U:location.host,I="".concat(location.protocol,"//").concat(M),J=location.pathname.indexOf(".html"),z="";if(J>=0){var W=location.pathname.slice(1,J);z="".concat(location.origin,"/").concat(W,".html")}var K="".concat(I).concat(z),F={token:"",user:{},domainApi:"doudizhu.github.io"===location.host?"api.daokoujihua.com":"",domainNodeServer:M,originReturnUrl:K,debugNodeServer:"//mevn-work.herokuapp.com"},G=new L["a"].Store({state:R({},F),mutations:{setToken:function(e,t){e.token=t},setUser:function(e,t){e.user=t},setDomainApi:function(e,t){e.domainApi=t,e.domainNodeServer="".concat(t?"".concat(location.protocol,"//").concat(t):I),e.originReturnUrl="".concat(e.domainNodeServer,"/").concat(z)},resetAll:function(e){var t=e.domainApi;Object.assign(e,F),this.commit("setDomainApi",t)}},actions:{},plugins:[Object(N["a"])()]}),Q=n("63b4");r["default"].use(_["a"]);var V=[{path:"/",redirect:"/project/list"},{path:"/user",component:{render:function(e){return e("router-view")}},children:[{path:"login",component:function(){return n.e("chunk-627047af").then(n.bind(null,"a066"))},name:"userLogin",meta:{title:"登录",requireAuth:!1}},{path:"register",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-585e317b")]).then(n.bind(null,"7758"))},meta:{title:"注册",requireAuth:!1}},{path:"mine",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-3da30343")]).then(n.bind(null,"1de0"))},meta:{title:"我的"}},{path:"invested",component:function(){return n.e("chunk-d57784a0").then(n.bind(null,"d13c"))},meta:{title:"已投项目"}},{path:"coupon",component:function(){return n.e("chunk-e113e410").then(n.bind(null,"3bb1"))},meta:{title:"优惠券"}}]},{path:"/account",component:{render:function(e){return e("router-view")}},children:[{path:"lmAccount",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-21e98278")]).then(n.bind(null,"d1db"))},meta:{title:"资金账户"}},{path:"lmCharge",component:function(){return n.e("chunk-2d0e2134").then(n.bind(null,"7cc5"))},meta:{title:"充值"}},{path:"lmWithdraw",component:function(){return n.e("chunk-9f27eeb6").then(n.bind(null,"986b"))},meta:{title:"提现"}}]},{path:"/project",component:{render:function(e){return e("router-view")}},children:[{path:"list",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-e2bbf33e")]).then(n.bind(null,"7b9f"))},meta:{title:"项目列表",requireAuth:!1}},{path:"detail/:id",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-61d4a92a")]).then(n.bind(null,"c667"))},meta:{title:"项目详情",requireAuth:!1}},{path:"desc/:id",component:function(){return n.e("chunk-0d08b4f6").then(n.bind(null,"b18d"))},meta:{title:"信息披露",requireAuth:!1}},{path:"report/:id",component:function(){return n.e("chunk-29c71de1").then(n.bind(null,"a44e"))},meta:{title:"项目回报",requireAuth:!1}},{path:"order/:id",component:function(){return n.e("chunk-08c71fcb").then(n.bind(null,"5544"))},meta:{title:"项目订单"}},{path:"investReturn",component:function(){return n.e("chunk-2d0a3e47").then(n.bind(null,"03b0"))},meta:{title:"出借结果"}},{path:"introduction",component:function(){return n.e("chunk-c63d662e").then(n.bind(null,"14a7"))},meta:{title:"平台介绍",requireAuth:!1}}]},{path:"*",redirect:"doudizhu.github.io"===location.host?"/user/login":"",name:"/404",component:function(){return n.e("chunk-2d0da00f").then(n.bind(null,"6a6d"))},meta:{title:"404",requireAuth:!1}},{path:"/test",component:function(){return n.e("chunk-2d0cf125").then(n.bind(null,"61c7"))},meta:{title:"test",requireAuth:!1}},{path:"/test/uploadIdCard",component:function(){return Promise.all([n.e("chunk-2ad0ce35"),n.e("chunk-2d21e366")]).then(n.bind(null,"d532"))}},{path:"/static",component:{render:function(e){return e("router-view")}},children:[{path:"home",component:function(){return n.e("chunk-1eaf10ad").then(n.bind(null,"1a60"))},name:"Home",meta:{title:"道口小微之家",requireAuth:!1}}]}],X=location.pathname.indexOf(".html"),Y="https://kuitern.github.io/github-pages/mevn-work/client/dist/";X>=0&&(Y="/".concat(location.pathname.slice(1,X),".html")),console.log(Y);var Z="doudizhu.github.io"===location.host?new _["a"]({base:Y,routes:V}):new _["a"]({mode:"history",base:Y,routes:V});Z.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title);var r=!!G.state.token;!1===e.meta.requireAuth?n():r?n():(Q["a"].$create({type:"txt",txt:"登录状态失效，请重新登录"}).show(),G.commit("resetAll"),n({path:"/user/login",query:{redirect:e.fullPath}}))}));var ee=Z,te=(n("5cfb"),n("7618")),ne=(n("a481"),n("bc3a")),re=n.n(ne),ae=re.a.create({timeout:1e6});function ce(e){var t=e.api,n=e.params,r=e.method,a=void 0===r?"post":r,c=(e.callback,e.url),o=e.direct,u=e.data,i=e.formSubmitData;e.withCredentials;if(!i){console.log(c||"".concat(G.state.domainNodeServer,"/")+(o||"api/3.0/m/"+t));var l="";return"www.daokoudai.com"===G.state.domainApi&&o?(l=G.state.debugNodeServer,console.log("requestServer",l)):l=G.state.domainNodeServer,ae[a](c||"".concat(l,"/")+(o||"api/3.0/m/"+t),u||oe({params:encodeURI(JSON.stringify(n)),from:"M",imei:"imei",appKey:"99999999"}))}ue(i)}function oe(e){var t=Object.keys(e),n="";return t.forEach((function(t,r){n+="".concat(t,"=").concat(e[t],"&")})),n.slice(0,-1)}function ue(e){var t=document.createElement("form"),n=e.params;for(var r in t.method=e.method||"post",t.action=e.shUrl||e.url,n){var a=document.createElement("input");a.value="object"==Object(te["a"])(n[r])?JSON.stringify(n[r]):n[r],a.value=n[r],a.name=r,a.type="hidden",t.appendChild(a)}document.body.appendChild(t),t.submit()}ae.interceptors.request.use((function(e){return Q["a"].$create({time:0}).show(),e}),(function(e){Promise.reject(e)})),ae.interceptors.response.use((function(e){Q["a"].$create().hide();var t=e.data;return e.config.url.indexOf("/api/3.0")>=0&&"0000"!==t.resCode&&(Q["a"].$create({type:"txt",txt:t.resMsg||t.err||"请求错误"}).show(),"E0000002"===t.resCode?(G.commit("resetAll"),ee.replace("/user/login")):"E1010019"===t.resCode&&setTimeout((function(){ee.replace("/account/lmAccount#open")}),2e3)),t}),(function(e){return Q["a"].$create({type:"txt",txt:"请求错误: ".concat(e||e.response)}).show(),e.response||{}})),r["default"].config.productionTip=!1,r["default"].prototype.$request=ce,new r["default"]({router:ee,store:G,render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=msfWap.52500f77.js.map