(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(56),o=a.n(s),c=(a(98),a(100),a(21)),l=a.n(c),i=a(40),u=a(4),m=a(5),h=a(7),p=a(6),d=a(8),v=(a(105),a(283)),b=a(279),f=a(282),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).onClickPreventDefault=function(e){e.preventDefault(),a.props.onSubmit()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"ocontainer"},n.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:this.onClickPreventDefault},n.a.createElement("input",{type:"text",placeholder:"Search username...",onChange:function(t){return e.props.onChange(t.currentTarget.value)}}),n.a.createElement("div",{className:"search"})))}}]),t}(r.Component),E=a(44);function F(e){if(0===e.length)return null;for(var t={},a=1,r=0;r<e.length;r++){var n=e[r];t[n]?t[n]++:t[n]=1,t[n]>a&&(a=t[n])}return a}function y(e){var t="Gray";return"pupil"===e?t="Green":"specialist"===e?t="Cyan":"expert"===e?t="Blue":"candidate master"===e?t="Violet":"master"===e||"international master"===e?t="Orange":"grandmaster"!==e&&"international grandmaster"!==e&&"legendary grandmaster"!==e||(t="Red"),{color:t}}var C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).getT1Data=function(){var e=a.props.submissions,t=Object(E.a)(new Set(e.map(function(e){return e.problem.name}))).length,r=Object(E.a)(e.filter(function(e){return"OK"!==e.verdict})),n=Object(E.a)(e.filter(function(e){return"OK"===e.verdict}).map(function(e){return e.contestId}));return[t,e.length-r.length,F(n)]},a.getT2Data=function(){var e=a.props.contests,t=e.map(function(e){return e.rank});return[e.length,Math.min.apply(null,t),Math.max.apply(null,t)]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.userInfo[0],t=this.getT1Data(),a=this.getT2Data();return n.a.createElement("div",{className:"table-responsive tcontainer"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Some numbers about"),n.a.createElement("th",{scope:"col"},this.props.user))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Tried"),n.a.createElement("td",null,t[0])),n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Solved"),n.a.createElement("td",null,t[1])),n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Max attempts"),n.a.createElement("td",null,t[2])))),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"col"},"Contests of"),n.a.createElement("th",{scope:"col"},this.props.user))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Number of contests"),n.a.createElement("td",null,a[0])),n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Best Rank"),n.a.createElement("td",null,a[1])),n.a.createElement("tr",{className:"trg"},n.a.createElement("th",{scope:"row"},"Worst Rank"),n.a.createElement("td",null,a[2])))),n.a.createElement("table",{className:"table table-borderless"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Current Rank"),n.a.createElement("td",{style:y(e.rank)},e.rank)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Best Rank"),n.a.createElement("td",{style:y(e.rank)},e.maxRank)))))}}]),t}(r.Component),N=a(43),j=a.n(N);function O(){return(O=Object(i.a)(l.a.mark(function e(t){var a,r,n,s,o,c,i,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://codeforces.com/api/user.status?handle=",a="https://codeforces.com/api/user.rating?handle=",r="https://codeforces.com/api/user.info?handles=",e.next=5,j.a.get("https://codeforces.com/api/user.status?handle="+t);case 5:return n=e.sent,s=n.data,e.next=9,j.a.get(a+t);case 9:return o=e.sent,c=o.data,e.next=13,j.a.get(r+t);case 13:return i=e.sent,u=i.data,e.abrupt("return",[s.result,c.result,u.result]);case 16:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var k=function(e){return O.apply(this,arguments)},w=a(125),B=function(e){e.preventDefault()},A=function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"https://jashan498.github.io/cf-visualizer"},"CodeForces Visualizer"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},n.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:B},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search username",onChange:function(t){return e.onChange(t.currentTarget.value)}}),n.a.createElement(w.a,{to:"/lang"},n.a.createElement("button",{className:"btn btn-outline-light my-2 my-sm-0",type:"submit",onClick:e.onSubmit},"Search"))),n.a.createElement("a",{href:"https://github.com/jashan498/cf-visualizer",className:"ml-auto"},n.a.createElement("button",{className:"btn btn-outline-light my-2 my-sm-0",type:"submit"}," Code"))))},D=a(18),x={legend:{position:"right"}},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.filterData=function(){var e=a.props.data,t=[],r=[];for(var n in e)t.push(n),r.push(e[n]);var s={};return s.labels=t.slice(),s.datasets=[{data:r.slice(),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#43A19E","#7B43A1","#F2317A","#FF9824","#58CF6C","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#607D8B","#E65100","#827717","#004D40","#1A237E","#6200EA","#3F51B5","#F50057","#304FFE","#b71c1c"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#0c6db3","#4682B4","#00FFFF","#0099FF","#3E3BF5"]}],s},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",height:"30vh",width:"50vw"}},n.a.createElement(D.c,{data:this.filterData(),options:x}))}}]),t}(r.Component),R={legend:{position:"right"}},T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.filterData=function(){var e=a.props.data,t=[],r=[];for(var n in e)t.push(n),r.push(e[n]);var s={};return s.labels=t.slice(),s.datasets=[{data:r.slice(),label:"Problem Type",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)"}],s},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",height:"30vh",width:"50vw"}},n.a.createElement(D.a,{data:this.filterData(),options:R}))}}]),t}(r.Component),I={legend:{position:"right"}},M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.filterData=function(){var e=a.props.data,t=[],r=[];for(var n in e)t.push(n),r.push(e[n]);var s={};return s.labels=t.slice(),s.datasets=[{data:r.slice(),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#43A19E","#7B43A1","#F2317A","#FF9824","#58CF6C","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#607D8B"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#0c6db3","#4682B4","#00FFFF","#0099FF","#3E3BF5"]}],s},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",height:"30vh",width:"50vw"}},n.a.createElement(D.c,{data:this.filterData(),options:I}))}}]),t}(r.Component),z={legend:{position:"right"}},V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.filterData=function(){var e=a.props.data,t=[],r=[];for(var n in e)t.push(n),r.push(e[n]);var s={};return s.labels=t.slice(),s.datasets=[{data:r.slice(),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#43A19E","#7B43A1","#F2317A","#FF9824","#58CF6C","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#607D8B","#E65100","#827717","#004D40","#1A237E","#6200EA","#3F51B5","#F50057","#304FFE","#b71c1c","#FF6384","#36A2EB","#FFCE56","#0c6db3","#4682B4","#00FFFF","#0099FF","#3E3BF5","#827717","#3F51B5","#8BC34A","#F2317A"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#0c6db3","#4682B4","#00FFFF","#0099FF","#3E3BF5"]}],s},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",height:"30vh",width:"50vw"}},n.a.createElement(D.b,{data:this.filterData(),options:z}))}}]),t}(r.Component),P=a(280),K=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  navbar-transparent"},n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(P.a,{className:"nav-item nav-link",to:"/lang"},"Languages Used"),n.a.createElement(P.a,{className:"nav-item nav-link",to:"/category"},"Problem type"),n.a.createElement(P.a,{className:"nav-item nav-link",to:"/verdict"},"Verdicts"),n.a.createElement(P.a,{className:"nav-item nav-link",to:"/tags"},"Tags"))))}}]),t}(r.Component),L=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.show?n.a.createElement("div",{className:"lcontainer"},n.a.createElement("div",{className:"item item-1"}),n.a.createElement("div",{className:"item item-2"}),n.a.createElement("div",{className:"item item-3"}),n.a.createElement("div",{className:"item item-4"})):null}}]),t}(r.Component),W=a(57),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={userName:"",tuser:"",submissions:[],contests:[],userInfo:[],show:!1,otherRoutes:!1},a.getUnsolvedProblems=function(){var e=a.state.submissions.filter(function(e){return"OK"!==e.verdict}).map(function(e){return e.id});return console.log(e),e},a.programLang=function(){for(var e=a.state.submissions.map(function(e){return e.programmingLanguage}),t={},r=0;r<e.length;r++){var n=e[r];t[n]=t[n]?t[n]+1:1}return t},a.probIndex=function(){for(var e=a.state.submissions.filter(function(e){return"OK"===e.verdict}).map(function(e){return e.problem.index}),t={},r=0;r<e.length;r++){var n=e[r];t[n]=t[n]?t[n]+1:1}return t},a.programVerdict=function(){for(var e=a.state.submissions.map(function(e){return e.verdict}),t={},r=0;r<e.length;r++){var n=e[r];t[n]=t[n]?t[n]+1:1}return t},a.programtags=function(){var e=a.state.submissions.map(function(e){return e.problem.tags});e=[].concat.apply([],e);for(var t={},r=0;r<e.length;r++){var n=e[r];t[n]=t[n]?t[n]+1:1}return t},a.onChange=function(e){a.setState({tuser:e})},a.onSubmit=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({show:!0}),e.prev=1,e.next=4,k(a.state.tuser);case 4:t=e.sent,a.setState({submissions:t[0],contests:t[1],userInfo:t[2],userName:a.state.tuser,show:!1,otherRoutes:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({show:!1}),"Network Error"===e.t0.message&&W.toast.error("Invalid Username");case 12:case"end":return e.stop()}},e,this,[[1,8]])})),a.otherRoutes=function(){return a.state.otherRoutes?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-xs-12 alig"},n.a.createElement(C,{user:a.state.userName,submissions:a.state.submissions,contests:a.state.contests,userInfo:a.state.userInfo})),n.a.createElement("div",{className:"col-md-8 col-xs-12"},n.a.createElement(K,null),n.a.createElement(v.a,null,n.a.createElement(b.a,{path:"/lang",render:function(){return n.a.createElement(S,{data:a.programLang()})}}),n.a.createElement(b.a,{path:"/category",render:function(){return n.a.createElement(T,{data:a.probIndex()})}}),n.a.createElement(b.a,{path:"/verdict",render:function(){return n.a.createElement(M,{data:a.programVerdict()})}}),n.a.createElement(b.a,{path:"/tags",render:function(){return n.a.createElement(V,{data:a.programtags()})}})))):null},a.redirectFromHome=function(){if(a.state.otherRoutes)return n.a.createElement(f.a,{from:"/",to:"/lang"})},a.renderNavBar=function(){return a.state.otherRoutes?n.a.createElement(A,{onChange:a.onChange,onSubmit:a.onSubmit}):n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"https://jashan498.github.io/cf-visualizer"},"CodeForces Visualizer"),n.a.createElement("a",{href:"https://github.com/jashan498/cf-visualizer",className:"ml-auto"},n.a.createElement("button",{className:"btn btn-outline-light my-2 my-sm-0",type:"submit"}," Code")))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.show?n.a.createElement("div",null,this.renderNavBar(),n.a.createElement("div",{className:"container lmar"},n.a.createElement(L,{show:this.state.show})),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container footContainer"},"Developed by ",n.a.createElement("a",{href:"https://github.com/jashan498"},"jashan498")))):n.a.createElement("div",null,this.renderNavBar(),n.a.createElement("div",{className:"container lmar"},n.a.createElement(W.ToastContainer,null),n.a.createElement(b.a,{path:"/",exact:!0,render:function(){return n.a.createElement(g,{onChange:e.onChange,onSubmit:e.onSubmit})}}),this.redirectFromHome(),this.otherRoutes()),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container footContainer"},"Developed by ",n.a.createElement("a",{href:"https://github.com/jashan498"},"jashan498"))))}}]),t}(r.Component);a(276),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(281);o.a.render(n.a.createElement(G.a,null,n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(278)}},[[93,2,1]]]);
//# sourceMappingURL=main.781f4f13.chunk.js.map