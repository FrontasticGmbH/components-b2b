"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[8319],{"./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon)},"./src/components/atoms/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_button});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),skeleton=__webpack_require__("./src/components/atoms/skeleton/index.tsx"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),loading_icon=__webpack_require__("./src/components/atoms/loading-icon/index.tsx"),__jsx=react.createElement;const FeedbackIconLayer=({loading,variant="primary"})=>{const iconInWhite="primary"==variant||"warning"==variant,layerClassName=(0,classnames.p)("absolute left-0 top-0 grid size-full items-center justify-center",{primary:"bg-secondary",warning:"bg-red-600"}[variant]??"bg-white"),checkIconClassName=(0,classnames.p)("w-5",{"text-white":iconInWhite}),loadingIconClassName=iconInWhite?"fill-white":"fill-gray-700";return __jsx("span",{"data-testid":"feedback-icon-layer",className:layerClassName},loading?__jsx(loading_icon.A,{svgWidth:20,svgHeight:20,className:loadingIconClassName}):__jsx(CheckIcon.A,{"data-testid":"added-svg",className:checkIconClassName}))},feedback_icon_layer=FeedbackIconLayer;FeedbackIconLayer.__docgenInfo={description:"",methods:[],displayName:"FeedbackIconLayer",props:{loading:{required:!1,tsType:{name:"ButtonProps['loading']",raw:"ButtonProps['loading']"},description:""},variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};var cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=({variant="primary",size="s",className="",includesIcon,isIconOnly,iconPosition,loading,asSkeleton=!1})=>{const resolveButtonVariant=(0,cva.F)({intent:{primary:["bg-primary text-white","hover:bg-secondary hover:shadow-button hover:disabled:shadow-none","active:bg-accent-blue","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],secondary:["border border-gray-700 bg-white text-gray-700","hover:bg-neutral-300 hover:shadow-button hover:disabled:shadow-none","active:bg-neutral-400","focus:outline-[3px] focus:outline-blue-300","disabled:border disabled:border-gray-300 disabled:bg-white disabled:text-gray-400"],warning:["bg-red-500 text-white","hover:bg-red-600 hover:shadow-button hover:disabled:shadow-none","active:bg-red-300 active:text-gray-700","focus:outline-[3px] focus:outline-gray-700","disabled:border disabled:border-neutral-300 disabled:bg-neutral-200 disabled:text-gray-400"],underlined:["text-gray-700 underline underline-offset-2","hover:text-gray-500","active:text-primary","focus:text-blue-700 focus:decoration-blue-300 focus:decoration-[3px] focus:outline-none","disabled:text-gray-400"],ghost:"disabled:text-neutral-400"},size:{xs:"px-3 py-2 text-12",s:"px-6 py-2 text-14",m:"px-9 py-3 text-14",l:"px-12 py-3 text-16",fit:"p-0",full:"w-full py-3",icon:{xs:"p-2",s:"p-[10px]",m:"p-3",l:"p-[14px]"}}}),resolveIconVariant=(0,cva.F)({size:{xs:"size-3",s:"size-4",m:"size-[18px]",l:"size-5"}});return{buttonClassName:(0,classnames.p)(resolveButtonVariant(isIconOnly?`size.icon.${size}`:`size.${size}`),{"flex items-center gap-1":includesIcon},{"grid items-center justify-center":isIconOnly},{"flex-row-reverse":includesIcon&&"left"===iconPosition},{"cursor-not-allowed":loading},"relative overflow-hidden rounded-md font-medium leading-4 transition disabled:pointer-events-none",asSkeleton?"relative":resolveButtonVariant(`intent.${variant}`),className),iconClassName:resolveIconVariant(`size.${size}`)}},_excluded=["Icon","added","loading","children","className","disabled","asSkeleton","iconPosition","variant","size"];var button_jsx=react.createElement;const Button=_ref=>{let{Icon,added,loading,children,className,disabled,asSkeleton=!1,iconPosition="right",variant="primary",size="underlined"===variant?"fit":"s"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{buttonClassName,iconClassName}=hooks_useClassNames({variant,size,className,includesIcon:!!Icon&&!!children,isIconOnly:!!Icon&&!children,iconPosition,loading,asSkeleton});return button_jsx("button",(0,esm_extends.A)({},props,{className:buttonClassName,disabled:disabled||loading}),(loading||added)&&button_jsx(feedback_icon_layer,{loading,variant}),children,Icon&&button_jsx(Icon,{className:iconClassName}),asSkeleton&&button_jsx(skeleton.A,{"data-testid":"skeleton"}))},atoms_button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underlined' | 'ghost' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underlined'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'fit' | 'full'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'fit'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"variant === 'underlined' ? 'fit' : 's'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},Icon:{required:!1,tsType:{name:"ReactForwardRefExoticComponent",raw:"React.ForwardRefExoticComponent<\n  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n    title?: string | undefined;\n    titleId?: string | undefined;\n  } & React.RefAttributes<SVGSVGElement>\n>",elements:[{name:"intersection",raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {\n  title?: string | undefined;\n  titleId?: string | undefined;\n} & React.RefAttributes<SVGSVGElement>",elements:[{name:"Omit",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},{name:"literal",value:"'ref'"}],raw:"Omit<React.SVGProps<SVGSVGElement>, 'ref'>"},{name:"signature",type:"object",raw:"{\n  title?: string | undefined;\n  titleId?: string | undefined;\n}",signature:{properties:[{key:"title",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"titleId",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}}]}},{name:"ReactRefAttributes",raw:"React.RefAttributes<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},added:{required:!1,tsType:{name:"boolean"},description:""},asSkeleton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/atoms/label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Label=({children,required,showOptionalLabel,optionalLabel,requiredStyle="asterisk",htmlFor})=>{const{translate}=(0,_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__.A)();return children||required?__jsx("div",{className:"mb-2 flex items-center justify-between"},children&&__jsx("label",{"aria-label":htmlFor,"data-testid":"label",htmlFor,className:"block text-14"},__jsx("span",{className:"text-gray-700"},children)," ",!required&&showOptionalLabel&&__jsx("span",{className:"lowercase text-gray-600"},"(",optionalLabel??translate("common.optional"),")"),required&&"asterisk"===requiredStyle&&__jsx("span",null,"*")),required&&"label"===requiredStyle&&__jsx("span",{className:"text-12 text-gray-500"},translate("common.field.required"))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)},__WEBPACK_DEFAULT_EXPORT__=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{required:{required:!1,tsType:{name:"boolean"},description:""},requiredStyle:{required:!1,tsType:{name:"union",raw:"'asterisk' | 'label'",elements:[{name:"literal",value:"'asterisk'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'asterisk'",computed:!1}},showOptionalLabel:{required:!1,tsType:{name:"boolean"},description:""},optionalLabel:{required:!1,tsType:{name:"string"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/atoms/loading-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const LoadingIcon=({svgWidth,svgHeight,className="fill-white"})=>__jsx("div",{"data-testid":"loading-svg",className:"relative",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth,height:svgWidth,viewBox:"0 0 20 20",fill:"none"},__jsx("path",{className,opacity:"0.5",d:"M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18V18Z"})),__jsx("span",{className:"absolute right-0 top-0 flex animate-spin justify-end",style:{width:svgWidth,height:svgHeight}},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:svgWidth/2,height:svgHeight/2,viewBox:"0 0 10 10",fill:"none"},__jsx("path",{className,d:"M8 10H10C10 8.68678 9.74134 7.38642 9.2388 6.17317C8.73625 4.95991 7.99965 3.85752 7.07107 2.92893C6.14248 2.00035 5.04009 1.26375 3.82683 0.761205C2.61358 0.258658 1.31322 0 0 0V2C2.12173 2 4.15656 2.84285 5.65685 4.34315C7.15715 5.84344 8 7.87827 8 10Z"})))),__WEBPACK_DEFAULT_EXPORT__=LoadingIcon;LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon",props:{svgWidth:{required:!0,tsType:{name:"number"},description:""},svgHeight:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fill-white'",computed:!1}}}}},"./src/components/atoms/text-area/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>text_area});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),useControllableState=__webpack_require__("./src/hooks/useControllableState/index.ts"),useResizeObserver=__webpack_require__("./src/hooks/useResizeObserver/index.ts");const hooks_useVariant=({disabled,readOnly,valid,error})=>disabled?"disabled":readOnly?"readOnly":valid?"valid":error?"error":"default";var cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=(variant,{fitContent})=>{const resolveVariant=(0,cva.F)({default:"border-gray-300 bg-white text-gray-600 focus:border-neutral-800 active:border-neutral-800",disabled:"cursor-not-allowed border-neutral-200 bg-neutral-200 text-neutral-800 focus:border-neutral-200",readOnly:"cursor-default border-neutral-200 bg-neutral-200 text-gray-600 focus:border-neutral-200 active:border-neutral-800",error:"border-red-500 bg-white text-gray-600 focus:border-red-500 active:border-red-500",valid:"border-green-500 bg-white text-gray-600 focus:border-green-500 active:border-green-500"});return{textAreaClassName:(0,classnames.p)("flex w-full resize-none rounded-sm border px-3 py-[10px] text-14 focus:outline-none focus:ring-0",resolveVariant(variant),{"overflow-hidden":fitContent})}};var atoms_label=__webpack_require__("./src/components/atoms/label/index.tsx");const _excluded=["value","defaultValue","onChange","label","disabled","readOnly","valid","error","required","showOptionalLabel","requiredStyle","className","fitContent"];var __jsx=react.createElement;const TextArea=_ref=>{let{value:valueProp,defaultValue,onChange,label="",disabled=!1,readOnly=!1,valid=!1,error="",required=!1,showOptionalLabel=!1,requiredStyle="asterisk",className="",fitContent=!1}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[value,setValue]=(0,useControllableState.A)(valueProp,defaultValue),ref=(0,react.useRef)(null),variant=hooks_useVariant({disabled,readOnly,valid,error}),{textAreaClassName}=hooks_useClassNames(variant,{fitContent}),handleFitContent=(0,react.useCallback)((()=>{fitContent&&ref.current&&(ref.current.style.height=`${ref.current.scrollHeight}px`)}),[fitContent]),{ref:resizeRef}=(0,useResizeObserver.A)(handleFitContent),handleChange=(0,react.useCallback)((e=>{handleFitContent(),setValue(e.target.value),onChange?.(e)}),[onChange,setValue,handleFitContent]);return __jsx("div",null,__jsx(atoms_label.A,{required,showOptionalLabel,requiredStyle},label),__jsx("textarea",(0,esm_extends.A)({ref:r=>{ref.current=r,resizeRef.current=r},className:(0,classnames.p)(textAreaClassName,className),value,readOnly,disabled,required,onChange:handleChange},props)),error&&__jsx("span",{className:"mt-3 block text-12 font-medium text-red-500"},error))},text_area=TextArea;TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},fitContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showOptionalLabel:{defaultValue:{value:"false",computed:!1},required:!1},requiredStyle:{defaultValue:{value:"'asterisk'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Pick"]}},"./src/components/molecules/activity-log/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/classnames/classnames/index.ts"),_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),_components_atoms_text_area__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/text-area/index.tsx"),_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/atoms/button/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ActivityLog=({activities,translations={}})=>{const{translate}=(0,_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__.A)(),{0:commentValue,1:setCommentValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:commentLength,1:setCommentLength}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:commentProcessing,1:setCommentProcessing}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:commentFocused,1:setCommentFocused}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:replyProcessing,1:setReplyProcessing}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:declineProcessing,1:setDeclineProcessing}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),{0:actionProcessing,1:setActionProcess}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});return __jsx("div",{className:"flex flex-col"},activities.map((({title,summary,comment,commentLabel,commentDisabled,onCommentUpdate,onCommentCancel,reply,canAccept,canReject,onAccept,onReject,ctaLink,ctaLinkIsDisabled,onCtaLinkClick,ctaButton,ctaButtonIsDisabled,onCtaButtonClick},index,arr)=>__jsx("div",{key:index,"data-testid":"activity-log",className:(0,_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_5__.p)("relative pb-9 pl-6 lg:pb-12",{"border-l border-neutral-400":index<arr.length-1})},__jsx("div",{className:"absolute left-0 top-0 -translate-x-1/2 -translate-y-1/4 rounded-full bg-white p-2"},__jsx("div",{className:"size-[20px] rounded-full bg-accent-blue"})),__jsx("h5",{className:"leading-tight text-gray-700"},title),summary&&__jsx("h6",{className:"mt-2 text-12 text-gray-600"},summary),comment&&__jsx("form",{role:"form",className:"mt-7",onSubmit:async e=>{e.preventDefault(),setCommentProcessing(_objectSpread(_objectSpread({},commentProcessing),{},{[index]:!0})),commentValue[index]&&await(onCommentUpdate?.(commentValue[index])),setCommentProcessing(_objectSpread(_objectSpread({},commentProcessing),{},{[index]:!1})),setCommentFocused(_objectSpread(_objectSpread({},commentFocused),{},{[index]:!1})),document.activeElement.blur()}},__jsx("h5",{className:"text-12 font-medium uppercase text-gray-600"},commentLabel),__jsx(_components_atoms_text_area__WEBPACK_IMPORTED_MODULE_3__.A,{defaultValue:comment??"",className:(0,_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_5__.p)("mt-3 max-w-[350px]",{"pointer-events-none cursor-default":commentDisabled}),style:{height:ctaLink?150:45},fitContent:!ctaLink,error:commentLength[index]&&commentLength[index]>160?translate("dashboard.message.too.long",{values:{maxCharacters:160..toString()}}):"",onChange:e=>{setCommentValue(_objectSpread(_objectSpread({},commentValue),{},{[index]:e.target.value})),setCommentLength(_objectSpread(_objectSpread({},commentLength),{},{[index]:e.target.value.length}))},onFocus:()=>setCommentFocused(_objectSpread(_objectSpread({},commentFocused),{},{[index]:!commentDisabled})),onBlur:()=>setCommentFocused(_objectSpread(_objectSpread({},commentFocused),{},{[index]:!1}))}),commentFocused[index]&&__jsx("div",{className:"mt-9 flex gap-3"},__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"secondary",size:"l",onClick:onCommentCancel,onMouseDown:e=>e.preventDefault()},translations.cancel||translate("common.cancel")),__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__.A,{type:"submit",size:"l",variant:"primary",disabled:!!(commentLength[index]&&commentLength[index]>160),loading:commentProcessing[index],onMouseDown:e=>e.preventDefault()},translations.send||translate("common.send")))),reply&&__jsx("div",{className:"mt-7 flex gap-3"},__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"secondary",size:"l",className:"leading-[16px]",loading:declineProcessing[index],disabled:!canReject,onClick:async()=>{setDeclineProcessing(_objectSpread(_objectSpread({},declineProcessing),{},{[index]:!0})),await(onReject?.()),setDeclineProcessing(_objectSpread(_objectSpread({},declineProcessing),{},{[index]:!1}))}},translations.decline||translate("common.decline")),__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"primary",size:"l",className:"py-[12px] leading-[16px]",loading:replyProcessing[index],disabled:!canAccept,onClick:async()=>{setReplyProcessing(_objectSpread(_objectSpread({},replyProcessing),{},{[index]:!0})),await(onAccept?.()),setReplyProcessing(_objectSpread(_objectSpread({},replyProcessing),{},{[index]:!1}))}},translations.accept||translate("common.accept"))),ctaButton&&__jsx("div",{className:"mt-7"},__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_4__.A,{variant:"primary",size:"l",className:"w-full max-w-[350px] py-[12px] leading-[16px]",loading:actionProcessing[index],disabled:ctaButtonIsDisabled,onClick:async()=>{setActionProcess(_objectSpread(_objectSpread({},actionProcessing),{},{[index]:!0})),await(onCtaButtonClick?.()),setActionProcess(_objectSpread(_objectSpread({},actionProcessing),{},{[index]:!1}))}},ctaButton)),ctaLink&&!ctaLinkIsDisabled&&__jsx("span",{className:"mt-5 block cursor-pointer text-14 text-blue-700 underline underline-offset-2",onClick:onCtaLinkClick},ctaLink)))))},__WEBPACK_DEFAULT_EXPORT__=ActivityLog;ActivityLog.__docgenInfo={description:"",methods:[],displayName:"ActivityLog",props:{activities:{required:!0,tsType:{name:"Array",elements:[{name:"ActivityLog"}],raw:"ActivityLog[]"},description:""},translations:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  accept?: string;\n  decline?: string;\n  cancel?: string;\n  send?: string;\n}",signature:{properties:[{key:"accept",value:{name:"string",required:!1}},{key:"decline",value:{name:"string",required:!1}},{key:"cancel",value:{name:"string",required:!1}},{key:"send",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}}},"./src/hooks/useControllableState/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(propValue,initialValue)=>{const{0:state,1:setState}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue??initialValue);return[propValue??state,setState]}},"./src/hooks/useResizeObserver/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(callback,cleanup)=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),memoizedCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback,[]),memoizedCleanup=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entry=>cleanup?.(entry)),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!("ResizeObserver"in window))return;const observer=new ResizeObserver((entries=>memoizedCallback(entries[0].target))),el=ref.current;return el&&(memoizedCallback(el),observer.observe(el)),()=>{memoizedCleanup(el),observer.disconnect()}}),[memoizedCallback,memoizedCleanup]),{ref}}},"./src/providers/I18n/hooks/useTranslation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_navigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./__mocks__/next/navigation/index.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/I18n/index.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{translations}=(0,___WEBPACK_IMPORTED_MODULE_1__.s9)(),{locale}=(0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.g)();return{translate:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((token,{values={},defaultMessage=""}={})=>{const fallbackMessage=defaultMessage||token||"";if(!translations)return fallbackMessage;const firstDotIndex=token.indexOf(".");if(-1===firstDotIndex)return fallbackMessage;const[namespace,key]=[token.substring(0,firstDotIndex),token.substring(firstDotIndex+1)];let message=translations[locale]?.[namespace]?.[key]??fallbackMessage;for(const placeholder of Object.keys(values))message=message.replace(new RegExp(`{${placeholder}}`,"g"),values[placeholder]);return message}),[translations,locale])}}}}]);