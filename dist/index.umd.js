!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t(e.cMobile={},e.Vue)}(this,function(e,o){"use strict";o=o&&o.hasOwnProperty("default")?o.default:o;var t,r="undefined"!=typeof window;r||(t=wx&&wx.getSystemInfoSync());var l=!r&&t,n=l&&-1<t.model.indexOf("iPhone X"),i={isBrowser:r,isMiniProgram:l,isMiniProgramIsIPhoneX:n};function d(e){return Object.prototype.toString.call(e).slice(8,-1)}function s(e){var t=e.vm,n=e.to,i=e.replace,o=e.success,s=e.fail,c=e.complete;if(n){if(r)"string"==typeof n&&0===n.indexOf("//")?(n=-1<n.indexOf(".")?n:n.substring(1),i?window.location.replace(n):window.location.href=n):"string"==typeof n&&0===n.indexOf("/")||"object"==typeof n?i?t.$router.replace(n):t.$router.push(n):i?window.location.replace(n):window.location.href=n;else if(l)if("string"==typeof n&&0===n.indexOf("tel:"))wx.makePhoneCall({phoneNumber:n.replace("tel:")});else{var a=function(e){var t,n="";if("String"===d(e)?t=e:"Object"===d(e)&&e.path&&(t=e.path),"Object"===d(e)&&"Object"===d(e.query)&&0<Object.keys(e.query).length){var i=[];for(var o in e.query)i.push(o+"="+e.query[o]);n="?"+i.join("&")}return""+t+n}(n);o=o||function(){},s=s||function(){},c=c||function(){},i?wx.redirectTo({url:a,success:o,fail:s,complete:c}):wx.navigateTo({url:a,success:o,fail:s,complete:c})}}else t.$emit("click")}var c={name:"c-btn",props:{type:{type:String,default:""},o:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},suspend:{type:Boolean,default:!1},small:{type:Boolean,default:!1},to:{type:[String,Object],default:null},cover:{type:[Boolean,Number,String],default:!0},icon:{type:Boolean,default:!1},text:{type:String,default:""}},data:function(){return{div:null,device:i}},mounted:function(){!1!==this.cover&&this.suspend&&i.isBrowser&&0===document.querySelectorAll(".c-btn__suspend__cover").length&&(this.div=document.createElement("div"),this.div.className="c-btn__suspend__cover","Number"===d(this.cover)?this.div.style.height=this.cover+"px":"String"===d(this.cover)&&(this.div.style.height=this.cover),document.body.appendChild(this.div))},onReady:function(){!1!==this.cover&&this.suspend&&this.device.isMiniProgram},methods:{handleClick:function(){this.disabled||s({vm:this,to:this.to})}},beforeDestroy:function(){this.suspend&&this.cover&&this.div&&this.div.remove()}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"c-btn",class:[e.type?"c-btn__"+e.type:"",{"c-btn__o":e.o,"c-btn__disabled":e.disabled,"c-btn__suspend":e.suspend,"c-btn__small":e.small,"c-btn__icon":e.icon,"c-btn__is-miniprogram":e.device.isMiniProgram,"c-btn__is-miniprogram-is-iphonex":e.device.isMiniProgramIsIPhoneX}],attrs:{type:"type"},on:{click:e.handleClick}},[n("span",{staticClass:"c-btn__text"},[e._t("default",[e._v(e._s(e.text))])],2)])};a._withStripped=!0;var u,p,h,f,_,v=(h=void 0,f=!(u={render:a,staticRenderFns:[]}),(_=("function"==typeof(p=c)?p.options:p)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/btn/btn.vue",_.render||(_.render=u.render,_.staticRenderFns=u.staticRenderFns,_._compiled=!0,f&&(_.functional=!0)),_._scopeId=h,_),m={name:"cFlex",props:{gutter:{type:Number,default:0},to:{type:[String,Object],default:null}},methods:{handleClick:function(){s({vm:this,to:this.to})}}},y=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"c-flex",on:{click:this.handleClick}},[this._t("default")],2)};y._withStripped=!0;var b,g,k,C,x,w=(k=void 0,C=!(b={render:y,staticRenderFns:[]}),(x=("function"==typeof(g=m)?g.options:g)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/flex/flex.vue",x.render||(x.render=b.render,x.staticRenderFns=b.staticRenderFns,x._compiled=!0,C&&(x.functional=!0)),x._scopeId=k,x),S={name:"cFlexItem",props:{flex:{type:Number,default:1},to:{type:[String,Object],default:null}},methods:{handleClick:function(){s({vm:this,to:this.to})}},computed:{gutter:{get:function(){return this.$parent.gutter||0}}}},$=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"c-flex-item",style:{flex:e.flex,margin:"0 "+e.gutter/2+"px"},on:{click:e.handleClick}},[e._t("default")],2)};$._withStripped=!0;var F,R,B,I,z,O=(B=void 0,I=!(F={render:$,staticRenderFns:[]}),(z=("function"==typeof(R=S)?R.options:R)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/flex/flex-item.vue",z.render||(z.render=F.render,z.staticRenderFns=F.staticRenderFns,z._compiled=!0,I&&(z.functional=!0)),z._scopeId=B,z),E={name:"cFt"},U=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"c-ft"},[this._t("default")],2)};U._withStripped=!0;var T,N,j,P,A,D=(j=void 0,P=!(T={render:U,staticRenderFns:[]}),(A=("function"==typeof(N=E)?N.options:N)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/ft/ft.vue",A.render||(A.render=T.render,A.staticRenderFns=T.staticRenderFns,A._compiled=!0,P&&(A.functional=!0)),A._scopeId=j,A),q={name:"cFtItem",props:{width:{type:Number,default:1},to:{type:[String,Object],default:null}},methods:{handleClick:function(){s({vm:this,to:this.to})}}},K=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"c-ft-item",style:{width:100*e.width+"%"},on:{click:e.handleClick}},[e._t("default")],2)};K._withStripped=!0;var M,L,H,Y,X,V=(H=void 0,Y=!(M={render:K,staticRenderFns:[]}),(X=("function"==typeof(L=q)?L.options:L)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/ft/ft-item.vue",X.render||(X.render=M.render,X.staticRenderFns=M.staticRenderFns,X._compiled=!0,Y&&(X.functional=!0)),X._scopeId=H,X),G={name:"cHeader",data:function(){return{div:null,defaultTitle:""}},props:{autoTitle:{type:Boolean,default:!0},type:{type:String,default:""},left:{type:Object,default:function(){}},title:{type:String,default:null},right:{type:Object,default:function(){}},noborderBottom:{type:Boolean,default:!1},suspend:{type:Boolean,default:!1},cover:{type:[Boolean,Number,String],default:!0}},methods:{leftClick:function(){this._left.to?s({vm:this,to:this._left.to}):"function"==typeof this._left.click?this._left.click():this._left.back&&this.$router.go(-1)},rightClick:function(){this._right.to?s({vm:this,to:this._right.to}):"function"==typeof this._right.click&&this._right.click()},closeClick:function(){"function"==typeof this._left.close&&this._left.close()}},computed:{_left:{get:function(){return Object.assign({text:null,to:null,color:null,back:!1,close:null,click:null},this.left)}},_right:{get:function(){return Object.assign({text:null,to:null,color:null,click:function(){}},this.right)}}},created:function(){var e=this;this.autoTitle&&this.$nextTick(function(){e.defaultTitle=document.title})},mounted:function(){!1!==this.cover&&this.suspend&&i.isBrowser&&0===document.querySelectorAll(".c-header__suspend__cover").length&&(this.div=document.createElement("div"),this.div.className="c-header__suspend__cover","Number"===d(this.cover)?this.div.style.height=this.cover+"px":"String"===d(this.cover)&&(this.div.style.height=this.cover),document.body.insertBefore(this.div,document.body.firstChild))},beforeDestroy:function(){this.suspend&&this.cover&&this.div&&this.div.remove()}},J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-header",class:[e.type?"c-header__"+e.type:"",{"c-header__suspend":e.suspend,"c-header__noborder-bottom":e.noborderBottom}]},[e.$slots.left?n("span",{staticClass:"c-header__left"},[e._t("left")],2):e._left.text||e._left.back?n("span",{staticClass:"c-header__left",class:{"c-header__back":e._left.back},style:{color:e._left.color},on:{click:e.leftClick}},[e._v("\n    "+e._s(e._left.close?"":e._left.text)+"\n  ")]):e._e(),e._v(" "),e._left.close?n("span",{staticClass:"c-header__close",on:{click:e.closeClick}},[n("i")]):e._e(),e._v(" "),e.$slots.title?n("h1",[e._t("title")],2):e.title||e.defaultTitle?n("h1",[e._v("\n    "+e._s(void 0===e.title||null===e.title?e.defaultTitle:e.title)+"\n  ")]):e._e(),e._v(" "),e.$slots.right?n("span",{staticClass:"c-header__right"},[e._t("right")],2):e._right.text?n("span",{staticClass:"c-header__right",style:{color:e._right.color},on:{click:e.rightClick}},[e._v("\n    "+e._s(e._right.text)+"\n  ")]):e._e()])};J._withStripped=!0;var Q,W,Z,ee,te,ne=(Z=void 0,ee=!(Q={render:J,staticRenderFns:[]}),(te=("function"==typeof(W=G)?W.options:W)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/header/header.vue",te.render||(te.render=Q.render,te.staticRenderFns=Q.staticRenderFns,te._compiled=!0,ee&&(te.functional=!0)),te._scopeId=Z,te),ie={name:"cIcon",props:{name:{type:String,default:"",required:!0},type:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},size:{type:String,default:""},borderRadius:{type:String},to:{type:[String,Object],default:null}},methods:{handleClick:function(){s({vm:this,to:this.to})}}},oe=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{staticClass:"c-icon",class:["icon-"+e.name,e.type?"c-icon__"+e.type:"",{"c-icon__has-background":e.backgroundColor}],style:{width:e.size,height:e.size,fontSize:e.size,backgroundColor:e.backgroundColor,color:e.color,borderRadius:e.borderRadius?e.borderRadius:"3px"},on:{click:e.handleClick}})};oe._withStripped=!0;var se,ce,ae,re,le,de=(ae=void 0,re=!(se={render:oe,staticRenderFns:[]}),(le=("function"==typeof(ce=ie)?ce.options:ce)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/icon/icon.vue",le.render||(le.render=se.render,le.staticRenderFns=se.staticRenderFns,le._compiled=!0,re&&(le.functional=!0)),le._scopeId=ae,le),ue={name:"cInputGroup",props:{title:{type:String,default:null},type:{type:String,default:null},noborder:{type:Boolean,default:!1},noborderTop:{type:Boolean,default:!1},noborderBottom:{type:Boolean,default:!1}}},pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-input-group"},[e.title?n("c-text",{staticClass:"c-input-group__title",attrs:{type:e.type,block:""}},[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"c-input-group__content",class:{noborder:e.noborder,"noborder-top":e.noborderTop,"noborder-bottom":e.noborderBottom}},[e._t("default")],2)],1)};pe._withStripped=!0;var he,fe,_e,ve,me,ye=(_e=void 0,ve=!(he={render:pe,staticRenderFns:[]}),(me=("function"==typeof(fe=ue)?fe.options:fe)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-group.vue",me.render||(me.render=he.render,me.staticRenderFns=he.staticRenderFns,me._compiled=!0,ve&&(me.functional=!0)),me._scopeId=_e,me),be={name:"cInput",props:{addon:{type:Boolean,default:!1},useDiv:{type:Boolean,default:!1},next:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},to:{type:[String,Object],default:null},noborderTop:{type:Boolean,default:!1}},methods:{handleClick:function(){s({vm:this,to:this.to})}}},ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.useDiv?n("div",{staticClass:"c-input",class:[{"c-input__addon":e.addon,"c-input__next":e.next,"c-input__icon":e.icon,"c-input__checked":e.checked,"noborder-top":e.noborderTop}],on:{touchstart:function(){},click:e.handleClick}},[e._t("default")],2):n("label",{staticClass:"c-input",class:[{"c-input__addon":e.addon,"c-input__next":e.next,"c-input__icon":e.icon,"c-input__checked":e.checked,"noborder-top":e.noborderTop}],on:{touchstart:function(){},click:e.handleClick}},[e._t("default")],2)};ge._withStripped=!0;var ke,Ce,xe,we,Se,$e=(xe=void 0,we=!(ke={render:ge,staticRenderFns:[]}),(Se=("function"==typeof(Ce=be)?Ce.options:Ce)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input.vue",Se.render||(Se.render=ke.render,Se.staticRenderFns=ke.staticRenderFns,Se._compiled=!0,we&&(Se.functional=!0)),Se._scopeId=xe,Se),Fe={name:"cInputHead",methods:{handleClick:function(){this.$emit("click")}}},Re=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"c-input-head",on:{click:this.handleClick}},[this._t("default")],2)};Re._withStripped=!0;var Be,Ie,ze,Oe,Ee,Ue=(ze=void 0,Oe=!(Be={render:Re,staticRenderFns:[]}),(Ee=("function"==typeof(Ie=Fe)?Ie.options:Ie)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-head.vue",Ee.render||(Ee.render=Be.render,Ee.staticRenderFns=Be.staticRenderFns,Ee._compiled=!0,Oe&&(Ee.functional=!0)),Ee._scopeId=ze,Ee),Te={name:"cInputBody",methods:{handleClick:function(){this.$emit("click")}}},Ne=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"c-input-body",on:{click:this.handleClick}},[this._t("default")],2)};Ne._withStripped=!0;var je,Pe,Ae,De,qe,Ke=(Ae=void 0,De=!(je={render:Ne,staticRenderFns:[]}),(qe=("function"==typeof(Pe=Te)?Pe.options:Pe)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-body.vue",qe.render||(qe.render=je.render,qe.staticRenderFns=je.staticRenderFns,qe._compiled=!0,De&&(qe.functional=!0)),qe._scopeId=Ae,qe),Me={name:"cInputUpload",props:{title:{type:String,default:null},allowUpload:{type:Boolean,default:!0},showUploadInput:{type:Boolean,default:!0},amount:{type:String,default:null},noborderTop:{type:Boolean,default:!1},allowDelete:{type:Boolean,default:!0},accept:{type:String,default:"image/*"}},methods:{handleClick:function(){this.$emit("choose-image")},fileChange:function(e){this.$emit("change",e)}}},Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-input-upload",class:[{"noborder-top":e.noborderTop,"c-input-upload__allow-delete":e.allowDelete}]},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"c-input-upload__title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.amount,expression:"amount"}],staticClass:"c-input-upload__amount"},[e._v(e._s(e.amount))]),e._v(" "),n("div",{staticClass:"c-input-upload__files"},[e._t("default"),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.allowUpload,expression:"allowUpload"}],staticClass:"c-input-upload__btn",on:{click:e.handleClick}},[n("input",{directives:[{name:"show",rawName:"v-show",value:e.showUploadInput,expression:"showUploadInput"}],attrs:{type:"file",accept:e.accept},on:{change:e.fileChange}})])],2)])};Le._withStripped=!0;var He,Ye,Xe,Ve,Ge,Je=(Xe=void 0,Ve=!(He={render:Le,staticRenderFns:[]}),(Ge=("function"==typeof(Ye=Me)?Ye.options:Ye)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-upload/upload.vue",Ge.render||(Ge.render=He.render,Ge.staticRenderFns=He.staticRenderFns,Ge._compiled=!0,Ve&&(Ge.functional=!0)),Ge._scopeId=Xe,Ge),Qe={name:"cInputUploadFile",props:{src:{type:String,default:""}},methods:{handleClick:function(){this.$emit("click")},handleDeleteClick:function(){this.$emit("delete")}}},We=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.src?n("div",{staticClass:"c-input-upload-file",on:{click:t.handleClick}},[n("img",{attrs:{src:t.src}}),t._v(" "),n("i",{on:{click:function(e){return e.stopPropagation(),t.handleDeleteClick(e)}}})]):t._e()};We._withStripped=!0;var Ze,et,tt,nt,it,ot=(tt=void 0,nt=!(Ze={render:We,staticRenderFns:[]}),(it=("function"==typeof(et=Qe)?et.options:et)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-upload/upload-file.vue",it.render||(it.render=Ze.render,it.staticRenderFns=Ze.staticRenderFns,it._compiled=!0,nt&&(it.functional=!0)),it._scopeId=tt,it),st={name:"cSwitch",props:{value:{type:Boolean,default:!1},type:{type:String,default:""},disabled:{type:Boolean,default:!1},beforeChange:Function},methods:{onClick:function(){var e=this;if(!this.disabled){var t=!this.value;this.beforeChange?this.beforeChange(function(){e.$emit("input",t),e.$emit("change",t)}):(this.$emit("input",t),this.$emit("change",t))}}},computed:{_value:{get:function(){return this.value}}}},ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-switch",class:[e.type?"c-switch__"+e.type:"",{"c-switch__disabled":e.disabled,"c-switch__checked":e._value}],on:{click:e.onClick}},[n("span",{staticClass:"c-switch__core"})])};ct._withStripped=!0;var at,rt,lt,dt,ut,pt=(lt=void 0,dt=!(at={render:ct,staticRenderFns:[]}),(ut=("function"==typeof(rt=st)?rt.options:rt)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/switch/switch.vue",ut.render||(ut.render=at.render,ut.staticRenderFns=at.staticRenderFns,ut._compiled=!0,dt&&(ut.functional=!0)),ut._scopeId=lt,ut),ht={name:"cTab",props:{type:{type:String,default:""},suspend:{type:Boolean,default:!1},cover:{type:[Boolean,Number,String],default:!0}},mounted:function(){!1!==this.cover&&this.suspend&&i.isBrowser&&0===document.querySelectorAll(".c-tab__suspend__cover").length&&(this.div=document.createElement("div"),this.div.className="c-tab__suspend__cover","Number"===d(this.cover)?this.div.style.height=this.cover+"px":"String"===d(this.cover)&&(this.div.style.height=this.cover),document.body.insertBefore(this.div,document.body.firstChild))},beforeDestroy:function(){this.suspend&&this.cover&&this.div&&this.div.remove()}},ft=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"c-tab",class:[e.type?"c-tab__"+e.type:"",{"c-tab__suspend":e.suspend}]},[e._t("default")],2)};ft._withStripped=!0;var _t,vt,mt,yt,bt,gt=(mt=void 0,yt=!(_t={render:ft,staticRenderFns:[]}),(bt=("function"==typeof(vt=ht)?vt.options:vt)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/tab/tab.vue",bt.render||(bt.render=_t.render,bt.staticRenderFns=_t.staticRenderFns,bt._compiled=!0,yt&&(bt.functional=!0)),bt._scopeId=mt,bt),kt={name:"cTabItem",props:{current:{type:Boolean,default:!1},to:{type:[String,Object],default:null}},methods:{handleClick:function(){s({vm:this,to:this.to,replace:!0})}}},Ct=function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{staticClass:"c-tab-item",class:{"c-tab__current":e.current},on:{click:e.handleClick}},[e._t("default")],2)};Ct._withStripped=!0;var xt,wt,St,$t,Ft,Rt=(St=void 0,$t=!(xt={render:Ct,staticRenderFns:[]}),(Ft=("function"==typeof(wt=kt)?wt.options:wt)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/tab/tab-item.vue",Ft.render||(Ft.render=xt.render,Ft.staticRenderFns=xt.staticRenderFns,Ft._compiled=!0,$t&&(Ft.functional=!0)),Ft._scopeId=St,Ft),Bt={name:"cTabbar",props:{type:{type:String,default:""},cover:{type:[Boolean,Number,String],default:!0}},data:function(){return{div:null}},mounted:function(){!1!==this.cover&&0===document.querySelectorAll(".c-tabbar__cover").length&&(this.div=document.createElement("div"),this.div.className="c-tabbar__cover","Number"===d(this.cover)?this.div.style.height=this.cover+"px":"String"===d(this.cover)&&(this.div.style.height=this.cover),document.body.appendChild(this.div))},beforeDestroy:function(){this.div&&this.div.remove()}},It=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"c-tabbar",class:[e.type?"c-tabbar__"+e.type:""]},[e._t("default")],2)};It._withStripped=!0;var zt,Ot,Et,Ut,Tt,Nt=(Et=void 0,Ut=!(zt={render:It,staticRenderFns:[]}),(Tt=("function"==typeof(Ot=Bt)?Ot.options:Ot)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/tabbar/tabbar.vue",Tt.render||(Tt.render=zt.render,Tt.staticRenderFns=zt.staticRenderFns,Tt._compiled=!0,Ut&&(Tt.functional=!0)),Tt._scopeId=Et,Tt),jt={name:"cTabbarItem",props:{to:{type:[String,Object],default:null},current:{type:Boolean,default:!1},icon:{type:String,default:null},text:{type:String,default:null},badge:{type:Number,default:null}},methods:{handleClick:function(){s({vm:this,to:this.to})}}},Pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"c-tabbar-item",class:{"c-tabbar__current":e.current},on:{click:e.handleClick}},[e._t("default",[n("c-icon",{directives:[{name:"show",rawName:"v-show",value:e.icon,expression:"icon"}],attrs:{name:e.icon}}),e._v(" "),n("c-text",{directives:[{name:"show",rawName:"v-show",value:e.text,expression:"text"}]},[e._v(e._s(e.text))])]),e._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:e.badge,expression:"badge"}]},[e._v(e._s(e.badge))])],2)};Pt._withStripped=!0;var At,Dt,qt,Kt,Mt,Lt=(qt=void 0,Kt=!(At={render:Pt,staticRenderFns:[]}),(Mt=("function"==typeof(Dt=jt)?Dt.options:Dt)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/tabbar/tabbar-item.vue",Mt.render||(Mt.render=At.render,Mt.staticRenderFns=At.staticRenderFns,Mt._compiled=!0,Kt&&(Mt.functional=!0)),Mt._scopeId=qt,Mt),Ht={name:"cText",props:{text:{type:String,default:""},type:{type:String,default:""},light:{type:Boolean,default:!1},fontFamily:{type:String,default:""},to:{type:[String,Object],default:null},block:{type:Boolean,default:!1},placeholder:{type:String,default:null},cursor:{type:Boolean,default:!1},fontSize:{type:[Number,String],default:null},align:{type:String,default:null},disabled:{type:Boolean,default:!1}},methods:{handleClick:function(){this.disabled||s({vm:this,to:this.to})}},computed:{_fontSize:function(){return this.fontSize?isNaN(this.fontSize)?this.fontSize:this.fontSize+"px":null}}},Yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"c-text",class:[e.type?"c-text__"+e.type:"",e.align?"c-text__"+e.align:"",{"c-text__light":e.light,"c-text__block":e.block,"c-text__cursor":e.cursor,"c-text__empty":e.text||null===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)||void 0===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)||""===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text),"c-text__placeholder":void 0!==e.placeholder&&null!==e.placeholder&&(e.text||null===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)||void 0===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)||""===(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text))}],style:{fontFamily:e.fontFamily,fontSize:e._fontSize},on:{click:e.handleClick}},[void 0===e.placeholder||null===e.placeholder||!e.text&&null!==(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)&&void 0!==(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)&&""!==(e.$slots.default&&e.$slots.default[0]&&e.$slots.default[0].text)?n("span",{staticClass:"c-text__content"},[e._t("default",[e._v(e._s(e.text))])],2):[e._v("\n    "+e._s(e.placeholder)+"\n  ")]],2)};Yt._withStripped=!0;var Xt,Vt,Gt,Jt,Qt,Wt=(Gt=void 0,Jt=!(Xt={render:Yt,staticRenderFns:[]}),(Qt=("function"==typeof(Vt=Ht)?Vt.options:Vt)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/text/text.vue",Qt.render||(Qt.render=Xt.render,Qt.staticRenderFns=Xt.staticRenderFns,Qt._compiled=!0,Jt&&(Qt.functional=!0)),Qt._scopeId=Gt,Qt),Zt={name:"cActionsheet",props:{value:{type:Boolean,default:!1},title:{type:String},description:{type:String},actions:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"Cancel"},visible:{type:Boolean,default:!1}},methods:{actionClick:function(e){e.click&&e.click(),this._value=!1},cancelClick:function(){this._value=!1}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},en=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"c-actionsheet",class:{"c-actionsheet__visible":n.value,"c-actionsheet__has-title":n.title||n.description,"c-actionsheet__actions-empty":Array.isArray(n.actions)&&0===n.actions.length},on:{click:n.cancelClick}},[i("div",{staticClass:"c-actionsheet__content"},[i("div",{staticClass:"c-actionsheet__header",on:{click:function(e){e.stopPropagation()}}},[n.title?i("h5",{staticClass:"c-actionsheet__title"},[n._v("\n        "+n._s(n.title)+"\n      ")]):n._e(),n._v(" "),n.description?i("p",{staticClass:"c-actionsheet__description"},[n._v("\n        "+n._s(n.description)+"\n      ")]):n._e()]),n._v(" "),i("div",{staticClass:"c-actionsheet__actions"},[i("ul",n._l(n.actions,function(t,e){return i("li",{key:e,style:{color:t.color},on:{click:function(e){e.stopPropagation(),n.actionClick(t)}}},[n._v("\n          "+n._s(t.text)+"\n        ")])}))]),n._v(" "),i("div",{staticClass:"c-actionsheet__cancel",on:{click:function(e){return e.stopPropagation(),n.cancelClick(e)}}},[n._v("\n      "+n._s(n.cancelText)+"\n    ")])])])};en._withStripped=!0;var tn,nn,on,sn,cn,an=(on=void 0,sn=!(tn={render:en,staticRenderFns:[]}),(cn=("function"==typeof(nn=Zt)?nn.options:nn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/actionsheet/actionsheet.vue",cn.render||(cn.render=tn.render,cn.staticRenderFns=tn.staticRenderFns,cn._compiled=!0,sn&&(cn.functional=!0)),cn._scopeId=on,cn),rn={name:"cSidebar",props:{visible:{type:Boolean,default:!1}}},ln=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-sidebar",class:[{"c-sidebar__visible":e.visible}]},[e._t("head"),e._v(" "),n("div",{staticClass:"c-sidebar__body"},[e._t("body")],2)],2)};ln._withStripped=!0;var dn,un,pn,hn,fn,_n=(pn=void 0,hn=!(dn={render:ln,staticRenderFns:[]}),(fn=("function"==typeof(un=rn)?un.options:un)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/sidebar/sidebar.vue",fn.render||(fn.render=dn.render,fn.staticRenderFns=dn.staticRenderFns,fn._compiled=!0,hn&&(fn.functional=!0)),fn._scopeId=pn,fn),vn={name:"cSearch",props:{value:{type:String,default:""},placeholder:{type:String,default:"Search"},autofocus:{type:Boolean,default:!1}},mounted:function(){this.autofocus&&this.$refs.search.focus()},methods:{inputKeyup:function(e){"Enter"===e.key&&this.$emit("keyup-enter",this._value)},deleteClick:function(){this._value="",this.$emit("delete")}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},mn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"c-search",attrs:{action:"",onsubmit:"return false;"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t._value,expression:"_value"}],ref:"search",staticClass:"c-search__input",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t._value},on:{keyup:t.inputKeyup,input:function(e){e.target.composing||(t._value=e.target.value)}}}),t._v(" "),t._value?n("i",{staticClass:"c-search__cancel-button",on:{click:t.deleteClick}},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"#bbb",d:"M14.18 13.008l-3.008-3.008 3.008-3.008-1.172-1.172-3.008 3.008-3.008-3.008-1.172 1.172 3.008 3.008-3.008 3.008 1.172 1.172 3.008-3.008 3.008 3.008zM10 1.68c4.609 0 8.32 3.711 8.32 8.32s-3.711 8.32-8.32 8.32-8.32-3.711-8.32-8.32 3.711-8.32 8.32-8.32z"}})])]):t._e()])};mn._withStripped=!0;var yn,bn,gn,kn,Cn,xn=(gn=void 0,kn=!(yn={render:mn,staticRenderFns:[]}),(Cn=("function"==typeof(bn=vn)?bn.options:bn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/search/search.vue",Cn.render||(Cn.render=yn.render,Cn.staticRenderFns=yn.staticRenderFns,Cn._compiled=!0,kn&&(Cn.functional=!0)),Cn._scopeId=gn,Cn),wn={name:"c-keyboard-key",props:{text:[String,Number]},data:function(){return{active:!1}},methods:{handleClick:function(){""!==this.text&&(this.active=!0,this.$emit("click",this.text))},handleBlur:function(){this.active=!1}}},Sn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-keyboard__key",class:{"c-keyboard__key-active":t.active,"c-keyboard__key-empty":""===t.text},on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClick(e)},touchmove:t.handleBlur,touchend:t.handleBlur,touchcancel:t.handleBlur,mousedown:t.handleClick,mouseup:t.handleBlur}},[t._v("\n  "+t._s(t.text)+"\n  "),n("i",{staticClass:"c-keyboard__border"})])};Sn._withStripped=!0;var $n,Fn,Rn,Bn,In,zn=(Rn=void 0,Bn=!($n={render:Sn,staticRenderFns:[]}),(In=("function"==typeof(Fn=wn)?Fn.options:Fn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/keyboard/keyboard-key.vue",In.render||(In.render=$n.render,In.staticRenderFns=$n.staticRenderFns,In._compiled=!0,Bn&&(In.functional=!0)),In._scopeId=Rn,In),On={name:"cKeyboard",mounted:function(){void 0===window.ontouchstart?document.addEventListener("click",this.hideKeyboard,!0):document.addEventListener("touchstart",this.hideKeyboard,!0)},props:{value:{type:Boolean,default:!1},type:{type:String,default:"digit"},description:{type:String,default:null},doneText:{type:String,default:null},allowHide:{type:Boolean,default:!0}},methods:{handleClick:function(e){this.$emit("click",e)},handleDelete:function(){this.$emit("delete")},doneClick:function(){this.allowHide&&(this._value=!1,this.$emit("hide")),this.$emit("done")},hideKeyboard:function(e){this.allowHide&&!1!==this._value&&-1===e.target.className.indexOf("c-keyboard")&&(this._value=!1,this.$emit("hide"))}},computed:{_typeText:{get:function(){return"number"===this.type?"":"idcard"===this.type?"X":"."}},_value:{get:function(){return!this.allowHide||this.value},set:function(e){this.$emit("input",e)}}},components:{cKeyboardKey:zn},beforeDestroy:function(){void 0===window.ontouchstart?document.removeEventListener("click",this.hideKeyboard,!0):document.removeEventListener("touchstart",this.hideKeyboard,!0)}},En=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"c-keyboard-transition"}},[e._value?n("div",{staticClass:"c-keyboard"},[e.description||e.doneText?n("div",{staticClass:"c-keyboard__done"},[n("div",{staticClass:"c-keyboard__description"},[e._v(e._s(e.description))]),e._v(" "),n("div",{staticClass:"c-keyboard__done-btn",on:{click:e.doneClick}},[e._v(e._s(e.doneText))])]):e._e(),e._v(" "),n("div",{staticClass:"c-keyboard__key-group"},[n("c-keyboard-key",{attrs:{text:"1"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"2"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"3"},on:{click:e.handleClick}})],1),e._v(" "),n("div",{staticClass:"c-keyboard__key-group"},[n("c-keyboard-key",{attrs:{text:"4"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"5"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"6"},on:{click:e.handleClick}})],1),e._v(" "),n("div",{staticClass:"c-keyboard__key-group"},[n("c-keyboard-key",{attrs:{text:"7"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"8"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"9"},on:{click:e.handleClick}})],1),e._v(" "),n("div",{staticClass:"c-keyboard__key-group"},[n("c-keyboard-key",{staticClass:"c-keyboard__key-gray",attrs:{text:e._typeText},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{attrs:{text:"0"},on:{click:e.handleClick}}),e._v(" "),n("c-keyboard-key",{staticClass:"c-keyboard__key-gray c-keyboard__key-delete",on:{click:e.handleDelete}})],1)]):e._e()])};En._withStripped=!0;var Un,Tn,Nn,jn,Pn,An=(Nn=void 0,jn=!(Un={render:En,staticRenderFns:[]}),(Pn=("function"==typeof(Tn=On)?Tn.options:Tn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/keyboard/keyboard.vue",Pn.render||(Pn.render=Un.render,Pn.staticRenderFns=Un.staticRenderFns,Pn._compiled=!0,jn&&(Pn.functional=!0)),Pn._scopeId=Nn,Pn),Dn={name:"cToast",props:{visible:{type:Boolean,default:!1},texts:{type:Array,default:function(){return[]}},cb:{type:Function,default:function(){}}},methods:{handleClick:function(){this.cb()}}},qn=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:n.visible,expression:"visible"}],staticClass:"c-toast",on:{click:n.handleClick}},[i("div",{staticClass:"c-toast__content"},n._l(n.texts,function(e,t){return i("p",{key:t},[n._v(n._s(e))])}))])};qn._withStripped=!0;var Kn,Mn,Ln,Hn,Yn,Xn=(Ln=void 0,Hn=!(Kn={render:qn,staticRenderFns:[]}),(Yn=("function"==typeof(Mn=Dn)?Mn.options:Mn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/toast/toast.vue",Yn.render||(Yn.render=Kn.render,Yn.staticRenderFns=Kn.staticRenderFns,Yn._compiled=!0,Hn&&(Yn.functional=!0)),Yn._scopeId=Ln,Yn);function Vn(n){void 0===n&&(n={}),"string"==typeof n||"number"==typeof n?n={texts:[n]}:Array.isArray(n)?n={texts:n}:"string"!=typeof n.texts&&"number"!=typeof n.texts||(n.texts=[n.texts]),n=Object.assign({texts:[],duration:2e3,cb:function(){}},n);for(var e=new o({data:function(){return{timer:null,pageYOffset:null,visible:!1}},render:function(e){var t=this;return e(Xn,{props:{texts:n.texts,cb:function(){clearTimeout(t.timer),t.hide()},visible:this.visible}})},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1,n.cb()}},mounted:function(){var e=this;this.show(),this.timer=setTimeout(function(){e.hide()},n.duration)}}).$mount(),t=document.querySelectorAll(".c-toast"),i=0;i<t.length;++i)t[i].remove();document.body.appendChild(e.$el)}var Gn={name:"cConfirm",props:{title:{type:String,default:null},text:{type:String,default:null},cancel:{type:Object,default:null},ok:{type:Object,default:null}}},Jn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-confirm",class:{"c-confirm__has-title":e.title}},[n("div",{staticClass:"c-confirm__cell"},[e.title?n("div",{staticClass:"c-confirm__title"},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),n("div",{staticClass:"c-confirm__content"},[e._v("\n      "+e._s(e.text)+"\n    ")]),e._v(" "),n("div",{staticClass:"c-confirm__btn-group"},[n("div",{staticClass:"c-confirm__btn",style:{color:e.ok.color},on:{click:e.ok.click}},[e._v("\n        "+e._s(e.ok.text)+"\n      ")]),e._v(" "),e.cancel.text?n("div",{staticClass:"c-confirm__btn",style:{color:e.cancel.color},on:{click:e.cancel.click}},[e._v("\n        "+e._s(e.cancel.text)+"\n      ")]):e._e()])])])};Jn._withStripped=!0;var Qn,Wn,Zn,ei,ti,ni=(Zn=void 0,ei=!(Qn={render:Jn,staticRenderFns:[]}),(ti=("function"==typeof(Wn=Gn)?Wn.options:Wn)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/confirm/confirm.vue",ti.render||(ti.render=Qn.render,ti.staticRenderFns=Qn.staticRenderFns,ti._compiled=!0,ei&&(ti.functional=!0)),ti._scopeId=Zn,ti);function ii(n){void 0===n&&(n={}),n=Object.assign({title:"",text:"",ok:{text:"OK",color:null,click:function(){}},cancel:{color:null,click:function(){}}},n);var e=new o({render:function(e){var t=this;return e(ni,{data:function(){return{pageYOffset:null}},props:{title:n.title,text:n.text,ok:{text:n.ok.text||"OK",color:n.ok.color,click:function(){t.hide(),n.ok.click&&n.ok.click()}},cancel:{text:n.cancel.text,color:n.cancel.color,click:function(){t.hide(),n.cancel.click&&n.cancel.click()}}}})},methods:{show:function(){this.pageYOffset=window.pageYOffset;var e=document.body;e.style.height="100%",e.style.width="100%",e.style.overflow="hidden",e.style.position="fixed"},hide:function(){this.$el.remove();var e=document.body;e.style.overflow="visible",e.style.position="static",window.scroll(0,this.pageYOffset)}},mounted:function(){this.show()}}).$mount();document.body.appendChild(e.$el)}var oi={name:"cLoading"},si=function(){var e=this.$createElement;this._self._c;return this._m(0)};si._withStripped=!0;var ci,ai,ri,li,di,ui,pi=(ri=void 0,li=!(ci={render:si,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-loading"},[t("i",{staticClass:"c-loading__loading"})])}]}),(di=("function"==typeof(ai=oi)?ai.options:ai)||{}).__file="/Users/zhuning/Chooin/github/c-mobile/packages/components/loading/loading.vue",di.render||(di.render=ci.render,di.staticRenderFns=ci.staticRenderFns,di._compiled=!0,li&&(di.functional=!0)),di._scopeId=ri,di),hi={show:function(){ui=new o({render:function(e){return e(pi)}}).$mount(),document.body.classList.add("c-mobile__is-loading");for(var e=document.querySelectorAll(".c-loading"),t=0;t<e.length;++t)e[t].remove();document.body.appendChild(ui.$el)},hide:function(){document.body.classList.remove("c-mobile__is-loading");for(var e=document.querySelectorAll(".c-loading"),t=0;t<e.length;++t)e[t].remove()}},fi=[v,w,O,D,V,ne,de,ye,$e,Ue,Ke,Je,ot,pt,gt,Rt,Nt,Lt,Wt,an,_n,xn,An],_i=function(t){_i.installed||(_i.installed=!0,fi.map(function(e){t.component(e.name,e)}),t.prototype.$Toast=Vn,t.prototype.$Confirm=ii,t.prototype.$Loading=hi)};"undefined"!=typeof window&&window.Vue&&_i(window.Vue);var vi=Object.assign(fi,{install:_i});e.default=vi,Object.defineProperty(e,"__esModule",{value:!0})});
