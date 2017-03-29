/*! vue-ydui v0.4.2 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],e):"object"==typeof exports?exports.ydui=e(require("Vue")):t.ydui=e(t.Vue)}(this,function(t){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.PullRefresh=void 0;var o=i(82),s=n(o);e.PullRefresh=s.default},6:function(e,i){e.exports=t},82:function(t,e,i){var n,o;n=i(167);var s=i(104);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=n},104:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"dragBox"},[t._t("default"),t._v(" "),i("div",{ref:"dragTip",staticClass:"pullrefresh-dragtip",class:t.dragTip.animationTiming,style:{transform:"translate3d(0, "+t.dragTip.translate+"px, 0) scale("+t.dragTip.scale+")"}},[i("span",{class:t.dragTip.loadingIcon,style:{transform:"rotate("+t.dragTip.iconRotate+"deg)",opacity:t.dragTip.iconOpacity}})])],2),t._v(" "),t.showHelpTag?i("div",{staticClass:"pullrefresh-draghelp",on:{click:function(e){t.showHelpTag=!1}}},[t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v("下拉更新")])])}]}},167:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(6),s=n(o);window.$yduiBus=window.$yduiBus||new s.default,e.default={name:"yd-pullrefresh",props:{onInfinite:{type:Function,required:!0}},data:function(){return{showHelpTag:!1,dragTip:{iconOpacity:.5,iconRotate:0,loadingIcon:"",animationTiming:"",scale:1,translate:0,distance:100},touches:{loading:!1,startClientY:0,moveOffset:0,isDraging:!1}}},methods:{init:function(){this.offsetTop=this.$refs.dragBox.getBoundingClientRect().top,this.bindEvents(),window.$yduiBus.$on("ydui.pullrefresh.finishLoad",this.finishLoad),this.showHelp()},showHelp:function(){var t=this,e="PULLREFRESH-TIP",i=window.localStorage;1!=i.getItem(e)&&(this.showHelpTag=!0,setTimeout(function(){t.showHelpTag=!1},5e3)),i.setItem(e,1)},bindEvents:function(){var t=this.$refs.dragBox;t.addEventListener("touchstart",this.touchStartHandler),t.addEventListener("touchmove",this.touchMoveHandler),t.addEventListener("touchend",this.touchEndHandler),document.body.addEventListener("touchmove",this.stopWeixinDrag)},unbindEvents:function(){var t=this.$refs.dragBox;t.removeEventListener("touchstart",this.touchStartHandler),t.removeEventListener("touchmove",this.touchMoveHandler),t.removeEventListener("touchend",this.touchEndHandler),document.body.removeEventListener("touchmove",this.stopWeixinDrag)},stopWeixinDrag:function(t){this.touches.isDraging&&t.preventDefault()},touchStartHandler:function(t){return this.touches.loading?void t.preventDefault():void(this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop||(this.touches.startClientY=t.touches[0].clientY))},touchMoveHandler:function(t){var e=t.touches[0];if(this.touches.loading)return void t.preventDefault();if(!(this.touches.startClientY>e.clientY||this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop||this.touches.loading)){this.touches.isDraging=!0;var i=e.clientY-this.touches.startClientY;this.dragTip.iconOpacity=i/100,i>=this.dragTip.distance&&(i=this.dragTip.distance),this.dragTip.iconRotate=i/.25,this.touches.moveOffset=this.dragTip.translate=i}},touchEndHandler:function(t){var e=this.touches;if(e.loading)return void t.preventDefault();if(!(this.$refs.dragBox.getBoundingClientRect().top<this.offsetTop)){if(this.dragTip.animationTiming="pullrefresh-animation-timing",e.moveOffset>=this.dragTip.distance)return this.dragTip.translate=this.dragTip.distance/1.5,this.dragTip.loadingIcon="pullrefresh-loading",void this.triggerLoad();this.dragTip.translate=0,this.resetParams()}},triggerLoad:function(){this.touches.loading=!0,this.onInfinite()},finishLoad:function(){var t=this;setTimeout(function(){t.dragTip.iconRotate=0,t.dragTip.scale=0,t.resetParams()},200)},resetParams:function(){var t=this;setTimeout(function(){var e=t.touches,i=t.dragTip;e.isDraging=!1,e.loading=!1,e.moveOffset=0,i.animationTiming="",i.iconOpacity=.5,i.translate=0,i.scale=1,i.loadingIcon=""},150)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.unbindEvents()}}}})});