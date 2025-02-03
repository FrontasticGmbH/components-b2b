"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[6919],{"./src/components/molecules/date-picker/date-picker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/date-picker/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Date Picker",component:___WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},Default=(()=>{const{0:selected,1:setSelected}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return __jsx(___WEBPACK_IMPORTED_MODULE_1__.A,{mode:"range",selected,onSelect:setSelected,fromYear:2023,toYear:2040})}).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  const [selected, setSelected] = useState<DateRange>();\n  return <DatePicker mode="range" selected={selected} onSelect={setSelected} fromYear={2023} toYear={2040} />;\n}',...Default.parameters?.docs?.source}}}},"./src/components/atoms/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_button});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),skeleton=__webpack_require__("./src/components/atoms/skeleton/index.tsx"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),loading_icon=__webpack_require__("./src/components/atoms/loading-icon/index.tsx"),__jsx=react.createElement;const FeedbackIconLayer=({loading,variant="primary"})=>{const iconInWhite="primary"==variant||"warning"==variant,layerClassName=(0,classnames.p)("absolute left-0 top-0 grid size-full items-center justify-center",{primary:"bg-secondary",warning:"bg-red-600"}[variant]??"bg-white"),checkIconClassName=(0,classnames.p)("w-5",{"text-white":iconInWhite}),loadingIconClassName=iconInWhite?"fill-white":"fill-gray-700";return __jsx("span",{"data-testid":"feedback-icon-layer",className:layerClassName},loading?__jsx(loading_icon.A,{svgWidth:20,svgHeight:20,className:loadingIconClassName}):__jsx(CheckIcon.A,{"data-testid":"added-svg",className:checkIconClassName}))},feedback_icon_layer=FeedbackIconLayer;FeedbackIconLayer.__docgenInfo={description:"",methods:[],displayName:"FeedbackIconLayer",props:{loading:{required:!1,tsType:{name:"ButtonProps['loading']",raw:"ButtonProps['loading']"},description:""},variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};var cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=({variant="primary",size="s",className="",includesIcon,isIconOnly,iconPosition,loading,asSkeleton=!1})=>{const resolveButtonVariant=(0,cva.F)({intent:{primary:["bg-primary text-white","hover:bg-secondary hover:shadow-button hover:disabled:shadow-none","active:bg-accent-blue","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],secondary:["border border-gray-700 bg-white text-gray-700","hover:bg-neutral-300 hover:shadow-button hover:disabled:shadow-none","active:bg-neutral-400","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-gray-300 disabled:bg-white disabled:text-gray-400"],warning:["bg-red-500 text-white","hover:bg-red-600 hover:shadow-button hover:disabled:shadow-none","active:bg-red-300 active:text-gray-700","focus:outline-[3px] focus:outline-gray-700","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],underlined:["text-gray-700 underline underline-offset-2","hover:text-gray-500","active:text-primary","focus:text-blue-700 focus:decoration-blue-300 focus:decoration-[3px] focus:outline-none","disabled:text-gray-400"],ghost:"disabled:text-neutral-400"},size:{xs:"px-3 py-2 text-12",s:"px-6 py-2 text-14",m:"px-9 py-3 text-14",l:"px-12 py-3 text-16",fit:"p-0",full:"w-full py-3",icon:{xs:"p-2",s:"p-[10px]",m:"p-3",l:"p-[14px]"}}}),resolveIconVariant=(0,cva.F)({size:{xs:"size-3",s:"size-4",m:"size-[18px]",l:"size-5"}});return{buttonClassName:(0,classnames.p)(resolveButtonVariant(isIconOnly?`size.icon.${size}`:`size.${size}`),{"flex items-center gap-1":includesIcon},{"grid items-center justify-center":isIconOnly},{"flex-row-reverse":includesIcon&&"left"===iconPosition},{"cursor-not-allowed":loading},"relative overflow-hidden rounded-md font-medium leading-4 transition disabled:pointer-events-none",asSkeleton?"relative":resolveButtonVariant(`intent.${variant}`),className),iconClassName:resolveIconVariant(`size.${size}`)}},_excluded=["Icon","added","loading","children","className","disabled","asSkeleton","iconPosition","variant","size"];var button_jsx=react.createElement;const Button=_ref=>{let{Icon,added,loading,children,className,disabled,asSkeleton=!1,iconPosition="right",variant="primary",size="underlined"===variant?"fit":"s"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{buttonClassName,iconClassName}=hooks_useClassNames({variant,size,className,includesIcon:!!Icon&&!!children,isIconOnly:!!Icon&&!children,iconPosition,loading,asSkeleton});return button_jsx("button",(0,esm_extends.A)({},props,{className:buttonClassName,disabled:disabled||loading}),(loading||added)&&button_jsx(feedback_icon_layer,{loading,variant}),children,Icon&&button_jsx(Icon,{className:iconClassName}),asSkeleton&&button_jsx(skeleton.A,{"data-testid":"skeleton"}))},atoms_button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underlined' | 'ghost' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underlined'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'fit' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"variant === 'underlined' ? 'fit' : 's'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},Icon:{required:!1,tsType:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<\n  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n    title?: string | undefined;\n    titleId?: string | undefined;\n  } & React.RefAttributes<SVGSVGElement>\n>",elements:[{name:"intersection",raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n  title?: string | undefined;\n  titleId?: string | undefined;\n} & React.RefAttributes<SVGSVGElement>",elements:[{name:"Omit",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},{name:"literal",value:"'ref'"}],raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'>"},{name:"signature",type:"object",raw:"{\n  title?: string | undefined;\n  titleId?: string | undefined;\n}",signature:{properties:[{key:"title",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"titleId",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}}]}},{name:"ReactRefAttributes",raw:"React.RefAttributes<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},added:{required:!1,tsType:{name:"boolean"},description:""},asSkeleton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/atoms/loading-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const LoadingIcon=({svgWidth,svgHeight,className="fill-white"})=>__jsx("div",{"data-testid":"loading-svg",className:"relative",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth,height:svgWidth,viewBox:"0 0 20 20",fill:"none"},__jsx("path",{className,opacity:"0.5",d:"M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"})),__jsx("span",{className:"absolute right-0 top-0 flex animate-spin justify-end",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth/2,height:svgHeight/2,viewBox:"0 0 10 10",fill:"none"},__jsx("path",{className,d:"M8 10H10C10 8.68678 9.74134 7.38642 9.2388 6.17317C8.73625 4.95991 7.99965 3.85752 7.07107 2.92893C6.14248 2.00035 5.04009 1.26375 3.82683 0.761205C2.61358 0.258658 1.31322 0 0 0V2C2.12173 2 4.15656 2.84285 5.65685 4.34315C7.15715 5.84344 8 7.87827 8 10Z"})))),__WEBPACK_DEFAULT_EXPORT__=LoadingIcon;LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon",props:{svgWidth:{required:!0,tsType:{name:"number"},description:""},svgHeight:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fill-white'",computed:!1}}}}},"./src/components/molecules/date-picker/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>date_picker});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-day-picker/dist/index.esm.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react-day-picker/dist/style.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/molecules/date-picker/styles/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var atoms_button=__webpack_require__("./src/components/atoms/button/index.tsx"),atoms_select=__webpack_require__("./src/components/atoms/select/index.tsx"),ChevronLeftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js"),ChevronRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),__jsx=react.createElement;const DateCaption=({displayMonth})=>{const{goToMonth,goToDate,nextMonth,previousMonth}=(0,index_esm.cq)(),{fromYear,toYear}=(0,index_esm.wj)(),getYearOptions=(0,react.useCallback)((()=>{const startYear=fromYear??(new Date).getFullYear()-5,yearsRange=toYear?toYear-startYear:10;return Array.from({length:yearsRange},((_,index)=>{const year=(startYear+index).toString();return{name:`${(0,format.A)(displayMonth,"MMMM")} ${year}`,value:year}}))}),[displayMonth,fromYear,toYear]);return __jsx("div",{className:"flex items-center justify-between"},__jsx(atoms_select.A,{defaultValue:displayMonth.getFullYear().toString(),options:getYearOptions(),onChange:year=>{const selectedYear=parseInt(year,10),month=displayMonth.getMonth(),newDate=new Date(selectedYear,month,1);goToDate(newDate)}}),__jsx("div",{className:"flex gap-2"},__jsx(atoms_button.A,{"data-testid":"prev",variant:"ghost",size:"fit",onClick:()=>previousMonth&&goToMonth(previousMonth)},__jsx(ChevronLeftIcon.A,{className:"size-5"})),__jsx(atoms_button.A,{"data-testid":"next",variant:"ghost",size:"fit",onClick:()=>nextMonth&&goToMonth(nextMonth)},__jsx(ChevronRightIcon.A,{className:"size-5"}))))},date_caption=DateCaption;DateCaption.__docgenInfo={description:"",methods:[],displayName:"DateCaption"};const _excluded=["fromYear","toYear"];var date_picker_jsx=react.createElement;const DatePicker=_ref=>{let{fromYear,toYear}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return date_picker_jsx(index_esm.qZ,{initialProps:{fromYear,toYear}},date_picker_jsx(index_esm.i9,null,date_picker_jsx(index_esm.hv,(0,esm_extends.A)({},props,{components:{Caption:date_caption}}))))},date_picker=DatePicker;DatePicker.__docgenInfo={description:"",methods:[],displayName:"DatePicker"}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/molecules/date-picker/styles/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.rdp-table{border-collapse:separate;border-spacing:0 5px}.rdp-button:hover:not([disabled]):not(.rdp-day_selected):hover{--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-300)/var(--tw-bg-opacity))}.rdp-caption_label{font-size:14px;font-weight:500;--tw-text-opacity:1;color:rgb(var(--color-gray-600)/var(--tw-text-opacity))}.rdp-cell{height:32px;width:32px}.rdp-head_cell{--tw-text-opacity:1;color:rgb(var(--color-gray-600)/var(--tw-text-opacity));font-size:12px;font-weight:400}.rdp-nav_button svg{height:10px;width:12px}.rdp-day,.rdp-weeknumber{font-size:14px;font-weight:400;--tw-text-opacity:1;color:rgb(var(--color-gray-700)/var(--tw-text-opacity))}.rdp-day_selected,.rdp-day_selected:focus-visible,.rdp-day_selected:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-300)/var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.rdp-day_range_end,.rdp-day_range_start{position:relative;z-index:2}.rdp-day_range_end:after,.rdp-day_range_start:after{content:"";height:100%;position:absolute;width:100%;--tw-bg-opacity:1;background-color:rgb(var(--color-primary)/var(--tw-bg-opacity));--tw-text-opacity:1;border-radius:50%;color:rgb(255 255 255/var(--tw-text-opacity));z-index:-1}.rdp-day_range_middle{--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-300)/var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-gray-700)/var(--tw-text-opacity))}',"",{version:3,sources:["webpack://./src/components/molecules/date-picker/styles/index.css"],names:[],mappings:"AAAA,WACI,wBAAyB,CACzB,oBACJ,CAGI,+DAAA,iBAAqB,CAArB,mEAAqB,CAGzB,mBAEI,cAAe,CADf,eAAgB,CAEhB,mBAAoB,CAApB,uDACJ,CAEA,UAEI,WAAY,CADZ,UAEJ,CAGI,eAAA,mBAAoB,CAApB,uDAAoB,CAEpB,cAAe,CADf,eADoB,CAKxB,oBAEI,WAAY,CADZ,UAEJ,CAEA,yBAEI,cAAe,CACf,eAAgB,CAChB,mBAAoB,CAApB,uDACJ,CAKI,0EAAA,iBAAgC,CAAhC,mEAAgC,CAAhC,mBAAgC,CAAhC,6CAAgC,CAGpC,wCAEI,iBAAkB,CAClB,SACJ,CAEA,oDAEI,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,UAAW,CAEX,iBAA4B,CAA5B,+DAA4B,CAA5B,mBAA4B,CAC5B,iBAAkB,CADlB,6CAA4B,CAE5B,UACJ,CAGI,sBAAA,iBAAmC,CAAnC,mEAAmC,CAAnC,mBAAmC,CAAnC,uDAAmC",sourcesContent:[".rdp-table {\n    border-collapse: separate;\n    border-spacing: 0 5px;\n}\n\n.rdp-button:hover:not([disabled]):not(.rdp-day_selected):hover {\n    @apply bg-neutral-300;\n}\n\n.rdp-caption_label {\n    font-weight: 500;\n    font-size: 14px;\n    @apply text-gray-600;\n}\n\n.rdp-cell {\n    width: 32px;\n    height: 32px;\n}\n\n.rdp-head_cell {\n    @apply text-gray-600;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.rdp-nav_button svg {\n    width: 12px;\n    height: 10px;\n}\n\n.rdp-weeknumber,\n.rdp-day {\n    font-size: 14px;\n    font-weight: 400;\n    @apply text-gray-700;\n}\n\n.rdp-day_selected,\n.rdp-day_selected:focus-visible,\n.rdp-day_selected:hover {\n    @apply bg-neutral-300 text-white;\n}\n\n.rdp-day_range_start,\n.rdp-day_range_end {\n    position: relative;\n    z-index: 2;\n}\n\n.rdp-day_range_start::after,\n.rdp-day_range_end::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    @apply bg-primary text-white;\n    border-radius: 50%;\n    z-index: -1;\n}\n\n.rdp-day_range_middle {\n    @apply bg-neutral-300 text-gray-700;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);