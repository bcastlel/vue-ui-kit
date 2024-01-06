(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views/Checkbox"],{"05d2":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component-usage-example"},[a("h3",{staticClass:"component-usage-example__caption"},[e._v(" "+e._s(e.caption)+" ")]),a("div",{staticClass:"component-usage-example__content"},[e._t("default")],2)])},n=[],l=a("2b0e"),s=l["a"].extend({name:"ComponentUsageExample",props:{caption:{type:String,required:!0}}}),o=s,i=(a("4980"),a("2877")),r=Object(i["a"])(o,c,n,!1,null,"6e91f653",null);t["a"]=r.exports},"2ced":function(e,t,a){},"3d23":function(e,t,a){},4980:function(e,t,a){"use strict";a("3d23")},"5dd7":function(e,t,a){"use strict";a("2ced")},"754c":function(e,t,a){"use strict";a("fb02")},"7a67":function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component-page"},[a("div",{staticClass:"head"},[a("div",{staticClass:"container"},[a("div",{staticClass:"head__body"},[a("button",{staticClass:"head__back",attrs:{"aria-label":"Back"},on:{click:function(t){e.$previousRoute.name?e.$router.back():e.$router.push({name:"home"})}}},[a("arrow-left-icon")],1),a("h1",{staticClass:"head__title"},[e._v(" "+e._s(e.title)+" ")])])])]),a("div",{staticClass:"content",class:{"content_enlarged-example-gap":e.enlargedExampleGap}},[a("div",{staticClass:"container"},[a("component-usage-example",{attrs:{caption:"Basic usage"}},[e._t("basicUsage")],2),e._t("default")],2)])])},n=[],l=a("2b0e"),s=a("05d2"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},e.$listeners),[a("path",{attrs:{d:"M20 9v6h-8v4.84L4.16 12 12 4.16V9h8z"}})])},i=[],r=a("2877"),d={},u=Object(r["a"])(d,o,i,!1,null,null,null),h=u.exports,m=l["a"].extend({name:"ComponentPage",components:{ComponentUsageExample:s["a"],ArrowLeftIcon:h},props:{title:{type:String,required:!0},enlargedExampleGap:Boolean}}),p=m,b=(a("754c"),Object(r["a"])(p,c,n,!1,null,"94f071d6",null));t["a"]=b.exports},"7fa8":function(e,t,a){"use strict";a("e031")},e031:function(e,t,a){},f222:function(e,t,a){"use strict";var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},e.$listeners),[a("path",{attrs:{d:"M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"}})])},n=[],l=a("2877"),s={},o=Object(l["a"])(s,c,n,!1,null,null,null);t["a"]=o.exports},f6da:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("component-page",{attrs:{title:"Checkbox","enlarged-example-gap":""},scopedSlots:e._u([{key:"basicUsage",fn:function(){return[a("a-checkbox",{attrs:{label:"Checkbox"},model:{value:e.basicUsageChecked,callback:function(t){e.basicUsageChecked=t},expression:"basicUsageChecked"}})]},proxy:!0}])},[a("component-usage-example",{attrs:{caption:"Model as array"}},[a("p",{staticClass:"model-as-array-text"},[e._v(" Checked: "+e._s(e.modelAsArrayChecked)+" ")]),a("a-checkbox",{attrs:{label:"First",value:"first"},model:{value:e.modelAsArrayChecked,callback:function(t){e.modelAsArrayChecked=t},expression:"modelAsArrayChecked"}}),a("a-checkbox",{attrs:{label:"Second",value:"second"},model:{value:e.modelAsArrayChecked,callback:function(t){e.modelAsArrayChecked=t},expression:"modelAsArrayChecked"}}),a("a-checkbox",{attrs:{label:"Third",value:"third"},model:{value:e.modelAsArrayChecked,callback:function(t){e.modelAsArrayChecked=t},expression:"modelAsArrayChecked"}})],1),a("component-usage-example",{attrs:{caption:"Label slot"}},[a("a-checkbox",{model:{value:e.labelSlotChecked,callback:function(t){e.labelSlotChecked=t},expression:"labelSlotChecked"}},[e._v(" Check"),a("span",{staticClass:"label-slot-highlighter"},[e._v("box")])])],1),a("component-usage-example",{attrs:{caption:"Indeterminate state"}},[a("a-checkbox",{attrs:{label:"Checkbox",indeterminate:e.indeterminateStateIndeterminate},on:{"update:indeterminate":function(t){e.indeterminateStateIndeterminate=t}},model:{value:e.indeterminateStateChecked,callback:function(t){e.indeterminateStateChecked=t},expression:"indeterminateStateChecked"}})],1),a("component-usage-example",{attrs:{caption:"Disabled option"}},[a("a-checkbox",{attrs:{label:"Checked",checked:"",disabled:""}}),a("a-checkbox",{attrs:{label:"Indeterminate",disabled:"",indeterminate:""}}),a("a-checkbox",{attrs:{label:"Unchecked",disabled:""}})],1)],1)},n=[],l=a("2b0e"),s=a("7a67"),o=a("05d2"),i=function(){var e,t=this,a=t.$createElement,c=t._self._c||a;return c("label",{staticClass:"checkbox",class:{checkbox_disabled:t.disabled,checkbox_indeterminate:t.localIndeterminate}},[c("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.localChecked,expression:"localChecked"}],staticClass:"checkbox__input",attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:t.value,checked:Array.isArray(t.localChecked)?t._i(t.localChecked,t.value)>-1:t.localChecked},on:{change:function(e){var a=t.localChecked,c=e.target,n=!!c.checked;if(Array.isArray(a)){var l=t.value,s=t._i(a,l);c.checked?s<0&&(t.localChecked=a.concat([l])):s>-1&&(t.localChecked=a.slice(0,s).concat(a.slice(s+1)))}else t.localChecked=n}}},"input",t.$attrs,!1)),c("span",{staticClass:"checkbox__control"},[c("check-icon",{staticClass:"checkbox__control-icon checkbox__control-icon_checked"}),c("minus-icon",{staticClass:"checkbox__control-icon checkbox__control-icon_indeterminate"})],1),(null!==(e=t.$slots.default)&&void 0!==e?e:t.label)?c("span",{staticClass:"checkbox__label"},[t._t("default",(function(){return[t._v(t._s(t.label))]}))],2):t._e()])},r=[],d=a("f222"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},e.$listeners),[a("path",{attrs:{d:"M20 14H4v-4h16v4z"}})])},h=[],m=a("2877"),p={},b=Object(m["a"])(p,u,h,!1,null,null,null),k=b.exports,x=l["a"].extend({name:"ACheckbox",components:{CheckIcon:d["a"],MinusIcon:k},inheritAttrs:!1,model:{prop:"checked",event:"change"},props:{checked:{type:[Boolean,Array],default:!1},value:null,label:{type:String,default:""},disabled:Boolean,indeterminate:Boolean},computed:{localChecked:{get:function(){return this.checked},set:function(e){this.$emit("change",e)}},localIndeterminate:{get:function(){return this.indeterminate},set:function(e){this.$emit("update:indeterminate",e)}}},watch:{localChecked:function(){this.localIndeterminate&&(this.localIndeterminate=!1)}}}),C=x,f=(a("5dd7"),Object(m["a"])(C,i,r,!1,null,"4c9fe06b",null)),_=f.exports,v=l["a"].extend({name:"Checkbox",components:{ComponentPage:s["a"],ComponentUsageExample:o["a"],ACheckbox:_},data:function(){return{basicUsageChecked:!1,modelAsArrayChecked:["first"],labelSlotChecked:!1,indeterminateStateChecked:!1,indeterminateStateIndeterminate:!0}}}),g=v,A=(a("7fa8"),Object(m["a"])(g,c,n,!1,null,"defd9b0a",null));t["default"]=A.exports},fb02:function(e,t,a){}}]);
//# sourceMappingURL=Checkbox.8f3e5225.js.map