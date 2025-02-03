"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[8007],{"./src/components/organisms/confirmation/confirmation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_atoms_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/button/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/organisms/confirmation/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/Confirmation",component:___WEBPACK_IMPORTED_MODULE_2__.A},Primary=(args=>__jsx(___WEBPACK_IMPORTED_MODULE_2__.A,args,__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"warning"},"DELETE"))).bind({});Primary.args={translations:{title:"Delete Address",summary:"Are you sure you want to permanently delete this address?",cancel:"Cancel",confirm:"Delete"}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => <Confirmation {...args}>\n    <Button variant="warning">DELETE</Button>\n  </Confirmation>',...Primary.parameters?.docs?.source}}}},"./src/components/organisms/confirmation/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_atoms_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/button/index.tsx"),_hooks_useScrollBlock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useScrollBlock/index.ts"),_hooks_useControllableState__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useControllableState/index.ts"),_responsive_modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/organisms/responsive-modal/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Confirmation=({children,translations,onCancel,onConfirm,isOpen:isOpenProp,disabled=!1,className=""})=>{const[isOpen,setIsOpen]=(0,_hooks_useControllableState__WEBPACK_IMPORTED_MODULE_3__.A)(isOpenProp,!1),onOpen=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setIsOpen(!0)),[setIsOpen]),onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setIsOpen(!1)),[setIsOpen]),{0:isLoading,1:setIsLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{blockScroll}=(0,_hooks_useScrollBlock__WEBPACK_IMPORTED_MODULE_2__.A)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(blockScroll(isOpen),()=>blockScroll(!1))),[isOpen,blockScroll]);const handleCancel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{onCancel?.(),onClose()}),[onCancel,onClose]),handleConfirm=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((async()=>{setIsLoading(!0),await(onConfirm?.()),setIsLoading(!1),onClose()}),[onConfirm,onClose]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className,onClick:onOpen},children),__jsx(_responsive_modal__WEBPACK_IMPORTED_MODULE_4__.A,{className:"lg:max-w-[400px]",isOpen,onRequestClose:handleCancel,closeButton:!0},__jsx("div",{className:"px-6"},__jsx("h4",{className:"pb-4 pt-6 text-20 font-semibold text-gray-800"},translations.title),__jsx("p",{className:"text-14 text-gray-700"},translations.summary)),__jsx("div",{className:"mt-5 flex items-center justify-end gap-3 border-t border-neutral-400 p-6"},__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"secondary",size:"m",className:"min-w-[112px]",onClick:handleCancel},translations.cancel),!disabled&&__jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"warning",size:"m",className:"min-w-[112px]",onClick:handleConfirm,loading:isLoading},translations.confirm))))},__WEBPACK_DEFAULT_EXPORT__=Confirmation;Confirmation.__docgenInfo={description:"",methods:[],displayName:"Confirmation",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},translations:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  title?: string;\n  summary?: string;\n  confirm?: string;\n  cancel?: string;\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"summary",value:{name:"string",required:!1}},{key:"confirm",value:{name:"string",required:!1}},{key:"cancel",value:{name:"string",required:!1}}]}},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/organisms/responsive-modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useMediaQuery/index.ts"),_constants_screensizes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/screensizes.ts"),_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/organisms/modal/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ResponsiveModal=props=>{const[isLargerThanTablet]=(0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__.A)(_constants_screensizes__WEBPACK_IMPORTED_MODULE_2__.n5);return __jsx(_modal__WEBPACK_IMPORTED_MODULE_3__.A,(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props,{variant:isLargerThanTablet?"default":"sticky-bottom",size:"fit"}))},__WEBPACK_DEFAULT_EXPORT__=ResponsiveModal;ResponsiveModal.__docgenInfo={description:"",methods:[],displayName:"ResponsiveModal",props:{closeButton:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'fit' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'fit'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},centered:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'sticky-bottom'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sticky-bottom'"}]},description:""}},composes:["ReactModalProps"]}},"./src/hooks/useControllableState/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(propValue,initialValue)=>{const{0:state,1:setState}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue??initialValue);return[propValue??state,setState]}}}]);