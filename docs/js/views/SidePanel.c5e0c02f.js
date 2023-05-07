(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/SidePanel"],{"29bc":function(e,t,n){},"827a":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("component-page",{attrs:{title:"Side panel"},scopedSlots:e._u([{key:"basicUsage",fn:function(){return[n("a-button",{on:{click:function(t){e.basicUsageSidePanelVisible=!0}}},[e._v(" Show side panel ")])]},proxy:!0}])},[n("component-usage-example",{attrs:{caption:"From the left"}},[n("a-button",{on:{click:function(t){e.fromTheLeftSidePanelVisible=!0}}},[e._v(" Show side panel ")])],1),n("component-usage-example",{attrs:{caption:"Hide close button"}},[n("a-button",{on:{click:function(t){e.hideCloseButtonSidePanelVisible=!0}}},[e._v(" Show side panel ")])],1),e.basicUsageSidePanelVisible?n("a-side-panel",{attrs:{title:"Title"},on:{close:function(t){e.basicUsageSidePanelVisible=!1}}},[e._v(" "+e._s(e.loremIpsum)+" ")]):e._e(),e.fromTheLeftSidePanelVisible?n("a-side-panel",{attrs:{title:"Title",left:""},on:{close:function(t){e.fromTheLeftSidePanelVisible=!1}}},[e._v(" "+e._s(e.loremIpsum)+" ")]):e._e(),e.hideCloseButtonSidePanelVisible?n("a-side-panel",{attrs:{title:"Title","hide-close-button":""},on:{close:function(t){e.hideCloseButtonSidePanelVisible=!1}}},[e._v(" "+e._s(e.loremIpsum)+" ")]):e._e()],1)},i=[],a=n("2b0e"),l=n("7a67"),o=n("05d2"),c=n("8086"),u=function(){var e,t=this,n=t.$createElement,s=t._self._c||n;return s("portal",[s("div",t._b({ref:"sidePanel",class:[t.className,t.contentClass,(e={},e["".concat(t.className,"_left")]=t.left,e)],attrs:{tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close.apply(null,arguments)}}},"div",t.scopeAttrs,!1),[s("transition",{attrs:{name:"side-panel__overlay",appear:""},on:{"after-leave":t.emitClose}},[t.visible?s("div",{staticClass:"side-panel__overlay",on:{click:t.close}}):t._e()]),s("transition",{attrs:{name:"side-panel__base",appear:""}},[t.visible?s("div",{staticClass:"side-panel__base"},[s("h3",{staticClass:"side-panel__title"},[t._v(" "+t._s(t.title)+" ")]),s("div",{staticClass:"side-panel__content"},[t._t("default",null,{onClose:t.close})],2),t.hideCloseButton?t._e():s("button",{staticClass:"side-panel__close",attrs:{type:"button"},on:{click:t.close}},[s("close-icon",{staticClass:"side-panel__close-icon"})],1)]):t._e()])],1)])},d=[],r=n("ade3"),p=n("da99"),f=n("bf37"),b=n("c451"),m="side-panel",_=a["a"].extend({name:"ASidePanel",components:{Portal:p["a"],CloseIcon:f["a"]},props:{title:{type:String,required:!0},contentClass:{type:String,default:""},left:Boolean,hideCloseButton:Boolean},data:function(){return{visible:!0}},computed:{className:function(){return m},scopeAttrs:function(){var e,t=null===(e=this.$vnode.context)||void 0===e?void 0:e.$options._scopeId;return t?Object(r["a"])({},t,""):null}},mounted:function(){var e=this;this.$nextTick((function(){return e.focusIn(e.$refs.sidePanel)}))},methods:{close:function(){this.visible=!1},emitClose:function(){var e=this,t=document.getElementsByClassName(this.className),n=t[t.length-2];this.$emit("close"),n&&this.$nextTick((function(){return e.focusIn(n)}))},focusIn:function(e){var t=Object(b["a"])(e);t?t.focus():e.focus()}}}),v=_,h=(n("bd5f"),n("2877")),S=Object(h["a"])(v,u,d,!1,null,"38229ea0",null),C=S.exports,P=n("d70b"),k=a["a"].extend({name:"SidePanel",components:{ComponentPage:l["a"],ComponentUsageExample:o["a"],AButton:c["a"],ASidePanel:C},data:function(){return{basicUsageSidePanelVisible:!1,fromTheLeftSidePanelVisible:!1,hideCloseButtonSidePanelVisible:!1}},computed:{loremIpsum:function(){return P["a"]}}}),g=k,y=Object(h["a"])(g,s,i,!1,null,null,null);t["default"]=y.exports},bd5f:function(e,t,n){"use strict";n("29bc")}}]);
//# sourceMappingURL=SidePanel.c5e0c02f.js.map