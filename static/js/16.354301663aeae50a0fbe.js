webpackJsonp([16],{"1+nn":function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"marquee",data:function(){return{imgData:["http://img15.3lian.com/2016/h1/75/d/210.jpg","http://img15.3lian.com/2016/h1/75/d/211.jpg","http://img15.3lian.com/2016/h1/75/d/212.jpg","http://img15.3lian.com/2016/h1/75/d/213.jpg","http://img15.3lian.com/2016/h1/75/d/214.jpg","http://img15.3lian.com/2016/h1/75/d/210.jpg"],bgC:["red","#00bfff","orange","maroon","lime","navy"]}},methods:{onClick:function(n){console.log(n)}}},o={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"demo-marquee"},[i("br"),n._v(" "),i("im-marquee",n._l(5,function(t){return i("div",{key:t,staticClass:"single",on:{click:function(i){n.onClick(t)}}},[n._v("single item up for "+n._s(t))])})),n._v(" "),i("br"),n._v(" "),i("im-marquee",n._l(5,function(t){return i("div",{key:t,staticClass:"single-and-pic",on:{click:function(i){n.onClick(t)}}},[i("img",{attrs:{src:n.imgData[t],alt:""}}),n._v(" "),i("p",[n._v("single item up for "+n._s(t))])])})),n._v(" "),i("br"),n._v(" "),i("im-marquee",{attrs:{scrollStatus:"down",duration:"300",interval:"1500"}},n._l(5,function(t){return i("div",{key:t,staticClass:"double",style:{background:n.bgC[t]},on:{click:function(i){n.onClick(t)}}},[i("p",[n._v("double item down for "+n._s(t))]),n._v(" "),i("p",[n._v("double item down for "+n._s(t))]),n._v(" "),i("p",[n._v("double item down for "+n._s(t))])])}))],1)},staticRenderFns:[]};var a=i("C7Lr")(e,o,!1,function(n){i("uXFY")},"data-v-39f8c761",null);t.default=a.exports},uXFY:function(n,t){}});