"use strict";(self.webpackChunk_b2bdev_poc_frontend=self.webpackChunk_b2bdev_poc_frontend||[]).push([[2683],{"./node_modules/@heroicons/react/24/solid/esm/ArrowLongRightIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ArrowLongRightIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLongRightIcon)},"./src/components/organisms/hero-tile/hero-tile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hero_tile_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),mocks_image=__webpack_require__("./src/mocks/image.ts"),esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),Image=__webpack_require__("./src/components/atoms/Image/index.tsx"),atoms_link=__webpack_require__("./src/components/atoms/link/index.tsx"),ArrowLongRightIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ArrowLongRightIcon.js"),__jsx=react.createElement;const HeroTile=({image,title,links})=>__jsx("div",{className:"relative w-full pb-[75%] md:pb-[56%] lg:pb-[42%]"},image&&__jsx(Image.A,(0,esm_extends.A)({},image,{alt:title??"",fill:!0,style:{objectFit:"cover"},loading:"eager"})),__jsx("div",{className:"absolute left-0 top-0 size-full bg-black/30"},__jsx("div",{className:"absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-12 lg:left-12"},__jsx("h1",{className:"text-22 font-extrabold leading-loose text-white md:text-28 lg:text-40"},title),links&&links.length>0&&__jsx("div",{className:"mt-2 flex w-fit flex-col gap-6 bg-white py-4 pl-3 pr-6 md:mt-5 md:flex-row md:gap-11 md:px-6 md:py-7 lg:gap-16 lg:px-9"},links.map((({name,href,openInNewTab},index)=>__jsx(atoms_link.A,{key:index,href:href??"#",openInNewTab,className:"flex items-center gap-2 text-14 font-extrabold text-gray-800 md:text-18 lg:text-20"},name," ",__jsx(ArrowLongRightIcon.A,{width:20,className:"text-gray-800"})))))))),hero_tile=HeroTile;HeroTile.__docgenInfo={description:"",methods:[],displayName:"HeroTile",props:{image:{required:!1,tsType:{name:"Image"},description:""},title:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""}}};var hero_tile_stories_jsx=react.createElement;const hero_tile_stories={title:"Organisms/Hero Tile",component:hero_tile,tags:["autodocs"]},Primary=(args=>hero_tile_stories_jsx(hero_tile,args)).bind({});Primary.args={image:{media:{mediaId:mocks_image.S.mediaId,resourceType:"image",name:mocks_image.S.name,tags:[],file:mocks_image.S.url,size:516362,width:1378,height:1378},ratio:"16:9"},title:"Hello, Erika!",links:[{name:"Quotes",href:"#"},{name:"Orders",href:"#"},{name:"Company Admin",href:"#"}]};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <HeroTile {...args} />",...Primary.parameters?.docs?.source}}}},"./src/components/atoms/Image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_Image});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cloudinary=function cloudinaryLoader({mediaId,width,ratio,gravity,x,y}){return`https://res.cloudinary.com/dlwdq84ig/image/upload/${(ratio?["f_auto","c_limit","g_"+(gravity??"auto"),...width?["w_"+width,"q_auto","c_crop"]:[],..."custom"===gravity?["x_"+x,"y_"+y]:[],"ar_"+ratio]:[...width?["w_"+width,"q_auto","c_scale"]:[]]).join(",")}/${mediaId}`},hooks_useDimensions=({media,width:baseWidth,height:baseHeight,fill})=>fill?{}:{width:baseWidth??+(media?.width??0),height:baseHeight??+(media?.height??0)};const loaders_default=function defaultLoader({src,suffix}){let source=src;if(suffix){const lastDotIndex=src.lastIndexOf(".");source=`${source.substring(0,lastDotIndex)}-${suffix}.${source.substring(lastDotIndex+1)}`}return source},_excluded=["media","ratio","gravity","suffix","src","width","height","alt"];var __jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Image=_ref=>{let{media,ratio,gravity,suffix,src="",width,height,alt=""}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const dimensions=hooks_useDimensions(function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({media,width,height},props)),isStaticImage=src.startsWith("/");return __jsx(next_image.A,media?.mediaId?(0,esm_extends.A)({src:media.mediaId,loader:({src:mediaId,width})=>cloudinary({mediaId,width,ratio,gravity:gravity?.mode,x:gravity?.coordinates?.x.toString(),y:gravity?.coordinates?.y.toString()}),alt},dimensions,props):(0,esm_extends.A)({unoptimized:!isStaticImage,src:loaders_default({src,suffix}),loader:({src})=>src,alt},dimensions,props))},atoms_Image=Image;Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},suffix:{required:!1,tsType:{name:"string"},description:""},media:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  mediaId?: string;\n  file?: string;\n  format?: string;\n  name?: string;\n  width?: number | string;\n  height?: number | string;\n  metaData?: string;\n  resourceType?: string;\n  size?: number;\n  tags?: string[];\n  _type?: string;\n}",signature:{properties:[{key:"mediaId",value:{name:"string",required:!1}},{key:"file",value:{name:"string",required:!1}},{key:"format",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"height",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"metaData",value:{name:"string",required:!1}},{key:"resourceType",value:{name:"string",required:!1}},{key:"size",value:{name:"number",required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"_type",value:{name:"string",required:!1}}]}},description:""},ratio:{required:!1,tsType:{name:"string"},description:""},gravity:{required:!1,tsType:{name:"Gravity"},description:""},alt:{defaultValue:{value:"''",computed:!1},required:!1}}}},"./src/components/atoms/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_navigation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./__mocks__/next/navigation/index.ts"),_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/classnames/classnames/index.ts"),_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/ChevronRightIcon.js"),_utils_links__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/links/index.ts");const _excluded=["children","href","locale","openInNewTab","className","chevron","underlineOnHover"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Link=_ref=>{let{children,href,locale:localeOverride,openInNewTab=!1,className="",chevron=!1,underlineOnHover=!0}=_ref,props=(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);const{locale}=(0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.g)(),linkClassName=(0,_utils_classnames_classnames__WEBPACK_IMPORTED_MODULE_4__.p)(className,"w-fit",{"underline-offset-4 hover:underline":underlineOnHover,"flex items-center gap-1":!!chevron});return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_Users_khizar_dev_frontastic_saas_project_libraries_b2b_packages_poc_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({role:"link",href:(0,_utils_links__WEBPACK_IMPORTED_MODULE_6__.S)(href.toString(),localeOverride??locale),target:openInNewTab?"_blank":"_self",className:linkClassName},props),children,chevron&&__jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__.A,{width:16}))},__WEBPACK_DEFAULT_EXPORT__=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{openInNewTab:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chevron:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},underlineOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}}},"./src/mocks/image.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>image});const image={url:"https://res.cloudinary.com/dlwdq84ig/image/upload/v1709210942/ctdihvb57uznq1imofvi.png",mediaId:"ctdihvb57uznq1imofvi",name:"Hero 1"}}}]);