"use strict";exports.id=9584,exports.ids=[9584],exports.modules={76901:(e,r,s)=>{s.d(r,{A:()=>i});var t=s(45512);s(58009);var a=s(79334),l=s(28165),n=s(85762),d=s(80034);let i=({className:e})=>{let r=(0,a.useRouter)(),{translate:s}=(0,d.A)();return(0,t.jsx)(l.default,{className:(0,n.p)("text-14 leading-normal text-blue-700",e),href:"#",onClick:()=>r.back(),children:s("common.back.to.previous.page")})}},93001:(e,r,s)=>{s.d(r,{s:()=>t});let t={dashboard:"/dashboard",companyAdmin:"/company-admin",shoppingLists:"/purchase-lists",addresses:"/addresses",quotes:"/quotes",orders:"/orders",settings:"/settings",approvalRules:"/approval-rules",approvalFlows:"/approval-flows",shoppingListDetail:e=>`/purchase-list/${e.replace(/\s+/g,"-")}`,quoteDetail:e=>`/quote/${e.replace(/\s+/g,"-")}`,quoteRequestDetail:e=>`/quote-request/${e.replace(/\s+/g,"-")}`,orderDetail:e=>`/order/${e.replace(/\s+/g,"-")}`,approvalRuleDetail:e=>`/approval-rule/${e.replace(/\s+/g,"-")}`,approvalFlowDetail:e=>`/approval-flow/${e.replace(/\s+/g,"-")}`}},37436:(e,r,s)=>{s.d(r,{A:()=>b});var t=s(45512),a=s(71178),l=s(36601),n=s(80034),d=s(52178),i=s(1005),o=s(96904),c=s(19311),m=s(2812),u=s(35309),h=s(74891),x=s(21413),p=s(93001);let b=()=>{let{translate:e}=(0,n.A)(),[r]=(0,l.A)(a.L_),s={dashboard:{icon:(0,t.jsx)(t.Fragment,{}),name:e("common.dashboard"),summary:"",href:p.s.dashboard,disabled:!1,disabledMessage:"",order:1},orders:{icon:(0,t.jsx)(d.A,{}),name:e("common.orders"),summary:e("dashboard.orders.summary"),href:p.s.orders,disabled:!1,disabledMessage:"",order:2},quotes:{icon:(0,t.jsx)(i.A,{}),name:e("common.quotes"),summary:e("dashboard.quotes.summary"),href:p.s.quotes,disabled:!1,disabledMessage:"",order:3},companyAdmin:{icon:(0,t.jsx)(o.A,{}),name:e("common.company.admin"),summary:e("dashboard.company.admin.summary"),href:p.s.companyAdmin,disabled:!r,disabledMessage:e("dashboard.company.admin.disabled.on.small.screens"),order:r?4:999},purchaseLists:{icon:(0,t.jsx)(c.A,{}),name:e("common.purchase.lists"),summary:e("dashboard.purchase.lists.summary"),href:p.s.shoppingLists,disabled:!1,disabledMessage:"",order:5},approvalRules:{icon:(0,t.jsx)(m.A,{}),name:e("common.approval.rules"),summary:e("dashboard.approval.rules.summary"),href:p.s.approvalRules,disabled:!r,disabledMessage:e("dashboard.approval.rules.disabled.on.small.screen"),order:r?6:999},approvalFlows:{icon:(0,t.jsx)(u.A,{}),name:e("common.approval.flows"),summary:e("dashboard.approval.flows.summary"),href:p.s.approvalFlows,disabled:!1,disabledMessage:"",order:7},settings:{icon:(0,t.jsx)(h.A,{}),name:e("common.settings"),summary:e("dashboard.settings.summary"),href:p.s.settings,disabled:!1,disabledMessage:"",order:8},addresses:{icon:(0,t.jsx)(x.A,{}),name:e("common.addresses"),summary:e("dashboard.addresses.summary"),href:p.s.addresses,disabled:!1,disabledMessage:"",order:9}};return{sidebarItems:[s.dashboard,s.orders,s.quotes,s.companyAdmin,s.purchaseLists,s.approvalRules,s.approvalFlows,s.settings,s.addresses],cardItems:[s.orders,s.quotes,s.companyAdmin,s.purchaseLists,s.approvalRules,s.approvalFlows,s.settings,s.addresses]}}},62621:(e,r,s)=>{s.d(r,{A:()=>o});var t=s(45512);s(58009);var a=s(85762),l=s(28165);let n=({title:e,links:r=[]})=>(0,t.jsxs)("div",{className:"h-full w-fit bg-gray-100 px-7 py-10",children:[(0,t.jsx)("h6",{className:"px-5 text-12 font-medium uppercase text-gray-500",children:e}),(0,t.jsx)("div",{className:"mt-4 flex flex-col items-start gap-4",children:r.map(({name:e,href:r,openInNewTab:s,isActive:n})=>(0,t.jsx)(l.default,{className:(0,a.p)("w-full rounded-lg px-5 py-2 text-14 font-medium text-gray-600 hover:bg-neutral-300",{"bg-neutral-300":n}),href:r??"#",openInNewTab:s,underlineOnHover:!1,children:e},r))})]});var d=s(80034),i=s(37436);let o=({title:e,href:r,children:s,userName:a})=>{let{translate:l}=(0,d.A)(),{sidebarItems:o}=(0,i.A)();return(0,t.jsxs)("div",{className:"relative flex items-start gap-6 2xl:min-h-[calc(100vh-123px)]",children:[(0,t.jsx)("div",{className:"sticky top-[112px] hidden h-[calc(100vh-112px)] w-max shrink-0 2xl:block",children:(0,t.jsx)(n,{title:l("common.say.hi",{values:{name:a??""}}),links:o.map(e=>({...e,isActive:r===e.href}))})}),(0,t.jsxs)("div",{className:"box-border min-h-[calc(100vh-131px)] max-w-full grow px-4 pb-6 md:px-5 md:pb-7 lg:min-h-[calc(100vh-83px)] lg:px-12 lg:pb-9 2xl:min-h-[unset]",children:[e&&(0,t.jsx)("h1",{className:"py-6 text-18 font-extrabold text-gray-800 md:py-7 md:text-20 lg:py-9 lg:text-24",children:l(e)}),s]})]})}},79667:(e,r,s)=>{s.d(r,{A:()=>p});var t=s(45512),a=s(58009),l=s.n(a),n=s(80034),d=s(4979),i=s(42378),o=s(688),c=s(25306),m=s(85762);let u=({activeIndex:e,children:r,classNames:s={}})=>{let a=l().Children.toArray(r).filter(Boolean).length,n=Math.max(0,Math.min(e??0,a-1));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"relative w-full",children:[(0,t.jsx)("div",{className:"absolute inset-x-[8px] top-1/2 z-[-1] flex -translate-y-1/2",children:l().Children.toArray(Array.from({length:a-1}).map((e,r)=>(0,t.jsx)("div",{className:(0,m.p)("h-[8px] flex-1",r<n?s.trackActive??"bg-primary":s.track??"bg-gray-300")})))}),(0,t.jsx)("div",{className:"flex justify-between",children:l().Children.toArray(Array.from({length:a}).map((e,r,a)=>(0,t.jsx)("div",{className:(0,m.p)("flex flex-1",{"justify-start":0===r,"justify-center":r>0&&r<a.length-1,"justify-end":r===a.length-1}),role:"presentation",children:(0,t.jsx)("div",{className:(0,m.p)("size-[16px] rounded-[999px]",r<=n?s.bulletActive??"bg-primary":s.bullet??"bg-gray-300")})})))})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)("div",{className:"flex justify-between",children:l().Children.toArray(l().Children.toArray(r).filter(Boolean).map(e=>(0,t.jsx)("div",{className:"flex-1",children:e})))})})]})},h=({order:e})=>{let{translate:r}=(0,n.A)(),s=["Confirmed","Shipped","Delivered","Returned"].findIndex(r=>r===e.status),a="Returned"===e.status;return(0,t.jsxs)(u,{activeIndex:s,children:[(0,t.jsx)("div",{className:"text-left",children:(0,t.jsx)("p",{className:"text-14 font-medium text-gray-700 lg:text-16",children:r("orders.placed")})}),(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("p",{className:"text-14 font-medium text-gray-700 lg:text-16",children:r("orders.shipped")})}),(0,t.jsx)("div",{className:(0,m.p)(a?"text-center":"text-right"),children:(0,t.jsx)("p",{className:"text-14 font-medium text-gray-700 lg:text-16",children:r("orders.delivered")})}),a&&(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("p",{className:"text-14 font-medium text-gray-700 lg:text-16",children:r("orders.returned")})})]})};var x=s(76901);let p=({order:e,viewOnly:r,onReturn:s,onReorder:l,showCtaButtons:u=!0,showOrderStatusBar:p=!0})=>{let{translate:b}=(0,n.A)(),{formatCurrency:g,formatLocalDate:f}=(0,i.A)(),[v,j]=(0,a.useState)({return:!1,reorder:!1}),y=(0,a.useCallback)(async()=>{j({...v,return:!0}),await s?.(),j({...v,return:!1})},[v,s]),w=(0,a.useCallback)(async()=>{j({...v,reorder:!0}),await l?.(),j({...v,reorder:!1})},[v,l]);return e?(0,t.jsxs)("div",{children:[r&&(0,t.jsxs)(c.A,{className:"mt-3",children:[(0,t.jsx)("b",{children:b("common.view.only")})," ",b("dashboard.orders.view.only.desc")]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("h1",{className:"py-6 text-18 font-extrabold text-gray-800 md:py-7 md:text-20 lg:py-9 lg:text-24",children:b("dashboard.order.details")}),u&&(0,t.jsxs)("div",{className:"hidden items-center justify-normal gap-x-3 md:flex",children:[(0,t.jsx)(x.A,{}),!r&&(0,t.jsx)(o.default,{size:"s",variant:"secondary",onClick:y,loading:v.return,children:b("orders.return")}),!r&&!e.isFromAQuote&&(0,t.jsx)(o.default,{size:"s",variant:"primary",onClick:w,loading:v.reorder,children:b("orders.reorder")})]})]}),(0,t.jsxs)("h3",{className:"text-14 text-gray-600",children:[b("dashboard.order.id"),": ",e.number]}),e.creationDate&&(0,t.jsxs)("h3",{className:"mt-4 text-14 text-gray-600",children:[b("dashboard.order.date"),": ",f(e.creationDate)]}),e.purchaseOrderNumber&&(0,t.jsxs)("h3",{className:"mt-4 text-14 text-gray-600",children:[b("dashboard.purchase.order.number"),": ",e.purchaseOrderNumber]}),p&&(0,t.jsx)("div",{className:"pb-8 pt-12 md:border-b md:border-neutral-400 md:pb-12 md:pt-[56px] lg:pb-[56px]",children:(0,t.jsx)(h,{order:e})}),u&&(0,t.jsxs)("div",{className:"flex flex-col items-center justify-normal gap-y-4 md:hidden",children:[(0,t.jsx)(x.A,{}),!r&&(0,t.jsx)(o.default,{size:"full",variant:"secondary",onClick:y,loading:v.return,children:b("orders.return")}),!r&&!e.isFromAQuote&&(0,t.jsx)(o.default,{size:"full",variant:"primary",onClick:w,loading:v.reorder,children:b("orders.reorder")})]}),(0,t.jsxs)("div",{className:(0,m.p)({"mt-8 border-t border-neutral-400 md:mt-12":!u}),children:[(0,t.jsxs)("h5",{className:"pb-7 pt-6 text-gray-700",children:[b("dashboard.items.ordered")," ",(0,t.jsxs)("span",{className:"text-gray-600",children:["(",e.items.length,")"]})]}),(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-neutral-400 p-4 text-12 font-semibold uppercase text-gray-500",children:[(0,t.jsx)("th",{className:"p-4 text-left",children:b("common.product")}),(0,t.jsx)("th",{className:"hidden p-4 text-left md:table-cell",children:b("common.sku")}),(0,t.jsx)("th",{className:"hidden p-4 text-right md:table-cell",children:b("common.qty")}),(0,t.jsx)("th",{className:"hidden p-4 text-right lg:table-cell",children:b("common.price")}),(0,t.jsx)("th",{className:"hidden p-4 text-right lg:table-cell",children:b("common.total")})]})}),(0,t.jsx)("tbody",{children:e.items.map(({id:e,images:r,name:s,sku:a,quantity:l,price:n,currency:i})=>(0,t.jsxs)("tr",{className:"border-b border-neutral-400 p-4 text-14 text-gray-600",children:[(0,t.jsx)("td",{className:"p-4 text-left",children:(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("span",{className:"relative block size-[40px]",children:(0,t.jsx)(d.A,{src:r?.[0],fill:!0,alt:s??""})}),(0,t.jsx)("span",{children:s})]})}),(0,t.jsx)("td",{className:"hidden p-4 text-left md:table-cell",children:a}),(0,t.jsx)("td",{className:"hidden p-4 text-right md:table-cell",children:l}),(0,t.jsx)("td",{className:"hidden p-4 text-right lg:table-cell",children:g(n??0,i??"USD")}),(0,t.jsx)("td",{className:"hidden p-4 text-right lg:table-cell",children:g((n??0)*(l??1),i??"USD")})]},e))})]})]}),(0,t.jsx)("div",{className:"flex justify-end pb-7 pt-6",children:(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2 lg:w-1/2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between text-14 text-gray-600",children:[(0,t.jsx)("span",{children:b("common.subtotal")}),(0,t.jsx)("span",{children:g(e.subtotal,e.currency)})]}),!!e.shippingCosts&&(0,t.jsxs)("div",{className:"flex items-center justify-between text-14 text-gray-600",children:[(0,t.jsx)("span",{children:b("common.shipping")}),(0,t.jsx)("span",{children:g(e.shippingCosts,e.currency)})]}),!!e.taxCosts&&(0,t.jsxs)("div",{className:"flex items-center justify-between text-14 text-gray-600",children:[(0,t.jsx)("span",{children:b("common.tax")}),(0,t.jsx)("span",{children:g(e.taxCosts,e.currency)})]}),!!e.discount&&(0,t.jsxs)("div",{className:"flex items-center justify-between text-14 text-gray-600",children:[(0,t.jsx)("span",{children:b("common.discount")}),(0,t.jsxs)("span",{children:["-",g(e.discount,e.currency)]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between font-medium text-gray-700",children:[(0,t.jsxs)("span",{children:[b("common.total"),":"]}),(0,t.jsx)("span",{children:g(e.total,e.currency)})]})]})})]}):(0,t.jsx)(t.Fragment,{})}},77269:(e,r,s)=>{s.d(r,{k:()=>t});let t=e=>{let r=e.variant,s=(e.price?.centAmount??r?.price?.centAmount??0)-(e.taxRate?.includedInPrice?e.taxed?.taxAmount?.centAmount??0:0),t=e.discountedPrice?.centAmount??r?.discountedPrice?.centAmount,a=e.price?.fractionDigits??r?.price?.fractionDigits??2,l=e.price?.currencyCode??r?.price?.currencyCode??"USD";return{id:e.lineItemId,url:e._url,sku:r?.sku,name:e.name,description:r?.attributes?.["Product-Specifications"],images:r?.images,quantity:e.count,price:s/Math.pow(10,a),...t?{discountedPrice:t/Math.pow(10,a)}:{},currency:l,inStock:r?.isOnStock,maxQuantity:r?.isOnStock?r.availableQuantity:0,model:r?.sku}}},67726:(e,r,s)=>{s.d(r,{x:()=>n});var t=s(75669),a=s(77269);let l=e=>"Delivered"===e.shipmentState||"Complete"===e.orderState?"Delivered":"Open"===e.orderState?"Pending":"Confirmed"===e.orderState?"Shipped"===e.shipmentState?"Shipped":"Confirmed":"Returned",n=(e,{businessUnits:r}={})=>{let s=e.sum?.currencyCode??"USD",n=l(e),{total:d,subtotal:i,tax:o,discount:c,shipping:m}=(0,t.$)(e);return{id:e.orderId??"",number:e.orderNumber??"",businessUnit:r?.find(r=>r.key===e.businessUnitKey)?.name??e.businessUnitKey??"",creationDate:e.createdAt?new Date(e.createdAt).toISOString():"",status:n,items:(e.lineItems??[]).map(a.k),currency:s,taxCosts:o.centAmount,subtotal:i.centAmount,discount:c.centAmount,shippingCosts:m.centAmount,total:d.centAmount,isFromAQuote:!!e.quoteId,purchaseOrderNumber:e.purchaseOrderNumber}}},35309:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"}))})},96904:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"}))})},1005:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))})},19311:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"}))})},74891:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))})},21413:(e,r,s)=>{s.d(r,{A:()=>a});var t=s(58009);let a=t.forwardRef(function({title:e,titleId:r,...s},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},s),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))})}};