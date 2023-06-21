"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["packages_color_src_index_jsx"],{

/***/ 77312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/dropdown/style/index.js + 1 modules
var style = __webpack_require__(66294);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(79525);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tooltip/style/index.js + 1 modules
var tooltip_style = __webpack_require__(90921);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(16606);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tabs/style/index.js + 1 modules
var tabs_style = __webpack_require__(45783);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tabs/index.js + 22 modules
var tabs = __webpack_require__(89274);
// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./packages/color/node_modules/react-color/lib/index.js + 51 modules
var lib = __webpack_require__(52677);
// EXTERNAL MODULE: ../my-cli/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(56972);
;// CONCATENATED MODULE: ./packages/color/src/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"colorBox":"packages-color-src-index-module__colorBox","colorButton":"packages-color-src-index-module__colorButton","colorValue":"packages-color-src-index-module__colorValue","colorIcon":"packages-color-src-index-module__colorIcon","colorClear":"packages-color-src-index-module__colorClear","colorButtonDisabled":"packages-color-src-index-module__colorButtonDisabled","colorSelectBox":"packages-color-src-index-module__colorSelectBox","presetColors":"packages-color-src-index-module__presetColors","positiontop":"packages-color-src-index-module__positiontop","colorPaneBox":"packages-color-src-index-module__colorPaneBox","variableColors":"packages-color-src-index-module__variableColors","colorPaneBoxHeight":"packages-color-src-index-module__colorPaneBoxHeight"});
// EXTERNAL MODULE: ./packages/theme/src/cssVariables.js
var cssVariables = __webpack_require__(4909);
;// CONCATENATED MODULE: ./packages/color/src/colorsVariable.js
/* harmony default export */ const colorsVariable = (['var(--icode-primary-1)','var(--icode-primary-2)','var(--icode-primary-3)','var(--icode-primary-4)','var(--icode-primary-5)','var(--icode-primary-6)','var(--icode-primary-7)','var(--icode-primary-8)','var(--icode-primary-9)','var(--icode-primary-10)','var(--icode-primary-color)','var(--icode-primary-color-disabled)','var(--icode-primary-color-hover)','var(--icode-primary-color-active)','var(--icode-primary-color-outline)','var(--icode-primary-color-deprecated-bg)','var(--icode-primary-color-deprecated-border)','var(--icode-success-color)','var(--icode-success-color-disabled)','var(--icode-success-color-hover)','var(--icode-success-color-active)','var(--icode-success-color-outline)','var(--icode-success-color-deprecated-bg)','var(--icode-success-color-deprecated-border)','var(--icode-warning-color)','var(--icode-warning-color-disabled)','var(--icode-warning-color-hover)','var(--icode-warning-color-active)','var(--icode-warning-color-outline)','var(--icode-warning-color-deprecated-bg)','var(--icode-warning-color-deprecated-border)','var(--icode-error-color)','var(--icode-error-color-disabled)','var(--icode-error-color-hover)','var(--icode-error-color-active)','var(--icode-error-color-outline)','var(--icode-error-color-deprecated-bg)','var(--icode-error-color-deprecated-border)','var(--icode-background-color)','var(--icode-border-color)','var(--icode-tooltip-background-color)','var(--icode-tooltip-text-color)','var(--icode-text-color)','var(--icode-text-color-disabled)','var(--icode-text-color-hover)','var(--icode-text-color-active)','var(--icode-text-color-outline)','var(--icode-text-color-deprecated-bg)','var(--icode-text-color-deprecated-border)']);
;// CONCATENATED MODULE: ./packages/color/src/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * Color
 * @author tianyanrong
 */var TabPane=tabs/* default.TabPane */.Z.TabPane;var ColorPicker=/*#__PURE__*/function(_Component){_inherits(ColorPicker,_Component);var _super=_createSuper(ColorPicker);function ColorPicker(){var _this;_classCallCheck(this,ColorPicker);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={colorValue:''};_this.prevPropsColorValue='';return _this;}_createClass(ColorPicker,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,position=_this$props.position,presetColors=_this$props.presetColors,onChange=_this$props.onChange;var colorValue=this.state.colorValue;if(this.prevPropsColorValue!==this.props.colorValue){colorValue=this.props.colorValue;this.prevPropsColorValue=this.props.colorValue;}return/*#__PURE__*/index_js_default().createElement("div",{className:"".concat(index_module.colorSelectBox," ").concat(index_module['position'+position])},presetColors&&presetColors.length?/*#__PURE__*/index_js_default().createElement("ul",{className:index_module.presetColors},(presetColors||[]).map(function(item){return/*#__PURE__*/index_js_default().createElement("li",{style:{background:"".concat(item)},onClick:function onClick(event){event.preventDefault();event.stopPropagation();if(onChange&&typeof onChange==='function'){onChange(item);}}});})):null,/*#__PURE__*/index_js_default().createElement(lib/* SketchPicker */.xS,{disableAlpha:false,color:colorValue,presetColors:[],onChangeComplete:function onChangeComplete(color){var rgbaValue=color.rgb||'';if(rgbaValue){rgbaValue="rgba(".concat(rgbaValue.r,",").concat(rgbaValue.g,",").concat(rgbaValue.b,",").concat(rgbaValue.a,")");}_this2.setState({colorValue:rgbaValue});if(onChange&&typeof onChange==='function'){onChange(rgbaValue);}}}));}}]);return ColorPicker;}(index_js_.Component);var Color=/*#__PURE__*/function(_React$Component){_inherits(Color,_React$Component);var _super2=_createSuper(Color);function Color(){var _this3;_classCallCheck(this,Color);for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this3=_super2.call.apply(_super2,[this].concat(args));_this3.state={};_this3.clearColorValue=function(event){event.preventDefault();event.stopPropagation();var onChange=_this3.props.onChange;if(onChange&&typeof onChange==='function'){onChange('');}};_this3.container=null;_this3.getGlobalThemesColors=function(){var global=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var colors=['#ffffff','#000000','#333333','#555555'];var colorNames=['backgroundColor','borderColor','errorColor','successColor','warningColor','textColor'];var primaryColors=(0,cssVariables/* getColorPalettes */.K)(global.primaryColor,global.themeMode==='dark');colors=[].concat([],colors,primaryColors);Object.keys(global).forEach(function(colorName){if(colorNames.indexOf(colorName)>=0&&colors.indexOf(global[colorName])===-1){colors.push(global[colorName]);}});return colors;};_this3.variableColors=colorsVariable;_this3.handleVisibleChange=function(flag){_this3.setState({visible:flag});};return _this3;}_createClass(Color,[{key:"componentDidMount",value:function componentDidMount(){// const container = document.getElementById('designer-color-picker');
// if(!container) {
//   this.container = document.createElement('div');
//   this.container.addEventListener('click', (event) => {
//     this.keepShowing();
//   })
//   this.container.id = 'designer-color-picker';
//   document.body.appendChild(this.container);
//   document.addEventListener('click', (event) => {
//     if(this.container.isShowEvent) {
//       return;
//     }
//     if(this.container && !this.container.display) {
//       this.container.style.display = 'none';
//     }
//   });
// }
// else {
//   this.container = container;
// }
}// keepShowing = () => {
//   this.container.isShowEvent = true;
//   this.showEventTimeValue = setTimeout(() => {
//     this.container.isShowEvent = false;
//     clearTimeout(this.showEventTimeValue);
//     this.showEventTimeValue = null;
//   }, 200)
// }
},{key:"render",value:function render(){//const {colorValue} = this.state;
var _this$props2=this.props,children=_this$props2.children,isShowPresetColors=_this$props2.isShowPresetColors,_this$props2$param=_this$props2.param,param=_this$props2$param===void 0?{}:_this$props2$param,global=_this$props2.global,disabled=_this$props2.disabled;var visible=this.state.visible;var isParam=param.onChange&&typeof param.onChange==='function';var onChange=isParam?param.onChange:this.props.onChange||function(){};var value=isParam?param.value:this.props.value||'';var colorValue=value;return/*#__PURE__*/index_js_default().createElement("div",{className:index_module.colorBox,style:this.props.style},/*#__PURE__*/index_js_default().createElement(dropdown/* default */.Z,{onVisibleChange:this.handleVisibleChange,visible:visible,overlayClassName:isShowPresetColors?index_module.colorPaneBox:"".concat(index_module.colorPaneBox," ").concat(index_module.colorPaneBoxHeight),trigger:"click",disabled:disabled,overlay:/*#__PURE__*/index_js_default().createElement("div",null,isShowPresetColors?/*#__PURE__*/index_js_default().createElement(tabs/* default */.Z,{defaultActiveKey:isShowPresetColors?'1':'2'},/*#__PURE__*/index_js_default().createElement(TabPane,{tab:"变量颜色",key:"1"},/*#__PURE__*/index_js_default().createElement("ul",{className:index_module.variableColors},this.variableColors.map(function(colorText){var text=colorText.replace(/^var\(\-\-custom\-/,'').replace(/\)$/,'');return/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(tooltip/* default */.Z,{title:text},/*#__PURE__*/index_js_default().createElement("span",{onClick:function onClick(){onChange(colorText);},style:{background:colorText}})));}))),/*#__PURE__*/index_js_default().createElement(TabPane,{tab:"颜色选取",key:"2"},/*#__PURE__*/index_js_default().createElement(ColorPicker,{onChange:onChange,presetColors:this.getGlobalThemesColors(global),colorValue:value}))):/*#__PURE__*/index_js_default().createElement(ColorPicker,{onChange:onChange,presetColors:this.getGlobalThemesColors(global),colorValue:value}))},/*#__PURE__*/index_js_default().createElement("div",{className:"".concat(index_module.colorButton," tf-color ").concat(disabled?index_module.colorButtonDisabled:'')},/*#__PURE__*/index_js_default().createElement("div",{className:index_module.colorValue,style:{background:"".concat(children?'#fff':colorValue),color:"".concat(colorValue)}},children||''),/*#__PURE__*/index_js_default().createElement("div",{className:index_module.colorIcon},colorValue&&!disabled?/*#__PURE__*/index_js_default().createElement("div",{className:index_module.colorClear,onClick:this.clearColorValue},/*#__PURE__*/index_js_default().createElement(CloseCircleOutlined/* default */.Z,null)):null,/*#__PURE__*/index_js_default().createElement("svg",{style:{width:'0.8em',height:'0.8em'},viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/index_js_default().createElement("path",{d:"M24 40.9444C26.123 42.8446 28.9266 44 32 44C38.6274 44 44 38.6274 44 32C44 26.4085 40.1757 21.7102 35 20.3781",stroke:"#333","stroke-width":"2","stroke-linejoin":"round"}),/*#__PURE__*/index_js_default().createElement("path",{d:"M13 20.3781C7.82432 21.7102 4 26.4085 4 32C4 38.6274 9.37258 44 16 44C22.6274 44 28 38.6274 28 32C28 30.4506 27.7063 28.9697 27.1716 27.6101",stroke:"#333","stroke-width":"2","stroke-linejoin":"round"}),/*#__PURE__*/index_js_default().createElement("path",{d:"M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z",fill:"#2F88FF",stroke:"#333","stroke-width":"2","stroke-linejoin":"round"}))))));}}]);return Color;}((index_js_default()).Component);/* harmony default export */ const src = (Color);

