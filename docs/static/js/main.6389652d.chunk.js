(this.webpackJsonpfood_builder_app=this.webpackJsonpfood_builder_app||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngridient_BreadBottom__3b5OZ",BreadTop:"BurgerIngridient_BreadTop__3iHFy",Seeds1:"BurgerIngridient_Seeds1__1-8cs",Seeds2:"BurgerIngridient_Seeds2__3momO",Meat:"BurgerIngridient_Meat__2APZ-",Cheese:"BurgerIngridient_Cheese__nasem",Salad:"BurgerIngridient_Salad__wjaca",Bacon:"BurgerIngridient_Bacon__2RpTL"}},,function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__fkFXz",Label:"BuildControl_Label__2VoYC",Less:"BuildControl_Less__27Myy",More:"BuildControl_More__1exck"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3fzo_",active:"NavigationItem_active__170ZS"}},function(e,t,a){e.exports={Button:"Button_Button__3oe_E",Success:"Button_Success__34adx",Danger:"Button_Danger__3ajS6"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1Xvm5",logo:"Toolbar_logo__2cOdG"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__3cqhK",OrderButton:"BuildControls_OrderButton__27Av_",enable:"BuildControls_enable__pVTRA"}},,,function(e,t,a){e.exports={content:"Layout_content__1DTwF"}},function(e,t,a){e.exports={Logo:"Logo_Logo__3RLkQ"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1y828"}},,,function(e,t,a){e.exports={Burger:"Burger_Burger__1Kdo5"}},function(e,t,a){e.exports={Modal:"Modal_Modal__3agxL"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2hRoh"}},,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(27),a(10)),c=a.n(i),s=a(11),d=a.n(s),u=a(12),m=a.n(u),b=function(){return r.a.createElement("div",{className:d.a.Logo},r.a.createElement("img",{src:m.a,alt:"burger logo"}))},g=a(4),_=a.n(g),p=function(e){return r.a.createElement("li",{className:_.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?_.a.active:null},e.children))},f=a(13),h=a.n(f),v=function(){return r.a.createElement("ul",{className:h.a.NavigationItems},r.a.createElement(p,{link:"/",active:!0},"burger page"),r.a.createElement(p,{link:"/"},"about page"),r.a.createElement(p,{link:"/"},"contact us page"))},E=a(6),k=a.n(E),B=function(){return r.a.createElement("div",{className:k.a.Toolbar},r.a.createElement("div",null,"menu"),r.a.createElement("div",{className:k.a.logo},r.a.createElement(b,null)),r.a.createElement(v,null))},C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("main",{className:c.a.content},e.children))},O=a(2),y=a(14),N=a(15),I=a(21),M=a(19),j=a(20),S=a(1),F=a.n(S),L=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:F.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:F.a.BreadTop},r.a.createElement("div",{className:F.a.Seeds1}),";",r.a.createElement("div",{className:F.a.Seeds2}),";");break;case"meat":t=r.a.createElement("div",{className:F.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:F.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:F.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:F.a.Bacon});break;default:t=null}return t},P=a(16),w=a.n(P),x=function(e){var t=Object.keys(e.ingridients).map((function(t){return Object(j.a)(Array(e.ingridients[t])).map((function(e,a){return r.a.createElement(L,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"add some ingridient")),r.a.createElement("div",{className:w.a.Burger},r.a.createElement(L,{type:"bread-top"}),t,r.a.createElement(L,{type:"bread-bottom"}))},D=a(3),T=a.n(D),R=function(e){return r.a.createElement("div",{className:T.a.BuildControl},r.a.createElement("div",{className:T.a.Label},e.label),r.a.createElement("button",{className:T.a.Less,onClick:e.remove,disabled:e.disableCheckForLess},"less"),r.a.createElement("button",{className:T.a.More,onClick:e.added,disabled:e.disableCheckForMore},"More"))},A=a(7),H=a.n(A),W=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:H.a.BuildControls},r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price = \u20b9 ",e.totalPrice)),W.map((function(t,a){return r.a.createElement(R,{key:t.label,label:t.label,type:t.type,remove:function(){return e.remove(t.type)},added:function(){return e.added(t.type)},disableCheckForLess:e.disableinfoObjectForLess[t.type],disableCheckForMore:e.disableinfoObjectForMore[t.type]})})),r.a.createElement("button",{className:H.a.OrderButton,disabled:e.disabledOrderButtonCheck,onClick:e.enableCheckoutModal},"ORDER NOW"))},z=a(17),G=a.n(z),J=a(18),K=a.n(J),V=function(e){return r.a.createElement("div",{className:K.a.Backdrop,onClick:e.Click})},X=function(e){console.log(e);var t=e.show?r.a.createElement(V,{Click:e.disableBackdrop}):null;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("ul",{className:G.a.Modal,style:{transform:e.show?"translate(0)":"translate(-200vh)"}},e.children))},q=a(5),Q=a.n(q),Y=function(e){var t=[Q.a.Button];return"Success"===e.btnType?(t.push(Q.a.Success),t.join(" ")):"Danger"===e.btnType&&(t.push(Q.a.Danger),t.join(" ")),console.log(t),r.a.createElement("button",{className:t,onClick:e.Click},e.children)},$=function(e){var t=Object.keys(e.propsObj).map((function(t,a){return r.a.createElement("li",{key:t},t," \u2192 ",e.propsObj[t])}));return console.log(e.totalPrice),r.a.createElement(r.a.Fragment,null,t,r.a.createElement("p",null,r.a.createElement("strong",null,"Final PRICE \u2192 ",e.totalPrice)),r.a.createElement(Y,{btnType:"Success",Click:function(){return alert("hello")}},"Proceed"),r.a.createElement(Y,{btnType:"Danger",Click:e.disableCheckout},"Go Back"))},U={salad:32,bacon:20,cheese:25,meat:38},ee=function(e){Object(I.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingridients:{salad:1,bacon:0,cheese:0,meat:0},totalPrice:20+U.salad,sumOfIngridients:1,checkoutPreviewEnableModal:!1},e.addIngridientHandler=function(t){var a,n,r=Object(O.a)({},e.state.ingridients);r[t]=e.state.ingridients[t]+1,n=e.state.totalPrice+U[t],a=e.DisableOrderButtonCheck(r),e.setState({ingridients:r,totalPrice:n,sumOfIngridients:a})},e.removeIngridients=function(t){var a,n,r=Object(O.a)({},e.state.ingridients);r[t]=e.state.ingridients[t]-1,n=e.state.totalPrice-U[t],a=e.DisableOrderButtonCheck(r),e.setState({ingridients:r,totalPrice:n,sumOfIngridients:a})},e.getDisabledInfoForLess=function(){var t=Object(O.a)({},e.state.ingridients);for(var a in t)0===t[a]?t[a]=!0:t[a]=!1;return t},e.getDisabledInfoForMore=function(){var t=Object(O.a)({},e.state.ingridients);for(var a in t)4===t[a]?t[a]=!0:t[a]=!1;return t},e.DisableOrderButtonCheck=function(e){var t=0,a=Object(O.a)({},e);for(var n in a)t+=a[n];return 0===t},e.EnableCheckoutModal=function(){e.setState({checkoutPreviewEnableModal:!0})},e.DisableCheckoutModal=function(){e.setState({checkoutPreviewEnableModal:!1})},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.getDisabledInfoForLess(),t=this.getDisabledInfoForMore(),a=this.state.sumOfIngridients;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{show:this.state.checkoutPreviewEnableModal,disableBackdrop:this.DisableCheckoutModal},r.a.createElement($,{propsObj:this.state.ingridients,totalPrice:this.state.totalPrice,disableCheckout:this.DisableCheckoutModal})),r.a.createElement(x,{ingridients:this.state.ingridients}),r.a.createElement(Z,{added:this.addIngridientHandler,remove:this.removeIngridients,disableinfoObjectForLess:e,disableinfoObjectForMore:t,totalPrice:this.state.totalPrice.toFixed(2),disabledOrderButtonCheck:a,enableCheckoutModal:this.EnableCheckoutModal}))}}]),a}(n.Component);var te=function(){return r.a.createElement("div",null,r.a.createElement(C,null,r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.6389652d.chunk.js.map