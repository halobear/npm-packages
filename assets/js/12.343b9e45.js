(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{181:function(t,e,n){"use strict";var a=n(84);n.n(a).a},182:function(t,e,n){"use strict";var a=n(85);n.n(a).a},183:function(t,e,n){"use strict";var a=n(86);n.n(a).a},227:function(t,e,n){"use strict";n.r(e);var a=n(131),r=(n(81),n(97)),i=(n(68),n(214)),s=n.n(i),o=(n(215),n(216),n(217),n(100),n(218)),u=n(230),c=(n(219),n(220),n(221),n(114),n(98),n(222),n(119),n(223)),l=n.n(c),d=n(69),p=function(t){var e=t.file,n=t.width,a=t.height;return!n&&!a||!!e&&(!/^image\/[jpeg|png|jpg|gif|svg|ico]/gi.test(e.type)||new Promise((function(t){var r=new Image;r.src=URL.createObjectURL(e),r.onload=function(){return n&&n<this.width?t(!1):a&&a<this.height?t(!1):void t(!0)},r.onerror=function(){t(!1)}})))};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,a,r,i,s,o,c,d,p,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.action,a=void 0===n?"https://upload.qiniup.com":n,r=e.name,i=e.file,s=e.formData,o=void 0===s?{}:s,c=e.onProgress,d=e.needMD5,p=void 0===d||d,r&&p&&(o.key=r),f=new FormData,Object.entries(o).forEach((function(t){var e=Object(u.a)(t,2),n=e[0],a=e[1];f.append(n,a)})),f.append("file",i),t.next=7,l.a.upload({url:a,data:f,onProgress:c});case 7:return v=t.sent,t.abrupt("return",m({},v,{url:"".concat(v.base_url).concat(v.path,"-300x300")}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b,g=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,a,i,s,o,u,c,f,m,h,b,g,y,w,k,C,_,O,j,x=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=x.length>0&&void 0!==x[0]?x[0]:{},n=e.action,a=e.formData,i=void 0===a?{}:a,s=e.size,o=void 0===s?20:s,u=e.limit,c=void 0===u?1:u,f=e.width,m=e.height,h=e.needMD5,b=void 0===h||h,g=e.fetchToken,y=void 0===g?function(){}:g,w=e.onProgress,t.next=3,l.a.getFiles({multiple:c>1,needMD5:b});case 3:return k=t.sent,t.next=6,y();case 6:if(i.token=t.sent,(C=k.filter((function(t){return t.file.size/1024/1024<=o}))).length!==k.length&&(_="".concat(k.length-C.length,"个文件大小超出").concat(o,"M"),Object(d.b)(_)),!f&&!m){t.next=16;break}return O=C,t.next=13,Promise.all(O.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p({file:e.file,width:f,height:m});case 2:return n=t.sent,t.abrupt("return",n?e:void 0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 13:C=(C=t.sent).filter((function(t){return t})),O.length!==C.length&&Object(d.b)("尺寸限制：宽 ".concat(f,", 高 ").concat(m));case 16:return t.next=18,Promise.all(C.slice(0,c).map((function(t){var e=t.name,a=t.file;return v({action:n,name:e,file:a,formData:i,onProgress:w,needMD5:b})})));case 18:return j=t.sent,t.abrupt("return",j);case 20:case"end":return t.stop()}}),t)}))),y=(n(113),n(226)),w=n.n(y),k={props:{data:{type:Object,default:function(){return{}}}},methods:{handleClick:function(){this.$emit("click",this.data)},preview:function(){var t=this.data.url,e=void 0===t?"":t;e&&w.a.preview(e.replace(/-300x300/,"-w750"))}}},C=(n(181),n(1)),_=Object(C.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-card",on:{click:t.handleClick}},[t.data.url?n("img",{staticClass:"origin-img animated fadeIn",attrs:{src:t.data.url}}):t._e(),t._v(" "),n("div",{staticClass:"action-box"},[n("i",{staticClass:"iconfont icon-eye",on:{click:function(e){return e.stopPropagation(),t.preview(e)}}}),t._v(" "),n("i",{staticClass:"iconfont icon-delete",on:{click:function(e){return t.$emit("remove")}}})])])}),[],!1,null,"2e63f019",null).exports,O={props:{progress:{type:Number,default:0}}},j=(n(182),Object(C.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-card",on:{click:function(e){return t.$emit("click")}}},[n("i",{staticClass:"icon-cloud-upload iconfont"}),t._v(" "),n("span",[t._v("点击上传")]),t._v(" "),t.progress&&100!==t.progress?n("div",{staticClass:"upload-progress",style:{width:t.progress+"%"}}):t._e()])}),[],!1,null,"1cfb6bc7",null).exports),x={components:{draggable:s.a,ImageCard:_,UploadCard:j},model:{prop:"value",event:"change"},props:{action:{type:String,default:"https://upload.qiniup.com"},value:{type:Array},params:{type:Object,default:function(){return{}}},fetchToken:{type:Function},limit:{type:Number,default:1},size:{type:Number,default:20},width:{type:Number,default:0},height:{type:Number,default:0},needMD5:{type:Boolean,default:!0}},data:function(){return{dataValue:this.value||[],progress:0}},watch:{value:{deep:!0,handler:function(t){this.dataValue=t}}},methods:{changeValue:function(t){this.dataValue=t,this.$emit("change",t)},onProgress:function(t){var e=t.loaded,n=t.total;this.progress=Math.floor(100*e/n)},remove:function(t){this.dataValue.splice(t,1),this.changeValue(this.dataValue)},upload:(b=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g({formData:this.params,size:this.size,limit:this.limit-this.dataValue.length,needMD5:this.needMD5,fetchToken:this.fetchToken,onProgress:this.onProgress,width:this.width,height:this.height});case 2:e=t.sent,this.changeValue([].concat(Object(a.a)(this.dataValue),Object(a.a)(e)));case 4:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})}},Z=(n(183),Object(C.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{staticClass:"vue-upload-container",attrs:{draggable:".image-card",value:t.value},on:{input:t.changeValue}},[t._l(t.value,(function(e,a){return n("image-card",{key:a,attrs:{data:e},on:{remove:function(e){return t.remove(a)}}})})),t._v(" "),t.dataValue.length<t.limit?n("upload-card",{attrs:{progress:t.progress},on:{click:t.upload}}):t._e()],2)}),[],!1,null,null,null).exports);Z.install=function(t){t.component("vue-qrcode",Z)};var V={components:{Upload:Z},data:function(){return{value:[{url:"http://pic.kuan1.top/e12720a8cee945216bc5e516fcb36028.png"},{url:"http://pic.kuan1.top/0b5934b623f3c6f5377f221959d77982.gif"},{url:"http://pic.kuan1.top/38d54e7711a19ac1ca08f134934bdbf3.png"}],params:{test:1}}},methods:{testToken:function(){return"m_bQ6vCqK-1n_myddynLMQxg0rxw3YqRptv5D7_i:8Oba8VIRsUzpOY1EGZ1QsT7jMlE=:eyJzY29wZSI6ImNybXB1YiIsImRlYWRsaW5lIjoxNTc3OTQ4NDI5LCJzYXZlS2V5Ijoid2VkZGluZ1wvJChldGFnKSQoc3VmZml4KSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6XC9cL2FwcC1kYXNoYm9hcmQud2VkZGluZ2VlLmNvbVwvYXBpXC9oYWxvLWRhc2hib2FyZFwvdjFcL3VwbG9hZFwvcWluaXUiLCJjYWxsYmFja0JvZHkiOiJrZXk9JChrZXkpJnc9JChpbWFnZUluZm8ud2lkdGgpJmg9JChpbWFnZUluZm8uaGVpZ2h0KSZmbmFtZT0kKGZuYW1lKSZmc2l6ZT0kKGZzaXplKSZtaW1lVHlwZT0kKG1pbWVUeXBlKSZmdHlwZT0ke3g6ZnR5cGV9Jm1vZHVsZT0ke3g6bW9kdWxlfSZoYWxsX21vZHVsZT0ke3g6aGFsbF9tb2R1bGV9JnR5cGU9Y3JtcHViIn0="}}},N=Object(C.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",{staticClass:"test-container"},[n("h2",{staticClass:"title"},[t._v("@halobear/vue-upload")]),t._v(" "),n("upload",{attrs:{fetchToken:t.testToken,params:t.params,limit:5},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("p",{staticStyle:{"padding-top":"20px"}},[t._v(t._s(t.value))])],1)}),[],!1,null,null,null);e.default=N.exports},30:function(t,e,n){},31:function(t,e,n){},69:function(t,e,n){"use strict";function a(t){t.preventDefault()}var r={name:"loading",data:function(){return{visible:!1}},methods:{show:function(){"undefined"!=typeof window&&(this.visible=!0,document.body.addEventListener("touchmove",a))},hide:function(){"undefined"!=typeof window&&(this.visible=!1,document.body.removeEventListener("touchmove",a))}}},i=(n(82),n(1)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"loading-container-monitor"},[n("div",{staticClass:"loading fadeIn animated"},[n("div",{staticClass:"spinner spinner-ios"},[n("svg",{attrs:{viewBox:"0 0 64 64"}},[n("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),t._v(" "),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])])])]):t._e()}),[],!1,null,"6fceb054",null).exports,o=n(115),u=n(116),c=n(0),l=function(){function t(e){Object(o.a)(this,t),this.Component=c.default.extend(e),this.instance=""}return Object(u.a)(t,[{key:"show",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];"undefined"!=typeof window&&(this.instance||(this.instance=new this.Component({el:document.createElement("div")}),document.body.appendChild(this.instance.$el)),c.default.nextTick((function(){var e=t.instance;e&&(e.visible=!0,e.show&&e.show.apply(e,n))})))}},{key:"hide",value:function(){var t=this.instance;t&&(this.instance.visible=!1,t.hide&&t.hide())}}]),t}(),d=new l(s);function p(t){t.preventDefault()}var f,m,v={name:"toast",data:function(){return{visible:!1,tips:""}},methods:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";"undefined"!=typeof window&&t&&(this.tips=t,this.visible=!0,document.body.addEventListener("touchmove",p))},hide:function(){"undefined"!=typeof window&&(this.visible=!1,document.body.removeEventListener("touchmove",p))}}},h=(n(83),Object(i.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",{staticClass:"loading-container-monitor"},[e("div",{staticClass:"loading animated fadeIn"},[e("span",{staticClass:"tips",domProps:{innerHTML:this._s(this.tips)}})])]):this._e()}),[],!1,null,"523181bc",null).exports);var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;f||(f=new l(h)),t&&console.log("Toast: ",t),f.show(t),m&&clearTimeout(m),m=setTimeout((function(){f.hide()}),e)};n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}))},82:function(t,e,n){"use strict";var a=n(30);n.n(a).a},83:function(t,e,n){"use strict";var a=n(31);n.n(a).a},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){}}]);