(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61d4a92a"],{"9c24":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));t("b54a");var i=t("ac9a"),o=t.n(i),r=t("bc3a"),a=t.n(r),c={getShareConfig:function(){return a()({url:"http://wcx.free.idcfengye.com/api/redEnvelope/getMsfWechatConfig",method:"POST",params:{url:window.location.href}}).then((function(e){console.log(e);var n=e.data;o.a.config({debug:!0,appId:n.appId,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]})})),this},setShareConfig:function(e){o.a.ready((function(){o.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],success:function(e){console.log(JSON.stringify(e))}}),o.a.onMenuShareTimeline({title:e.title,link:e.link,imgUrl:e.imgUrl,success:function(){}}),o.a.onMenuShareAppMessage({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl,success:function(){}}),o.a.onMenuShareQQ({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl}),o.a.onMenuShareWeibo({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl}),o.a.onMenuShareQZone({title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl}),o.a.error((function(e){}))}))}},s=c.getShareConfig().setShareConfig},"9cd7":function(e,n,t){},ac9a:function(e,n,t){var i;!function(o,r){i=function(){return r(o)}.call(n,t,n,e),void 0===i||(e.exports=i)}(this,(function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(t),(function(e){c(n,e,i)})):u(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),c(n,e,t)})):u(n,i||t)}function o(e){return e=e||{},e.appId=O.appId,e.verifyAppId=O.appId,e.verifySignType="sha1",e.verifyTimestamp=O.timestamp+"",e.verifyNonceStr=O.nonceStr,e.verifySignature=O.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e["package"],paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=s(e,i),n.errMsg=i),t=t||{},t._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",O.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":"),r=i.substring(o+1);switch(r){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e,n){var t=e,i=h[t];i&&(t=i);var o="ok";if(n){var r=n.indexOf(":");o=n.substring(r+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}function d(e){if(e){for(var n=0,t=e.length;t>n;++n){var i=e[n],o=g[i];o&&(e[n]=o)}return e}}function u(e,n){if(!(!O.debug||n&&n.isInnerInvoke)){var t=h[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(y||k||O.debug||"6.0.2">M||x.systemType<0)){var n=new Image;x.appId=O.appId,x.initTime=C.initEndTime-C.initStartTime,x.preVerifyTime=C.preVerifyEndTime-C.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){x.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+x.version+"&o="+x.isPreVerifyOk+"&s="+x.systemType+"&c="+x.clientVersion+"&a="+x.appId+"&n="+x.networkType+"&i="+x.initTime+"&p="+x.preVerifyTime+"&u="+x.url;n.src=t}})}}function p(){return(new Date).getTime()}function f(n){I&&(e.WeixinJSBridge?n():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){L.invoke||(L.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(t),i)},L.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}if(e&&void 0!==e.document||(e=window),!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),v=e.document,S=v.title,_=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),y=!(!w.match("mac")&&!w.match("win")),k=-1!=_.indexOf("wxdebugger"),I=-1!=_.indexOf("micromessenger"),b=-1!=_.indexOf("android"),T=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),M=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),C={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},x={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:b?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},O={},V={_completes:[]},A={state:0,data:{}};f((function(){C.initEndTime=p()}));var P=!1,E=[],L={config:function(e){O=e,u("config",e);var n=!1!==O.check;f((function(){if(n)t(g.config,{verifyJsApiList:d(O.jsApiList)},function(){V._complete=function(e){C.preVerifyEndTime=p(),A.state=1,A.data=e},V.success=function(e){x.isPreVerifyOk=0},V.fail=function(e){V._fail?V._fail(e):A.state=-1};var e=V._completes;return e.push((function(){l()})),V.complete=function(n){for(var t=0,i=e.length;i>t;++t)e[t]();V._completes=[]},V}()),C.preVerifyStartTime=p();else{A.state=1;for(var e=V._completes,i=0,o=e.length;o>i;++i)e[i]();V._completes=[]}})),O.beta&&m()},ready:function(e){0!=A.state?e():(V._completes.push(e),!I&&O.debug&&e())},error:function(e){"6.0.2">M||(-1==A.state?e(A.data):V._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var t in n){var i=h[t];i&&(n[i]=n[t],delete n[t])}return e};t("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(b){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=n(e)},e}())},onMenuShareTimeline:function(e){i(g.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||S,desc:e.title||S,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(g.onMenuShareAppMessage,{complete:function(){t("sendAppMessage",{title:e.title||S,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(g.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(g.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(g.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||S,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(b){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},getLocation:function(e){},previewImage:function(e){t(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===P?(P=!0,t("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(P=!1,E.length>0){var n=E.shift();wx.getLocalImgData(n)}},e}())):E.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};t("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},t("closeWindow",{},e)},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},t("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(T){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e}())},openAddress:function(e){t(g.openAddress,{},function(){return e._complete=function(e){e=a(e)},e}())},openProductSpecificView:function(e){t(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;r>o;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}t(g.addCard,{card_list:i},function(){return e._complete=function(e){var n=e.card_list;if(n){n=JSON.parse(n);for(var t=0,i=n.length;i>t;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e}())},chooseCard:function(e){t("chooseCard",{app_id:O.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;r>o;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}t(g.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(g.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){t(g.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){t(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(g.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},B=1,N={};return v.addEventListener("error",(function(e){if(!b){var n=e.target,t=n.tagName,i=n.src;if("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var o=-1!=i.indexOf("wxlocalresource://");if(o){e.preventDefault(),e.stopPropagation();var r=n["wx-id"];if(r||(r=B++,n["wx-id"]=r),N[r])return;N[r]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}}),!0),v.addEventListener("load",(function(e){if(!b){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(N[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=L),L}}))},adde:function(e,n,t){e.exports=t.p+"img/3.d48444d2.jpg"},b54a:function(e,n,t){"use strict";t("386b")("link",(function(e){return function(n){return e(this,"a","href",n)}}))},c667:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"view"},[t("div",{staticClass:"img-container"},[t("img",{attrs:{src:"https://img.daokoudai.com/invest/b6/5c/b65c4d8f6b5f9210aad32887b83b77c4.jpg"}}),t("img",{attrs:{src:"https://img.daokoudai.com/invest/8a/d2/8ad2e09660e31b5b58baca56ad10339f.png"},on:{click:function(n){e.wxModel=!e.wxModel}}})]),t("div",{staticClass:"title"},[e._m(0),e._m(1),t("p",{staticClass:"story"},[e._v("新开店一个月，用心烘焙每一个蛋糕，期望与每一个到店的你分享蛋糕背后的故事，也期望与你一同谱写新的故事")]),t("div",{staticClass:"info"},[e._m(2),e._m(3),t("div",[t("p",{staticStyle:{position:"relative"}},[t("b",[e._v("7.00%")]),t("span",[e._v("/年")]),t("PopTip",[e._v("赠会员卡")])],1),t("label",[e._v("回报")])])])]),t("router-link",{attrs:{to:{path:"/project/desc/"+e.$route.params.id}}},[t("div",{staticClass:"tag-link"},[e._v("信息披露"),t("i",{staticClass:"cubeic-arrow"})])]),t("div",{staticClass:"project-info"},[t("h4",[e._v("项目简介")]),t("img",{attrs:{src:"https://img.daokoudai.com/invest/63/64/63647f816880da442c79a8009bf589df.jpg"}}),t("p",[e._v("我叫郑明，在一家互联网金融公司上班，热爱美食和甜点，烘焙美味的蛋糕是我的兴趣。一个月前我开了一家自己的蛋糕店，小店开始稳定经营下来。但我还想做得更多，我想和每一个来店铺的顾客建立更深的联系，期望能够得到大家的支持，我会提供相应的回报和更优质的会员服务。这个店不仅是我自己的，也是大家的，唯有爱与美食不可辜负，我们一起享受美食、享受快乐。")]),t("StepsVertical")],1),t("router-link",{attrs:{to:{path:"/project/report/"+e.$route.params.id}}},[t("cube-button",{staticClass:"fixed-bottom-btn"},[e._v("去出借")])],1),e.wxModel?t("div",{staticClass:"share-model",on:{click:function(n){e.wxModel=!1}}},[t("img",{attrs:{src:"https://img.daokoudai.com/invest/30/b4/30b45f6bd6bb186dd0267bc2f3aa6220.png"}})]):e._e()],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"title"},[t("b",[e._v("幸福的味道烘焙")]),t("span",[e._v("北京市")]),t("span",[e._v("真人认证")]),t("span",[e._v("会员福利")])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"boss"},[i("img",{attrs:{src:t("adde")}}),i("b",[e._v("郑明 ")]),i("span",[e._v("| 专注健康的美食家")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[t("b",[e._v("20,000")]),t("span",[e._v("元")])]),t("label",[e._v("项目金额")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[t("b",[e._v("2")]),t("span",[e._v("个月")])]),t("label",[e._v("项目期限")])])}],r=t("d225"),a=t("b0b4"),c=t("308d"),s=t("6bb5"),d=t("4e2b"),u=t("9ab4"),l=t("3534"),p=t("60a3"),f=t("9c24"),m=function(e){function n(){var e;return Object(r["a"])(this,n),e=Object(c["a"])(this,Object(s["a"])(n).apply(this,arguments)),e.wxModel=!1,e}return Object(d["a"])(n,e),Object(a["a"])(n,[{key:"created",value:function(){this.wxSetConfig()}},{key:"wxSetConfig",value:function(){var e={title:"我发现一个优秀的供应链金融服务平台，快来测测最高可募集金额",desc:"创新金融科技，服务中小企业，解决中小企业融资难、融资慢问题",link:"http://dkdmsf.com/project/detail/PN1909274179",imgUrl:"https://wap.daokoudai.com/resources/images/wxShare/DKD-logo.jpg"};Object(f["a"])(e)}}]),n}(p["d"]);m=Object(u["a"])([Object(p["a"])({components:{StepsVertical:l["d"],PopTip:l["c"]}})],m);var g=m,h=g,v=(t("d4e5"),t("2877")),S=Object(v["a"])(h,i,o,!1,null,"7be8ec82",null);n["default"]=S.exports},d4e5:function(e,n,t){"use strict";var i=t("9cd7"),o=t.n(i);o.a}}]);
//# sourceMappingURL=chunk-61d4a92a.773a73a8.js.map