/***/ }),

/***/ 4909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getColorPalettes),
/* harmony export */   "g": () => (/* binding */ dynamicCssVariableds)
/* harmony export */ });
/* harmony import */ var rc_util_lib_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93183);
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36560);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97413);
function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var dynamicStyleMark="-ant-".concat(Date.now(),"-").concat(Math.random());var _getColorPalettes=function _getColorPalettes(baseColor,isDark){var newBaseColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__/* .TinyColor */ .C(baseColor);return (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_1__/* .generate */ .R_)(newBaseColor.toRgbString(),{theme:isDark?'dark':'',backgroundColor:isDark?'#000':'#fff'});};var _formatColor=function _formatColor(color,updater){var clone=color.clone();clone=(updater===null||updater===void 0?void 0:updater(clone))||clone;return clone.toRgbString();};var getColorPalettes=_getColorPalettes;var dynamicCssVariableds=function dynamicCssVariableds(globalPrefixCls,theme,isDark){var primaryColor=theme.primaryColor,successColor=theme.successColor,warningColor=theme.warningColor,errorColor=theme.errorColor,infoColor=theme.infoColor,textColor=theme.textColor,chartColors=theme.chartColors,rest=_objectWithoutProperties(theme,["primaryColor","successColor","warningColor","errorColor","infoColor","textColor","chartColors"]);var variables={};var _fillColor=function _fillColor(colorVal,type,isDark){var baseColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__/* .TinyColor */ .C(colorVal);var colorPalettes=_getColorPalettes(colorVal,isDark);variables["".concat(type,"-color")]=_formatColor(baseColor);variables["".concat(type,"-color-disabled")]=baseColor.clone().setAlpha(0.4).toRgbString();;variables["".concat(type,"-color-hover")]=colorPalettes[4];variables["".concat(type,"-color-active")]=colorPalettes[7];variables["".concat(type,"-color-outline")]=baseColor.clone().setAlpha(0.2).toRgbString();variables["".concat(type,"-color-deprecated-bg")]=colorPalettes[1];variables["".concat(type,"-color-deprecated-border")]=colorPalettes[3];};if(theme.primaryColor){_fillColor(theme.primaryColor,'primary',isDark);var newPrimaryColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__/* .TinyColor */ .C(theme.primaryColor);var primaryColors=_getColorPalettes(theme.primaryColor,isDark);// Legacy - We should use semantic naming standard
primaryColors.forEach(function(color,index){variables["primary-".concat(index+1)]=color;});// Deprecated
variables['primary-color-deprecated-l-35']=_formatColor(newPrimaryColor,function(c){return c.lighten(35);});variables['primary-color-deprecated-l-20']=_formatColor(newPrimaryColor,function(c){return c.lighten(20);});variables['primary-color-deprecated-t-20']=_formatColor(newPrimaryColor,function(c){return c.tint(20);});variables['primary-color-deprecated-t-50']=_formatColor(newPrimaryColor,function(c){return c.tint(50);});variables['primary-color-deprecated-f-12']=_formatColor(newPrimaryColor,function(c){return c.setAlpha(c.getAlpha()*0.12);});var primaryActiveColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__/* .TinyColor */ .C(primaryColors[0]);variables['primary-color-active-deprecated-f-30']=_formatColor(primaryActiveColor,function(c){return c.setAlpha(c.getAlpha()*0.3);});variables['primary-color-active-deprecated-d-02']=_formatColor(primaryActiveColor,function(c){return c.darken(2);});}if(theme.successColor){_fillColor(theme.successColor,'success',isDark);}if(theme.warningColor){_fillColor(theme.warningColor,'warning',isDark);}if(theme.errorColor){_fillColor(theme.errorColor,'error',isDark);}if(theme.infoColor){_fillColor(theme.infoColor,'info',isDark);}if(theme.textColor){_fillColor(theme.textColor,'text',isDark);}if(theme.chartColors){theme.chartColors.forEach(function(item,index){variables["chart-".concat(index+1)]=item;});}for(var key in rest){var newKey=key.replace(/[A-Z]/g,function(value){return"-".concat(value.toLowerCase());});variables[newKey]=rest[key];}var cssList=Object.keys(variables).map(function(key){return"--".concat(globalPrefixCls,"-").concat(key,": ").concat(variables[key],";");});(0,rc_util_lib_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_0__/* .updateCSS */ .hq)("\n  :root {\n    ".concat(cssList.join('\n'),"\n  }\n  "),"".concat(dynamicStyleMark,"-dynamic-theme"));};

/***/ })

}]);