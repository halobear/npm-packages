(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{135:function(t,i,n){},136:function(t,i,n){},257:function(t,i,n){"use strict";var e=n(135);n.n(e).a},258:function(t,i,n){"use strict";var e=n(136);n.n(e).a},342:function(t,i,n){"use strict";n.r(i);n(63);var e={model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,default:!1},direction:{type:String,default:"center"}},methods:{close:function(){this.$emit("close",!1)}}},s=(n(257),n(1)),o=Object(s.a)(e,(function(){var t=this.$createElement,i=this._self._c||t;return i("transition",{attrs:{name:"fade"}},[this.visible?i("div",{staticClass:"my-dialog-container",class:[this.direction],on:{click:this.close}},[i("div",{staticClass:"my-dialog-inner",on:{click:function(t){t.stopPropagation()}}},[this._t("default")],2),this._v(" "),i("div")]):this._e()])}),[],!1,null,"b169a58a",null).exports;o.install=function(t){t.component("vue-dialog",o)};var a={components:{VueDialog:o},data:function(){return{visible:!1,direction:"center"}},methods:{showDialog:function(t){this.direction=t,this.visible=!0}}},c=(n(258),Object(s.a)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"test-container"},[n("h2",{staticClass:"title"},[t._v("@halobear/vue-dialog")]),t._v(" "),n("button",{staticClass:"k-btn k-btn-primary",on:{click:function(i){return t.showDialog("center")}}},[t._v("\n    居中弹窗\n  ")]),t._v(" "),n("button",{staticClass:"k-btn k-btn-primary",on:{click:function(i){return t.showDialog("bottom")}}},[t._v("\n    底部弹窗\n  ")]),t._v(" "),n("button",{staticClass:"k-btn k-btn-primary",on:{click:function(i){return t.showDialog("top")}}},[t._v("\n    上部弹窗\n  ")]),t._v(" "),n("vue-dialog",{attrs:{direction:t.direction},model:{value:t.visible,callback:function(i){t.visible=i},expression:"visible"}},[n("div",{staticClass:"test-inner"})])],1)}),[],!1,null,"7a52a2ac",null));i.default=c.exports},63:function(t,i,n){}}]);