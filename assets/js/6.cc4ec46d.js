(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{117:function(t,e,n){"use strict";function a(t){t.preventDefault()}var r={name:"loading",data:function(){return{visible:!1}},methods:{show:function(){"undefined"!=typeof window&&(this.visible=!0,document.body.addEventListener("touchmove",a))},hide:function(){"undefined"!=typeof window&&(this.visible=!1,document.body.removeEventListener("touchmove",a))}}},i=(n(137),n(1)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"loading-container-monitor"},[n("div",{staticClass:"loading fadeIn animated"},[n("div",{staticClass:"spinner spinner-ios"},[n("svg",{attrs:{viewBox:"0 0 64 64"}},[n("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])])])]):t._e()}),[],!1,null,"6fceb054",null).exports,o=n(138),c=n(139),u=n(0),l=function(){function t(e){Object(o.a)(this,t),this.Component=u.default.extend(e),this.instance=""}return Object(c.a)(t,[{key:"show",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];"undefined"!=typeof window&&(this.instance||(this.instance=new this.Component({el:document.createElement("div")}),document.body.appendChild(this.instance.$el)),u.default.nextTick((function(){var e=t.instance;e&&(e.visible=!0,e.show&&e.show.apply(e,n))})))}},{key:"hide",value:function(){var t=this.instance;t&&(this.instance.visible=!1,t.hide&&t.hide())}}]),t}(),d=new l(s);function p(t){t.preventDefault()}var f,m,v={name:"toast",data:function(){return{visible:!1,tips:""}},methods:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";"undefined"!=typeof window&&t&&(this.tips=t,this.visible=!0,document.body.addEventListener("touchmove",p))},hide:function(){"undefined"!=typeof window&&(this.visible=!1,document.body.removeEventListener("touchmove",p))}}},h=(n(142),Object(i.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",{staticClass:"loading-container-monitor"},[e("div",{staticClass:"loading animated fadeIn"},[e("span",{staticClass:"tips",domProps:{innerHTML:this._s(this.tips)}})])]):this._e()}),[],!1,null,"523181bc",null).exports);var g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;f||(f=new l(h)),t&&console.log("Toast: ",t),f.show(t),m&&clearTimeout(m),m=setTimeout((function(){f.hide()}),e)};n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g}))},137:function(t,e,n){"use strict";var a=n(64);n.n(a).a},142:function(t,e,n){"use strict";var a=n(65);n.n(a).a},195:function(t,e,n){},196:function(t,e,n){},197:function(t,e,n){},383:function(t,e,n){"use strict";var a=n(195);n.n(a).a},384:function(t,e,n){"use strict";var a=n(196);n.n(a).a},385:function(t,e,n){"use strict";var a=n(197);n.n(a).a},388:function(t,e,n){"use strict";n.r(e);var a=n(143),r=(n(102),n(115)),i=(n(66),n(355)),s=n.n(i),o=(n(357),n(358),n(359),n(108),n(363)),c=n(199),u=(n(364),n(366),n(367),n(80),n(105),n(368),n(109),n(369)),l=n.n(u),d=n(117),p=function(t){var e=t.file,n=t.width,a=t.height;return!n&&!a||!!e&&(!/^image\/[jpeg|png|jpg|gif|svg|ico]/gi.test(e.type)||new Promise((function(t){var r=new Image;r.src=URL.createObjectURL(e),r.onload=function(){return n&&n<this.width?t(!1):a&&a<this.height?t(!1):void t(!0)},r.onerror=function(){t(!1)}})))};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,a,r,i,s,o,u,d,p,f,v,h,g;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,a=e.file,r=e.formData,i=void 0===r?{}:r,s=e.onProgress,o=e.needMD5,u=void 0===o||o,d=i.host,p=void 0===d?"https://upload.qiniup.com":d,f=i.dir,v=void 0===f?"":f,n&&u&&(i.key="".concat(v).concat(n)),delete i.host,delete i.dir,h=new FormData,Object.entries(i).forEach((function(t){var e=Object(c.a)(t,2),n=e[0],a=e[1];h.append(n,a)})),h.append("file",a),t.next=10,l.a.upload({url:p,data:h,onProgress:s});case 10:return g=t.sent,t.abrupt("return",m({},g,{url:"".concat(g.base_url).concat(g.path,"-300x300")}));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g,b=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,a,i,s,o,c,u,f,m,h,g,b,y,w,k,_,C,O,j,x,Z=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Z.length>0&&void 0!==Z[0]?Z[0]:{},n=e.formData,a=void 0===n?{}:n,i=e.size,s=void 0===i?20:i,o=e.limit,c=void 0===o?1:o,u=e.width,f=e.height,m=e.needMD5,h=void 0===m||m,g=e.accept,b=void 0===g?"image/*":g,y=e.fetchToken,w=void 0===y?function(){}:y,k=e.onProgress,t.next=3,l.a.getFiles({multiple:c>1,needMD5:h,accept:b});case 3:return _=t.sent,t.next=6,w();case 6:if(a.token=t.sent,(C=_.filter((function(t){return t.file.size/1024/1024<=s}))).length!==_.length&&(O="".concat(_.length-C.length,"个文件大小超出").concat(s,"M"),Object(d.b)(O)),!u&&!f){t.next=16;break}return j=C,t.next=13,Promise.all(j.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p({file:e.file,width:u,height:f});case 2:return n=t.sent,t.abrupt("return",n?e:void 0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 13:C=(C=t.sent).filter((function(t){return t})),j.length!==C.length&&Object(d.b)("尺寸限制：宽 ".concat(u,", 高 ").concat(f));case 16:return t.next=18,Promise.all(C.slice(0,c).map((function(t){return v({name:t.name,file:t.file,formData:a,onProgress:k,needMD5:h})})));case 18:return x=t.sent,t.abrupt("return",x);case 20:case"end":return t.stop()}}),t)}))),y=(n(151),n(370)),w=n.n(y),k={props:{data:{type:Object,default:function(){return{}}},accept:{type:String}},computed:{isImage:function(){return"image/*"===this.accept}},methods:{open:function(t){window.open(t)},handleClick:function(){this.$emit("click",this.data)},preview:function(){var t=this.data.url,e=void 0===t?"":t;e&&w.a.preview(e.replace(/-300x300/,"-w750"))}}},_=(n(383),n(1)),C=Object(_.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"file-card":!t.isImage,"image-card":t.isImage},on:{click:t.handleClick}},[t.data.url&&t.isImage?n("img",{staticClass:"origin-img animated fadeIn",attrs:{src:t.data.url}}):t.isImage?t._e():n("p",{on:{click:function(e){return t.open(t.data.url)}}},[t._v(t._s(t.data.path||t.data.url))]),t._v(" "),n("div",{staticClass:"action-box"},[t.isImage?n("i",{staticClass:"iconfont icon-eye",on:{click:function(e){return e.stopPropagation(),t.preview(e)}}}):t._e(),t._v(" "),n("i",{staticClass:"iconfont icon-delete",on:{click:function(e){return t.$emit("remove")}}})])])}),[],!1,null,"a35359d8",null).exports,O={props:{progress:{type:Number,default:0}}},j=(n(384),Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-card",on:{click:function(e){return t.$emit("click")}}},[n("i",{staticClass:"icon-plus iconfont"}),t._v(" "),n("span",[t._v("点击上传")]),t._v(" "),t.progress&&100!==t.progress?n("div",{staticClass:"upload-progress",style:{width:t.progress+"%"}}):t._e()])}),[],!1,null,"50357750",null).exports),x={components:{draggable:s.a,ImageCard:C,UploadCard:j},model:{prop:"value",event:"change"},props:{value:{type:Array},params:{type:Object,default:function(){return{}}},fetchToken:{type:Function},limit:{type:Number,default:1},size:{type:Number,default:20},width:{type:Number,default:0},height:{type:Number,default:0},accept:{type:String,default:"image/*"},needMD5:{type:Boolean,default:!0}},data:function(){return{dataValue:this.value||[],progress:0}},watch:{value:{deep:!0,handler:function(t){this.dataValue=t||[]}}},methods:{changeValue:function(t){this.dataValue=t,this.$emit("change",t)},onProgress:function(t){var e=t.loaded,n=t.total;this.progress=Math.floor(100*e/n)},remove:function(t){this.dataValue.splice(t,1),this.changeValue(this.dataValue)},upload:(g=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b({formData:this.params,size:this.size,limit:this.limit-this.dataValue.length,needMD5:this.needMD5,fetchToken:this.fetchToken,onProgress:this.onProgress,width:this.width,height:this.height,accept:this.accept});case 2:e=t.sent,this.changeValue([].concat(Object(a.a)(this.dataValue),Object(a.a)(e)));case 4:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})}},Z=(n(385),Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{staticClass:"vue-upload-container",class:{"file-upload-container":"image/*"!==t.accept},attrs:{draggable:".image-card",value:t.value},on:{input:t.changeValue}},[t._l(t.value,(function(e,a){return n("image-card",{key:a,attrs:{accept:t.accept,data:e},on:{remove:function(e){return t.remove(a)}}})})),t._v(" "),t.dataValue.length<t.limit?n("upload-card",{attrs:{progress:t.progress},on:{click:t.upload}}):t._e()],2)}),[],!1,null,null,null).exports);Z.install=function(t){t.component("vue-qrcode",Z)};var V={components:{Upload:Z},data:function(){return{value:[{url:"http://pic.kuan1.top/e12720a8cee945216bc5e516fcb36028.png"},{url:"http://pic.kuan1.top/0b5934b623f3c6f5377f221959d77982.gif"},{url:"http://pic.kuan1.top/38d54e7711a19ac1ca08f134934bdbf3.png"}],params:{test:1}}},methods:{testToken:function(){return"m_bQ6vCqK-1n_myddynLMQxg0rxw3YqRptv5D7_i:8Oba8VIRsUzpOY1EGZ1QsT7jMlE=:eyJzY29wZSI6ImNybXB1YiIsImRlYWRsaW5lIjoxNTc3OTQ4NDI5LCJzYXZlS2V5Ijoid2VkZGluZ1wvJChldGFnKSQoc3VmZml4KSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6XC9cL2FwcC1kYXNoYm9hcmQud2VkZGluZ2VlLmNvbVwvYXBpXC9oYWxvLWRhc2hib2FyZFwvdjFcL3VwbG9hZFwvcWluaXUiLCJjYWxsYmFja0JvZHkiOiJrZXk9JChrZXkpJnc9JChpbWFnZUluZm8ud2lkdGgpJmg9JChpbWFnZUluZm8uaGVpZ2h0KSZmbmFtZT0kKGZuYW1lKSZmc2l6ZT0kKGZzaXplKSZtaW1lVHlwZT0kKG1pbWVUeXBlKSZmdHlwZT0ke3g6ZnR5cGV9Jm1vZHVsZT0ke3g6bW9kdWxlfSZoYWxsX21vZHVsZT0ke3g6aGFsbF9tb2R1bGV9JnR5cGU9Y3JtcHViIn0="}}},N=Object(_.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test-container"},[n("h2",{staticClass:"title"},[t._v("@halobear/vue-upload")]),t._v(" "),n("upload",{attrs:{fetchToken:t.testToken,params:t.params,limit:5},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("p",{staticStyle:{"padding-top":"20px"}},[t._v(t._s(t.value))])],1)}),[],!1,null,null,null);e.default=N.exports},64:function(t,e,n){},65:function(t,e,n){}}]);