(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2064],{28341:(e,t,o)=>{Promise.resolve().then(o.bind(o,53097)),Promise.resolve().then(o.bind(o,23066)),Promise.resolve().then(o.bind(o,4288))},23066:(e,t,o)=>{"use strict";o.d(t,{default:()=>er});var s=o(95155),i=o(12115),a=o(47234);let l=e=>{let{children:t,wrapperClassName:o,gridClassName:i}=e;return(0,s.jsx)("div",{className:o,children:(0,s.jsx)("div",{className:(0,a.p)("grid","grid-cols-12",i),children:t})})},r=e=>e?"border-accent-red border border-dashed border-2":"",c=e=>"".concat(e.mobile?"block":"hidden"," ").concat(e.tablet?"md:block":"md:hidden"," ").concat(e.desktop?"lg:block":"lg:hidden"),n=e=>{let{configuration:t,isHighlighted:o,children:i,className:l}=e,n={gridColumn:"span ".concat(t.size," / span ").concat(t.size)},d=(0,a.p)(l,r(o),c(t));return(0,s.jsx)("div",{style:n,className:d,children:i})};var d=o(81279),u=o(9087),m=o(73287),h=o(98595),f=o(42019),p=o(54843),g=o(62195),v=o(4169),x=o(82743),w=o(4190),y=o(1647),b=o(66382),j=o(1547);let k=e=>{var t;let{title:o,summary:i,link:a}=e;return(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"flex flex-col items-center pt-[60px] md:pt-[100px] lg:pt-[200px]",children:[o&&(0,s.jsx)("h1",{className:"pb-3 text-18 font-extrabold leading-normal text-gray-700 md:pb-5 md:text-20 lg:pb-6 lg:text-24",children:o}),i&&(0,s.jsx)("p",{className:"text-14 leading-loose text-gray-600 md:text-16",children:i}),a&&(0,s.jsx)("div",{className:"py-4 md:py-6 lg:py-7",children:(0,s.jsx)(j.default,{href:null!==(t=a.href)&&void 0!==t?t:"/",underlineOnHover:!1,children:(0,s.jsx)(b.default,{variant:"primary",className:"min-w-[160px] py-2 text-14 lg:py-3 lg:text-16",children:a.name})})})]})})};var N=o(40752),S=o(36607);let I=async e=>{var t,o,i,a,l,r,c,n,d;let{data:u,searchParams:m,flatCategories:h=[],treeCategories:f=[]}=e;if(!(null===(t=u.data)||void 0===t?void 0:t.dataSource))return(0,s.jsx)(s.Fragment,{});let p=null!==(r=null===(a=u.data.dataSource)||void 0===a?void 0:null===(i=a.category)||void 0===i?void 0:null===(o=i.split("/"))||void 0===o?void 0:o.at(-1))&&void 0!==r?r:"",g=h.find(e=>e.slug===p),v=f.find(e=>e.slug===p),x=(null==g?void 0:g.depth)===0,w=!!m.query,y=(null!==(c=u.categoryConfiguration)&&void 0!==c?c:[]).reduce((e,t)=>({...e,[t.key]:t}),{}),b=u.useIntermediaryCategoryPage&&x&&!m.view&&(null!==(n=null==v?void 0:null===(l=v.descendants)||void 0===l?void 0:l.length)&&void 0!==n?n:0)>=3;return(0,s.jsx)(S.default,{...u.data.dataSource,categoryConfiguration:y,categories:h,category:null!==(d=f.find(e=>e.slug===p))&&void 0!==d?d:g,displayIntermediaryPage:b&&!w})};var C=o(76046),P=o(13596),E=o(75034);let H=async e=>{let{data:t,params:o,searchParams:i,projectSettings:a}=e,{locale:l}=o,{token:r}=i,c=await P.x.composableCommerce.account.confirm({token:r}),n=c.isError&&c.error.message==="Error: URI not found: /".concat(null==a?void 0:a.projectKey,"/customers/email/confirm");if(c.isError)return(0,s.jsx)(E.default,{...t,isAlreadyVerified:n});(0,C.redirect)("/".concat(l,"/login/"))};var q=o(22526),F=o(34365),O=o(84828),R=o(92e3),_=o(3140),M=o(89930),A=o(98036),T=o(36007),D=o(36211),U=o(29469),z=o(23697),J=o(26895),W=o(48429),B=o(79254),G=o(33698),K=o(52737),V=o(4090),L=o(84718),Q=o(75732);let X=e=>{let{bgColor:t="white",space:o}=e;return(0,s.jsx)("div",{className:{white:"bg-white","neutral-200":"bg-neutral-200"}[t],style:{paddingTop:o}})};var Y=o(84674),Z=o(11835);let $=(0,o(77711).default)(()=>Promise.all([o.e(8764),o.e(8241),o.e(8834)]).then(o.bind(o,52377)),{loadableGenerated:{webpack:()=>[52377]}}),ee={"commercetools/ui/content/hero-tile":y.default,"commercetools/ui/content/content-items":e=>{let{data:t}=e;return(0,s.jsx)(f.default,{...t,items:t.items.map(e=>({...e,link:(0,p.s)(e.link)})),link:(0,p.s)(t.linkReference,t.link)})},"commercetools/ui/content/content-tiles":e=>{let{data:{asSlider:t,...o}}=e,i={...o,link:(0,p.s)(o.linkReference,o.link),items:o.items.map(e=>({...e,link:(0,p.s)(e.linkReference,e.link)}))};return t?(0,s.jsx)(g.default,{...i}):(0,s.jsx)(v.default,{...i})},"commercetools/ui/footer":e=>{let{data:t}=e;return(0,s.jsx)(w.default,{...t,links:t.links.map(e=>(0,p.s)(e.href,e.name))})},"commercetools/ui/dashboard":x.default,"commercetools/ui/not-found":e=>{let{data:{link:t,linkName:o,...i}}=e;return(0,s.jsx)(k,{...i,link:(0,p.s)(t,o)})},"commercetools/ui/content/blog":d.default,"commercetools/ui/header":N.default,"commercetools/ui/products/details":e=>{var t,o;return(null===(o=e.data.data)||void 0===o?void 0:null===(t=o.dataSource)||void 0===t?void 0:t.product)?(0,s.jsx)(G.default,{...e}):(0,C.redirect)("/404")},"commercetools/ui/products/product-list":I,"commercetools/ui/cart":F.default,"commercetools/ui/account/login":u.default,"commercetools/ui/account/verify":H,"commercetools/ui/account/verify-associate":q.default,"commercetools/ui/account/register":m.default,"commercetools/ui/account/reset-password":h.default,"commercetools/ui/quotes":O.default,"commercetools/ui/orders":R.default,"commercetools/ui/company-admin":_.default,"commercetools/ui/purchase-lists":M.default,"commercetools/ui/settings":A.default,"commercetools/ui/addresses":T.default,"commercetools/ui/purchase-list-detail":D.default,"commercetools/ui/order-detail":U.default,"commercetools/ui/quote-detail":z.default,"commercetools/ui/quote-request-detail":K.default,"commercetools/ui/checkout":J.default,"commercetools/ui/quote-checkout":V.default,"commercetools/ui/thank-you":W.default,"commercetools/ui/quote-thank-you":L.default,"commercetools/ui/products/product-slider":B.default,"commercetools/ui/products/related-products-slider":Z.default,"commercetools/ui/spacer":e=>{let{data:t}=e;return(0,s.jsx)(X,{...t})},"commercetools/ui/approval-rules":Q.default,"commercetools/ui/approval-flows":Y.default,"commercetools/ui/approval-flow-details":e=>(0,s.jsx)($,{...e})},et=(e,t)=>Object.entries(e).reduce((e,o)=>{let[s,i]=o;return"dataSourceId"===s?{...e,[s]:i,dataSource:t[i]}:Array.isArray(i)?{...e,[s]:i}:"object"==typeof i&&null!==i?{...e,[s]:et(i,t)}:{...e,[s]:i}},{}),eo=new Uint32Array(65536),es=e=>{let{data:t}=e;return(0,s.jsx)(s.Fragment,{})},ei=e=>{let{data:t,params:o,searchParams:i,dataSources:a,isHighlighted:l,projectSettings:n,flatCategories:d,treeCategories:u}=e,m=ee[t.tasticType],h=a?et(t.configuration,a):t.configuration;return(0,s.jsx)("div",{id:t.tasticId,className:"".concat(r(l)," ").concat(c(t.configuration)),children:m?(0,s.jsx)(m,{data:h,params:o,searchParams:i,projectSettings:n,flatCategories:d,treeCategories:u}):(0,s.jsx)(es,{data:t})})},ea=e=>{let{data:t,params:o,searchParams:i,currentHighlight:c,gridClassName:d="",wrapperClassName:u="",projectSettings:m,flatCategories:h,treeCategories:f}=e,{page:p,data:g}=t,v=[p.sections.head,p.sections.main,p.sections.footer],x={head:"",main:"grow body-section",footer:""};return(0,s.jsx)("div",{className:"flex min-h-screen flex-col items-stretch justify-start",children:v.filter(Boolean).map(e=>{var t;return(0,s.jsx)(l,{gridClassName:d,wrapperClassName:(0,a.p)("relative w-full",u,r(c===e.sectionId),x[e.sectionId]),children:null==e?void 0:null===(t=e.layoutElements)||void 0===t?void 0:t.map(e=>(0,s.jsx)(n,{configuration:e.configuration,isHighlighted:c===e.layoutElementId,children:e.tastics.map(e=>(0,s.jsx)(ei,{data:e,params:o,searchParams:i,dataSources:g.dataSources,isHighlighted:c===e.tasticId,projectSettings:m,flatCategories:h,treeCategories:f},e.tasticId))},e.layoutElementId))},e.sectionId)})})};class el{connect(){this.webSocket=new WebSocket((this.context.isDebug?"ws://":"wss://")+"".concat(this.context.customer,".frontastic.io")+(this.context.isDebug?".local":"")+":8080/ws?".concat(this.context.endpoint,"=").concat(this.context.previewId)),this.webSocket.onmessage=this.handleMessage.bind(this),this.webSocket.onopen=()=>{this.connectionFails=0,this.connected=!0},this.webSocket.onclose=()=>{this.webSocket=null,this.connected=!1,setTimeout(this.connect.bind(this),1e3*Math.min(++this.connectionFails,30))}}handleMessage(e){let t=JSON.parse(e.data);if("Ping"!==t.Name){if(this.messageHandlers[t.Name])return this.messageHandlers[t.Name](t.Payload,t);console.info("Unknown WebSocket message",t)}}sendMessage(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.Channel=this.context.previewId,e.Payload=e.Payload||[],this.connected)return this.webSocket.send(JSON.stringify(e));t&&setTimeout(()=>{this.sendMessage(e,!0)},100)}constructor(e,t={}){if(this.context={customer:"demo",idDebug:!1,endpoint:"preview",...e},this.messageHandlers=t,!this.context.previewId)throw Error("context.previewId is required");this.webSocket=null,this.connected=!1,this.connectionFails=0,this.connect()}}let er=e=>{var t,o;let{data:a,params:l,searchParams:r}=e,[c,n]=(0,i.useState)(),d=(0,i.useRef)(null),u=null!==(o=null===(t=a.previewContext)||void 0===t?void 0:t.customerName)&&void 0!==o?o:"demo",m=()=>{window.location=window.location},h=()=>n(void 0);return((0,i.useEffect)(()=>{(null==a?void 0:a.previewId)&&!d.current&&(d.current=new el({previewId:a.previewId,customer:u},{Refresh:m,Highlight:e=>{let{item:t}=e;c!==t&&n(t)},EndHighlight:h}),d.current.connect())},[c,null==a?void 0:a.previewId,u]),a)?(0,s.jsx)(ea,{data:a,params:l,searchParams:r,currentHighlight:c}):(0,s.jsx)(s.Fragment,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[3567,5804,2920,1128,8441,1517,7358],()=>t(28341)),_N_E=e.O()}]);
//# sourceMappingURL=page-f081f4e3bd03bd67.js.map