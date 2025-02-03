"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[1628],{"./node_modules/@headlessui/react/dist/components/listbox/listbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>It});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function use_computed_i(e,o){let[u,t]=(0,react.useState)(e),r=(0,use_latest_value.Y)(e);return(0,use_iso_morphic_effect.s)((()=>t(r.current)),[r,t,...o]),u}var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");var use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_text_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-text-value.js"),use_tracked_pointer=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),calculate_active_index=__webpack_require__("./node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js");function form_e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):form_e(t,s,i)}var i,n,match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),Be=((n=Be||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=((i=Ne||{})[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i);function z(e,a=n=>n){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,focus_management.wl)(a(e.options.slice()),(t=>t.dataRef.current.domRef.current)),l=n?r.indexOf(n):null;return-1===l&&(l=null),{options:r,activeOptionIndex:l}}let je={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((l=>n(l.dataRef.current.value)));return-1!==r&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},2(e,a){var l;if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=z(e),r=(0,calculate_active_index.X)(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:null!=(l=a.trigger)?l:1}},3:(e,a)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((i=>{var b;return!i.dataRef.current.disabled&&(null==(b=i.dataRef.current.textValue)?void 0:b.startsWith(l))})),u=p?e.options.indexOf(p):-1;return-1===u||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,(l=>[...l,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,a)=>{let n=z(e,(r=>{let l=r.findIndex((t=>t.id===a.id));return-1!==l&&r.splice(l,1),r}));return{...e,...n,activationTrigger:1}},7:(e,a)=>({...e,labelId:a.id})},J=(0,react.createContext)(null);function k(e){let a=(0,react.useContext)(J);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return a}J.displayName="ListboxActionsContext";let q=(0,react.createContext)(null);function w(e){let a=(0,react.useContext)(q);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return a}function Ve(e,a){return(0,match.Y)(a.type,je,e,a)}q.displayName="ListboxDataContext";let Ke=react.Fragment;let qe=render.O5.RenderStrategy|render.O5.Static;let tt=(0,render.FX)((function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,use_sync_refs.P)(a),[g=(R?[]:void 0),x]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,use_event._)((n=>(e||s(n),null==r?void 0:r(n))))]}(n,p,r),[T,o]=(0,react.useReducer)(Ve,{dataRef:(0,react.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=(0,react.useRef)({static:!1,hold:!1}),U=(0,react.useRef)(null),B=(0,react.useRef)(null),W=(0,react.useRef)(null),I=(0,use_event._)("string"==typeof u?(s,c)=>{let O=u;return(null==s?void 0:s[O])===(null==c?void 0:c[O])}:u),A=(0,react.useCallback)((s=>(0,match.Y)(d.mode,{1:()=>g.some((c=>I(c,s))),0:()=>I(g,s)})),[g]),d=(0,react.useMemo)((()=>({...T,value:g,disabled:i,mode:R?1:0,orientation:P,compare:I,isSelected:A,optionsPropsRef:L,labelRef:U,buttonRef:B,optionsRef:W})),[g,i,R,T]);(0,use_iso_morphic_effect.s)((()=>{T.dataRef.current=d}),[d]),(0,use_outside_click.j)([d.buttonRef,d.optionsRef],((s,c)=>{var O;o({type:1}),(0,focus_management.Bm)(c,focus_management.MZ.Loose)||(s.preventDefault(),null==(O=d.buttonRef.current)||O.focus())}),0===d.listboxState);let H=(0,react.useMemo)((()=>({open:0===d.listboxState,disabled:i,value:g})),[d,i,g]),ie=(0,use_event._)((s=>{let c=d.options.find((O=>O.id===s));c&&X(c.dataRef.current.value)})),re=(0,use_event._)((()=>{if(null!==d.activeOptionIndex){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:calculate_active_index.B.Specific,id:c})}})),ae=(0,use_event._)((()=>o({type:0}))),le=(0,use_event._)((()=>o({type:1}))),se=(0,use_event._)(((s,c,O)=>s===calculate_active_index.B.Specific?o({type:2,focus:calculate_active_index.B.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O}))),pe=(0,use_event._)(((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s})))),ue=(0,use_event._)((s=>(o({type:7,id:s}),()=>o({type:7,id:null})))),X=(0,use_event._)((s=>(0,match.Y)(d.mode,{0:()=>null==x?void 0:x(s),1(){let c=d.value.slice(),O=c.findIndex((C=>I(C,s)));return-1===O?c.push(s):c.splice(O,1),null==x?void 0:x(c)}}))),de=(0,use_event._)((s=>o({type:3,value:s}))),ce=(0,use_event._)((()=>o({type:4}))),fe=(0,react.useMemo)((()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce})),[]),Te={ref:S},G=(0,react.useRef)(null),be=(0,use_disposables.L)();return(0,react.useEffect)((()=>{G.current&&void 0!==r&&be.addEventListener(G.current,"reset",(()=>{null==x||x(r)}))}),[G,x]),react.createElement(J.Provider,{value:fe},react.createElement(q.Provider,{value:d},react.createElement(open_closed.El,{value:(0,match.Y)(d.listboxState,{0:open_closed.Uw.Open,1:open_closed.Uw.Closed})},null!=t&&null!=g&&form_e({[t]:g}).map((([s,c],O)=>react.createElement(internal_hidden.j,{features:internal_hidden.O.Hidden,ref:0===O?C=>{var Y;G.current=null!=(Y=null==C?void 0:C.closest("form"))?Y:null}:void 0,...(0,render.oE)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,disabled:i,name:s,value:c})}))),(0,render.XX)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))})),ot=(0,render.FX)((function Xe(e,a){var x;let n=(0,use_id.B)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=w("Listbox.Button"),p=k("Listbox.Button"),u=(0,use_sync_refs.P)(t.buttonRef,a),i=(0,use_disposables.L)(),b=(0,use_event._)((T=>{switch(T.key){case keyboard.D.Space:case keyboard.D.Enter:case keyboard.D.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(calculate_active_index.B.First)}));break;case keyboard.D.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(calculate_active_index.B.Last)}))}})),R=(0,use_event._)((T=>{if(T.key===keyboard.D.Space)T.preventDefault()})),m=(0,use_event._)((T=>{if((0,bugs.l)(T.currentTarget))return T.preventDefault();0===t.listboxState?(p.closeListbox(),i.nextFrame((()=>{var o;return null==(o=t.buttonRef.current)?void 0:o.focus({preventScroll:!0})}))):(T.preventDefault(),p.openListbox())})),P=use_computed_i((()=>{if(t.labelId)return[t.labelId,r].join(" ")}),[t.labelId,r]),S=(0,react.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled,value:t.value})),[t]),g={ref:u,id:r,type:(0,use_resolve_button_type.c)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(x=t.optionsRef.current)?void 0:x.id,"aria-expanded":0===t.listboxState,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return(0,render.XX)({ourProps:g,theirProps:l,slot:S,defaultTag:"button",name:"Listbox.Button"})})),nt=(0,render.FX)((function ze(e,a){let n=(0,use_id.B)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=w("Listbox.Label"),p=k("Listbox.Label"),u=(0,use_sync_refs.P)(t.labelRef,a);(0,use_iso_morphic_effect.s)((()=>p.registerLabel(r)),[r]);let i=(0,use_event._)((()=>{var m;return null==(m=t.buttonRef.current)?void 0:m.focus({preventScroll:!0})})),b=(0,react.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled})),[t]);return(0,render.XX)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:"label",name:"Listbox.Label"})})),it=(0,render.FX)((function Ye(e,a){var T;let n=(0,use_id.B)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=w("Listbox.Options"),p=k("Listbox.Options"),u=(0,use_sync_refs.P)(t.optionsRef,a),i=(0,use_disposables.L)(),b=(0,use_disposables.L)(),R=(0,open_closed.O_)(),m=null!==R?(R&open_closed.Uw.Open)===open_closed.Uw.Open:0===t.listboxState;(0,react.useEffect)((()=>{var L;let o=t.optionsRef.current;o&&0===t.listboxState&&o!==(null==(L=(0,owner.T)(o))?void 0:L.activeElement)&&o.focus({preventScroll:!0})}),[t.listboxState,t.optionsRef]);let P=(0,use_event._)((o=>{switch(b.dispose(),o.key){case keyboard.D.Space:if(""!==t.searchQuery)return o.preventDefault(),o.stopPropagation(),p.search(o.key);case keyboard.D.Enter:if(o.preventDefault(),o.stopPropagation(),null!==t.activeOptionIndex){let{dataRef:L}=t.options[t.activeOptionIndex];p.onChange(L.current.value)}0===t.mode&&(p.closeListbox(),(0,disposables.e)().nextFrame((()=>{var L;return null==(L=t.buttonRef.current)?void 0:L.focus({preventScroll:!0})})));break;case(0,match.Y)(t.orientation,{vertical:keyboard.D.ArrowDown,horizontal:keyboard.D.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.B.Next);case(0,match.Y)(t.orientation,{vertical:keyboard.D.ArrowUp,horizontal:keyboard.D.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.B.Previous);case keyboard.D.Home:case keyboard.D.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.B.First);case keyboard.D.End:case keyboard.D.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.B.Last);case keyboard.D.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame((()=>{var L;return null==(L=t.buttonRef.current)?void 0:L.focus({preventScroll:!0})}));case keyboard.D.Tab:o.preventDefault(),o.stopPropagation();break;default:1===o.key.length&&(p.search(o.key),b.setTimeout((()=>p.clearSearch()),350))}})),S=use_computed_i((()=>{var o;return null==(o=t.buttonRef.current)?void 0:o.id}),[t.buttonRef.current]),g=(0,react.useMemo)((()=>({open:0===t.listboxState})),[t]),x={"aria-activedescendant":null===t.activeOptionIndex||null==(T=t.options[t.activeOptionIndex])?void 0:T.id,"aria-multiselectable":1===t.mode||void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return(0,render.XX)({ourProps:x,theirProps:l,slot:g,defaultTag:"ul",features:qe,visible:m,name:"Listbox.Options"})})),rt=(0,render.FX)((function et(e,a){let n=(0,use_id.B)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=w("Listbox.Option"),i=k("Listbox.Option"),b=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===r,R=u.isSelected(t),m=(0,react.useRef)(null),P=(0,use_text_value.q)(m),S=(0,use_latest_value.Y)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),g=(0,use_sync_refs.P)(a,m);(0,use_iso_morphic_effect.s)((()=>{if(0!==u.listboxState||!b||0===u.activationTrigger)return;let A=(0,disposables.e)();return A.requestAnimationFrame((()=>{var d,H;null==(H=null==(d=m.current)?void 0:d.scrollIntoView)||H.call(d,{block:"nearest"})})),A.dispose}),[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,use_iso_morphic_effect.s)((()=>i.registerOption(r,S)),[S,r]);let x=(0,use_event._)((A=>{if(l)return A.preventDefault();i.onChange(t),0===u.mode&&(i.closeListbox(),(0,disposables.e)().nextFrame((()=>{var d;return null==(d=u.buttonRef.current)?void 0:d.focus({preventScroll:!0})})))})),T=(0,use_event._)((()=>{if(l)return i.goToOption(calculate_active_index.B.Nothing);i.goToOption(calculate_active_index.B.Specific,r)})),o=(0,use_tracked_pointer.J)(),L=(0,use_event._)((A=>o.update(A))),U=(0,use_event._)((A=>{o.wasMoved(A)&&(l||b||i.goToOption(calculate_active_index.B.Specific,r,0))})),B=(0,use_event._)((A=>{o.wasMoved(A)&&(l||b&&i.goToOption(calculate_active_index.B.Nothing))})),W=(0,react.useMemo)((()=>({active:b,selected:R,disabled:l})),[b,R,l]);return(0,render.XX)({ourProps:{id:r,ref:g,role:"option",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,"aria-selected":R,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:U,onMouseMove:U,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:"li",name:"Listbox.Option"})})),It=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt})},"./node_modules/@headlessui/react/dist/components/menu/menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>qe});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_text_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-text-value.js"),use_tracked_pointer=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");var a,r,open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),calculate_active_index=__webpack_require__("./node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),me=((r=me||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),de=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(de||{}),fe=((a=fe||{})[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a);function w(e,u=r=>r){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,s=(0,focus_management.wl)(u(e.items.slice()),(t=>t.dataRef.current.domRef.current)),i=r?s.indexOf(r):null;return-1===i&&(i=null),{items:s,activeItemIndex:i}}let Te={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,u)=>{var i;let r=w(e),s=(0,calculate_active_index.X)(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(i=u.trigger)?i:1}},3:(e,u)=>{let s=""!==e.searchQuery?0:1,i=e.searchQuery+u.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+s).concat(e.items.slice(0,e.activeItemIndex+s)):e.items).find((l=>{var m;return(null==(m=l.dataRef.current.textValue)?void 0:m.startsWith(i))&&!l.dataRef.current.disabled})),a=o?e.items.indexOf(o):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,u)=>{let r=w(e,(s=>[...s,{id:u.id,dataRef:u.dataRef}]));return{...e,...r}},6:(e,u)=>{let r=w(e,(s=>{let i=s.findIndex((t=>t.id===u.id));return-1!==i&&s.splice(i,1),s}));return{...e,...r,activationTrigger:1}}},U=(0,react.createContext)(null);function C(e){let u=(0,react.useContext)(U);if(null===u){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return u}function ye(e,u){return(0,match.Y)(u.type,Te,e,u)}U.displayName="MenuContext";let Ie=react.Fragment;let be=render.O5.RenderStrategy|render.O5.Static;let Se=react.Fragment;let Pe=(0,render.FX)((function Me(e,u){let{__demoMode:r=!1,...s}=e,i=(0,react.useReducer)(ye,{__demoMode:r,menuState:r?0:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:t,itemsRef:o,buttonRef:a},l]=i,m=(0,use_sync_refs.P)(u);(0,use_outside_click.j)([a,o],((g,R)=>{var p;l({type:1}),(0,focus_management.Bm)(R,focus_management.MZ.Loose)||(g.preventDefault(),null==(p=a.current)||p.focus())}),0===t);let I=(0,use_event._)((()=>{l({type:1})})),A=(0,react.useMemo)((()=>({open:0===t,close:I})),[t,I]),f={ref:m};return react.createElement(U.Provider,{value:i},react.createElement(open_closed.El,{value:(0,match.Y)(t,{0:open_closed.Uw.Open,1:open_closed.Uw.Closed})},(0,render.XX)({ourProps:f,theirProps:s,slot:A,defaultTag:Ie,name:"Menu"})))})),ve=(0,render.FX)((function Re(e,u){var R;let r=(0,use_id.B)(),{id:s=`headlessui-menu-button-${r}`,...i}=e,[t,o]=C("Menu.Button"),a=(0,use_sync_refs.P)(t.buttonRef,u),l=(0,use_disposables.L)(),m=(0,use_event._)((p=>{switch(p.key){case keyboard.D.Space:case keyboard.D.Enter:case keyboard.D.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:calculate_active_index.B.First})));break;case keyboard.D.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:calculate_active_index.B.Last})))}})),I=(0,use_event._)((p=>{if(p.key===keyboard.D.Space)p.preventDefault()})),A=(0,use_event._)((p=>{if((0,bugs.l)(p.currentTarget))return p.preventDefault();e.disabled||(0===t.menuState?(o({type:1}),l.nextFrame((()=>{var M;return null==(M=t.buttonRef.current)?void 0:M.focus({preventScroll:!0})}))):(p.preventDefault(),o({type:0})))})),f=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),g={ref:a,id:s,type:(0,use_resolve_button_type.c)(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":null==(R=t.itemsRef.current)?void 0:R.id,"aria-expanded":0===t.menuState,onKeyDown:m,onKeyUp:I,onClick:A};return(0,render.XX)({ourProps:g,theirProps:i,slot:f,defaultTag:"button",name:"Menu.Button"})})),he=(0,render.FX)((function Ee(e,u){var M,b;let r=(0,use_id.B)(),{id:s=`headlessui-menu-items-${r}`,...i}=e,[t,o]=C("Menu.Items"),a=(0,use_sync_refs.P)(t.itemsRef,u),l=(0,use_owner.g)(t.itemsRef),m=(0,use_disposables.L)(),I=(0,open_closed.O_)(),A=null!==I?(I&open_closed.Uw.Open)===open_closed.Uw.Open:0===t.menuState;(0,react.useEffect)((()=>{let n=t.itemsRef.current;n&&0===t.menuState&&n!==(null==l?void 0:l.activeElement)&&n.focus({preventScroll:!0})}),[t.menuState,t.itemsRef,l]),function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react.useRef)(t),l=(0,react.useRef)(r);(0,react.useEffect)((()=>{o.current=t,l.current=r}),[t,r]),(0,use_iso_morphic_effect.s)((()=>{if(!e||!c)return;let n=(0,owner.T)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign((i=>f(i)),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)}),[e,c,o,l])}({container:t.itemsRef.current,enabled:0===t.menuState,accept:n=>"menuitem"===n.getAttribute("role")?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(n){n.setAttribute("role","none")}});let f=(0,use_event._)((n=>{var E,x;switch(m.dispose(),n.key){case keyboard.D.Space:if(""!==t.searchQuery)return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case keyboard.D.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),null!==t.activeItemIndex){let{dataRef:S}=t.items[t.activeItemIndex];null==(x=null==(E=S.current)?void 0:E.domRef.current)||x.click()}(0,focus_management.Fh)(t.buttonRef.current);break;case keyboard.D.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.B.Next});case keyboard.D.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.B.Previous});case keyboard.D.Home:case keyboard.D.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.B.First});case keyboard.D.End:case keyboard.D.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.B.Last});case keyboard.D.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{var S;return null==(S=t.buttonRef.current)?void 0:S.focus({preventScroll:!0})}));break;case keyboard.D.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{(0,focus_management.p9)(t.buttonRef.current,n.shiftKey?focus_management.BD.Previous:focus_management.BD.Next)}));break;default:1===n.key.length&&(o({type:3,value:n.key}),m.setTimeout((()=>o({type:4})),350))}})),g=(0,use_event._)((n=>{if(n.key===keyboard.D.Space)n.preventDefault()})),R=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),p={"aria-activedescendant":null===t.activeItemIndex||null==(M=t.items[t.activeItemIndex])?void 0:M.id,"aria-labelledby":null==(b=t.buttonRef.current)?void 0:b.id,id:s,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:a};return(0,render.XX)({ourProps:p,theirProps:i,slot:R,defaultTag:"div",features:be,visible:A,name:"Menu.Items"})})),De=(0,render.FX)((function xe(e,u){let r=(0,use_id.B)(),{id:s=`headlessui-menu-item-${r}`,disabled:i=!1,...t}=e,[o,a]=C("Menu.Item"),l=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===s,m=(0,react.useRef)(null),I=(0,use_sync_refs.P)(u,m);(0,use_iso_morphic_effect.s)((()=>{if(o.__demoMode||0!==o.menuState||!l||0===o.activationTrigger)return;let T=(0,disposables.e)();return T.requestAnimationFrame((()=>{var P,B;null==(B=null==(P=m.current)?void 0:P.scrollIntoView)||B.call(P,{block:"nearest"})})),T.dispose}),[o.__demoMode,m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let A=(0,use_text_value.q)(m),f=(0,react.useRef)({disabled:i,domRef:m,get textValue(){return A()}});(0,use_iso_morphic_effect.s)((()=>{f.current.disabled=i}),[f,i]),(0,use_iso_morphic_effect.s)((()=>(a({type:5,id:s,dataRef:f}),()=>a({type:6,id:s}))),[f,s]);let g=(0,use_event._)((()=>{a({type:1})})),R=(0,use_event._)((T=>{if(i)return T.preventDefault();a({type:1}),(0,focus_management.Fh)(o.buttonRef.current)})),p=(0,use_event._)((()=>{if(i)return a({type:2,focus:calculate_active_index.B.Nothing});a({type:2,focus:calculate_active_index.B.Specific,id:s})})),M=(0,use_tracked_pointer.J)(),b=(0,use_event._)((T=>M.update(T))),n=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l||a({type:2,focus:calculate_active_index.B.Specific,id:s,trigger:0}))})),E=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l&&a({type:2,focus:calculate_active_index.B.Nothing}))})),x=(0,react.useMemo)((()=>({active:l,disabled:i,close:g})),[l,i,g]);return(0,render.XX)({ourProps:{id:s,ref:I,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:R,onFocus:p,onPointerEnter:b,onMouseEnter:b,onPointerMove:n,onMouseMove:n,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:x,defaultTag:Se,name:"Menu.Item"})})),qe=Object.assign(Pe,{Button:ve,Items:he,Item:De})},"./node_modules/@headlessui/react/dist/hooks/use-owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>n});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");function n(...e){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.T)(...e)),[...e])}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s,j:()=>u});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let u=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.FX)((function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":!(2&~t)||(null!=(n=e["aria-hidden"])?n:void 0),hidden:!(4&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.XX)({ourProps:r,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon)},"./node_modules/@heroicons/react/24/solid/esm/EllipsisHorizontalIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function EllipsisHorizontalIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",clipRule:"evenodd"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EllipsisHorizontalIcon)}}]);