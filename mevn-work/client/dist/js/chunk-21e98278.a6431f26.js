(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e98278","chunk-2d21e366"],{d1db:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view"},[a("cube-tab-panels",{model:{value:e.selectedLabel,callback:function(t){e.selectedLabel=t},expression:"selectedLabel"}},[a("cube-tab-panel",{attrs:{label:"账户详情页"}},[a("AccountDetail",{attrs:{prop:e.propAccountDetail}})],1),a("cube-tab-panel",{attrs:{label:"开户页"}},[a("OpenAccount",{on:{emit:e.emitOpenAccount}})],1),a("cube-tab-panel",{attrs:{label:"上传身份证页"}},[a("UploadIdCard",{attrs:{prop:e.propUploadIdCard},on:{emit:e.emitUploadIdCard}}),a("cube-button",{on:{click:e.emitUploadIdCard}},[e._v("确认")])],1),a("cube-tab-panel",{staticClass:"result-page",attrs:{label:"开户成功页"}},[a("i",{staticClass:"cubeic-ok"}),a("h4",[e._v("开户成功")]),a("router-link",{attrs:{to:"/account/lmCharge"}},[a("cube-button",[e._v("去充值")])],1)],1),a("cube-tab-panel",{staticClass:"result-page",attrs:{label:"开户失败页"}},[a("i",{staticClass:"cubeic-close"}),a("h4",[e._v("开户失败")]),a("cube-button",{on:{click:function(t){e.selectedLabel="开户页"}}},[e._v("重新开户")])],1)],1)],1)},n=[],s=(a("96cf"),a("3b8d")),i=a("d225"),o=a("b0b4"),l=a("308d"),c=a("6bb5"),u=a("4e2b"),d=a("9ab4"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view"},[a("cube-form",{attrs:{model:e.model,schema:e.schema},on:{submit:e.submitHandler}})],1)},b=[],m=a("60a3"),h=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.model={realName:"郎岩",idCardNo:"130102196303250459",bankCardNo:"6228480402564890018",mobile:"15222018200"},e.schema={fields:[{type:"input",modelKey:"realName",props:{placeholder:"真实姓名",clearable:!0},rules:{required:!0}},{type:"input",modelKey:"idCardNo",props:{placeholder:"身份证号",clearable:!0},rules:{required:!0}},{type:"input",modelKey:"bankCardNo",props:{placeholder:"银行卡号（请绑定1类卡，用于充值和提现）",clearable:!0},rules:{required:!0}},{type:"input",modelKey:"mobile",props:{placeholder:"银行卡预留手机号",clearable:!0},rules:{required:!0}},{type:"submit",label:"下一步"}]},e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"submitHandler",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.preventDefault(),this.$emit("emit",this.model);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(m["d"]);h=Object(d["a"])([Object(m["a"])({components:{}})],h);var v=h,C=v,f=a("2877"),O=Object(f["a"])(C,p,b,!1,null,null,null),k=O.exports,g=a("d532"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view"},[a("div",{staticClass:"tag-label"},[a("label",[e._v("资金账号")]),a("span",[e._v(e._s(e.prop.lmAccount))])]),a("div",{staticClass:"tag-label"},[a("label",[e._v("姓名")]),a("span",[e._v(e._s(e.prop.realName))])]),a("div",{staticClass:"tag-label"},[a("label",[e._v("身份证号")]),a("span",[e._v(e._s(e.prop.idCode))])]),a("div",{staticClass:"tag-label"},[a("label",[e._v("身份影像资料")]),a("span",[e._v(e._s(e.prop.idUploadStatus))])]),a("div",{staticClass:"tag-label"},[a("label",[e._v("绑定银行卡")]),a("span",[e._v(e._s(e.prop.lmBankCardNameAndTailNo))])]),a("div",{staticClass:"tag-label-justify-float",on:{click:e.resetPassword}},[a("label",[e._v("重置交易密码")]),e._m(0)])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"cubeic-arrow"})])}],_=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.idUploadStatus="",e.lmBankCardNameAndTailNo="",e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){var e=this.prop.shAccountStatusData;e&&"0000"===e.resCode&&(this.lmBankCardNameAndTailNo=e.message.lmBankCardNameAndTailNo)}},{key:"resetPassword",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({api:"resetPassword",params:{token:this.$store.state.token},originReturnUrl:location.origin});case 2:t=e.sent,"0000"===t.resCode&&this.$request({formSubmitData:t});case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(m["d"]);Object(d["a"])([Object(m["c"])()],_.prototype,"prop",void 0),_=Object(d["a"])([Object(m["a"])({components:{}})],_);var y=_,w=y,$=Object(f["a"])(w,j,N,!1,null,null,null),A=$.exports,U=a("48b8"),I=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.selectedLabel="",e.propAccountDetail={lmAccount:e.$store.state.user.bankCard,realName:e.$store.state.user.realName,idCode:e.$store.state.user.idCode,shAccountStatusData:{}},e.realName="",e.idCardNo="",e.bankCardNo="",e.mobile="",e.propUploadIdCard={},e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){"true"===Object(U["d"])("result")?this.selectedLabel="开户成功页":"false"===Object(U["d"])("result")?this.selectedLabel="开户失败页":this.$store.state.user.bankCard?this.selectedLabel="账户详情页":this.selectedLabel="开户页"}},{key:"emitOpenAccount",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.realName=t.realName,this.idCardNo=t.idCardNo,this.bankCardNo=t.bankCardNo,this.mobile=t.mobile,this.propUploadIdCard={idCardCode:t.idCardNo},this.selectedLabel="上传身份证页";case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"emitUploadIdCard",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({api:"lmService/personalRegister",params:{token:this.$store.state.token,lmRegister:{realName:this.realName,idCardNo:this.idCardNo,bankCardNo:this.bankCardNo,mobile:this.mobile},originReturnUrl:this.$store.state.originReturnUrl}});case 2:a=e.sent,"0000"===a.resCode?this.$request({formSubmitData:a}):this.selectedLabel="开户失败页";case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"shAccountStatus",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$request({api:"shAccountStatus",params:{token:this.$store.state.token,lmRegister:{realName:this.realName,idCardNo:this.idCardNo,bankCardNo:this.bankCardNo,mobile:this.mobile}}});case 2:t=e.sent,"0000"===t.resCode&&(this.propAccountDetail.shAccountStatusData=t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(m["d"]);I=Object(d["a"])([Object(m["a"])({components:{OpenAccount:k,UploadIdCard:g["default"],AccountDetail:A}})],I);var R=I,x=R,D=Object(f["a"])(x,r,n,!1,null,null,null);t["default"]=D.exports},d532:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view"},[a("p",[e._v("身份证正面")]),a("UploadImgOrigin",{attrs:{prop:e.propUploadImgOriginFront}}),a("p",[e._v("身份证背面")]),a("UploadImgOrigin",{attrs:{prop:e.propUploadImgOriginBack}})],1)},n=[],s=a("d225"),i=a("b0b4"),o=a("308d"),l=a("6bb5"),c=a("4e2b"),u=a("9ab4"),d=a("3534"),p=a("60a3"),b=function(e){function t(){return Object(s["a"])(this,t),Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"propUploadImgOriginFront",get:function(){return{api:"uploadIdImage",params:{token:this.$store.state.token,front:!0,idCardCode:this.prop.idCardCode}}}},{key:"propUploadImgOriginBack",get:function(){return{api:"uploadIdImage",params:{token:this.$store.state.token,front:!1,idCardCode:this.prop.idCardCode}}}}]),t}(p["d"]);Object(u["a"])([Object(p["c"])()],b.prototype,"prop",void 0),b=Object(u["a"])([Object(p["a"])({components:{UploadImgOrigin:d["f"]}})],b);var m=b,h=m,v=a("2877"),C=Object(v["a"])(h,r,n,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-21e98278.a6431f26.js.map