(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"68":function(t,e,n){"use strict";n.r(e),n.d(e,"taro_input_core",(function(){return o}));var i=n(21);function getTrueType(t,e,n){if(!t)throw new Error("unexpected type");return"search"===e&&(t="search"),n&&(t="password"),"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}var o=function(){function Input(t){var e=this;Object(i.g)(this,t),this.isOnComposition=!1,this.onInputExcuted=!1,this.type="text",this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.hanldeInput=function(t){t.stopPropagation();var n=e,i=n.type,o=n.maxlength,u=n.confirmType,s=n.password;if(!e.isOnComposition&&!e.onInputExcuted){var r=t.target.value,a=getTrueType(i,u,s);e.onInputExcuted=!0,"number"===a&&r&&o<=r.length&&(r=r.substring(0,o),t.target.value=r),e.onInput.emit({"value":r,"cursor":r.length})}},this.handleFocus=function(t){e.onInputExcuted=!1,e.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){e.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),e.onChange.emit({"value":t.target.value})},this.handleKeyDown=function(t){var n=t.target.value;e.onInputExcuted=!1,t.stopPropagation(),e.onKeyDown.emit({"value":n}),13===t.keyCode&&e.onConfirm.emit({"value":n})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(e.isOnComposition=!1,e.onInput.emit({"value":t.target.value})):e.isOnComposition=!0)},this.onInput=Object(i.d)(this,"input",7),this.onFocus=Object(i.d)(this,"focus",7),this.onBlur=Object(i.d)(this,"blur",7),this.onConfirm=Object(i.d)(this,"confirm",7),this.onChange=Object(i.d)(this,"change",7),this.onKeyDown=Object(i.d)(this,"keydown",7)}return Input.prototype.componentDidLoad=function(){var t=this;"file"===this.type?(this.fileListener=function(){t.onInput.emit()},this.inputRef.addEventListener("change",this.fileListener)):(this.inputRef.addEventListener("compositionstart",this.handleComposition),this.inputRef.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{"get":function(){return t.inputRef.value},"set":function(e){return t.value=e},"configurable":!0})},Input.prototype.componentDidUnload=function(){"file"===this.type&&this.inputRef.removeEventListener("change",this.fileListener)},Input.prototype.render=function(){var t=this,e=this,n=e.value,o=e.type,u=e.password,s=e.placeholder,r=e.disabled,a=e.maxlength,p=e.autoFocus,h=e.confirmType,l=e.name;return Object(i.f)("input",{"ref":function(e){t.inputRef=e,p&&(null==e||e.focus())},"class":"weui-input","value":fixControlledValue(n),"type":getTrueType(o,h,u),"placeholder":s,"disabled":r,"maxlength":a,"autofocus":p,"name":l,"onInput":this.hanldeInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown})},Object.defineProperty(Input.prototype,"el",{"get":function(){return Object(i.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Input,"style",{"get":function(){return"input,taro-input-core{display:block}input{height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}"},"enumerable":!0,"configurable":!0}),Input}()}}]);