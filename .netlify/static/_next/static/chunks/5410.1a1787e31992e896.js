"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{36241:(e,l,t)=>{t.d(l,{A:()=>r});var a=t(95155),s=t(12115),i=t(14826),n=t(60410);let r=e=>{let{inStock:l,restockableInDays:t}=e,{translate:r}=(0,n.A)(),c=(0,s.useMemo)(()=>{if(void 0===t||isNaN(t))return;if(t<=6){let e=Math.max(1,t);return"".concat(r("common.available.in")," ").concat(e," ").concat(r(1===e?"common.day":"common.days"))}if(t<=29){let e=Math.max(1,Math.ceil(t/7));return"".concat(r("common.available.in")," ").concat(e," ").concat(r(1===e?"common.week":"common.weeks"))}let e=Math.max(1,Math.ceil(t/30));return"".concat(r("common.available.in")," ").concat(e," ").concat(r(1===e?"common.month":"common.months"))},[t,r]);return(0,a.jsx)("div",{className:"flex items-center gap-2 whitespace-pre text-14 text-gray-700",children:l?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{className:"text-primary",width:20}),(0,a.jsx)("span",{children:r("common.in.stock")})]}):(0,a.jsx)(a.Fragment,{children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{className:"text-yellow-500",width:20}),(0,a.jsx)("span",{children:c})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{className:"text-red-500",width:20}),(0,a.jsx)("span",{children:r("common.out.of.stock")})]})})})}},37497:(e,l,t)=>{t.d(l,{A:()=>r});var a=t(95155);t(12115);var s=t(77296),i=t(60410),n=t(47234);let r=e=>{let{children:l,className:t,renderLabel:r}=e,{isOpen:c,onToggle:d}=(0,s.A)(),{translate:o}=(0,i.A)();return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:c?"block":"hidden",children:l}),(0,a.jsx)("span",{onClick:d,children:r?r({isShowingAll:c}):(0,a.jsx)("span",{className:(0,n.p)("cursor-pointer text-14 font-semibold text-primary transition hover:text-blue-600",t),children:o(c?"common.show.less":"common.show.all")})})]})}},45410:(e,l,t)=>{t.r(l),t.d(l,{default:()=>ep});var a=t(95155),s=t(12115),i=t(76046),n=t(60410),r=t(91938);let c=s.createContext({}),d=e=>{let{children:l,facets:t,onRefine:i,onResetAll:n,...r}=e,[d,o]=(0,s.useState)({clearAll:[]}),m=(0,s.useCallback)(e=>{for(let l of d[e])l()},[d]),x=(0,s.useCallback)((e,l)=>(o(t=>({...t,[e]:[...t[e],l]})),()=>o(t=>({...t,[e]:t[e].filter(e=>e.toString()!=l.toString())}))),[]),[u,h]=(0,s.useState)("list"),p=(0,s.useCallback)(e=>{i([...t.filter(l=>l.id!==e.id),e])},[t,i]),g=(0,s.useCallback)(()=>{n(),m("clearAll")},[n,m]);return(0,a.jsx)(c.Provider,{value:{facets:t,onRefine:p,view:u,onChangeView:h,onResetAll:g,fireEvent:m,subscribe:x,...r},children:l})},o=()=>(0,s.useContext)(c),m=()=>{let{title:e,limit:l,total:t}=o(),{translate:s}=(0,n.A)();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"pb-5 pt-6 text-18 font-bold capitalize text-gray-700 md:pt-7 md:text-20 xl:pt-5 xl:text-24",children:e}),(0,a.jsxs)("p",{className:"text-14 text-gray-600",children:[s("product.showing")," ",(0,a.jsx)("span",{className:"font-medium",children:"1"})," -"," ",(0,a.jsx)("span",{className:"font-medium",children:l})," ",s("product.of")," ",(0,a.jsx)("span",{className:"font-medium",children:t})," ",s("product.results")]})]})};var x=t(35358),u=t(77296),h=t(83496),p=t(66382),g=t(71577),v=t(2487),f=t(47234),j=t(37497);let b=e=>{let{isShowingAll:l}=e,{translate:t}=(0,n.A)();return(0,a.jsxs)("span",{className:"cursor-pointer text-14 font-medium text-primary transition hover:text-blue-500 lg:text-16",children:["+ ",t(l?"common.show.less":"common.show.more")]})},N=e=>{var l,t;let{onRefine:i}=o(),n=(0,s.useCallback)(l=>{let t=e.values.find(e=>e.id===l);i({...e,values:[...e.values.filter(e=>e.id!==l).map(e=>({...e,selected:!1})),{...t,selected:!0}],selected:!0})},[i,e]),r=(0,s.useCallback)(e=>e.map(e=>(0,a.jsxs)("span",{onClick:()=>n(e.id),className:(0,f.p)("cursor-pointer text-14 text-gray-600 underline-offset-2 hover:underline lg:text-16",{"font-semibold":e.selected}),children:[e.name," (",e.count,")"]},e.id)),[n]);return(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[r(e.values.slice(0,null!==(l=e.maxVisibleItems)&&void 0!==l?l:e.values.length)),e.maxVisibleItems&&e.maxVisibleItems<e.values.length&&(0,a.jsx)(j.A,{renderLabel:b,children:(0,a.jsx)("div",{className:"flex flex-col gap-6 pb-6",children:r(e.values.slice(null!==(t=e.maxVisibleItems)&&void 0!==t?t:e.values.length))})})]})};var y=t(26505);let A=e=>{var l;let{onRefine:t}=o(),i=(0,s.useCallback)((l,a)=>{let s=e.values.find(e=>e.id===l),i=[...e.values.filter(e=>e.id!==l),{...s,selected:a}];t({...e,values:i,selected:i.some(e=>e.selected)})},[t,e]),n=(0,s.useCallback)(e=>e.map(e=>(0,a.jsx)(y.A,{label:"".concat(e.name," (").concat(e.count,")"),checked:!!e.selected,onChecked:l=>i(e.id,l),disabled:!e.count},e.id)),[i]);return(0,a.jsxs)("div",{className:"flex flex-col gap-7",children:[n(e.values.slice(0,null!==(l=e.maxVisibleItems)&&void 0!==l?l:e.values.length)),e.maxVisibleItems&&e.maxVisibleItems<e.values.length&&(0,a.jsx)(j.A,{renderLabel:b,children:(0,a.jsx)("div",{className:"flex flex-col gap-7 pb-7",children:n(e.values.slice(e.maxVisibleItems))})})]})};var w=t(70533);let k=e=>{let{translate:l}=(0,n.A)(),[t,i]=(0,s.useState)({min:!1,max:!1}),[r,c]=(0,s.useState)({min:e.selected?e.min:void 0,max:e.selected?e.max:void 0}),{onRefine:d}=o(),m=(0,s.useCallback)(()=>{d({...e,...r,selected:!0})},[d,e,r]);return(0,s.useEffect)(()=>{e.selected||c({min:void 0,max:void 0})},[e.selected]),(0,a.jsxs)("div",{className:"flex items-stretch gap-3",children:[(0,a.jsxs)("div",{className:"flex grow items-center gap-2",children:[(0,a.jsx)(w.A,{type:"number","aria-label":l("common.min"),containerClassName:"p-0 flex-1",className:"py-3 pr-3 text-center text-14 placeholder:text-gray-600",placeholder:t.min?"":l("common.min"),value:r.min||"",onChange:e=>c({...r,min:+e.target.value}),onFocus:()=>i({...t,min:!0}),onBlur:()=>i({...t,min:!1})}),(0,a.jsx)("span",{className:"text-12 text-gray-500 lg:text-14",children:l("common.to")}),(0,a.jsx)(w.A,{type:"number","aria-label":l("common.max"),containerClassName:"p-0 flex-1",className:"py-3 pr-3 text-center text-14 placeholder:text-gray-600",placeholder:t.max?"":l("common.max"),value:r.max||"",onChange:e=>c({...r,max:+e.target.value}),onFocus:()=>i({...t,max:!0}),onBlur:()=>i({...t,max:!1})})]}),(0,a.jsx)(p.default,{variant:"primary",className:"shrink-0",onClick:m,children:l("common.apply")})]})},C=e=>{var l;let{onRefine:t}=o(),i=(0,s.useCallback)((l,a)=>{let s=[{...e.values.find(e=>e.id===l),selected:a}];t({...e,values:s,selected:a})},[t,e]),n=(0,s.useCallback)(e=>e.map(e=>(0,a.jsx)(y.A,{label:"".concat(e.name," (").concat(e.count,")"),checked:!!e.selected,onChecked:l=>i(e.id,l),disabled:!e.count},e.id)),[i]);return(0,a.jsxs)("div",{className:"flex flex-col gap-7",children:[n(e.values.slice(0,null!==(l=e.maxVisibleItems)&&void 0!==l?l:e.values.length)),e.maxVisibleItems&&e.maxVisibleItems<e.values.length&&(0,a.jsx)(j.A,{renderLabel:b,children:(0,a.jsx)("div",{className:"flex flex-col gap-7 pb-7",children:n(e.values.slice(e.maxVisibleItems))})})]})},S=()=>({resolveFacetComponent:(0,s.useCallback)(e=>({navigation:(0,a.jsx)(N,{...e}),term:(0,a.jsx)(A,{...e}),range:(0,a.jsx)(k,{...e}),boolean:(0,a.jsx)(C,{...e})})[e.type],[])}),V=()=>{let{translate:e}=(0,n.A)(),{sortValues:l,currentSortValue:t,currentSortVector:s,onSortValueChange:i,facets:r}=o(),{resolveFacetComponent:c}=S();return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"border-b border-neutral-400 xl:hidden",children:(0,a.jsxs)(g.A,{className:"border-none",children:[(0,a.jsx)(g.A.Button,{className:"py-5",defaultSpacing:!1,children:(0,a.jsx)("span",{className:"text-14 font-bold capitalize xl:text-16",children:e("product.sortBy")})}),(0,a.jsx)(g.A.Panel,{defaultSpacing:!1,className:"pb-6",children:(0,a.jsx)("div",{className:"flex flex-col gap-7",children:l.map(e=>{let{name:l,value:n,vector:r}=e;return(0,a.jsx)(v.A,{label:l,checked:n===t&&r===s,onSelected:()=>i(n,r)},"".concat(n,"-").concat(r))})})})]})}),r.map(e=>(0,a.jsx)("div",{className:"border-b border-neutral-400",children:(0,a.jsxs)(g.A,{className:"border-none",children:[(0,a.jsx)(g.A.Button,{className:"py-5",defaultSpacing:!1,children:(0,a.jsx)("span",{className:"text-14 font-bold text-gray-700",children:e.name})}),(0,a.jsx)(g.A.Panel,{defaultSpacing:!1,className:"pb-6",children:c(e)})]})},e.id))]})},M=s.forwardRef(function(e,l){let{title:t,titleId:a,...i}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},i),t?s.createElement("title",{id:a},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}))}),E=s.forwardRef(function(e,l){let{title:t,titleId:a,...i}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":a},i),t?s.createElement("title",{id:a},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"}))}),I=()=>{let{view:e,onChangeView:l}=o();return(0,a.jsx)("div",{className:"flex h-[40px] items-center gap-6 rounded-md border border-gray-300 px-[14px] py-2 xl:h-[32px] xl:gap-3 xl:px-3",children:[{key:"list",Icon:M},{key:"grid",Icon:E}].map(t=>{let{key:s,Icon:i}=t;return(0,a.jsx)(i,{width:20,height:20,className:(0,f.p)("cursor-pointer transition hover:text-gray-600",e===s?"text-gray-600":"text-gray-300"),onClick:()=>l(s)},s)})})},R=()=>{let{translate:e}=(0,n.A)(),{isOpen:l,onOpen:t,onClose:s}=(0,u.A)(),{total:i}=o();return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsxs)("button",{className:"flex grow cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 p-2 leading-[16px] text-gray-600 transition hover:bg-gray-50 md:w-fit md:grow-0",onClick:t,children:[(0,a.jsx)("span",{children:e("product.sortAndFilter")}),(0,a.jsx)(x.A,{width:20})]}),(0,a.jsx)(I,{})]}),(0,a.jsx)(h.A,{isOpen:l,onClose:s,direction:"left",headline:e("product.sortAndFilter"),className:"w-[90vw] max-w-[350px]",headerClassName:"border-y border-neutral-400",children:(0,a.jsxs)("div",{className:"flex h-full flex-col",children:[(0,a.jsx)("div",{className:"grow overflow-y-auto px-4 lg:px-5",children:(0,a.jsx)(V,{})}),(0,a.jsxs)("div",{className:"flex items-center gap-3 border-t border-neutral-400 p-4 lg:p-5",children:[(0,a.jsx)(p.default,{variant:"secondary",className:"flex-1",onClick:s,children:e("common.cancel")}),(0,a.jsxs)(p.default,{variant:"primary",className:"flex-1",onClick:s,children:[e("common.view")," (",i,")"]})]})]})})]})};var F=t(98689),L=t(15290),P=t(23383),U=t(36241);let z=(e,l)=>e&&l?{isDiscounted:!0,discountPercentage:Math.floor((e-l)/e*100)}:{isDiscounted:!1,discountPercentage:0};var B=t(1547);let H=e=>{let{discountPercentage:l,className:t}=e,{translate:s}=(0,n.A)();return(0,a.jsxs)("div",{className:(0,f.p)("bg-red-500 px-2 py-1 text-center text-12 font-medium leading-normal text-white",t),children:[s("common.sale")," ",l,"%"]})};var D=t(6400);let Z=e=>{let{item:{name:l,specifications:t,inStock:i,sku:r,price:c,discountedPrice:d,currency:o,images:m,maxQuantity:x=Number.MAX_VALUE,restockableInDays:u,url:h},onAddToCart:g,addToCartDisabled:v=!1,variant:b="list-item",className:N=""}=e,{translate:y}=(0,n.A)(),[A,w]=(0,s.useState)(!1),[k,C]=(0,s.useState)(1),S=(0,s.useCallback)(async()=>{w(!0),await (null==g?void 0:g(k)),w(!1),C(1)},[g,k]),{formatCurrency:V}=(0,L.A)(),{isDiscounted:M,discountPercentage:E}=z(c,d),I=(null!=t?t:[]).filter(e=>!!e.value);return(0,a.jsxs)("div",{className:(0,f.p)("relative border border-neutral-400 p-4",{"lg:pb-6":"grid-item"===b,"md:flex md:items-start md:p-6 lg:py-12":"list-item"===b},N),children:[M&&(0,a.jsx)(H,{discountPercentage:E,className:(0,f.p)("absolute left-0 top-4",{"md:top-2":"list-item"===b})}),(0,a.jsx)("div",{className:(0,f.p)("flex items-center justify-end",{"md:hidden":"list-item"===b}),children:(0,a.jsx)(U.A,{inStock:i,restockableInDays:u})}),(0,a.jsx)(B.default,{href:null!=h?h:"#",children:(0,a.jsx)("div",{className:(0,f.p)("relative mx-auto my-3 size-[124px] shrink-0 md:mb-9 md:mt-6",{"md:mr-8 md:size-[140px]":"list-item"===b,"md:size-[160px]":"grid-item"===b}),children:(0,a.jsx)(F.A,{fill:!0,src:null==m?void 0:m[0],suffix:"small",alt:l,style:{objectFit:"contain"}})})}),(0,a.jsxs)("div",{className:(0,f.p)("overflow-hidden",{"md:grow":"list-item"===b}),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(B.default,{href:null!=h?h:"#",className:"max-w-full truncate text-16 font-semibold leading-loose text-gray-700",children:l}),r&&(0,a.jsxs)("p",{className:"mt-1 text-12 uppercase leading-loose text-gray-600",children:[y("common.model"),"# ",r]})]}),"list-item"===b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.A,{className:"mt-3 grid gap-1",attributes:I.slice(0,3)}),I.length>3&&(0,a.jsx)(j.A,{children:(0,a.jsx)(D.A,{className:"mt-1 grid gap-1",attributes:I.slice(3)})})]})]}),(0,a.jsxs)("div",{className:(0,f.p)("mt-4 flex flex-col justify-start",M?"gap-[52px] lg:gap-6":"gap-[72px] lg:gap-8",{"md:mt-0 md:shrink-0 md:self-stretch md:text-end":"list-item"===b}),children:[(0,a.jsx)("div",{className:(0,f.p)("hidden justify-end",{"md:flex":"list-item"===b}),children:(0,a.jsx)(U.A,{inStock:i&&!!c,restockableInDays:u})}),(0,a.jsxs)("div",{className:(0,f.p)("flex flex-col",{"gap-3 md:items-end":"list-item"===b,"gap-4 md:gap-5 lg:gap-6":"grid-item"===b}),children:[(0,a.jsx)("div",{className:(0,f.p)("hidden",{"lg:block":"list-item"===b}),children:(0,a.jsx)(P.A,{value:k,onChange:C,minValue:1,maxValue:x,disabled:!i||v})}),(0,a.jsx)("div",{className:c?"":"invisible",children:M?(0,a.jsxs)("div",{className:(0,f.p)("flex items-center gap-3",{"md:flex-col-reverse md:items-end md:gap-2":"list-item"===b}),children:[(0,a.jsx)("span",{className:(0,f.p)("font-bold leading-loose text-red-500","list-item"===b?"text-18":"text-20"),children:V(d,o)}),(0,a.jsx)("span",{className:"text-14 leading-tight text-gray-600 line-through",children:V(c,o)})]}):(0,a.jsx)("span",{className:(0,f.p)("font-semibold leading-tight text-gray-800","list-item"===b?"text-18":"text-20"),children:V(c,o)})}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:(0,f.p)("hidden",{"lg:block":"grid-item"===b}),children:(0,a.jsx)(P.A,{value:k,onChange:C,minValue:Math.min(1,null!=x?x:1/0),maxValue:x,showLabel:!1,disabled:!i||v})}),(0,a.jsx)(p.default,{variant:"secondary",size:"m",className:"grow truncate",onClick:S,loading:A,disabled:!i||v||0===x,children:y("cart.add")})]})]})]})]})};var _=t(19816);let T=e=>{let{onAddToCart:l,addToCartDisabled:t}=e,{products:s,view:i}=o(),{showModal:n}=(0,_.h)(),r=async(e,t)=>{await l(e.sku,t),n(e)};return(0,a.jsx)("div",{className:(0,f.p)("grid grid-cols-1 gap-px",{"md:grid-cols-2 xl:grid-cols-3":"grid"===i}),children:s.map(e=>(0,a.jsx)("div",{className:"outline outline-1 outline-neutral-400",children:(0,a.jsx)(Z,{item:e,variant:"grid"===i?"grid-item":"list-item",className:"border-none",onAddToCart:l=>r(e,l),addToCartDisabled:t})},e.id))})},O=()=>{let{translate:e}=(0,n.A)(),{limit:l,total:t,onLoadMore:s}=o();return(0,a.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,a.jsxs)("p",{className:"text-16 text-gray-700",children:[e("product.showing")," ",l," ",e("product.of")," ",t]}),(0,a.jsx)(p.default,{variant:"primary",size:"m",className:"min-w-[180px] text-16 font-medium",disabled:l===t,onClick:s,children:e("product.load.more")})]})};var W=t(2355);let q=()=>{let{translate:e}=(0,n.A)(),{sortValues:l,currentSortValue:t,currentSortVector:s,onSortValueChange:i}=o();return(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("span",{className:"text-14 text-gray-700",children:[e("product.sortBy"),":"]}),(0,a.jsx)(W.A,{value:"".concat(t,"_").concat(s),options:l.map(e=>{let{name:l,value:t,vector:a}=e;return{name:l,value:"".concat(t,"_").concat(a)}}),onChange:e=>{let[l,t]=e.split("_");i(l,t)},size:"sm",className:"min-w-[130px] leading-[14px]"})]})};var G=t(36743);let X=e=>{let{name:l,onRemove:t}=e;return(0,a.jsxs)("div",{className:"flex h-[32px] cursor-default items-center justify-center gap-2 rounded-md bg-neutral-200 px-2",children:[(0,a.jsx)("span",{className:"text-14 leading-[20px] text-gray-700",children:l}),(0,a.jsx)(G.A,{className:"cursor-pointer text-gray-700",width:16,onClick:t})]})},Y=()=>{let{translate:e}=(0,n.A)(),{facets:l,onRefine:t,onResetAll:i}=o(),r=l.filter(e=>e.selected).length>0;return(0,a.jsxs)("div",{className:"flex flex-wrap gap-3",children:[r&&(0,a.jsx)("div",{className:"flex h-[32px] cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-2 transition hover:bg-gray-50",onClick:i,children:(0,a.jsx)("span",{className:"text-14 leading-[20px] text-gray-700",children:e("product.clear.all")})}),l.filter(e=>e.selected).map(e=>"term"===e.type||"navigation"===e.type?(0,a.jsx)(s.Fragment,{children:e.values.filter(e=>e.selected).map(l=>(0,a.jsx)(X,{name:l.name,onRemove:()=>{let a=[...e.values.filter(e=>e.id!==l.id),{...l,selected:!1}];t({...e,values:a,selected:a.some(e=>e.selected)})}},"".concat(e.id,"-").concat(l.id)))},e.id):(0,a.jsx)(X,{name:e.name,onRemove:()=>t({...e,selected:!1})},e.id))]})};var J=t(28336);let K=e=>{let{breadcrumb:l}=e;return(0,a.jsx)(J.A,{Separator:"|",children:(null!=l?l:[]).map(e=>{let{name:l,link:t}=e;return(0,a.jsx)(B.default,{href:t,className:"capitalize",underlineOnHover:!1,children:l},l)})})},Q=e=>{let{translate:l}=(0,n.A)();return(0,a.jsxs)(d,{...e,children:[(0,a.jsx)("div",{className:"mt-5 px-4 md:px-6 lg:px-12",children:e.addToCartDisabled&&(0,a.jsxs)(r.A,{className:"mt-3",children:[(0,a.jsx)("b",{children:l("common.view.only")})," ",l("cart.view.only.desc")]})}),(0,a.jsx)("div",{className:"mt-5 hidden px-4 md:px-6 lg:block lg:px-12",children:(0,a.jsx)(K,{...e})}),(0,a.jsxs)("div",{className:"px-4 pb-12 md:px-6 lg:px-12 xl:flex xl:gap-6 xl:pb-[72px]",children:[(0,a.jsxs)("div",{className:"xl:max-w-[340px]",children:[(0,a.jsx)(m,{}),(0,a.jsx)("div",{className:"mt-4 xl:hidden",children:(0,a.jsx)(R,{})}),(0,a.jsx)("div",{className:"mt-2 hidden border-t border-neutral-400 xl:block",children:(0,a.jsx)(V,{})})]}),(0,a.jsxs)("div",{className:"pt-4 xl:grow xl:pt-[62px]",children:[(0,a.jsxs)("div",{className:"hidden items-center justify-between xl:flex",children:[(0,a.jsx)(Y,{}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(q,{}),(0,a.jsx)(I,{})]})]}),(0,a.jsx)("div",{className:"xl:mt-3",children:(0,a.jsx)(T,{...e})}),(0,a.jsx)("div",{className:"mt-11",children:(0,a.jsx)(O,{})})]})]})]})};var $=t(4239),ee=t(22471);let el=e=>{var l,t;let{title:s,link:i,breadcrumb:n,items:r,highlight:c}=e,{formatCurrency:d}=(0,L.A)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-neutral-200 px-4 py-5 md:px-6 md:pb-8 lg:px-12 lg:pb-12",children:[(0,a.jsx)("div",{className:"hidden pb-4 lg:block",children:(0,a.jsx)(K,{breadcrumb:n})}),(0,a.jsx)("h2",{className:"text-18 font-bold leading-normal text-gray-800 md:text-20 lg:text-24",children:s}),(0,a.jsx)(B.default,{chevron:!0,className:"mt-4 block text-14 capitalize text-primary md:text-16",href:null!==(l=i.href)&&void 0!==l?l:"#",openInNewTab:i.openInNewTab,children:i.name}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-2 gap-3 md:mt-7 md:grid-cols-3 md:gap-4 lg:mt-9 lg:grid-cols-4 lg:gap-5",children:r.map(e=>{let{name:l,image:t,url:s}=e;return(0,a.jsxs)(B.default,{href:null!=s?s:"#",className:"flex w-full flex-col items-center gap-3 rounded-lg bg-white px-3 py-5 lg:pb-10 lg:pt-7",underlineOnHover:!1,children:[(0,a.jsx)("div",{className:"relative w-1/2 pb-[50%]",children:(0,a.jsx)(F.A,{...null!=t?t:{},alt:null!=l?l:"#",fill:!0,style:{objectFit:"contain"}})}),(0,a.jsx)("span",{className:"text-center text-12 font-medium text-gray-700 md:text-16",children:l})]},l)})})]}),(0,a.jsxs)("div",{className:"bg-white px-4 py-5 md:px-6 md:py-8 lg:p-12",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-bold leading-loose text-gray-700 md:text-18 lg:text-20",children:c.headline}),(0,a.jsx)("p",{className:"mt-3 text-14 leading-loose text-gray-600 md:text-14",children:c.subline})]}),(0,a.jsx)(B.default,{href:null!==(t=c.cta.href)&&void 0!==t?t:"#",openInNewTab:c.cta.openInNewTab,children:(0,a.jsx)(p.default,{size:"s",className:"lg:py-3 lg:text-14",variant:"secondary",children:c.cta.name})})]}),(0,a.jsx)("div",{className:"mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 lg:gap-5",children:c.items.map(e=>{let{name:l,price:t,url:s,currency:i,image:n,pressTargetPosition:r}=e;return(0,a.jsxs)("div",{className:"relative pb-[105%] lg:pb-[85%]",children:[(0,a.jsx)(F.A,{...n,fill:!0,style:{objectFit:"cover"},className:"rounded-md",alt:l}),(0,a.jsxs)(B.default,{href:null!=s?s:"#",className:(0,f.p)("absolute left-4 flex max-w-[90%] items-start justify-between gap-1 rounded-sm bg-white p-4 md:max-w-[70%] lg:left-6 xl:max-w-[45%]",{"bottom-4 lg:bottom-6":"bottom"===r},{"top-4 lg:top-6":"top"===r}),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"block font-normal leading-loose lg:text-18",children:l}),(0,a.jsx)("span",{className:"mt-3 block text-14 font-medium text-gray-700 lg:text-16",children:d(t,i)})]}),(0,a.jsx)(ee.A,{width:24,height:24,className:"mt-[2px] shrink-0 text-gray-700"})]})]},l)})})]})]})};var et=t(54843),ea=t(16695);let es=()=>{var e;let{selectedLocation:l}=(0,ea.jl)();return({us:"USD",gb:"GBP",au:"AUD",nz:"NZD",de:"EUR",fr:"EUR",es:"EUR",pt:"EUR",nl:"EUR",it:"EUR"})[null!==(e=null==l?void 0:l.value)&&void 0!==e?e:"us"]};var ei=t(37892),en=t(38917),er=t(58617),ec=t(45782),ed=t(26372);let eo=e=>{let{items:l}=e,{selectedBusinessUnit:t,selectedStore:a}=(0,ei.rW)(),{cart:s}=(0,$.A)(null==t?void 0:t.key,null==a?void 0:a.key);return(null!=l?l:[]).map(e=>(0,ed.Y)(e,{cart:s}))},em=e=>{let{facets:l,categories:t}=e,{translate:a}=(0,n.A)(),s=new Set(["variants.scopedPrice.value","variants.prices.centAmount","variants.prices","variants.attributes.iso45001","variants.attributes.mobility"]);return(null!=l?l:[]).filter(e=>s.has(e.identifier)).map(e=>{var l,s,i,n;let r="categories.id"===e.identifier,c="boolean"===e.type,d="term"===e.type,o="range"===e.type;if(d&&!(null===(l=e.terms)||void 0===l?void 0:l.length))return;let m={id:e.identifier,name:a("product.".concat(e.identifier)),selected:e.selected,count:e.count,type:e.type};return r&&(m.type="navigation"),(d||c)&&(m.values=(null!==(s=e.terms)&&void 0!==s?s:[]).map(l=>{var s,i;let n={id:l.identifier,name:c?a("product.".concat(e.identifier,".").concat(l.identifier)):l.label,selected:l.selected,count:l.count};return r&&(n.name=null!==(i=null==t?void 0:null===(s=t.find(e=>e.categoryId))||void 0===s?void 0:s.name)&&void 0!==i?i:""),n})),o&&(m.min=(null!==(i=e.minSelected)&&void 0!==i?i:0)/100,m.max=(null!==(n=e.maxSelected)&&void 0!==n?n:0)/100),m}).filter(Boolean)};var ex=t(66775),eu=t(43322);let eh=()=>{var e,l,t,a,n;let r=(0,ex.A)(),{pathWithoutQuery:c}=(0,eu.A)(),d=(0,i.useSearchParams)(),o=Object.fromEntries(d.entries()),{query:m}=o,x=+(null!==(t=d.get("limit"))&&void 0!==t?t:"24"),u=null!==(a=null===(l=Array.from(d.keys()).find(e=>e.startsWith("sortAttributes")))||void 0===l?void 0:null===(e=l.match(/sortAttributes\[0\]\[(.+)\]/))||void 0===e?void 0:e[1])&&void 0!==a?a:"",h=null!==(n=d.get("sortAttributes[0][".concat(u,"]")))&&void 0!==n?n:"desc",p=(0,s.useCallback)((e,l)=>{let t=new URLSearchParams(o);for(let e of Array.from(t.keys()))e.startsWith("sortAttributes")&&t.delete(e);e&&t.set("sortAttributes[0][".concat(e,"]"),l),r.push("".concat(c,"?").concat(t.toString()))},[o,r,c]),g=(0,s.useCallback)((e,l)=>{e.min&&l.set("facets[".concat(e.id,"][min]"),(100*e.min).toString()),e.max&&l.set("facets[".concat(e.id,"][max]"),(100*e.max).toString())},[]),v=(0,s.useCallback)((e,l)=>{e.values.filter(e=>e.selected).forEach((t,a)=>{l.set("facets[".concat(e.id,"][terms][").concat(a,"]"),t.id)})},[]),f=(0,s.useCallback)((e,l)=>{let t=e.values.find(e=>e.selected);t&&l.set("facets[".concat(e.id,"][boolean]"),t.id)},[]),j=(0,s.useCallback)(e=>{let l=new URLSearchParams;u&&l.set("sortAttributes[0][".concat(u,"]"),"asc"),e.filter(e=>e.selected).forEach(e=>{"range"===e.type?g(e,l):"navigation"===e.type||"term"===e.type?v(e,l):"boolean"===e.type&&f(e,l)}),m&&l.set("query",m),r.push("".concat(c,"?").concat(l.toString()))},[u,g,v,f,c,r,m]),b=(0,s.useCallback)(()=>{let e=new URLSearchParams(o);e.set("limit",(+x+24).toString()),r.push("".concat(c,"?").concat(e.toString()),{scroll:!1})},[o,x,r,c]),N=(0,s.useCallback)(()=>{r.push("".concat(c,"?limit=").concat(x))},[r,x,c]);return{onSortValueChange:p,currentSortValue:u,currentSortVector:h,limit:x,onLoadMore:b,onResetAll:N,onRefine:j}},ep=e=>{var l,t,s,r,c,d;let{items:o,category:m,facets:x,totalItems:u,categories:h,categoryConfiguration:p,displayIntermediaryPage:g=!1}=e,{translate:v}=(0,n.A)(),{slug:f,locale:j}=(0,i.useParams)(),b=(0,i.useSearchParams)().get("query"),N=!!b,y=es(),A=eo({items:o}),w=em({facets:x,categories:h}),k=m?(0,ec.B)(m,{locale:j}):void 0,{selectedBusinessUnit:C,selectedStore:S}=(0,ei.rW)(),{permissions:V}=(0,en.A)(null==C?void 0:C.key),{addItem:M}=(0,$.A)(null==C?void 0:C.key,null==S?void 0:S.key),{onSortValueChange:E,currentSortValue:I,currentSortVector:R,limit:F,onLoadMore:L,onResetAll:P,onRefine:U}=eh(),z=N?[{name:v("common.home"),link:"/"},{name:v("product.search.results"),link:""}]:[{name:v("common.home"),link:"/"},...f.map((e,l,t)=>({name:e.replace(/[-_]/g," "),link:"/".concat(t.slice(0,l+1).join("/"))}))];if(g){let e=null!==(t=p[null!==(l=null==m?void 0:m.slug)&&void 0!==l?l:""])&&void 0!==t?t:{};return(0,a.jsx)(el,{title:null!==(s=null==k?void 0:k.name)&&void 0!==s?s:"",link:{name:v("common.shop.all"),href:"".concat(null==m?void 0:m._url,"?view=1")},breadcrumb:z,items:[...(null!==(r=null==k?void 0:k.descendants)&&void 0!==r?r:[]).map(e=>{var l;let{name:t,path:a,categoryKey:s}=e;return{name:null!=t?t:"",image:null===(l=p[s])||void 0===l?void 0:l.image,url:a}}),{name:v("common.view.all"),image:null==e?void 0:e.image,url:"".concat(null==m?void 0:m._url,"?view=1")}],highlight:{headline:e.highlightHeadline,subline:e.highlightSubline,cta:(0,et.s)(e.highlightCtaReference,e.highlightCta),items:(null!==(c=e.highlightItems)&&void 0!==c?c:[]).map(e=>{var l;let{name:t,image:a,price:s,reference:i,pressTargetPosition:n}=e;return{name:t,image:a,price:s,currency:y,url:null!==(l=(0,et.s)(i).href)&&void 0!==l?l:"#",pressTargetPosition:null!=n?n:"bottom"}})}})}return(0,a.jsx)(Q,{title:null!==(d=N?"".concat(v("product.search.results.for"),' "').concat(b,'"'):null==m?void 0:m.name)&&void 0!==d?d:"#",products:A,breadcrumb:z,sortValues:[{name:"".concat(v("product.relevance")),value:"",vector:"desc"},{name:"".concat(v("product.price")," (Asc)"),value:"price",vector:"asc"},{name:"".concat(v("product.price")," (Desc)"),value:"price",vector:"desc"}],addToCartDisabled:!V.UpdateMyCarts,currentSortValue:I,currentSortVector:R,facets:w,limit:Math.min(F,o.length),total:u,onRefine:U,onResetAll:P,onSortValueChange:E,onLoadMore:L,onAddToCart:async(e,l)=>{let t=await M([{sku:e,count:l}]);t.success||er.A.error(t.message||v("common.something.went.wrong"))}})}},35358:(e,l,t)=>{t.d(l,{A:()=>s});var a=t(12115);let s=a.forwardRef(function(e,l){let{title:t,titleId:s,...i}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":s},i),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"}))})}}]);
//# sourceMappingURL=5410.1a1787e31992e896.js.map