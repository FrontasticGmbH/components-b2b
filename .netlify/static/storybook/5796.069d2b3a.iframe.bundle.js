"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[5796],{"./src/components/atoms/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_button});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),skeleton=__webpack_require__("./src/components/atoms/skeleton/index.tsx"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),loading_icon=__webpack_require__("./src/components/atoms/loading-icon/index.tsx"),__jsx=react.createElement;const FeedbackIconLayer=({loading,variant="primary"})=>{const iconInWhite="primary"==variant||"warning"==variant,layerClassName=(0,classnames.p)("absolute left-0 top-0 grid size-full items-center justify-center",{primary:"bg-secondary",warning:"bg-red-600"}[variant]??"bg-white"),checkIconClassName=(0,classnames.p)("w-5",{"text-white":iconInWhite}),loadingIconClassName=iconInWhite?"fill-white":"fill-gray-700";return __jsx("span",{"data-testid":"feedback-icon-layer",className:layerClassName},loading?__jsx(loading_icon.A,{svgWidth:20,svgHeight:20,className:loadingIconClassName}):__jsx(CheckIcon.A,{"data-testid":"added-svg",className:checkIconClassName}))},feedback_icon_layer=FeedbackIconLayer;FeedbackIconLayer.__docgenInfo={description:"",methods:[],displayName:"FeedbackIconLayer",props:{loading:{required:!1,tsType:{name:"ButtonProps['loading']",raw:"ButtonProps['loading']"},description:""},variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};var cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=({variant="primary",size="s",className="",includesIcon,isIconOnly,iconPosition,loading,asSkeleton=!1})=>{const resolveButtonVariant=(0,cva.F)({intent:{primary:["bg-primary text-white","hover:bg-secondary hover:shadow-button hover:disabled:shadow-none","active:bg-accent-blue","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],secondary:["border border-gray-700 bg-white text-gray-700","hover:bg-neutral-300 hover:shadow-button hover:disabled:shadow-none","active:bg-neutral-400","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-gray-300 disabled:bg-white disabled:text-gray-400"],warning:["bg-red-500 text-white","hover:bg-red-600 hover:shadow-button hover:disabled:shadow-none","active:bg-red-300 active:text-gray-700","focus:outline-[3px] focus:outline-gray-700","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],underlined:["text-gray-700 underline underline-offset-2","hover:text-gray-500","active:text-primary","focus:text-blue-700 focus:decoration-blue-300 focus:decoration-[3px] focus:outline-none","disabled:text-gray-400"],ghost:"disabled:text-neutral-400"},size:{xs:"px-3 py-2 text-12",s:"px-6 py-2 text-14",m:"px-9 py-3 text-14",l:"px-12 py-3 text-16",fit:"p-0",full:"w-full py-3",icon:{xs:"p-2",s:"p-[10px]",m:"p-3",l:"p-[14px]"}}}),resolveIconVariant=(0,cva.F)({size:{xs:"size-3",s:"size-4",m:"size-[18px]",l:"size-5"}});return{buttonClassName:(0,classnames.p)(resolveButtonVariant(isIconOnly?`size.icon.${size}`:`size.${size}`),{"flex items-center gap-1":includesIcon},{"grid items-center justify-center":isIconOnly},{"flex-row-reverse":includesIcon&&"left"===iconPosition},{"cursor-not-allowed":loading},"relative overflow-hidden rounded-md font-medium leading-4 transition disabled:pointer-events-none",asSkeleton?"relative":resolveButtonVariant(`intent.${variant}`),className),iconClassName:resolveIconVariant(`size.${size}`)}},_excluded=["Icon","added","loading","children","className","disabled","asSkeleton","iconPosition","variant","size"];var button_jsx=react.createElement;const Button=_ref=>{let{Icon,added,loading,children,className,disabled,asSkeleton=!1,iconPosition="right",variant="primary",size="underlined"===variant?"fit":"s"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{buttonClassName,iconClassName}=hooks_useClassNames({variant,size,className,includesIcon:!!Icon&&!!children,isIconOnly:!!Icon&&!children,iconPosition,loading,asSkeleton});return button_jsx("button",(0,esm_extends.A)({},props,{className:buttonClassName,disabled:disabled||loading}),(loading||added)&&button_jsx(feedback_icon_layer,{loading,variant}),children,Icon&&button_jsx(Icon,{className:iconClassName}),asSkeleton&&button_jsx(skeleton.A,{"data-testid":"skeleton"}))},atoms_button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underlined' | 'ghost' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underlined'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'fit' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"variant === 'underlined' ? 'fit' : 's'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},Icon:{required:!1,tsType:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<\n  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n    title?: string | undefined;\n    titleId?: string | undefined;\n  } & React.RefAttributes<SVGSVGElement>\n>",elements:[{name:"intersection",raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n  title?: string | undefined;\n  titleId?: string | undefined;\n} & React.RefAttributes<SVGSVGElement>",elements:[{name:"Omit",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},{name:"literal",value:"'ref'"}],raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'>"},{name:"signature",type:"object",raw:"{\n  title?: string | undefined;\n  titleId?: string | undefined;\n}",signature:{properties:[{key:"title",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"titleId",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}}]}},{name:"ReactRefAttributes",raw:"React.RefAttributes<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},added:{required:!1,tsType:{name:"boolean"},description:""},asSkeleton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/atoms/loading-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const LoadingIcon=({svgWidth,svgHeight,className="fill-white"})=>__jsx("div",{"data-testid":"loading-svg",className:"relative",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth,height:svgWidth,viewBox:"0 0 20 20",fill:"none"},__jsx("path",{className,opacity:"0.5",d:"M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"})),__jsx("span",{className:"absolute right-0 top-0 flex animate-spin justify-end",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth/2,height:svgHeight/2,viewBox:"0 0 10 10",fill:"none"},__jsx("path",{className,d:"M8 10H10C10 8.68678 9.74134 7.38642 9.2388 6.17317C8.73625 4.95991 7.99965 3.85752 7.07107 2.92893C6.14248 2.00035 5.04009 1.26375 3.82683 0.761205C2.61358 0.258658 1.31322 0 0 0V2C2.12173 2 4.15656 2.84285 5.65685 4.34315C7.15715 5.84344 8 7.87827 8 10Z"})))),__WEBPACK_DEFAULT_EXPORT__=LoadingIcon;LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon",props:{svgWidth:{required:!0,tsType:{name:"number"},description:""},svgHeight:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fill-white'",computed:!1}}}}},"./src/components/atoms/tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>tag});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=variant=>{const resolveVariant=(0,cva.F)({intent:{primary:"bg-blue-100 text-blue-600",secondary:"bg-neutral-200 text-primary",warning:"bg-yellow-100 text-yellow-700",success:"bg-green-100 text-green-700",danger:"bg-red-100 text-red-600"}});return{className:(0,classnames.p)("w-fit rounded-md px-2 py-1 text-12 font-medium",resolveVariant(`intent.${variant}`))}};var __jsx=react.createElement;const Tag=({children,variant="primary",className=""})=>{const{className:tagClassName}=hooks_useClassNames(variant);return __jsx("div",{"data-testid":"tag",className:(0,classnames.p)(tagClassName,className)},children)},tag=Tag;Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'warning' | 'danger' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}}},"./src/components/molecules/empty-state/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/classnames/classnames/index.ts"),_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/loading-icon/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const EmptyState=({children,header,image,className="",isLoading})=>__jsx("div",{className:(0,_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_2__.p)("mx-auto flex max-w-lg flex-col px-6 py-12 text-center",className)},isLoading?__jsx("div",{className:"flex w-full justify-center"},__jsx(_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_1__.A,{svgWidth:20,svgHeight:20,className:"fill-gray-700"})):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,image&&__jsx("div",{className:"mb-6 size-32"},image),header&&__jsx("h2",{className:"mb-6 text-2xl"},header)),__jsx("div",null,children)),__WEBPACK_DEFAULT_EXPORT__=EmptyState;EmptyState.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},header:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/components/pages/dashboard/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>DashboardLinks});const DashboardLinks={dashboard:"/dashboard",companyAdmin:"/company-admin",shoppingLists:"/purchase-lists",addresses:"/addresses",quotes:"/quotes",orders:"/orders",settings:"/settings",approvalRules:"/approval-rules",approvalFlows:"/approval-flows",shoppingListDetail:id=>`/purchase-list/${id.replace(/\s+/g,"-")}`,quoteDetail:id=>`/quote/${id.replace(/\s+/g,"-")}`,quoteRequestDetail:id=>`/quote-request/${id.replace(/\s+/g,"-")}`,orderDetail:id=>`/order/${id.replace(/\s+/g,"-")}`,approvalRuleDetail:id=>`/approval-rule/${id.replace(/\s+/g,"-")}`,approvalFlowDetail:id=>`/approval-flow/${id.replace(/\s+/g,"-")}`}},"./src/components/pages/dashboard/pages/orders/components/orders-table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>orders_table});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),table=__webpack_require__("./src/components/organisms/table/index.tsx"),useTranslation=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),atoms_button=__webpack_require__("./src/components/atoms/button/index.tsx"),atoms_link=__webpack_require__("./src/components/atoms/link/index.tsx"),useFormat=__webpack_require__("./src/hooks/useFormat/index.ts"),tag=__webpack_require__("./src/components/atoms/tag/index.tsx"),__jsx=react.createElement;const OrderStatusTag=({status})=>{const{translate}=(0,useTranslation.A)();return __jsx(tag.A,{className:"capitalize",variant:{Pending:"warning",Confirmed:"primary",Cancelled:"danger",Returned:"secondary",Delivered:"success",Shipped:"primary"}[status]},translate(`orders.status.${status.toLowerCase()}`))},order_status_tag=OrderStatusTag;OrderStatusTag.__docgenInfo={description:"",methods:[],displayName:"OrderStatusTag",props:{status:{required:!0,tsType:{name:"union",raw:"'Pending' | 'Confirmed' | 'Cancelled' | 'Returned' | 'Delivered' | 'Shipped'",elements:[{name:"literal",value:"'Pending'"},{name:"literal",value:"'Confirmed'"},{name:"literal",value:"'Cancelled'"},{name:"literal",value:"'Returned'"},{name:"literal",value:"'Delivered'"},{name:"literal",value:"'Shipped'"}]},description:""}}};var constants=__webpack_require__("./src/components/pages/dashboard/constants/index.ts"),accordion=__webpack_require__("./src/components/molecules/accordion/index.tsx"),orders_table_jsx=react.createElement;const OrdersTable=({orders,pagination})=>{const{translate}=(0,useTranslation.A)(),{formatCurrency}=(0,useFormat.A)();return orders_table_jsx(table.A,null,orders_table_jsx(table.A.Container,{className:"hidden table-fixed rounded-md md:table"},orders_table_jsx(table.A.Head,{className:"border-b text-12 font-bold"},orders_table_jsx(table.A.Cell,{isHeadCell:!0},translate("common.status")),orders_table_jsx(table.A.Cell,{isHeadCell:!0},translate("common.id")),orders_table_jsx(table.A.Cell,{isHeadCell:!0},translate("common.date")),orders_table_jsx(table.A.Cell,{isHeadCell:!0},translate("common.business.unit")),orders_table_jsx(table.A.Cell,{isHeadCell:!0,className:"text-right"},translate("common.total")),orders_table_jsx(table.A.Cell,{isButtonsHead:!0})),orders_table_jsx(table.A.Body,null,(orders??[]).map((({id,number,status,creationDate,businessUnit,total,currency})=>orders_table_jsx(table.A.Row,{key:id},orders_table_jsx(table.A.Cell,null,orders_table_jsx("div",{className:"flex items-center justify-between gap-2"},orders_table_jsx(order_status_tag,{status}))),orders_table_jsx(table.A.Cell,null,orders_table_jsx("span",{className:"block max-w-full truncate"},number)),orders_table_jsx(table.A.Cell,null,new Date(creationDate).toLocaleDateString()),orders_table_jsx(table.A.Cell,null,orders_table_jsx("p",{className:"w-36 truncate lg:w-full"},businessUnit)),orders_table_jsx(table.A.Cell,{className:"text-right"},formatCurrency(total,currency)),orders_table_jsx(table.A.Cell,{isButtonsCell:!0},orders_table_jsx("div",{className:"flex justify-end"},orders_table_jsx(atoms_link.A,{href:constants.s.orderDetail(id),underlineOnHover:!1},orders_table_jsx(atoms_button.A,{variant:"secondary"},translate("common.view")))))))))),orders_table_jsx(table.A.Container,{className:"table rounded-md md:hidden"},orders_table_jsx(table.A.Head,{className:"border-b text-12 font-bold"},orders_table_jsx(table.A.Row,null,orders_table_jsx(table.A.Cell,{isHeadCell:!0},translate("common.id")))),orders_table_jsx(table.A.Body,null,(orders??[]).map((({id,number,status,creationDate,businessUnit,total,currency})=>orders_table_jsx(table.A.Row,{key:id},orders_table_jsx(table.A.Cell,null,orders_table_jsx(accordion.A,{className:"border-none text-gray-600"},orders_table_jsx(accordion.A.Button,{defaultSpacing:!1},orders_table_jsx("p",{className:"font-semibold"},number),orders_table_jsx("p",{className:"my-2 text-14 text-gray-500"},new Date(creationDate).toLocaleDateString()),orders_table_jsx("div",{className:""},orders_table_jsx(order_status_tag,{status}))),orders_table_jsx(accordion.A.Panel,{defaultSpacing:!1},orders_table_jsx("div",{className:"mt-2 flex gap-2"},orders_table_jsx("p",{className:"basis-32 font-semibold uppercase"}," ",translate("common.business.unit"),":"),orders_table_jsx("p",{className:"w-48 truncate"},businessUnit)),orders_table_jsx("div",{className:"flex gap-2"},orders_table_jsx("p",{className:"basis-32 font-semibold uppercase"},translate("common.total"),":"),orders_table_jsx("p",null,formatCurrency(total,currency))),orders_table_jsx("div",{className:"mt-4"},orders_table_jsx(atoms_link.A,{href:constants.s.orderDetail(id),underlineOnHover:!1},orders_table_jsx(atoms_button.A,{variant:"secondary"},translate("common.view")))))))))))),pagination&&orders_table_jsx(table.A.Pagination,{page:pagination.page,limit:pagination.limit,totalItems:pagination.totalItems,onNext:pagination.onNext,onPrevious:pagination.onPrevious,onRowsPerPageChange:pagination.onRowsPerPageChange}))},orders_table=OrdersTable;OrdersTable.__docgenInfo={description:"",methods:[],displayName:"OrdersTable",props:{orders:{required:!0,tsType:{name:"Array",elements:[{name:"Order"}],raw:"Order[]"},description:""},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  className?: string;\n  page: number;\n  limit: number;\n  totalItems: number;\n  onRowsPerPageChange?: SelectProps['onChange'];\n  onPrevious?: () => void;\n  onNext?: () => void;\n}",signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"page",value:{name:"number",required:!0}},{key:"limit",value:{name:"number",required:!0}},{key:"totalItems",value:{name:"number",required:!0}},{key:"onRowsPerPageChange",value:{name:"SelectProps['onChange']",raw:"SelectProps['onChange']",required:!1}},{key:"onPrevious",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onNext",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""}}}},"./src/hooks/useFormat/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({formatCurrency:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((price,currency)=>new Intl.NumberFormat("en-US",{style:"currency",currency}).format(price)),[]),formatAddress:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address=>`${address.name}${address.careOf?` (c/o ${address.careOf})`:""}\n${address.line1}\n${address.zip} ${address.city}, ${address.country}`.replace(/[^\S\r\n]+/g," ")),[]),formatLocalDate:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((date=>{const dateToFormat=date instanceof Date?date:new Date(date),[day,month,year]=[dateToFormat.getDate().toString().padStart(2,"0"),(dateToFormat.getMonth()+1).toString().padStart(2,"0"),dateToFormat.getFullYear().toString()];return`${day}-${month}-${year}`}),[]),formatPosition:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((position=>{let suffix="";return suffix=position%100>=10&&position%100<=20?"th":["st","nd","rd"][position%10-1]??"th",`${position}${suffix}`}),[])})}}]);