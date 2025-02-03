"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[9607],{"./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon)},"./src/components/organisms/announcement-bar/announcement-bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>announcement_bar_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),typography=__webpack_require__("./src/components/atoms/typography/index.tsx"),shipping_and_language=__webpack_require__("./src/components/organisms/shipping-and-language/index.tsx"),atoms_button=__webpack_require__("./src/components/atoms/button/index.tsx"),popover=__webpack_require__("./src/components/molecules/popover/index.tsx"),atoms_select=__webpack_require__("./src/components/atoms/select/index.tsx"),atoms_link=__webpack_require__("./src/components/atoms/link/index.tsx"),useDisclosure=__webpack_require__("./src/hooks/useDisclosure/index.ts"),useTranslation=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),useScrollBlock=__webpack_require__("./src/hooks/useScrollBlock/index.ts"),ChevronDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js"),__jsx=react.createElement;const ButtonElement=({onOpen})=>{const{translate}=(0,useTranslation.A)();return __jsx("button",{className:"flex cursor-pointer items-center justify-center text-14 font-normal text-white underline-offset-4 hover:underline","data-testid":"account-dropdown-button",onClick:onOpen},translate("account.my.account"),__jsx(ChevronDownIcon.A,{className:"ml-1 size-4 text-white"}))},account_button_button=ButtonElement;ButtonElement.__docgenInfo={description:"",methods:[],displayName:"ButtonElement",props:{onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var account_button_jsx=react.createElement;const AccountButton=({selectedBusinessUnit,businessUnits,selectedStore,stores,accountLinks,name,quotes,onLogoutClick,onBusinessUnitChange,onStoreChange})=>{const{translate}=(0,useTranslation.A)(),{isOpen,onOpen,onClose}=(0,useDisclosure.A)(),{blockScroll}=(0,useScrollBlock.A)();return(0,react.useEffect)((()=>{blockScroll(isOpen)}),[blockScroll,isOpen]),account_button_jsx(popover.A,{isOpen,direction:"right",onClose,buttonElement:()=>account_button_jsx(account_button_button,{onOpen})},account_button_jsx("div",{className:"max-h-[90vh] w-[330px] overflow-y-auto py-4"},account_button_jsx("div",{className:"px-4"},account_button_jsx("div",{className:"pt-2"},account_button_jsx(typography.A,{fontSize:18,fontWeight:"bold",className:"text-primary"},`${translate("account.hello")} ${name}!`)),account_button_jsx("div",{className:"pt-5"},account_button_jsx(typography.A,{fontSize:14,className:"text-gray-800"},translate("account.business.unit")),account_button_jsx(atoms_select.A,{enableSearch:!0,className:"z-[100] pt-2",size:"lg",value:selectedBusinessUnit??translate("common.select"),options:businessUnits,onChange:onBusinessUnitChange})),account_button_jsx("div",{className:"py-4"},account_button_jsx(typography.A,{fontSize:14,className:"text-gray-800"},translate("account.store")),account_button_jsx(atoms_select.A,{enableSearch:!0,className:"pt-2",size:"lg",placeholder:"Select",defaultValue:selectedStore??translate("common.select"),options:stores,onChange:onStoreChange}))),accountLinks.map(((account,key)=>account_button_jsx("div",{key,className:"flex items-center justify-between border-t"},account_button_jsx(atoms_link.A,{href:account.path??"/",className:"px-4 py-3 text-14"},account.name),"quotes"===account.categoryId&&account_button_jsx("div",{className:"mr-4 flex size-5 items-center justify-center rounded-md bg-blue-100"},account_button_jsx(typography.A,{fontSize:12,fontWeight:"semibold",align:"center",className:"text-primary"},quotes.toString()))))),account_button_jsx("div",{className:"h-px border-t"}),account_button_jsx("div",{className:"px-4 pt-4"},account_button_jsx("div",{className:"flex flex-col gap-y-4 pb-5 pt-1"},account_button_jsx(typography.A,{fontSize:14,fontWeight:"bold",className:"text-primary"},translate("account.help.center")),account_button_jsx(typography.A,{fontSize:14,className:"text-gray-700"},translate("account.mon.fri"))),account_button_jsx(atoms_button.A,{variant:"secondary",size:"full","data-testid":"logout-button",onClick:()=>{onLogoutClick(),onClose()}},translate("account.sign.out")))))},account_button=AccountButton;AccountButton.__docgenInfo={description:"",methods:[],displayName:"AccountButton",props:{quotes:{required:!0,tsType:{name:"number"},description:""},name:{required:!0,tsType:{name:"string"},description:""},selectedBusinessUnit:{required:!1,tsType:{name:"string"},description:""},businessUnits:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},selectedStore:{required:!1,tsType:{name:"string"},description:""},stores:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},accountLinks:{required:!0,tsType:{name:"Array",elements:[{name:"Category"}],raw:"NavigationCategory[]"},description:""},onLogoutClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBusinessUnitChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(businessUnit: string) => void",signature:{arguments:[{type:{name:"string"},name:"businessUnit"}],return:{name:"void"}}},description:""},onStoreChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(store: string) => void",signature:{arguments:[{type:{name:"string"},name:"store"}],return:{name:"void"}}},description:""}}};var announcement_bar_jsx=react.createElement;const AnnouncementBar=({textBar,accountLinks,selectedBusinessUnit,businessUnits,selectedStore,stores,name,quotes,onLogoutClick,onBusinessUnitChange,onStoreChange})=>announcement_bar_jsx("div",{className:"relative flex h-10 w-full items-center justify-center bg-gray-700"},announcement_bar_jsx(typography.A,{fontSize:14,className:"text-white"},textBar),announcement_bar_jsx("div",{className:"absolute right-10 hidden lg:block"},announcement_bar_jsx("div",{className:"flex justify-start gap-x-20"},announcement_bar_jsx(account_button,{quotes,name,onLogoutClick,accountLinks,selectedBusinessUnit,businessUnits,onBusinessUnitChange,selectedStore,stores,onStoreChange}),announcement_bar_jsx(shipping_and_language.A,{desktopDirection:"right"})))),announcement_bar=AnnouncementBar;AnnouncementBar.__docgenInfo={description:"",methods:[],displayName:"AnnouncementBar",props:{accountLinks:{required:!0,tsType:{name:"Array",elements:[{name:"Category"}],raw:"NavigationCategory[]"},description:""},textBar:{required:!0,tsType:{name:"string"},description:""},selectedBusinessUnit:{required:!1,tsType:{name:"string"},description:""},businessUnits:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},selectedStore:{required:!1,tsType:{name:"string"},description:""},stores:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""},quotes:{required:!0,tsType:{name:"number"},description:""},onLogoutClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBusinessUnitChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(businessUnit: string) => void",signature:{arguments:[{type:{name:"string"},name:"businessUnit"}],return:{name:"void"}}},description:""},onStoreChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(store: string) => void",signature:{arguments:[{type:{name:"string"},name:"store"}],return:{name:"void"}}},description:""}}};var announcement_bar_stories_jsx=react.createElement;const announcement_bar_stories={title:"Organisms/Announcement Bar",component:announcement_bar},Primary=(args=>announcement_bar_stories_jsx(announcement_bar,args)).bind({});Primary.args={name:"Erika",onLogoutClick:()=>{},textBar:"Worldwide shipping & returns *",quotes:4,businessUnits:[{name:"opt1",value:"opt1"},{name:"opt2",value:"opt2"},{name:"opt3",value:"opt3"},{name:"opt4",value:"opt4"}],stores:[{name:"opt1",value:"opt1"},{name:"opt2",value:"opt2"},{name:"opt3",value:"opt3"},{name:"opt4",value:"opt4"}],accountLinks:[{categoryId:"dashboard",name:"Dashboard",path:"/dashboard",paths:{},descendants:[]},{categoryId:"orders",name:"Orders",path:"/orders",paths:{},descendants:[]},{categoryId:"quotes",name:"Quotes",path:"/quotes",paths:{},descendants:[]},{categoryId:"purchase-lists",name:"Purchase Lists",path:"/purchase-lists",paths:{},descendants:[]},{categoryId:"company-admin",name:"Company Admin",path:"/company-admin",paths:{},descendants:[]},{categoryId:"settings-and-security",name:"Settings & Security",path:"/settings-and-security",paths:{},descendants:[]},{categoryId:"addresses",name:"Addresses",path:"/addresses",paths:{},descendants:[]}]};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <AnnouncementBar {...args} />",...Primary.parameters?.docs?.source}}}},"./src/components/atoms/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_button});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),skeleton=__webpack_require__("./src/components/atoms/skeleton/index.tsx"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),loading_icon=__webpack_require__("./src/components/atoms/loading-icon/index.tsx"),__jsx=react.createElement;const FeedbackIconLayer=({loading,variant="primary"})=>{const iconInWhite="primary"==variant||"warning"==variant,layerClassName=(0,classnames.p)("absolute left-0 top-0 grid size-full items-center justify-center",{primary:"bg-secondary",warning:"bg-red-600"}[variant]??"bg-white"),checkIconClassName=(0,classnames.p)("w-5",{"text-white":iconInWhite}),loadingIconClassName=iconInWhite?"fill-white":"fill-gray-700";return __jsx("span",{"data-testid":"feedback-icon-layer",className:layerClassName},loading?__jsx(loading_icon.A,{svgWidth:20,svgHeight:20,className:loadingIconClassName}):__jsx(CheckIcon.A,{"data-testid":"added-svg",className:checkIconClassName}))},feedback_icon_layer=FeedbackIconLayer;FeedbackIconLayer.__docgenInfo={description:"",methods:[],displayName:"FeedbackIconLayer",props:{loading:{required:!1,tsType:{name:"ButtonProps['loading']",raw:"ButtonProps['loading']"},description:""},variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};var cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=({variant="primary",size="s",className="",includesIcon,isIconOnly,iconPosition,loading,asSkeleton=!1})=>{const resolveButtonVariant=(0,cva.F)({intent:{primary:["bg-primary text-white","hover:bg-secondary hover:shadow-button hover:disabled:shadow-none","active:bg-accent-blue","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],secondary:["border border-gray-700 bg-white text-gray-700","hover:bg-neutral-300 hover:shadow-button hover:disabled:shadow-none","active:bg-neutral-400","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-gray-300 disabled:bg-white disabled:text-gray-400"],warning:["bg-red-500 text-white","hover:bg-red-600 hover:shadow-button hover:disabled:shadow-none","active:bg-red-300 active:text-gray-700","focus:outline-[3px] focus:outline-gray-700","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],underlined:["text-gray-700 underline underline-offset-2","hover:text-gray-500","active:text-primary","focus:text-blue-700 focus:decoration-blue-300 focus:decoration-[3px] focus:outline-none","disabled:text-gray-400"],ghost:"disabled:text-neutral-400"},size:{xs:"px-3 py-2 text-12",s:"px-6 py-2 text-14",m:"px-9 py-3 text-14",l:"px-12 py-3 text-16",fit:"p-0",full:"w-full py-3",icon:{xs:"p-2",s:"p-[10px]",m:"p-3",l:"p-[14px]"}}}),resolveIconVariant=(0,cva.F)({size:{xs:"size-3",s:"size-4",m:"size-[18px]",l:"size-5"}});return{buttonClassName:(0,classnames.p)(resolveButtonVariant(isIconOnly?`size.icon.${size}`:`size.${size}`),{"flex items-center gap-1":includesIcon},{"grid items-center justify-center":isIconOnly},{"flex-row-reverse":includesIcon&&"left"===iconPosition},{"cursor-not-allowed":loading},"relative overflow-hidden rounded-md font-medium leading-4 transition disabled:pointer-events-none",asSkeleton?"relative":resolveButtonVariant(`intent.${variant}`),className),iconClassName:resolveIconVariant(`size.${size}`)}},_excluded=["Icon","added","loading","children","className","disabled","asSkeleton","iconPosition","variant","size"];var button_jsx=react.createElement;const Button=_ref=>{let{Icon,added,loading,children,className,disabled,asSkeleton=!1,iconPosition="right",variant="primary",size="underlined"===variant?"fit":"s"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{buttonClassName,iconClassName}=hooks_useClassNames({variant,size,className,includesIcon:!!Icon&&!!children,isIconOnly:!!Icon&&!children,iconPosition,loading,asSkeleton});return button_jsx("button",(0,esm_extends.A)({},props,{className:buttonClassName,disabled:disabled||loading}),(loading||added)&&button_jsx(feedback_icon_layer,{loading,variant}),children,Icon&&button_jsx(Icon,{className:iconClassName}),asSkeleton&&button_jsx(skeleton.A,{"data-testid":"skeleton"}))},atoms_button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underlined' | 'ghost' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underlined'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'fit' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"variant === 'underlined' ? 'fit' : 's'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},Icon:{required:!1,tsType:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<\n  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n    title?: string | undefined;\n    titleId?: string | undefined;\n  } & React.RefAttributes<SVGSVGElement>\n>",elements:[{name:"intersection",raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n  title?: string | undefined;\n  titleId?: string | undefined;\n} & React.RefAttributes<SVGSVGElement>",elements:[{name:"Omit",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},{name:"literal",value:"'ref'"}],raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'>"},{name:"signature",type:"object",raw:"{\n  title?: string | undefined;\n  titleId?: string | undefined;\n}",signature:{properties:[{key:"title",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"titleId",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}}]}},{name:"ReactRefAttributes",raw:"React.RefAttributes<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},added:{required:!1,tsType:{name:"boolean"},description:""},asSkeleton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/atoms/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_navigation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./__mocks__/next/navigation/index.ts"),_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/classnames/classnames/index.ts"),_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ChevronRightIcon.js"),_utils_links__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/links/index.ts");const _excluded=["children","href","locale","openInNewTab","className","chevron","underlineOnHover"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Link=_ref=>{let{children,href,locale:localeOverride,openInNewTab=!1,className="",chevron=!1,underlineOnHover=!0}=_ref,props=(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);const{locale}=(0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.g)(),linkClassName=(0,_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_4__.p)(className,"w-fit",{"underline-offset-4 hover:underline":underlineOnHover,"flex items-center gap-1":!!chevron});return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({role:"link",href:(0,_utils_links__WEBPACK_IMPORTED_MODULE_6__.S)(href.toString(),localeOverride??locale),target:openInNewTab?"_blank":"_self",className:linkClassName},props),children,chevron&&__jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__.A,{width:16}))},__WEBPACK_DEFAULT_EXPORT__=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{openInNewTab:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chevron:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},underlineOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}}},"./src/components/atoms/loading-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const LoadingIcon=({svgWidth,svgHeight,className="fill-white"})=>__jsx("div",{"data-testid":"loading-svg",className:"relative",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth,height:svgWidth,viewBox:"0 0 20 20",fill:"none"},__jsx("path",{className,opacity:"0.5",d:"M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"})),__jsx("span",{className:"absolute right-0 top-0 flex animate-spin justify-end",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth/2,height:svgHeight/2,viewBox:"0 0 10 10",fill:"none"},__jsx("path",{className,d:"M8 10H10C10 8.68678 9.74134 7.38642 9.2388 6.17317C8.73625 4.95991 7.99965 3.85752 7.07107 2.92893C6.14248 2.00035 5.04009 1.26375 3.82683 0.761205C2.61358 0.258658 1.31322 0 0 0V2C2.12173 2 4.15656 2.84285 5.65685 4.34315C7.15715 5.84344 8 7.87827 8 10Z"})))),__WEBPACK_DEFAULT_EXPORT__=LoadingIcon;LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon",props:{svgWidth:{required:!0,tsType:{name:"number"},description:""},svgHeight:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fill-white'",computed:!1}}}}},"./src/hooks/useScrollBlock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>hooks_useScrollBlock});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const hooks_useTouchDevice=()=>{const{0:isTouchDevice,1:setIsTouchDevice}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setIsTouchDevice("ontouchstart"in window||navigator.maxTouchPoints>0)}),[]),{isTouchDevice}},hooks_useScrollBlock=()=>{const{0:isBlocked,1:setIsBlocked}=(0,react.useState)(!1),{isTouchDevice}=hooks_useTouchDevice(),scrollbarWidth=(()=>{if("undefined"==typeof document)return 0;const outer=document.createElement("div");outer.style.visibility="hidden",outer.style.overflow="scroll",outer.style.msOverflowStyle="scrollbar",document.body.appendChild(outer);const inner=document.createElement("div");outer.appendChild(inner);const scrollbarWidth=outer.offsetWidth-inner.offsetWidth;return outer.parentNode?.removeChild(outer),scrollbarWidth})();return{isBlocked,blockScroll:status=>{status?(()=>{const header=document.querySelector("#header-container");isTouchDevice||(document.body.style.paddingRight=`${scrollbarWidth}px`,header&&(header.style.paddingRight=`${scrollbarWidth}px`)),document.body.style.overflowY="hidden"})():(()=>{const header=document.querySelector("#header-container");document.body.style.overflowY="auto",isTouchDevice||(document.body.style.paddingRight="0px",header&&(header.style.paddingRight="0px"))})(),setIsBlocked(status)}}}}}]);