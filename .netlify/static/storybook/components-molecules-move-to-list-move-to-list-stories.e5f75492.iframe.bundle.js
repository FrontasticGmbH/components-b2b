"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[1745],{"./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon)},"./src/components/molecules/move-to-list/move-to-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,mockupLists:()=>mockupLists});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/move-to-list/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Move to list",component:___WEBPACK_IMPORTED_MODULE_1__.A},mockupLists=Array(10).fill(0).map(((val,index)=>({label:"Supplies",id:"supplies-"+index}))),Primary=(()=>__jsx(___WEBPACK_IMPORTED_MODULE_1__.A,{lists:mockupLists})).bind({});Primary.args={};const __namedExportsOrder=["mockupLists","Primary"];mockupLists.parameters={...mockupLists.parameters,docs:{...mockupLists.parameters?.docs,source:{originalSource:"Array(10).fill(0).map((val, index) => {\n  const unq = 'supplies-' + index;\n  return {\n    label: 'Supplies',\n    id: unq\n  };\n})",...mockupLists.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => <MoveToList lists={mockupLists} />",...Primary.parameters?.docs?.source}}}},"./src/components/atoms/input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>input});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js"),classnames=__webpack_require__("./src/utils/classnames/classnames/index.ts"),useControllableState=__webpack_require__("./src/hooks/useControllableState/index.ts"),useDisclosure=__webpack_require__("./src/hooks/useDisclosure/index.ts");const hooks_useVariant=({disabled,readOnly,valid,error})=>disabled?"disabled":readOnly?"readOnly":valid?"valid":error?"error":"default";var atoms_label=__webpack_require__("./src/components/atoms/label/index.tsx"),cva=__webpack_require__("./src/utils/classnames/cva/index.ts");const hooks_useClassNames=(variant,isFocused,unStyled)=>{const resolveVariant=(0,cva.F)({default:(0,classnames.p)("border-gray-300 bg-white text-gray-600 focus:border-neutral-800 active:border-neutral-800",{"border-neutral-800":isFocused}),disabled:"cursor-not-allowed border-neutral-200 bg-neutral-200 text-neutral-800 focus:border-neutral-200",readOnly:"cursor-default border-neutral-200 bg-neutral-200 text-gray-600 focus:border-neutral-200 active:border-neutral-800",error:"border-red-500 bg-white text-gray-600 focus:border-red-500 active:border-red-500",valid:"border-green-500 bg-white text-gray-600 focus:border-green-500 active:border-green-500"});return{inputClassName:(0,classnames.p)("w-full border-none bg-transparent text-14 focus:outline-none focus:ring-0",{"px-3 py-[10px]":!unStyled}),containerClassName:(0,classnames.p)({"flex rounded-sm border focus:outline-none focus:ring-0":!unStyled,[resolveVariant(variant)]:!unStyled})}},_excluded=["icon","value","onChange","onClear","optionalLabel","onFocus","onBlur","label","disabled","readOnly","valid","error","required","clearButton","showOptionalLabel","requiredStyle","className","containerClassName","outerContainerClassName","unStyled","focusOnMount"];var __jsx=react.createElement;const Input=_ref=>{let{icon,value:valueProp,onChange,onClear,optionalLabel,onFocus:onFocusProp,onBlur:onBlurProp,label="",disabled=!1,readOnly=!1,valid=!1,error="",required=!1,clearButton=!1,showOptionalLabel=!1,requiredStyle="asterisk",className="",containerClassName="",outerContainerClassName="",unStyled=!1,focusOnMount=!1}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const[value,setValue]=(0,useControllableState.A)(valueProp,""),{isOpen:isFocused,onOpen:onFocus,onClose:onBlur}=(0,useDisclosure.A)(),ref=(0,react.useRef)(null),mounted=(0,react.useRef)(!1),variant=hooks_useVariant({disabled,readOnly,valid,error}),{inputClassName,containerClassName:defaultContainerClassName}=hooks_useClassNames(variant,isFocused,unStyled),handleChange=(0,react.useCallback)((e=>{setValue(e.target.value),onChange?.(e)}),[onChange,setValue]),handleClear=(0,react.useCallback)((()=>{setValue(""),onClear?.()}),[onClear,setValue]);return(0,react.useEffect)((()=>{focusOnMount&&!mounted.current&&setTimeout((()=>ref.current?.focus())),mounted.current=!0}),[focusOnMount]),__jsx("div",{className:outerContainerClassName},__jsx(atoms_label.A,{required,showOptionalLabel,optionalLabel,requiredStyle,htmlFor:props.id||props.name},label),__jsx("div",{className:(0,classnames.p)(containerClassName,defaultContainerClassName)},__jsx("input",(0,esm_extends.A)({ref,className:(0,classnames.p)(inputClassName,className),value,readOnly,disabled,required,onChange:handleChange,onFocus:e=>{onFocus(),onFocusProp?.(e)},onBlur:e=>{onBlur(),onBlurProp?.(e)}},props,{id:props.id||props.name})),(clearButton||valid||icon)&&__jsx("div",{className:"flex items-center justify-center px-3"},clearButton&&__jsx(XMarkIcon.A,{"data-testid":"clear-button",width:16,height:16,className:"cursor-pointer text-gray-700",onClick:handleClear}),valid&&__jsx(CheckIcon.A,{"data-testid":"valid-icon",width:16,height:16,className:"text-green-500"}),icon&&__jsx("span",{className:"text-gray-700"},icon))),error&&__jsx("span",{className:"mt-3 block text-12 font-medium text-red-500"},error))},input=Input;Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},clearButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},outerContainerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},unStyled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focusOnMount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showOptionalLabel:{defaultValue:{value:"false",computed:!1},required:!1},requiredStyle:{defaultValue:{value:"'asterisk'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Pick"]}},"./src/components/atoms/label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Label=({children,required,showOptionalLabel,optionalLabel,requiredStyle="asterisk",htmlFor})=>{const{translate}=(0,_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_1__.A)();return children||required?__jsx("div",{className:"mb-2 flex items-center justify-between"},children&&__jsx("label",{"aria-label":htmlFor,"data-testid":"label",htmlFor,className:"block text-14"},__jsx("span",{className:"text-gray-700"},children)," ",!required&&showOptionalLabel&&__jsx("span",{className:"lowercase text-gray-600"},"(",optionalLabel??translate("common.optional"),")"),required&&"asterisk"===requiredStyle&&__jsx("span",null,"*")),required&&"label"===requiredStyle&&__jsx("span",{className:"text-12 text-gray-500"},translate("common.field.required"))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null)},__WEBPACK_DEFAULT_EXPORT__=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{required:{required:!1,tsType:{name:"boolean"},description:""},requiredStyle:{required:!1,tsType:{name:"union",raw:"'asterisk' | 'label'",elements:[{name:"literal",value:"'asterisk'"},{name:"literal",value:"'label'"}]},description:"",defaultValue:{value:"'asterisk'",computed:!1}},showOptionalLabel:{required:!1,tsType:{name:"boolean"},description:""},optionalLabel:{required:!1,tsType:{name:"string"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/molecules/move-to-list/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_atoms_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/button/index.tsx"),_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/I18n/hooks/useTranslation/index.ts"),_hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/useDisclosure/index.ts"),_wishlist_modal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/molecules/wishlist-modal/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const MoveToList=({lists,onSubmit,onAddNewList,disabled})=>{const{isOpen,onOpen,onClose}=(0,_hooks_useDisclosure__WEBPACK_IMPORTED_MODULE_4__.A)(),{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{translate}=(0,_providers_I18n_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__.A)(),{0:checkedBoxes,1:setCheckedBoxes}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),selectedIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>Object.keys(checkedBoxes).filter((key=>!!checkedBoxes[key]))),[checkedBoxes]),handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((async lists=>{setLoading(!0),await(onSubmit?.(lists.filter((list=>selectedIds.includes(list.id))).map((list=>list.id)))),onClose(),setLoading(!1)}),[onSubmit,onClose,selectedIds]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"fit",variant:"ghost",className:"flex-1 text-center text-14 font-medium text-gray-700 md:flex-[unset] md:text-start",onClick:onOpen,disabled},translate("wishlist.move.to.list")),__jsx(_wishlist_modal__WEBPACK_IMPORTED_MODULE_5__.A,{lists,isOpen,onClose,handleChange:(id,checked)=>{const updated=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},checkedBoxes);updated[id]=checked,setCheckedBoxes(updated)},selectedIds,onSubmit:handleSubmit,loading,onAddToNewList:onAddNewList}))},__WEBPACK_DEFAULT_EXPORT__=MoveToList;MoveToList.__docgenInfo={description:"",methods:[],displayName:"MoveToList",props:{lists:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; id: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!0}}]}}],raw:"{ label: string; id: string }[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: string[]) => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selected"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onAddNewList:{required:!1,tsType:{name:"signature",type:"function",raw:"(list: Pick<PurchaseList, 'name' | 'description' | 'store'>) => Promise<Wishlist | null>",signature:{arguments:[{type:{name:"Pick",elements:[{name:"PurchaseList"},{name:"union",raw:"'name' | 'description' | 'store'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'description'"},{name:"literal",value:"'store'"}]}],raw:"Pick<PurchaseList, 'name' | 'description' | 'store'>"},name:"list"}],return:{name:"Promise",elements:[{name:"union",raw:"Wishlist | null",elements:[{name:"Wishlist"},{name:"null"}]}],raw:"Promise<Wishlist | null>"}}},description:""}}}},"./src/hooks/useControllableState/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(propValue,initialValue)=>{const{0:state,1:setState}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue??initialValue);return[propValue??state,setState]}},"./src/hooks/useDisclosure/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=({openDelay,closeDelay,defaultIsOpen=!1}={})=>{const{0:isOpen,1:setIsOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIsOpen),onOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{openDelay?setTimeout((()=>setIsOpen(!0)),openDelay):setIsOpen(!0)}),[openDelay]),onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{closeDelay?setTimeout((()=>setIsOpen(!1)),closeDelay):setIsOpen(!1)}),[closeDelay]),onToggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isOpen?onClose():onOpen()}),[onOpen,onClose,isOpen]);return{isOpen,onOpen,onClose,onToggle}}},"./src/hooks/useResizeObserver/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(callback,cleanup)=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),memoizedCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback,[]),memoizedCleanup=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entry=>cleanup?.(entry)),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!("ResizeObserver"in window))return;const observer=new ResizeObserver((entries=>memoizedCallback(entries[0].target))),el=ref.current;return el&&(memoizedCallback(el),observer.observe(el)),()=>{memoizedCleanup(el),observer.disconnect()}}),[memoizedCallback,memoizedCleanup]),{ref}}},"./src/providers/I18n/hooks/useTranslation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_navigation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./__mocks__/next/navigation/index.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/I18n/index.tsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{translations}=(0,___WEBPACK_IMPORTED_MODULE_1__.s9)(),{locale}=(0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.g)();return{translate:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((token,{values={},defaultMessage=""}={})=>{const fallbackMessage=defaultMessage||token||"";if(!translations)return fallbackMessage;const firstDotIndex=token.indexOf(".");if(-1===firstDotIndex)return fallbackMessage;const[namespace,key]=[token.substring(0,firstDotIndex),token.substring(firstDotIndex+1)];let message=translations[locale]?.[namespace]?.[key]??fallbackMessage;for(const placeholder of Object.keys(values))message=message.replace(new RegExp(`{${placeholder}}`,"g"),values[placeholder]);return message}),[translations,locale])}}}}]);