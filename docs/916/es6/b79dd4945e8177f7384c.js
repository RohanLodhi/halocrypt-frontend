(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{7:(e,s,t)=>{"use strict";t.d(s,{u:()=>d,k:()=>c});var o=t(77),r=t(596),n=t(804),i=t(369);const a=(0,i.Z)({},window.__initConfig);window.__initConfig=null;const u=n.h.getStore(),d=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const c=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile",this.passwordResetRequested="password-reset"}__shouldPostLog(){return!o.mH}_admin_getLogs(){if(u.isLoggedIn&&u.userData.is_admin)return(0,r.A)(o.PW.getLogs)}sendUserLog(e){const s="string"==typeof e?{type:e}:e,t=(0,i.Z)({},s,a);this.__shouldPostLog()?d(()=>(0,r.V)(o.PW.addLog,t)):console.log("prod log post ->",t)}};window.onerror=(e,s,t,o,r)=>{const n=r||{};e=e||n.message||"";const i=r.line||n.message||0,a=r.column||0,u=n.script||"",d=n.stackTrace||n.stack||"",l=Date.now(),h=location.href;c.sendUserLog({type:"js-error",timestamp:l,message:e,line:i,column:a,script:u,stack:d,url:h,source:s})}},916:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var o=t(386),r=t(710),n=t(67),i=t(77),a=t(596),u=t(7);function d(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const c=i.EA.forgotPassword,l=e=>(e.target.value||"").trim();class h extends o.wA{constructor(...e){var s;super(...e),s=this,d(this,"state",{user:"",isLoading:!1}),d(this,"onSubmit",()=>{if(this.state.isLoading)return;const e=this.state.user.replace(n.P,"");this.setState({isLoading:!0,success:!1}),(0,a.V)(c,{user:e}).then(e=>{(e.error||e.data.error)&&this.setState({error}),this.setState({success:!0,isLoading:!1})}),u.k.sendUserLog(u.k.passwordResetRequested)}),d(this,"onInputUserName",(async function(e){return s.setState({user:l(e)})})),d(this,"onInputPasswordToken",e=>this.setState({passwordToken:l(e)})),d(this,"onInputNewPassword",e=>this.setState({newPassword:l(e)})),d(this,"onInputConfNewPassword",e=>this.setState({confNewPassword:l(e)})),d(this,"onSubmitPasswordToken",()=>{const e=(this.state.passwordToken||"").trim(),s=this.state.newPassword,t=this.state.confNewPassword,r=[];e||r.push("token"),s||r.push("password"),t||r.push("confirm password"),s!==t&&r.push("Passwords must match"),r.length&&this.setState({error:r}),this.setState({isLoading:!0}),(0,a.V)(i.EA.checkPasswordToken,{token:e,new_password:s}).then(e=>{const s=e.error||e.data.error;if(s)return this.setState({error:s,isLoading:!1});(0,o.uX)("/login?changed-password=true")})}),d(this,"_resetError",()=>this.setState({error:null}))}render(e,s){return(0,o.az)("div",{children:[s.error&&(0,o.az)(n.O,{errorHead:"Failed",reasons:Array.isArray(s.error)?s.error:[s.error],close:this._resetError}),(0,o.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,o.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,o.az)("form",{action:"javascript:",onSubmit:s.success?this.onSubmitPasswordToken:this.onSubmit,children:[s.success&&"Check your email for the token",(0,o.az)("div",{class:"input-parent",children:s.success?(0,o.az)("div",{children:[(0,o.az)(r.H,{onInput:this.onInputPasswordToken,labelText:"Token"}),(0,o.az)(r.H,{onInput:this.onInputNewPassword,labelText:"New Password"}),(0,o.az)(r.H,{onInput:this.onInputConfNewPassword,labelText:"Confirm"})]}):(0,o.az)(r.H,{onInput:this.onInputUserName,labelText:"Username"})}),(0,o.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),s.isLoading&&"Hang on.. Contacting our servers"]})}}},710:(e,s,t)=>{"use strict";t.d(s,{H:()=>n});var o=t(386);function r(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}class n extends o.wA{constructor(...e){super(...e),r(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),r(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),r(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),r(this,"onInput",e=>this.setState({value:e.target.value})),r(this,"__onInput",e=>{const s=this.props.onInput;this.onInput(e),null!=s&&s(e)})}render({idx:e,labelText:s="",type:t="text",inputClass:r,extraProps:n},{isFocused:a,moveDown:u}){const d=e||this.state.id,c=this.state.value,l=["_animate",a||c?"moveup":"",u?"movedown":""];return(0,o.h)("div",{class:"user-input-anim "+(r||"")},(0,o.h)("label",{class:l,for:d},s),(0,o.h)(i,{onFocus:this.onFocus,onBlur:this.onBlur,type:t,value:c,extraProps:n,id:d,onInput:this.__onInput}))}}function i({onFocus:e,onBlur:s,onInput:t,id:r,type:n,value:i,extraProps:a}){return(0,o.h)("input",{onFocus:e,onBlur:s,onInput:t,id:r,value:i,type:n,...a,class:"paper-input"})}},67:(e,s,t)=>{"use strict";t.d(s,{O:()=>r,P:()=>n});var o=t(386);function r(e){return(0,o.az)("div",{class:"app-popup",children:[(0,o.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,o.az)("div",{children:e.errorHead}),(0,o.az)("div",{class:"err-reasons",children:(0,o.az)("div",{children:e.reasons.map(e=>(0,o.az)("div",{children:[" - ",e]}))})}),(0,o.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}const n=/([^\w]|_)/g}}]);