(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1128:function(t,e,n){t.exports=n(7784)},6007:function(t,e,n){"use strict";n.d(e,{u:function(){return m},k:function(){return S}});n(1539),n(8674);var r,o=n(1128),s=n.n(o),a=n(3032),i=n.n(a),u=n(875),c=n.n(u),l=n(4103),d=n.n(l),p=n(77),f=n(3735),h=n(4383),v=n(9369),g=(0,v.Z)({},window.__initConfig);window.__initConfig=null;var w=h.h.getStore(),m=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(r=c().prototype.then).call(r,c().resolve())||i(),S=new(function(){function t(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile",this.passwordResetRequested="password-reset"}var e=t.prototype;return e.__shouldPostLog=function(){return!p.mH},e._admin_getLogs=function(){if(w.isLoggedIn&&w.userData.is_admin)return(0,f.A)(p.PW.getLogs)},e.sendUserLog=function(t){var e="string"==typeof t?{type:t}:t,n=(0,v.Z)({},e,g);this.__shouldPostLog()?m((function(){return(0,f.V)(p.PW.addLog,n)})):console.log("prod log post ->",n)},t}());window.onerror=function(t,e,n,r,o){var a=o||{};t=t||a.message||"";var i=o.line||a.message||0,u=o.column||0,c=a.script||"",l=a.stackTrace||a.stack||"",d=s()(),p=location.href;S.sendUserLog({type:"js-error",timestamp:d,message:t,line:i,column:u,script:c,stack:l,url:p,source:e})}},2916:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return L}});n(4916),n(5306);var r=n(1511),o=n.n(r),s=n(3109),a=n.n(s),i=(n(5666),n(1161)),u=n.n(i),c=n(7766),l=n.n(c),d=n(1222),p=n.n(d),f=n(4382),h=n.n(f),v=n(7672),g=n.n(v),w=n(5843),m=n.n(w),S=n(2386),P=n(9710),b=n(9067),k=n(77),I=n(3735),_=n(6007),x=k.EA.forgotPassword,y=function(t){return t.replace(b.Pt,"")},z=function(t){var e;return m()(e=t.target.value||"").call(e)},L=function(t){function e(){for(var e,n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=t.call.apply(t,l()(e=[this]).call(e,o))||this,g()(p()(n),"state",{user:"",isLoading:!1}),g()(p()(n),"onSubmit",(function(){if(!n.state.isLoading){var t=y(n.state.user);n.setState({isLoading:!0,success:!1}),(0,I.V)(x,{user:t}).then((function(t){(t.error||t.data.error)&&n.setState({error:error}),n.setState({success:!0,isLoading:!1})})),_.k.sendUserLog(_.k.passwordResetRequested)}})),g()(p()(n),"onInputUserName",function(){var t=u()(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.setState({user:z(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g()(p()(n),"onInputPasswordToken",(function(t){return n.setState({passwordToken:z(t)})})),g()(p()(n),"onInputNewPassword",(function(t){return n.setState({newPassword:z(t)})})),g()(p()(n),"onInputConfNewPassword",(function(t){return n.setState({confNewPassword:z(t)})})),g()(p()(n),"onSubmitPasswordToken",(function(){var t,e=m()(t=n.state.passwordToken||"").call(t),r=n.state.newPassword,o=n.state.confNewPassword,s=[];e||s.push("token"),r||s.push("password"),o||s.push("confirm password"),r!==o&&s.push("Passwords must match"),s.length&&n.setState({error:s}),n.setState({isLoading:!0}),(0,I.V)(k.EA.checkPasswordToken,{token:e,new_password:r}).then((function(t){var e=t.error||t.data.error;if(e)return n.setState({error:e,isLoading:!1});(0,S.uX)("/login?changed-password=true")}))})),g()(p()(n),"_resetError",(function(){return n.setState({error:null})})),n}return h()(e,t),e.prototype.render=function(t,e){return(0,S.az)("div",{children:[e.error&&(0,S.az)(b.OK,{errorHead:"Failed",reasons:o()(e.error)?e.error:[e.error],close:this._resetError}),(0,S.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,S.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,S.az)("form",{action:"javascript:",onSubmit:e.success?this.onSubmitPasswordToken:this.onSubmit,children:[e.success&&"Check your email for the token",(0,S.az)("div",{class:"input-parent",children:e.success?(0,S.az)("div",{children:[(0,S.az)(P.H,{onInput:this.onInputPasswordToken,labelText:"Token"}),(0,S.az)(P.H,{onInput:this.onInputNewPassword,labelText:"New Password"}),(0,S.az)(P.H,{onInput:this.onInputConfNewPassword,labelText:"Confirm"})]}):(0,S.az)(P.H,{onInput:this.onInputUserName,labelText:"Username"})}),(0,S.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),e.isLoading&&"Hang on.. Contacting our servers"]})},e}(S.wA)},9710:function(t,e,n){"use strict";n.d(e,{H:function(){return h}});var r=n(1942),o=n.n(r),s=n(7766),a=n.n(s),i=n(1222),u=n.n(i),c=n(4382),l=n.n(c),d=n(7672),p=n.n(d),f=n(2386),h=function(t){function e(){for(var e,n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=t.call.apply(t,a()(e=[this]).call(e,o))||this,p()(u()(n),"state",{id:Math.random(),isFocused:!1,value:n.props.value||""}),p()(u()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),p()(u()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),p()(u()(n),"onInput",(function(t){return n.setState({value:t.target.value})})),p()(u()(n),"__onInput",(function(t){var e=n.props.onInput;n.onInput(t),null!=e&&e(t)})),n}return l()(e,t),e.prototype.render=function(t,e){var n=t.idx,r=t.labelText,o=void 0===r?"":r,s=t.type,a=void 0===s?"text":s,i=t.inputClass,u=t.extraProps,c=e.isFocused,l=e.moveDown,d=n||this.state.id,p=this.state.value,h=["_animate",c||p?"moveup":"",l?"movedown":""];return(0,f.h)("div",{class:"user-input-anim "+(i||"")},(0,f.h)("label",{class:h,for:d},o),(0,f.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:a,value:p,extraProps:u,id:d,onInput:this.__onInput}))},e}(f.wA);function v(t){var e=t.onFocus,n=t.onBlur,r=t.onInput,s=t.id,a=t.type,i=t.value,u=t.extraProps;return(0,f.h)("input",o()({onFocus:e,onBlur:n,onInput:r,id:s,value:i,type:a},u,{class:"paper-input"}))}},9067:function(t,e,n){"use strict";n.d(e,{OK:function(){return u},Pt:function(){return c}});var r=n(2991),o=n.n(r),s=n(1942),a=n.n(s),i=n(2386);function u(t){return(0,i.az)(l,a()({},t,{title:"Something Ain't Right"}))}var c=/([^\w]|_)/g;function l(t){var e;return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:"props.title"}),(0,i.az)("div",{children:t.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:o()(e=t.reasons).call(e,(function(t){return(0,i.az)("div",{children:[" - ",t]})}))})}),(0,i.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}},1103:function(t,e,n){n(5160);var r=n(4058);t.exports=r.Date.now},5160:function(t,e,n){n(6887)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},7784:function(t,e,n){var r=n(1103);t.exports=r},5306:function(t,e,n){"use strict";var r=n(7007),o=n(9670),s=n(7908),a=n(7466),i=n(9958),u=n(4488),c=n(1530),l=n(7651),d=Math.max,p=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=r.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,r){var o=u(this),s=null==n?void 0:n[t];return void 0!==s?s.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!g&&w||"string"==typeof r&&-1===r.indexOf(m)){var s=n(e,t,this,r);if(s.done)return s.value}var u=o(t),f=String(this),h="function"==typeof r;h||(r=String(r));var v=u.global;if(v){var P=u.unicode;u.lastIndex=0}for(var b=[];;){var k=l(u,f);if(null===k)break;if(b.push(k),!v)break;""===String(k[0])&&(u.lastIndex=c(f,a(u.lastIndex),P))}for(var I,_="",x=0,y=0;y<b.length;y++){k=b[y];for(var z=String(k[0]),L=d(p(i(k.index),f.length),0),T=[],A=1;A<k.length;A++)T.push(void 0===(I=k[A])?I:String(I));var E=k.groups;if(h){var C=[z].concat(T,L,f);void 0!==E&&C.push(E);var F=String(r.apply(void 0,C))}else F=S(z,f,L,T,E,r);L>=x&&(_+=f.slice(x,L)+F,x=L+z.length)}return _+f.slice(x)}];function S(t,n,r,o,a,i){var u=r+t.length,c=o.length,l=v;return void 0!==a&&(a=s(a),l=h),e.call(i,l,(function(e,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":i=a[s.slice(1,-1)];break;default:var l=+s;if(0===l)return e;if(l>c){var d=f(l/10);return 0===d?e:d<=c?void 0===o[d-1]?s.charAt(1):o[d-1]+s.charAt(1):e}i=o[l-1]}return void 0===i?"":i}))}}))}}]);