webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},"23dM":function(e,t){},"67L/":function(e,t,n){e.exports=n.p+"img/resultmap-ireland.1976c452.svg"},"9qj/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("SldL");var r=n("7hDC"),i=n.n(r),s=n("/5sW"),o=n("Biqn"),a=n.n(o),c=n("NYxO"),u={props:{text:{type:String,required:!1}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[e._t("default")],2)},f=[],p=n("XyMi");function m(e){n("lKel")}var h=!1,d=m,g="data-v-175f1cf6",v=null,y=Object(p["a"])(u,l,f,h,d,g,v),b=y.exports,_={components:{MainButton:b}},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay"},[n("h1",[e._v("Find out where you belong.")]),n("p",[e._v("Tell us if something is hot or not by swiping left and right - once you're done we'll tell you which European countries are perfect for you.")]),n("main-button",{staticClass:"overlay-btn",nativeOn:{click:function(t){e.$store.commit("toggleOverlay")}}},[e._v("Got it!")])],1)},C=[];function O(e){n("9qj/")}var x=!1,S=O,k=null,j=null,$=Object(p["a"])(_,w,C,x,S,k,j),E=$.exports,R={components:{FullscreenOverlay:E},computed:a()({},Object(c["d"])(["overlayOpen"]))},U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.overlayOpen?n("fullscreen-overlay"):e._e(),n("router-view")],1)},T=[];function q(e){n("+VGo")}var F=!1,B=q,N=null,I=null,M=Object(p["a"])(R,U,T,F,B,N,I),D=M.exports,V=n("/ocq"),Z={components:{MainButton:b},methods:{next:function(){this.$router.push("/tutorial")}}},G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view splash"},[r("img",{attrs:{src:n("ssSR"),alt:"EU Flagge"}}),e._m(0),r("main-button",{staticClass:"btn",nativeOn:{click:function(t){return e.next(t)}}},[e._v("Find my Country!")])],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"splash-textarea"},[n("h1",[e._v("Find out where you belong.")]),n("p",[e._v("Tell us what is hot and what is not...\n    "),n("br"),e._v("and we will find your match!")])])}];function z(e){n("sU6u")}var A=!1,Y=z,H=null,K=null,P=Object(p["a"])(Z,G,L,A,Y,H,K),X=P.exports,J={components:{MainButton:b},methods:{next:function(){this.$router.push("/selection")}}},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view tutorial"},[n("h1",[e._v("Find out where you belong.")]),n("p",[e._v("Tell us if something is hot or not by swiping left and right - once you're done we'll tell you which European countries are perfect for you.")]),n("main-button",{staticClass:"btn",nativeOn:{click:function(t){return e.next(t)}}},[e._v("Let's go!")])],1)},Q=[];function ee(e){n("T+Ti")}var te=!1,ne=ee,re=null,ie=null,se=Object(p["a"])(J,W,Q,te,ne,re,ie),oe=se.exports,ae=(n("YVn/"),n("NM/j")),ce=n.n(ae),ue=(n("mJx5"),n("XqSU")),le=n.n(ue),fe={props:{image:{type:String,required:!0},title:{type:String,required:!0},bulletpoints:{type:Array,required:!1,default:function(){return[]}},animate:{type:Object,required:!1,default:function(){return{}}}}},pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sel-container"},[n("div",{class:["sel-card",{"sel-card-fade":e.animate.do},{"sel-card-fade-left":e.animate.do&&"left"===e.animate.dir},{"sel-card-fade-right":e.animate.do&&"right"===e.animate.dir}],style:"background-image: url("+e.image+")"},[n("p",[e._v(e._s(e._f("capitalize")(e.title)))]),n("ul",e._l(e.bulletpoints,function(t,r){return n("li",{key:r},[e._v("\n        * "+e._s(t)+" *\n      ")])}))])])},me=[];function he(e){n("esSk")}var de=!1,ge=he,ve="data-v-37554774",ye=null,be=Object(p["a"])(fe,pe,me,de,ge,ve,ye),_e=be.exports,we={components:{SelectionCard:_e},data:function(){return{testImg:le.a,animateCard:!1,animateDir:"left"}},computed:a()({},Object(c["c"])(["unselectedCategories"]),Object(c["d"])(["userSelection"]),{currentCategory:function(){return this.unselectedCategories[0]},currentTitle:function(){return this.userSelection[this.currentCategory].title},currentImage:function(){return this.userSelection[this.currentCategory].image},currentBulletpoints:function(){return this.userSelection[this.currentCategory].bulletpoints.split("\r\n").filter(function(e){var t=ce()(e,1),n=t[0];return!!n})},numberOfCategories:function(){return Object.values(this.userSelection).length},currentCategoryNumber:function(){return this.numberOfCategories-this.unselectedCategories.length+1}}),methods:a()({},Object(c["b"])(["sendData","selectCategory"]),{openOverlay:function(){this.$store.commit("toggleOverlay")},dismiss:function(){this.select({type:"dismiss"})},accept:function(){this.select({type:"accept"})},select:function(e){var t=this,n=e.type;this.animateCard=!0,this.animateDir="dismiss"===n?"left":"right",setTimeout(function(){t.selectCategory({type:n,category:t.currentCategory}),t.animateCard=!1,0===t.unselectedCategories.length&&t.getResults()},300)},getResults:function(){var e=i()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sendData();case 2:this.$router.push("results");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view selection"},[e.unselectedCategories.length?[n("header",[n("button",{staticClass:"btn-back",on:{click:function(t){e.$router.push("/tutorial")}}}),n("button",{staticClass:"btn-help",on:{click:e.openOverlay}},[e._v("?")]),n("p",[e._v(e._s(e.currentCategoryNumber)+" / "+e._s(e.numberOfCategories))])]),n("selection-card",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:e.dismiss,expression:"dismiss",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:swipe.right",value:e.accept,expression:"accept",arg:"swipe",modifiers:{right:!0}}],attrs:{title:e.currentCategory,image:e.currentImage?e.currentImage:e.testImg,bulletpoints:e.currentBulletpoints,animate:{do:e.animateCard,dir:e.animateDir}}}),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"btn-react btn-dismiss",on:{click:e.dismiss}}),n("button",{staticClass:"btn-react btn-accept",on:{click:e.accept}})])]:n("p",[e._v("Loading...")])],2)},Oe=[];function xe(e){n("Zo7B")}var Se=!1,ke=xe,je=null,$e=null,Ee=Object(p["a"])(we,Ce,Oe,Se,ke,je,$e),Re=Ee.exports,Ue=n("xVuO"),Te=n.n(Ue),qe=n("nzVS"),Fe=n.n(qe),Be=n("67L/"),Ne=n.n(Be),Ie=n("wYZs"),Me=n.n(Ie),De={components:{MainButton:b},mounted:function(){var e=this;this.$confetti.start(),setTimeout(function(){return e.$confetti.stop()},500)},computed:a()({},Object(c["d"])(["result","otherResults"]),{currentImg:function(){switch(this.result){case"Italy":return Te.a;case"Greece":return Fe.a;case"Ireland":return Ne.a;default:return Me.a}}}),methods:a()({},Object(c["b"])(["resetUserSelection"]),{reset:function(){this.resetUserSelection(),this.$router.push("/")}})},Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view results"},[n("h1",[e._v("Hooray, it's "+e._s(e.result)+"!")]),n("div",{staticStyle:{width:"100%"}},[n("img",{attrs:{src:e.currentImg}})]),e._m(0),n("main-button",{nativeOn:{click:function(t){return e.reset(t)}}},[e._v("Try again!")]),e._m(1)],1)},Ze=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"}},[r("img",{attrs:{src:n("b7g4")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"social-container"},[r("div",{staticClass:"social-divider"}),r("h2",[e._v("Sharing is caring!")]),r("p",[e._v("Share your love for countrymatcher")]),r("div",{staticClass:"social-icn-container"},[r("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=http://countrymatcher.jonaskuske.com",target:"_blank",rel:"noopener"}},[r("img",{attrs:{src:n("noeF")}})]),r("a",{attrs:{href:"whatsapp://send?text=http://countrymatcher.jonaskuske.com"}},[r("img",{attrs:{src:n("ZPer")}})]),r("a",{attrs:{href:"https://twitter.com/share?url=http://countrymatcher.jonaskuske.com&text=Find%20your%20dreamcountry!",target:"_blank",rel:"noopener"}},[r("img",{attrs:{src:n("UgE6")}})])])])}];function Ge(e){n("23dM")}var Le=!1,ze=Ge,Ae="data-v-35909f5f",Ye=null,He=Object(p["a"])(De,Ve,Ze,Le,ze,Ae,Ye),Ke=He.exports;s["a"].use(V["a"]);var Pe=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"splash",component:X},{path:"/tutorial",name:"tutorial",component:oe},{path:"/selection",name:"selection",component:Re},{path:"/results",name:"results",component:Ke}]}),Xe=n("xw3k"),Je=n.n(Xe);n("FKfb");s["a"].use(c["a"]);var We=new c["a"].Store({state:{userSelection:{},result:"",otherResults:[],overlayOpen:!1},mutations:{updateUserSelectionOptions:function(e,t){return e.userSelection=t},acceptSelection:function(e,t){return e.userSelection[t].selection=1},dismissSelection:function(e,t){return e.userSelection[t].selection=0},resetSelection:function(e,t){return e.userSelection[t].selection=void 0},setResult:function(e,t){return e.result=t},setOtherResults:function(e,t){return e.otherResults=t},toggleOverlay:function(e){return e.overlayOpen=!e.overlayOpen}},actions:{resetUserSelection:function(e){var t=e.state,n=e.commit;Object.keys(t.userSelection).forEach(function(e){return n("resetSelection",e)})},selectCategory:function(e,t){e.state;var n=e.commit,r=t.type,i=t.category;n("dismiss"===r?"dismissSelection":"acceptSelection",i)},sendData:function(){var e=i()(regeneratorRuntime.mark(function e(t){var n,r,i,s,o,a,c,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,i=Object.entries(n.userSelection).map(function(e){var t=ce()(e,2),n=(t[0],t[1]);return"".concat(n.title,"=").concat(n.selection)}).join("&"),e.next=4,fetch("http://countrymatcher.jonaskuske.com/getter.php",{method:"post",body:i,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 4:return s=e.sent,e.next=7,s.json();case 7:o=e.sent,a=o.Country?[o.Country]:o,c=Je()(a),u=c[0],l=c.slice(1),r("setResult",u),r("setOtherResults",l);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},getters:{unselectedCategories:function(e){return Object.entries(e.userSelection).filter(function(e){var t=ce()(e,2),n=(t[0],t[1]);return void 0===n.selection}).map(function(e){var t=ce()(e,1),n=t[0];return n})}}}),Qe=n("ydGU");Object(Qe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var et=n("ufW0"),tt=n.n(et),nt=n("4gUt"),rt=n.n(nt);s["a"].config.productionTip=!1,s["a"].use(tt.a,{disableClick:!0,touchClass:"is-touched"}),s["a"].use(rt.a),s["a"].filter("capitalize",function(e){return e[0].toUpperCase()+e.slice(1)}),new s["a"]({router:Pe,store:We,beforeCreate:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,n,r,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://countrymatcher.jonaskuske.com/get_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=0,i="",s={},n.forEach(function(e,t){0===r&&(s[e]={},s[e].title=e,s[e].selection=void 0,i=e),1===r&&(s[i].bulletpoints=e),2===r&&(s[i].image=e,r=-1),r++}),We.commit("updateUserSelectionOptions",s);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),render:function(e){return e(D)}}).$mount("#app")},"T+Ti":function(e,t){},UgE6:function(e,t,n){e.exports=n.p+"img/icn-share-twitter.ce052254.svg"},XqSU:function(e,t,n){e.exports=n.p+"img/img-innovation.23fdd94e.jpg"},ZPer:function(e,t,n){e.exports=n.p+"img/icn-share-whatsapp.a7a891f6.svg"},Zo7B:function(e,t){},b7g4:function(e,t,n){e.exports=n.p+"img/infographic.b3b1d310.svg"},esSk:function(e,t){},lKel:function(e,t){},noeF:function(e,t,n){e.exports=n.p+"img/icn-share-facebook.ac2a81ad.svg"},nzVS:function(e,t,n){e.exports=n.p+"img/resultmap-greece.fbe13288.svg"},sU6u:function(e,t){},ssSR:function(e,t,n){e.exports=n.p+"img/logo-countrymatcher.8e5f9de5.svg"},wYZs:function(e,t,n){e.exports=n.p+"img/resultmap-fallback.39664a08.svg"},xVuO:function(e,t,n){e.exports=n.p+"img/resultmap-italy.8593b898.svg"}},[0]);
//# sourceMappingURL=app.b829747a.js.map