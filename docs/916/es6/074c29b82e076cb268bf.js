(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{916:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>u});var n=s(386),i=s(710),a=s(67),o=s(77);s(596);function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}o.EA.forgotPassword;class u extends n.wA{constructor(...t){var e;super(...t),e=this,r(this,"state",{user:"",isLoading:!1}),r(this,"onSubmit",()=>{this.state.user.replace(a.P,"");this.setState({isLoading:!0})}),r(this,"onInput",(async function(t){e.setState({user:(t.target.value||"").trim()})}))}render(t,e){return(0,n.az)("div",{children:[(0,n.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,n.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,n.az)("form",{action:"javascript:",onSubmit:this.onSubmit,children:[(0,n.az)("div",{class:"input-parent",children:(0,n.az)(i.H,{onInput:this.onInput,labelText:"Username"})}),(0,n.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),e.isLoading&&"Hang on.. Contacting our servers"]})}}},710:(t,e,s)=>{"use strict";s.d(e,{H:()=>a});var n=s(386);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class a extends n.wA{constructor(...t){super(...t),i(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),i(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),i(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),i(this,"onInput",t=>this.setState({value:t.target.value})),i(this,"__onInput",t=>{const e=this.props.onInput;this.onInput(t),null!=e&&e(t)})}render({idx:t,labelText:e="",type:s="text",inputClass:i,extraProps:a},{isFocused:r,moveDown:u}){const l=t||this.state.id,c=this.state.value,p=["_animate",r||c?"moveup":"",u?"movedown":""];return(0,n.h)("div",{class:"user-input-anim "+(i||"")},(0,n.h)("label",{class:p,for:l},e),(0,n.h)(o,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:c,extraProps:a,id:l,onInput:this.__onInput}))}}function o({onFocus:t,onBlur:e,onInput:s,id:i,type:a,value:o,extraProps:r}){return(0,n.h)("input",{onFocus:t,onBlur:e,onInput:s,id:i,value:o,type:a,...r,class:"paper-input"})}},67:(t,e,s)=>{"use strict";s.d(e,{O:()=>i,P:()=>a});var n=s(386);function i(t){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,n.az)("div",{children:t.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:t.reasons.map(t=>(0,n.az)("div",{children:[" - ",t]}))})}),(0,n.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}const a=/([^\w]|_)/g}}]);