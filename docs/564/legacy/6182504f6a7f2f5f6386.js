(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{26007:function(e,t,n){"use strict";n.d(t,{k:function(){return y}});n(66992),n(69600),n(39575),n(41539),n(88674),n(82472),n(92990),n(18927),n(33105),n(35035),n(74345),n(7174),n(32846),n(44731),n(77209),n(96319),n(58867),n(37789),n(33739),n(29368),n(14483),n(12056),n(3462),n(30678),n(27462),n(33824),n(55021),n(12974),n(15016);var r,i=n(11128),o=n.n(i),s=n(33032),a=n.n(s),u=n(93476),c=n.n(u),l=n(54103),d=n.n(l),h=n(80077),p=n(73735),f=n(74383),v=n(59369),g=(0,v.Z)({session:function(){if("crypto"in self)return crypto.getRandomValues(new Uint8Array(10)).join("-");return String(Math.random())}()},window.__initConfig);window.__initConfig=null;var w=f.h.getStore(),m=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(r=c().prototype.then).call(r,c().resolve())||a(),y=new(function(){function e(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}var t=e.prototype;return t.__shouldPostLog=function(){return!h.mH},t._admin_getLogs=function(){if(w.isLoggedIn&&w.userData.is_admin)return(0,p.A)(h.PW.getLogs)},t.sendUserLog=function(e){var t="string"==typeof e?{type:e}:e,n=(0,v.Z)({},t,g);this.__shouldPostLog()?m((function(){return(0,p.V)(h.PW.addLog,n)})):console.log("prod log post ->",n)},t.sendErrorLog=function(e){var t=this;m((function(){return t.sendUserLog(e)}))},e}());window.onerror=function(e,t,n,r,i){var s=i||{};e=e||s.message||"";var a=err.line||s.message||0,u=err.column||0,c=s.script||"",l=s.stackTrace||s.stack||"",d=o()(),h=location.href;y.sendErrorLog({type:"js-error",timestamp:d,message:e,line:a,column:u,script:c,stack:l,url:h,source:t})}},61564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});n(74916),n(15306);var r=n(51942),i=n.n(r),o=n(2991),s=n.n(o),a=n(63109),u=n.n(a),c=(n(35666),n(51161)),l=n.n(c),d=n(77766),h=n.n(d),p=n(5824),f=n.n(p),v=n(94382),g=n.n(v),w=n(87672),m=n.n(w),y=n(12386),_=n(74383),b=n(80077),S=n(73735),k=(n(9710),n(79067)),A=n(26007),x=_.h.getStore(),z=function(e){return(e||"").toLowerCase().replace(/\s/g,"")},I=(0,y.az)(F,{data:{question_level:"Loading",question:"Finding your question",hint:[]}}),L=function(e){function t(){for(var t,n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=e.call.apply(e,h()(t=[this]).call(t,i))||this,m()(f()(n),"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),m()(f()(n),"onInput",(function(e){return n.setState({answer:z(e.target.value)})})),m()(f()(n),"_submit",l()(u().mark((function e(){var t,r,i,o,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state.answer,r=n.state.fetchedQuestion&&n.state.fetchedQuestion.question_level||1,t){e.next=4;break}return e.abrupt("return");case 4:return i={answer:t},n.setState({isAwaitingAnswer:!0}),e.next=8,(0,S.V)(b.hY.answerQuestion,i);case 8:if(o=e.sent,s=o.data,A.k.sendUserLog({type:A.k.answeredQuestion,question_level:r}),!s.result){e.next=13;break}return e.abrupt("return",n.proceedToNextLevel());case 13:n.setState({isAwaitingAnswer:!1,incorrect:!0});case 14:case"end":return e.stop()}}),e)})))),m()(f()(n),"proceedToNextLevel",(function(){A.k.sendUserLog({type:A.k.accessQuestion,question_level:(n.state.fetchedQuestion&&n.state.fetchedQuestion.question_level||0)+1}),n.setState({fetchedQuestion:null})})),m()(f()(n),"resetError",(function(){return n.setState({incorrect:!1})})),n}g()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(!x.isLoggedIn)return(0,y.uX)("/login?next=/play");A.k.sendUserLog(A.k.pageViewPlay),this.fetchQuestion()},n.componentDidUpdate=function(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()},n.fetchQuestion=function(){var e=l()(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isFetching){e.next=2;break}return e.abrupt("return");case 2:return this.setState({isFetching:!0}),e.next=5,(0,S.A)(b.hY.getQuestion);case 5:if(!(t=e.sent).error){e.next=8;break}return e.abrupt("return",this.setState({hasError:!0,isFetching:!1,fetchedQuestion:1}));case 8:n=t.data,this.setState({fetchedQuestion:n,isFetching:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(e,t){return x.eventBegan?(0,y.az)(y.HY,{children:[t.incorrect&&(0,y.az)(y.HY,{children:[(0,y.az)("div",{class:"mask"}),(0,y.az)(k.O,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),t.isFetching||!t.fetchedQuestion?I:(0,y.az)(F,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput,onSubmit:this._submit}),t.isAwaitingAnswer&&"Checking your answer..."]}):(0,y.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})},t}(y.wA),Q={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%"}};function F(e){var t,n=e.data,r=e.value,o=e.onInput,a=e.onSubmit;return n.game_over?"You win (?)":(0,y.az)("form",{action:"javascript:",onSubmit:a,children:[(0,y.az)("div",{class:"question-num",children:["Question - ",n.question_level]}),(0,y.az)("div",{class:"question-card",children:[(0,y.az)("div",{children:n.question}),(0,y.az)("div",{class:"question-hint",children:s()(t=n.hint).call(t,(function(e,t){return(0,y.az)("div",{children:"Hint "+(t+1)+": "+e})}))}),(0,y.az)("input",i()({class:"paper-input",placeholder:"Answer",onInput:o,value:r},Q))]}),(0,y.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}},9710:function(e,t,n){"use strict";n.d(t,{H:function(){return f}});var r=n(51942),i=n.n(r),o=n(77766),s=n.n(o),a=n(5824),u=n.n(a),c=n(94382),l=n.n(c),d=n(87672),h=n.n(d),p=n(12386),f=function(e){function t(){for(var t,n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=e.call.apply(e,s()(t=[this]).call(t,i))||this,h()(u()(n),"state",{id:Math.random(),isFocused:!1,value:n.props.value||""}),h()(u()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),h()(u()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),h()(u()(n),"onInput",(function(e){return n.setState({value:e.target.value})})),h()(u()(n),"__onInput",(function(e){var t=n.props.onInput;n.onInput(e),null!=t&&t(e)})),n}return l()(t,e),t.prototype.render=function(e,t){var n=e.idx,r=e.labelText,i=void 0===r?"":r,o=e.type,s=void 0===o?"text":o,a=e.inputClass,u=e.extraProps,c=t.isFocused,l=t.moveDown,d=n||this.state.id,h=this.state.value,f=["_animate",c||h?"moveup":"",l?"movedown":""];return(0,p.h)("div",{class:"user-input-anim "+(a||"")},(0,p.h)("label",{class:f,for:d},i),(0,p.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:h,extraProps:u,id:d,onInput:this.__onInput}))},t}(p.wA);function v(e){var t=e.onFocus,n=e.onBlur,r=e.onInput,o=e.id,s=e.type,a=e.value,u=e.extraProps;return(0,p.h)("input",i()({onFocus:t,onBlur:n,onInput:r,id:o,value:a,type:s},u,{class:"paper-input"}))}},79067:function(e,t,n){"use strict";n.d(t,{O:function(){return s},P:function(){return a}});var r=n(2991),i=n.n(r),o=n(12386);function s(e){var t;return(0,o.az)("div",{class:"app-popup",children:[(0,o.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,o.az)("div",{children:e.errorHead}),(0,o.az)("div",{class:"err-reasons",children:(0,o.az)("div",{children:i()(t=e.reasons).call(t,(function(e){return(0,o.az)("div",{children:[" - ",e]})}))})}),(0,o.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}var a=/([^\w]|_)/g},15306:function(e,t,n){"use strict";var r=n(27007),i=n(19670),o=n(47908),s=n(17466),a=n(99958),u=n(84488),c=n(31530),l=n(97651),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=r.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,r){var i=u(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!g&&w||"string"==typeof r&&-1===r.indexOf(m)){var o=n(t,e,this,r);if(o.done)return o.value}var u=i(e),p=String(this),f="function"==typeof r;f||(r=String(r));var v=u.global;if(v){var _=u.unicode;u.lastIndex=0}for(var b=[];;){var S=l(u,p);if(null===S)break;if(b.push(S),!v)break;""===String(S[0])&&(u.lastIndex=c(p,s(u.lastIndex),_))}for(var k,A="",x=0,z=0;z<b.length;z++){S=b[z];for(var I=String(S[0]),L=d(h(a(S.index),p.length),0),Q=[],F=1;F<S.length;F++)Q.push(void 0===(k=S[F])?k:String(k));var E=S.groups;if(f){var P=[I].concat(Q,L,p);void 0!==E&&P.push(E);var q=String(r.apply(void 0,P))}else q=y(I,p,L,Q,E,r);L>=x&&(A+=p.slice(x,L)+q,x=L+I.length)}return A+p.slice(x)}];function y(e,n,r,i,s,a){var u=r+e.length,c=i.length,l=v;return void 0!==s&&(s=o(s),l=f),t.call(a,l,(function(t,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":a=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return t;if(l>c){var d=p(l/10);return 0===d?t:d<=c?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):t}a=i[l-1]}return void 0===a?"":a}))}}))}}]);