"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[8753],{"./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ChatBubbleLeftRightIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleLeftRightIcon)},"./src/components/molecules/card/card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/card/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Card",component:___WEBPACK_IMPORTED_MODULE_1__.A},Primary=(args=>__jsx(___WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Primary.args={icon:__jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.A,null),title:"Quotes",summary:"Check and manage the status of quote-requests"};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Primary.parameters?.docs?.source}}}},"./src/components/molecules/card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Card=({icon,title,summary})=>{const renderIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(icon)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(icon,_objectSpread(_objectSpread({},icon.props),{},{className:`${icon.props.className??""} w-full h-full`})):icon),[icon]);return __jsx("div",{className:"flex w-full items-center gap-4 rounded-md border border-neutral-400 px-5 py-6 md:gap-5"},__jsx("div",{className:"box-content rounded-full bg-neutral-300 p-5"},__jsx("span",{className:"block size-[20px] text-primary md:size-[24px] lg:size-[28px]"},renderIcon())),__jsx("div",{className:"flex flex-col gap-2"},__jsx("h5",{className:"text-14 font-semibold leading-normal text-gray-700"},title),__jsx("p",{className:"text-14 leading-loose text-gray-600"},summary)))},__WEBPACK_DEFAULT_EXPORT__=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{icon:{required:!0,tsType:{name:"ReactElement",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"ReactElement<Record<string, any>>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},summary:{required:!1,tsType:{name:"string"},description:""}}}}}]);