(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac9a35c"],{"1dde":function(t,e,a){var n=a("d039"),c=a("b622"),r=a("2d00"),i=c("species");t.exports=function(t){return r>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"466d":function(t,e,a){"use strict";var n=a("d784"),c=a("825a"),r=a("50c4"),i=a("1d80"),s=a("8aa5"),o=a("14c3");n("match",(function(t,e,a){return[function(e){var a=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,this,t);if(n.done)return n.value;var i=c(this),u=String(t);if(!i.global)return o(i,u);var l=i.unicode;i.lastIndex=0;var d,f=[],b=0;while(null!==(d=o(i,u))){var h=String(d[0]);f[b]=h,""===h&&(i.lastIndex=s(u,r(i.lastIndex),l)),b++}return 0===b?null:f}]}))},4923:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c=Object(n["G"])("data-v-7495bac8"),r=c((function(t,e,a,c,r,i){var s=Object(n["v"])("user-pagination");return Object(n["o"])(),Object(n["d"])(s,{searchData:r.userSearch},null,8,["searchData"])})),i=Object(n["G"])("data-v-1eaefdd3");Object(n["r"])("data-v-1eaefdd3");var s={class:"container"},o={key:0},u={key:1},l={class:"row"},d={class:"card"},f={class:"card bg-dark text-white text-left"},b=Object(n["f"])("div",{style:{height:"155px",width:"100%"},class:"d-flex align-items-center justify-content-center"}," 測試 ",-1),h={class:"\r\n                card-img-overlay\r\n                d-flex\r\n                justify-content-between\r\n                align-items-end\r\n                p-0\r\n                px-3\r\n              ",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},g={class:"card-img-title-lg"},j={class:"card-img-title-sm"},O={class:"card-body text-left"},p={class:"card-p-text strToLong"},v=Object(n["f"])("i",{class:"far fa-clock fa-clock-time"},null,-1),x={class:"card-p-text"},m=Object(n["f"])("i",{class:"fas fa-map-marker-alt fa-map-gps"},null,-1),w={class:"d-flex justify-content-between align-items-end"},k={class:"card-p-text"},y=Object(n["f"])("i",{class:"fas fa-mobile-alt fa-mobile"},null,-1),D={class:"card-p-text"},P=Object(n["f"])("i",{class:"fas fa-tags text-warning"},null,-1),N={class:"d-flex align-items-center justify-content-center"},T={class:"pagination"},F=Object(n["f"])("a",{class:"page-link",href:"#"}," 上一頁 ",-1),S={class:"page-link",href:"#"},B=Object(n["f"])("a",{class:"page-link",href:"#"}," 下一頁 ",-1);Object(n["p"])();var L=i((function(t,e,a,c,r,i){return Object(n["o"])(),Object(n["d"])("div",s,[r.notFind?(Object(n["o"])(),Object(n["d"])("h1",o," 搜尋結果："+Object(n["x"])(a.searchData)+", 搜尋到"+Object(n["x"])(r.dataLength)+"筆資料 ",1)):(Object(n["o"])(),Object(n["d"])("h1",u,"找不到請再嘗試一遍，2秒後即將返回上個頁面")),Object(n["f"])("div",l,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(r.getNowWebData,(function(t,e){return Object(n["o"])(),Object(n["d"])("div",{class:"col-md-6 py-2 px-1",key:e},[Object(n["f"])("div",d,[Object(n["f"])("div",f,[b,Object(n["f"])("div",h,[Object(n["f"])("h5",g,Object(n["x"])(t.Name),1),Object(n["f"])("h5",j,Object(n["x"])(t.Zone),1)])]),Object(n["f"])("div",O,[Object(n["f"])("p",p,[v,Object(n["e"])(Object(n["x"])(t.Opentime),1)]),Object(n["f"])("p",x,[m,Object(n["e"])(Object(n["x"])(t.Add),1)]),Object(n["f"])("div",w,[Object(n["f"])("p",k,[y,Object(n["e"])(Object(n["x"])(t.Tel),1)]),Object(n["f"])("p",D,[P,Object(n["e"])(Object(n["x"])(t.Ticketinfo),1)])])])])])})),128))]),Object(n["f"])("nav",N,[Object(n["f"])("ul",T,[Object(n["D"])(Object(n["f"])("li",{class:"page-item",onClick:e[1]||(e[1]=Object(n["F"])((function(){return i.previousBtn&&i.previousBtn.apply(i,arguments)}),["prevent"]))},[F],512),[[n["A"],!i.previousPage]]),(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(r.btnTotal,(function(t,e){return Object(n["o"])(),Object(n["d"])("li",{class:"page-item",key:e,onClick:Object(n["F"])((function(t){return i.change(t,e)}),["prevent"])},[Object(n["f"])("a",S,Object(n["x"])(t),1)],8,["onClick"])})),128)),Object(n["D"])(Object(n["f"])("li",{class:"page-item",onClick:e[2]||(e[2]=Object(n["F"])((function(){return i.nextBtn&&i.nextBtn.apply(i,arguments)}),["prevent"]))},[B],512),[[n["A"],!i.nextPage]])])])])})),I=(a("4de4"),a("ac1f"),a("466d"),a("a9e3"),a("735b")),A={name:"mypage",data:function(){return{getData:{},getNowWebData:[],result:[],dataLength:"",btnTotal:0,currentPage:0,notFind:!0}},props:{searchData:{type:String}},created:function(){var t=this;Object(I["a"])().then((function(e){t.getData=e.result.records}))},computed:{previousPage:function(){return this.currentPage<=1||this.dataLength<=0},nextPage:function(){return this.currentPage===this.btnTotal}},methods:{getNowDataTotal:function(){var t=this,e=[];this.getData.filter((function(a){a.Name.match(t.searchData)&&e.push(a)})),this.result=e,this.dataLength=e.length},showNowPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number(1);if(this.getNowDataTotal(),this.dataLength<=0)return this.notFind=!1;var e=this.dataLength,a=6,n=t,c=Math.ceil(e/a),r=n*a-a+1,i=n*a,s=[];this.result.filter((function(t,e){var a=e+1;a>=r&&a<=i&&s.push(t)})),this.getNowWebData=s,this.btnTotal=c,this.currentPage=n},change:function(t,e){var a=parseInt(t.target.innerText),n=e+1;n===a&&this.showNowPage(a)},previousBtn:function(){var t=this.currentPage;this.showNowPage(t-1)},nextBtn:function(){var t=this.currentPage;this.showNowPage(t+1)}},watch:{getData:function(){this.showNowPage()},notFind:function(){var t=this;!1===this.notFind&&setTimeout((function(){t.$router.go(-1)}),2e3)}}};a("56cb");A.render=L,A.__scopeId="data-v-1eaefdd3";var C=A,_={name:"SearchData",components:{UserPagination:C},data:function(){return{userSearch:""}},created:function(){this.userSearch=this.$route.params.id},methods:{}};_.render=r,_.__scopeId="data-v-7495bac8";e["default"]=_},"4de4":function(t,e,a){"use strict";var n=a("23e7"),c=a("b727").filter,r=a("1dde"),i=r("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"56cb":function(t,e,a){"use strict";a("5dd4")},"5dd4":function(t,e,a){},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}}}]);
//# sourceMappingURL=chunk-7ac9a35c.b9de7994.js.map