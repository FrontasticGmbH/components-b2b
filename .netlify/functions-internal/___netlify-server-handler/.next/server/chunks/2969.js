"use strict";exports.id=2969,exports.ids=[2969],exports.modules={74071:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(58009),r=t(77524),i=t(35032),n=t(19217);let o=({businessUnitKey:e,filters:{searchQuery:s,status:t,cursor:o}={}})=>{let{data:d,...l}=(0,r.Ay)(e?["/action/business-unit/queryApprovalFlows",e,s,t]:null,()=>n.x.composableCommerce.businessUnit.queryApprovalFlows({businessUnitKey:e,approvalFlowIds:[...s?[s]:[]],approvalFlowStatus:[...t?[t]:[]],cursor:o,sortAttributes:[{createdAt:"desc"}]})),p=!e||l.isLoading,{mutate:u}=(0,i.iX)(),c=(0,a.useCallback)(()=>{u(e=>"object"==typeof e&&e?.[0].startsWith("/action/business-unit/queryApprovalFlows"),void 0,{revalidate:!0})},[u]),m=d?.isError?[]:d?.data?.items??[],A=d?.isError?0:d?.data.total??0,[y,h]=d?.isError?[void 0,void 0]:[d?.data.previousCursor,d?.data.nextCursor];return{approvalFlows:m,isLoading:p,totalItems:A,previousCursor:y,nextCursor:h,approveApprovalFlow:(0,a.useCallback)(async s=>{if(!e)return;let t=await n.x.composableCommerce.businessUnit.approveApprovalFlow({approvalFlowId:s},{approvalFlowId:s});return!t?.isError&&t.data.approvalFlowId&&c(),t.isError?null:t.data},[e,c]),rejectApprovalFlow:(0,a.useCallback)(async(s,t)=>{if(!e)return;let a=await n.x.composableCommerce.businessUnit.rejectApprovalFlow({approvalFlowId:s,reason:t??""},{approvalFlowId:s,reason:t??""});return!a?.isError&&a.data.approvalFlowId&&c(),a.isError?null:a.data},[e,c]),mutateAll:c}}},62969:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(45512),r=t(58009),i=t(62999),n=t(98326),o=t(44223),d=t(65138),l=t(69427),p=t(72190),u=t(77269),c=t(24118),m=t(27034),A=t(80034),y=t(65593),h=t(1916),v=t(84357),b=t(74071),g=t(33211),w=t(42117);let k=()=>{let{translate:e}=(0,A.A)(),{selectedBusinessUnit:s,selectedStore:t}=(0,y.rW)(),{checkout:a}=(0,l.A)(s?.key,t?.key);return[{id:"purchase.order",name:`${e("checkout.purchase.order")} (PO)`,description:e("checkout.purchase.order.desc"),image:{src:"",className:""},makePayment:async e=>(await a(e)).orderId}]},C=({data:e})=>{let s=(0,i.A)(),{projectSettings:t}=(0,g.A)(),{account:C}=(0,h.A)(),{translate:I}=(0,A.A)(),{addAddress:F}=(0,p.A)(),{selectedBusinessUnit:x,selectedStore:f}=(0,y.rW)(),{mutateAll:E}=(0,b.A)({businessUnitKey:x?.key}),{cart:U,updateCart:S,setShippingMethod:M,redeemDiscount:P,removeDiscount:j}=(0,l.A)(x?.key,f?.key),D=k(),[q,K]=(0,r.useState)(),[L,R]=(0,r.useState)({});return(0,a.jsx)(n.A,{initialData:{shippingAddress:U?.shippingAddress&&!(0,v.R)(U.shippingAddress)?(0,d.v)(U?.shippingAddress):void 0,billingAddress:U?.billingAddress&&!(0,v.R)(U.billingAddress)?(0,d.v)(U?.billingAddress):void 0,shippingMethodId:U?.shippingInfo?.shippingMethodId},paymentMethods:D,discounts:(U?.discountCodes??[]).map(({discountId:e,name:s,code:t})=>({name:s??"",code:t??"",onRemove:async()=>!!(await j(e??"")).cartId})),transaction:{subtotal:U?.transaction.subtotal.centAmount??0,discounts:U?.transaction.discount.centAmount??0,shipping:{isEstimated:!U?.shippingInfo,amount:U?.transaction.shipping.centAmount??0},taxes:U?.transaction.tax.centAmount??0,total:U?.transaction.total.centAmount??0,currency:U?.transaction.total.currencyCode??"USD"},translations:{review:I("checkout.review.order")},products:(U?.lineItems??[]).map(u.k),addresses:x?.addresses??[],shippingMethods:(U?.availableShippingMethods??[]).map(c.k),countryOptions:(t?.countries??[]).map(w.D).map(({name:e,code:s,states:t})=>({name:e,value:s,states:t.map(({name:e,code:s})=>({name:e,value:s}))})),termsAndConditionsLink:(0,o.s)(e.termsAndConditionsLink),onAddAddress:async e=>!!x?.key&&!!(await F({...(0,d.l)(e),businessUnitKey:x?.key})).businessUnitId,onApplyDiscount:async e=>!!(await P(e)).cartId,onCompleteAddresses:async(e,s)=>!!C&&(await S({email:C.email,shipping:(0,d.l)(e),billing:(0,d.l)(s)})).success,onCompleteShipping:async e=>!!(await M(e)).cartId,onCompletePayment:async(e,s)=>{let t=D.find(s=>s.id===e);return!!t&&(K(t),R(s),!0)},onSubmitPurchase:async()=>{if(!q)return!1;let e=await q.makePayment(L);return e?(E(),s.push(`/thank-you?orderId=${e}`)):m.A.error(I("common.something.went.wrong"),{position:"top-right"}),!!e}})}}};