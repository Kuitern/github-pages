(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e68f1"],{"98ea":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"view"},[i("UploadImages")],1)},a=[],l=i("d225"),n=i("308d"),r=i("6bb5"),o=i("4e2b"),c=i("9ab4"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{attrs:{action:e.uploadImgAction,"on-success":e.handleSuccess,"file-list":e.fileList,"on-error":e.handleError,data:e.uploadImgData,"list-type":"picture-card","on-preview":e.handlePictureCardPreview},scopedSlots:e._u([{key:"file",fn:function(t){var s=t.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:s.url,alt:""}}),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(s)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleDownload(s,t)}}},[i("i",{staticClass:"el-icon-download"})]),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(s)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},[i("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},d=[],p=(i("96cf"),i("3b8d")),f=(i("a481"),i("b0b4")),h=i("2ef0"),m=i.n(h),g=i("4ead"),v=i("60a3"),b=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(n["a"])(this,Object(r["a"])(t).apply(this,arguments)),e.dialogImageUrl="",e.dialogVisible=!1,e.uploadImgAction="".concat(e.$store.state.domainNodeServer,"/api/3.0/W/disclosure/uploadImage"),e.uploadImgData={params:JSON.stringify({token:e.$store.state.token,waterMark:!0}),from:"W",imei:"imei",appKey:"88888888"},e.fileList=[],e.disabled=!1,e}return Object(o["a"])(t,e),Object(f["a"])(t,[{key:"created",value:function(){}},{key:"handleSuccess",value:function(e,t,i){var s=e;if("0000"===s.resCode)this.$message({message:s.resMsg,type:"success"}),this.fileList.push(t),console.log("this.fileList ",this.fileList),this.requestApi({data:{name:s.originalFileName,url:s.url},method:"post"});else{var a=m.a.cloneDeep(this.fileList);this.fileList=a.filter((function(e){return t.uid!==e.uid})),this.$message({message:s.resMsg,type:"error"}),"E0000002"===s.resCode&&(this.$store.commit("resetAll"),this.$router.replace("/user/login"))}}},{key:"handleDownload",value:function(e,t){var i=e.response;i?Object(g["a"])(i.url,t):Object(g["a"])(e.url,t)}},{key:"handleError",value:function(e,t,i){console.log("error response",e)}},{key:"handleRemove",value:function(e,t){console.log("file",e),this.fileList=this.fileList.filter((function(t){return console.log(e.uid,t.uid),e.uid!==t.uid})),this.requestApi({id:e._id,method:"delete"})}},{key:"handlePictureCardPreview",value:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}},{key:"requestApi",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,i,s,a,l,n,r,o,c,u,d,p=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},i=t.data,s=void 0===i?{}:i,a=t.method,l=void 0===a?"get":a,n=t.index,void 0===n?0:n,r=s._id||t.id||"",o=r?"/"+r:"",e.next=6,this.$request({direct:"api/ossImg"+o,data:s,method:l});case 6:c=e.sent,"post"===l?(u=this.fileList.length-1,d=this.fileList[u],d["_id"]=c._id,this.fileList[u]=d):"get"==l&&(this.fileList=c);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),t}(v["d"]);b=Object(c["a"])([Object(v["a"])({components:{}})],b);var _=b,w=_,O=i("2877"),j=Object(O["a"])(w,u,d,!1,null,null,null),k=j.exports,y=function(e){function t(){return Object(l["a"])(this,t),Object(n["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),t}(v["d"]);y=Object(c["a"])([Object(v["a"])({components:{UploadImages:k}})],y);var C=y,L=C,I=Object(O["a"])(L,s,a,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-2d0e68f1.4c4a9460.js.map