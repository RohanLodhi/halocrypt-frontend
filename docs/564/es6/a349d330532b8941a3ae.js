(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{7:(e,t,s)=>{"use strict";s.d(t,{k:()=>l});var n=s(77),i=s(596),o=s(804),r=s(369);const a=(0,r.Z)({session:function(){if("crypto"in self)return crypto.getRandomValues(new Uint8Array(10)).join("-");return String(Math.random())}()},window.__initConfig);window.__initConfig=null;const u=o.h.getStore(),c=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const l=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}__shouldPostLog(){return!n.mH}_admin_getLogs(){if(u.isLoggedIn&&u.userData.is_admin)return(0,i.A)(n.PW.getLogs)}sendUserLog(e){const t="string"==typeof e?{type:e}:e,s=(0,r.Z)({},t,a);this.__shouldPostLog()?c(()=>(0,i.V)(n.PW.addLog,s)):console.log("prod log post ->",s)}sendErrorLog(e){c(()=>this.sendUserLog(e))}};window.onerror=(e,t,s,n,i)=>{const o=i||{};e=e||o.message||"";const r=err.line||o.message||0,a=err.column||0,u=o.script||"",c=o.stackTrace||o.stack||"",d=Date.now(),h=location.href;l.sendErrorLog({type:"js-error",timestamp:d,message:e,line:r,column:a,script:u,stack:c,url:h,source:t})}},564:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var n=s(386),i=s(804),o=s(77),r=s(596),a=(s(710),s(67)),u=s(7);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const l=i.h.getStore(),d=e=>(e||"").toLowerCase().replace(/\s/g,""),h=(0,n.az)(w,{data:{question_level:"Loading",question:"Finding your question",hint:[]}});class p extends n.wA{constructor(...e){var t;super(...e),t=this,c(this,"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),c(this,"onInput",e=>this.setState({answer:d(e.target.value)})),c(this,"_submit",(async function(){const e=t.state.answer,s=t.state.fetchedQuestion&&t.state.fetchedQuestion.question_level||1;if(!e)return;const n={answer:e};t.setState({isAwaitingAnswer:!0});const i=(await(0,r.V)(o.hY.answerQuestion,n)).data;if(u.k.sendUserLog({type:u.k.answeredQuestion,question_level:s}),i.result)return t.proceedToNextLevel();t.setState({isAwaitingAnswer:!1,incorrect:!0})})),c(this,"proceedToNextLevel",()=>{u.k.sendUserLog({type:u.k.accessQuestion,question_level:(this.state.fetchedQuestion||0)+1}),this.setState({fetchedQuestion:null})}),c(this,"resetError",()=>this.setState({incorrect:!1}))}componentDidMount(){if(!l.isLoggedIn)return(0,n.uX)("/login?next=/play");u.k.sendUserLog(u.k.pageViewPlay),this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(this.state.isFetching)return;this.setState({isFetching:!0});const e=await(0,r.A)(o.hY.getQuestion);if(e.error)return this.setState({hasError:!0,isFetching:!1,fetchedQuestion:1});const t=e.data;this.setState({fetchedQuestion:t,isFetching:!1})}render(e,t){return(0,n.az)(n.HY,{children:[t.incorrect&&(0,n.az)(n.HY,{children:[(0,n.az)("div",{class:"mask"}),(0,n.az)(a.O,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?h:(0,n.az)(w,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer..."]})}}const g={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%"}};function w(e){const{data:t,value:s,onInput:i,onSubmit:o}=e;return t.game_over?"You win (?)":(0,n.az)("form",{action:"javascript:",onSubmit:o,children:[(0,n.az)("div",{class:"question-num",children:["Question - ",t.question_level]}),(0,n.az)("div",{class:"question-card",children:[(0,n.az)("div",{children:t.question}),(0,n.az)("div",{class:"question-hint",children:t.hint.map((e,t)=>(0,n.az)("div",{children:`Hint ${t+1}: ${e}`}))}),(0,n.az)("input",{...Object.assign({class:"paper-input",placeholder:"Answer",onInput:i,value:s},g)})]}),(0,n.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}},710:(e,t,s)=>{"use strict";s.d(t,{H:()=>o});var n=s(386);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o extends n.wA{constructor(...e){super(...e),i(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),i(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),i(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),i(this,"onInput",e=>this.setState({value:e.target.value})),i(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({idx:e,labelText:t="",type:s="text",inputClass:i,extraProps:o},{isFocused:a,moveDown:u}){const c=e||this.state.id,l=this.state.value,d=["_animate",a||l?"moveup":"",u?"movedown":""];return(0,n.h)("div",{class:"user-input-anim "+(i||"")},(0,n.h)("label",{class:d,for:c},t),(0,n.h)(r,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:l,extraProps:o,id:c,onInput:this.__onInput}))}}function r({onFocus:e,onBlur:t,onInput:s,id:i,type:o,value:r,extraProps:a}){return(0,n.h)("input",{onFocus:e,onBlur:t,onInput:s,id:i,value:r,type:o,...a,class:"paper-input"})}},67:(e,t,s)=>{"use strict";s.d(t,{O:()=>i,P:()=>o});var n=s(386);function i(e){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,n.az)("div",{children:e.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:e.reasons.map(e=>(0,n.az)("div",{children:[" - ",e]}))})}),(0,n.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}const o=/([^\w]|_)/g}}]);