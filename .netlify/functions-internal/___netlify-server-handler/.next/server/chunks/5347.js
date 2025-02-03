"use strict";exports.id=5347,exports.ids=[5347],exports.modules={3486:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(45512),r=s(58009),l=s(85762),n=s(54047),d=s(20231);let i=({disabled:e,readOnly:t,valid:s,error:a})=>e?"disabled":t?"readOnly":s?"valid":a?"error":"default";var c=s(38550);let o=(e,{fitContent:t})=>{let s=(0,c.F)({default:"border-gray-300 bg-white text-gray-600 focus:border-neutral-800 active:border-neutral-800",disabled:"cursor-not-allowed border-neutral-200 bg-neutral-200 text-neutral-800 focus:border-neutral-200",readOnly:"cursor-default border-neutral-200 bg-neutral-200 text-gray-600 focus:border-neutral-200 active:border-neutral-800",error:"border-red-500 bg-white text-gray-600 focus:border-red-500 active:border-red-500",valid:"border-green-500 bg-white text-gray-600 focus:border-green-500 active:border-green-500"});return{textAreaClassName:(0,l.p)("flex w-full resize-none rounded-sm border px-3 py-[10px] text-14 focus:outline-none focus:ring-0",s(e),{"overflow-hidden":t})}};var m=s(37897);let u=({value:e,defaultValue:t,onChange:s,label:c="",disabled:u=!1,readOnly:x=!1,valid:p=!1,error:g="",required:h=!1,showOptionalLabel:b=!1,requiredStyle:y="asterisk",className:j="",fitContent:f=!1,...v})=>{let[N,k]=(0,n.A)(e,t),A=(0,r.useRef)(null),{textAreaClassName:w}=o(i({disabled:u,readOnly:x,valid:p,error:g}),{fitContent:f}),q=(0,r.useCallback)(()=>{f&&A.current&&(A.current.style.height=`${A.current.scrollHeight}px`)},[f]),{ref:O}=(0,d.A)(q),S=(0,r.useCallback)(e=>{q(),k(e.target.value),s?.(e)},[s,k,q]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(m.A,{required:h,showOptionalLabel:b,requiredStyle:y,children:c}),(0,a.jsx)("textarea",{ref:e=>{A.current=e,O.current=e},className:(0,l.p)(w,j),value:N,readOnly:x,disabled:u,required:h,onChange:S,...v}),g&&(0,a.jsx)("span",{className:"mt-3 block text-12 font-medium text-red-500",children:g})]})}},19728:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(45512),r=s(85762),l=s(89030),n=s(80034),d=s(42378);let i=({shipping:e,subtotal:t,total:s,discount:i,tax:c,currency:o="USD",loading:m=!1,classNames:u={},isShippingEstimated:x=!0})=>{let{translate:p}=(0,n.A)(),{formatCurrency:g}=(0,d.A)(),h=(0,r.p)("mt-4 flex items-center justify-between border-t border-neutral-400 pt-4 font-medium md:mt-6",u.totalAmount),b=(0,r.p)("grid gap-2",u.subCostsContainer),y=(0,r.p)("flex items-center justify-between capitalize text-gray-600",u.subCosts),j=[{key:"subtotal",label:p("cart.subtotal"),value:t},{key:"shipping",label:p(x?"cart.shipping.estimate":"cart.shipping"),value:e},{key:"tax",label:p("cart.tax"),value:c},{key:"discount",label:p("cart.discount"),value:-i}];return(0,a.jsxs)("div",{className:u.container,children:[(0,a.jsx)("div",{className:b,children:j.filter(({value:e})=>0!=e).map(({key:e,label:t,value:s})=>(0,a.jsxs)("div",{className:y,children:[(0,a.jsx)(l.A,{fontSize:14,className:"text-14 md:text-16",asSkeleton:m,children:t}),(0,a.jsx)(l.A,{fontSize:14,className:"text-14 md:text-16",asSkeleton:m,children:g(s,o)})]},e))}),(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)(l.A,{className:"text-16 text-gray-700 md:text-18",fontWeight:"medium",asSkeleton:m,children:`${p("cart.total")}:`}),(0,a.jsx)(l.A,{className:"text-16 text-gray-700 md:text-18",fontWeight:"medium",asSkeleton:m,children:g(s,o)})]})]})}},93001:(e,t,s)=>{s.d(t,{s:()=>a});let a={dashboard:"/dashboard",companyAdmin:"/company-admin",shoppingLists:"/purchase-lists",addresses:"/addresses",quotes:"/quotes",orders:"/orders",settings:"/settings",approvalRules:"/approval-rules",approvalFlows:"/approval-flows",shoppingListDetail:e=>`/purchase-list/${e.replace(/\s+/g,"-")}`,quoteDetail:e=>`/quote/${e.replace(/\s+/g,"-")}`,quoteRequestDetail:e=>`/quote-request/${e.replace(/\s+/g,"-")}`,orderDetail:e=>`/order/${e.replace(/\s+/g,"-")}`,approvalRuleDetail:e=>`/approval-rule/${e.replace(/\s+/g,"-")}`,approvalFlowDetail:e=>`/approval-flow/${e.replace(/\s+/g,"-")}`}},95347:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(45512);s(58009);var r=s(79334),l=s(71896),n=s(65593),d=s(80034),i=s(688);let c=({account:e})=>{let{translate:t}=(0,d.A)();return(0,a.jsxs)("div",{className:"border-b border-b-neutral-400 py-1 text-center lg:border-none lg:pt-0 lg:text-left",children:[(0,a.jsx)("p",{className:"font-semibold text-gray-800 md:text-20 lg:text-24",children:t("thank-you.quote.request.submitted")}),(0,a.jsxs)("p",{className:"mt-2 text-14 font-normal text-gray-600 md:text-16",children:[t("thank-you.quote.request.submitted.desc")," ",(0,a.jsx)("b",{className:"font-semibold",children:e.email}),"."]}),(0,a.jsx)(i.default,{className:"mb-3 mt-6 w-full md:w-[228px] lg:hidden",variant:"secondary",size:"m",disabled:!0,children:t("thank-you.download.invoice")})]})};var o=s(3486);let m=({quoteRequestId:e,deliveryAddress:t,deliveryMethod:s,paymentMethod:r,billingAddress:l,comment:n,purchaseOrderNumber:i})=>{let{translate:c}=(0,d.A)();return(0,a.jsxs)("div",{className:"flex flex-col gap-4 border-b border-neutral-400 py-6 text-14 md:gap-6 md:text-16",children:[(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"text-gray-600 md:w-[136px]",children:[c("thank-you.quote.request.id"),": "]}),(0,a.jsx)("span",{className:"font-semibold leading-loose text-gray-700",children:e})]}),i&&(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"text-gray-600 md:min-w-[136px]",children:[c("checkout.purchase.order"),": "]}),(0,a.jsx)("span",{className:"font-semibold leading-loose text-gray-700",children:i})]}),s&&(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"text-gray-600 md:w-[136px]",children:[c("thank-you.delivery.method"),": "]}),(0,a.jsx)("span",{className:"font-semibold leading-loose text-gray-700",children:s})]}),t&&(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"text-gray-600 md:w-[136px]",children:[c("thank-you.delivery.address"),": "]}),(0,a.jsxs)("p",{className:"inline font-normal leading-loose text-gray-700 md:hidden",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700",children:t.name}),t.careOf?` (c/o ${t.careOf})`:"",", ",t.zip," ",t.city,", ",t.country]}),(0,a.jsxs)("p",{className:"hidden leading-loose text-gray-700 md:inline",children:[(0,a.jsxs)("span",{className:"font-semibold text-gray-700",children:[t.name," ",t.careOf?`(c/o ${t.careOf})`:""]}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"block md:mt-1 lg:mt-2",children:[t.zip," ",t.city,", ",t.country]})]})]}),l&&(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"font-normal text-gray-600 md:w-[136px]",children:[c("thank-you.billing.address"),": "]}),(0,a.jsxs)("p",{className:"inline font-normal leading-loose md:hidden",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700",children:l.name}),l.careOf?` (c/o ${l.careOf})`:"",", ",l.zip," ",l.city,", ",l.country]}),(0,a.jsxs)("p",{className:"hidden leading-loose md:inline",children:[(0,a.jsxs)("span",{className:"font-semibold",children:[l.name," ",l.careOf?`(c/o ${l.careOf})`:""]}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"block md:mt-1 lg:mt-2",children:[l.zip," ",l.city,", ",l.country]})]})]}),r&&(0,a.jsxs)("div",{className:"gap-1 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"text-gray-600 md:w-[136px]",children:[c("thank-you.payment.method"),": "]}),(0,a.jsx)("span",{className:"font-semibold leading-loose text-gray-700",children:r})]}),n&&(0,a.jsxs)("div",{className:"gap-1 text-gray-600 md:flex md:gap-5",children:[(0,a.jsxs)("span",{className:"md:w-[136px]",children:[c("common.comment"),": "]}),(0,a.jsx)("div",{className:"grow",children:(0,a.jsx)(o.A,{className:"min-h-[100px]",value:n})})]})]})},u=({onReviewQuoteClick:e})=>{let{translate:t}=(0,d.A)();return(0,a.jsxs)("div",{className:"mt-2 border-b border-neutral-400 pb-6 pt-4 lg:border-none lg:pb-0",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700 md:text-18 lg:text-20",children:t("thank-you.quotes")}),(0,a.jsx)("p",{className:"mt-2 text-14 text-gray-700 md:text-16",children:t("thank-you.manage.quotes")}),(0,a.jsx)(i.default,{variant:"primary",size:"m",className:"mt-6 w-full md:w-[228px]",onClick:e,children:t("thank-you.review.quote")})]})};var x=s(42378),p=s(4979),g=s(19728),h=s(41866);let b=({lineItems:e,transaction:t})=>{let{translate:s}=(0,d.A)(),{formatCurrency:r}=(0,x.A)();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"lg:hidden",children:s("thank-you.quote.summary")}),(0,a.jsx)("h5",{className:"hidden lg:block lg:text-18",children:s("thank-you.quote.items")}),(0,a.jsx)("div",{className:"lg:hidden",children:e.map(({id:e,name:t,price:s,currency:l,quantity:n,images:d})=>(0,a.jsxs)("div",{className:"flex items-center gap-4 border-b border-neutral-400 py-4 md:gap-8",children:[(0,a.jsx)("div",{className:"relative h-[104px] w-[89px] shrink-0",children:(0,a.jsx)(p.A,{src:d?.[0],fill:!0,style:{objectFit:"contain"},alt:t})}),(0,a.jsxs)("div",{className:"flex grow items-center justify-between overflow-hidden",children:[(0,a.jsxs)("div",{className:"max-w-full grow",children:[(0,a.jsx)("p",{className:"truncate text-12 text-gray-700 md:text-14",children:t}),(0,a.jsx)("p",{className:"mt-2 text-12 font-medium text-gray-700 md:hidden",children:r(s,l)}),(0,a.jsxs)("span",{className:"mt-3 block text-14 text-gray-600 md:mt-2",children:["x ",n]})]}),(0,a.jsx)("span",{className:"hidden text-gray-700 md:block",children:r(s,l)})]})]},e))}),(0,a.jsxs)(h.A,{className:"mt-6 hidden border-none pb-4 lg:block",defaultIsExpanded:!0,children:[(0,a.jsx)(h.A.Button,{defaultSpacing:!1,className:"border-t border-neutral-400 pt-4",children:s("thank-you.your.order")}),(0,a.jsx)(h.A.Panel,{defaultSpacing:!1,className:"py-4",children:(0,a.jsx)("div",{className:"hidden pt-2 lg:block",children:(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[e.slice(0,3).map(({id:e,images:t,name:s})=>(0,a.jsx)("div",{className:"relative size-[88px]",children:(0,a.jsx)(p.A,{src:t?.[0],fill:!0,style:{objectFit:"contain"},alt:s})},e)),e.length>3&&(0,a.jsxs)("div",{className:"pl-1 text-14 text-gray-600",children:["+",e.length-3]})]})})})]}),(0,a.jsx)("div",{className:"pt-4 lg:border-t lg:border-neutral-400 lg:pt-6",children:(0,a.jsx)(g.A,{subtotal:t.subtotal,shipping:t.shipping,isShippingEstimated:!1,tax:t.taxes,discount:t.discounts,total:t.total,currency:t.currency,classNames:{totalAmount:"pt-[0px] border-transparent lg:pt-4 lg:border-neutral-400"}})})]})},y=({account:e,quoteRequestId:t,deliveryAddress:s,deliveryMethod:r,paymentMethod:l,billingAddress:n,comment:d,onReviewQuoteClick:i,transaction:o,lineItems:x=[],purchaseOrderNumber:p})=>(0,a.jsxs)("div",{className:"min-h-screen items-start gap-6 px-4 md:px-5 lg:flex lg:bg-neutral-200 lg:px-12 lg:py-9",children:[(0,a.jsxs)("div",{className:"lg:grow lg:rounded-lg lg:bg-white lg:p-6 lg:pb-9",children:[(0,a.jsx)(c,{account:e}),(0,a.jsx)(m,{quoteRequestId:t,deliveryMethod:r,deliveryAddress:s,paymentMethod:l,billingAddress:n,comment:d,purchaseOrderNumber:p}),(0,a.jsx)(u,{onReviewQuoteClick:i})]}),(0,a.jsx)("div",{className:"pb-6 pt-4 md:pt-6 lg:w-[432px] lg:shrink-0 lg:rounded-lg lg:bg-white lg:p-9",children:(0,a.jsx)(b,{lineItems:x,transaction:o})})]});var j=s(62999),f=s(1916),v=s(65138),N=s(75669),k=s(77269),A=s(93001);let w=()=>{let{translate:e}=(0,d.A)(),t=(0,j.A)(),{account:s}=(0,f.A)(),i=(0,r.useSearchParams)().get("quoteRequestId"),{selectedBusinessUnit:c,selectedStore:o}=(0,n.rW)(),{quoteRequests:m}=(0,l.A)({ids:[i],businessUnitKey:c?.key,storeKey:o?.key}),u=m.items?.[0];if(!u)return(0,a.jsx)(a.Fragment,{});let x=(0,N.$)(u);return(0,a.jsx)("div",{children:(0,a.jsx)(y,{account:{email:s?.email??""},quoteRequestId:i??"",deliveryAddress:(0,v.v)(u.shippingAddress),billingAddress:(0,v.v)(u.billingAddress),comment:u.buyerComment,paymentMethod:e("thank-you.payment.purchase.order",{values:{number:u.purchaseOrderNumber??""}}),transaction:{subtotal:x.subtotal.centAmount,shipping:x.shipping.centAmount,discounts:x.discount.centAmount,taxes:x.tax.centAmount,total:x.total.centAmount,currency:x.total.currencyCode},lineItems:(u.lineItems??[]).map(k.k),onReviewQuoteClick:()=>t.push(A.s.quoteRequestDetail(i??"")),purchaseOrderNumber:u.purchaseOrderNumber})})}},77269:(e,t,s)=>{s.d(t,{k:()=>a});let a=e=>{let t=e.variant,s=(e.price?.centAmount??t?.price?.centAmount??0)-(e.taxRate?.includedInPrice?e.taxed?.taxAmount?.centAmount??0:0),a=e.discountedPrice?.centAmount??t?.discountedPrice?.centAmount,r=e.price?.fractionDigits??t?.price?.fractionDigits??2,l=e.price?.currencyCode??t?.price?.currencyCode??"USD";return{id:e.lineItemId,url:e._url,sku:t?.sku,name:e.name,description:t?.attributes?.["Product-Specifications"],images:t?.images,quantity:e.count,price:s/Math.pow(10,r),...a?{discountedPrice:a/Math.pow(10,r)}:{},currency:l,inStock:t?.isOnStock,maxQuantity:t?.isOnStock?t.availableQuantity:0,model:t?.sku}}}};