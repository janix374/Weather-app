(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{102:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(7),c=n.n(r),i=(n(102),n(168)),o=n(169),s=n(47),l=n(166),d=n(55),u=n(167),b=n(173),j=n(170),p=n(174),m=n(158),g=n(24),h=n(59),x=n.n(h),O=n(74),f="FETCH_WEATHERAPI_REQUEST",y="FETCH_WEATHERAPI_SUCCESS",v="FETCH_WEATHERAPI_FAILURE",C="GET_COUNTRY",w=n(38),k=n(39),S=n(75),A=n.n(S).a.create({baseURL:"https://api.openweathermap.org/data/2.5/weather",headers:{"Content-type":"application/json"}}),T=new(function(){function e(){Object(w.a)(this,e)}return Object(k.a)(e,[{key:"fetchAPI",value:function(e){return A.get("/?uk&units=metric&appid=".concat("f8b4d16e38d25d8b6596944ecae6a2ac","&q=").concat(e))}}]),e}()),E=n(171),M=n(54),N=n(160),D=n(162),H=n(172),z=n(163),R=n(164),F=n(165),L=n(81),P=n.n(L),W=n(76),B=n.n(W),I=n(5),U=function(e){var t="";switch(e.condition){case"Clouds":t="./image/Mostly Cloudy-2x.png";break;case"Clear":t="./image/Mostly Sunny-2x.png";break;case"Haze":t="./image/Haze-2x.png";break;case"Hail":t="./image/Hail-2x.png";break;case"Fog":t="./image/Fog-2x.png";break;case"Tornado":t="./image/Tornado-2x.png";break;case"Dust":t="./image/Dust-2x.png";break;case"Mist":t="./image/Fog-2x.png";break;case"Snow":t="./image/Snow-2x.png";break;case"Rain":t="./image/Rain-2x.png";break;case"Drizzle":t="./image/Drizzle-2x.png";break;case"Thunderstorm":t="./image/Severe Thunderstorm-2x.png";break;default:t="./image/Fog-2x.png"}return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("img",{src:t,alt:"weather condition"})})},_=Object(m.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:M.a[500]},contexClass:{textAlign:"center",fontSize:"60px"},imageClasses:{textAlign:"center",margin:"70px"},contexClassDescription:{textAlign:"center",fontSize:"40px"}}})),Y=function(e){var t=e.temp,n=e.pressure,a=(e.sunrise,e.sunset,e.description),r=e.wind,c=e.feelslike,i=e.condition,o=_();return Object(I.jsxs)(N.a,{className:o.root,children:[Object(I.jsx)(D.a,{avatar:Object(I.jsx)(H.a,{"aria-label":"recipe",className:o.avatar,children:"T"}),action:Object(I.jsx)(z.a,{"aria-label":"settings",children:Object(I.jsx)(P.a,{})}),title:"".concat(B()().format("MMM D YYYY")),subheader:""}),Object(I.jsxs)(R.a,{style:{background:function(e){var t=0,n=0;return e>12?(t=Math.ceil(255*(1-(e-12)/34)),"linear-gradient(to top, rgb(255,".concat(t,",0), rgb(255,").concat(n,",0))")):e<=12?(n=(t=Math.ceil(255*(1-(e+20)/32)))-150,"linear-gradient(to top, rgb(0,".concat(t,",255), rgb(0,").concat(n,",255))")):void 0}(t),color:"#ffffff"},children:[Object(I.jsxs)(d.a,{variant:"body2",component:"p",className:o.contexClass,children:[t," \u2103"]}),Object(I.jsx)(d.a,{variant:"body1",component:"p",className:o.contexClassDescription,children:a.toUpperCase()}),Object(I.jsx)(d.a,{variant:"body2",component:"p",className:o.imageClasses,children:Object(I.jsx)(U,{condition:i})}),Object(I.jsxs)(d.a,{variant:"body2",component:"p",children:["Atmospheric pressure: ",n," hPa"]}),Object(I.jsxs)(d.a,{variant:"body2",component:"p",children:["Wind speed: ",r," m/s"]}),Object(I.jsxs)(d.a,{variant:"body2",component:"p",children:["Feels Like: ",c," \u2103"]}),Object(I.jsx)("p",{children:i})]}),Object(I.jsx)(F.a,{disableSpacing:!0})]})},K=n(87),q=n(86),G=n(88),J=function(e){var t=e.text;return Object(I.jsx)("div",{children:t})},Q=(a.Component,Object(m.a)((function(e){return{weatherClass:{margin:40}}}))),V=function(e){var t=e.item,n=Q();return console.log("item component",t.coord.lon),Object(I.jsxs)(l.a,{item:!0,sm:12,className:n.weatherClass,children:[Object(I.jsxs)(d.a,{variant:"h5",component:"p",children:["City : ",t.name]}),Object(I.jsxs)(d.a,{variant:"h5",component:"p",children:["Country : ",t.sys.country]}),Object(I.jsx)(E.a,{component:"span",m:1,children:Object(I.jsx)(Y,{temp:t.main.temp,pressure:t.main.pressure,sunrise:t.sys.sunrise,sunset:t.sys.sunset,description:t.weather[0].description,wind:t.wind.speed,feelslike:t.main.feels_like,condition:t.weather[0].main})})]})},X=function(e){var t=e.city,n=Object(g.c)((function(e){return e.weather})),r=Object(g.b)();return Object(a.useEffect)((function(){r(function(e){return function(){var t=Object(O.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:f}),t.prev=1,t.next=4,T.fetchAPI(e);case 4:a=t.sent,r=a.data,n({type:y,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:v,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t,r]),Object(I.jsx)(l.a,{item:!0,xs:12,container:!0,justify:"center",children:n.error?Object(I.jsx)(d.a,{variant:"h5",component:"p",children:"Something went wrong"}):n.loading?Object(I.jsx)(d.a,{variant:"h5",component:"p",children:"Loading..."}):Object(I.jsx)(V,{item:n.item})})},Z=[{id:0,country:"Serbia",img:"serbia.png",cities:["Belgrade"]},{id:1,country:"Australia",img:"australia.png",cities:["Sydney","Perth","Brisbane","Melbourne","Adelaide"]},{id:2,country:"China",img:"china.png",cities:["Beijing","Macau","Shanghai","Chongqing","Tianjin","Anqing","Bengbu","Bozhou","Chaohu","Huaibei","Huangshan","Wuhu","Dingxi"]},{id:3,country:"Russia",img:"russia.png",cities:["Moscow","Saint Petersburg","Kazan","Novosibirsk","Yekaterinburg","Kazan","Nizhny Novgorod","Samara"]},{id:4,country:"UK",img:"uk.png",cities:["London","Manchester","Birmingham","Bristol","Cambridge","Canterbury","Cardiff","Chester","Derby"]},{id:5,country:"USA",img:"usa.png",cities:["New York","Los Angeles","Chicago","Phoenix","Dallas","Washington","Boston","Oklahoma City"]},{id:6,country:"Germany",img:"germany.png",cities:["Berlin","Hamburg","Munich","Cologne","Stuttgart","D\xfcsseldorf","Dortmund","Remscheid","Kaiserslautern"]},{id:7,country:"France",img:"france.png",cities:["Paris","Marseille","Lyon","Lille","Strasbourg","Nantes","Toulouse","Le Havre","Dijon"]}],$=n(83),ee=n.n($),te=Object(m.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120},imageWeather:{width:"70%"},imageWeatherContainer:{textAlign:"center"}}})),ne=function(){var e=Object(g.c)((function(e){return e.country})),t=Object(g.b)(),n=te(),r=Object(a.useState)(0),c=Object(s.a)(r,2),i=c[0],o=c[1],m=Object(a.useState)(""),h=Object(s.a)(m,2),x=h[0],O=h[1],f=Object(a.useState)(!1),y=Object(s.a)(f,2),v=y[0],w=y[1],k=Object(a.useState)(!1),S=Object(s.a)(k,2),A=S[0],T=S[1];Object(a.useEffect)((function(){t(function(e){return{type:C,payload:Z[e]}}(i))}),[i]);return Object(I.jsxs)(l.a,{container:!0,children:[Object(I.jsx)(l.a,{item:!0,xs:12,children:Object(I.jsx)(d.a,{variant:"h4",component:"h4",children:"API from https://openweathermap.org"})}),Object(I.jsxs)(l.a,{item:!0,sm:12,md:3,children:[Object(I.jsx)(d.a,{variant:"h5",component:"h5",children:"Choose a country"}),Object(I.jsxs)("form",{children:[Object(I.jsxs)(u.a,{className:n.formControl,children:[Object(I.jsx)(b.a,{id:"demo-controlled-open-select-label",children:"Country"}),Object(I.jsx)(j.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:v,value:i,onClose:function(){w(!1)},onOpen:function(){w(!0)},onChange:function(e){o((function(t){return e.target.value})),O("")},children:Z.map((function(e){return Object(I.jsxs)(p.a,{value:"".concat(e.id),children:[Object(I.jsx)("img",{src:"/weather-app"+"/flags/".concat(e.img),alt:"a"})," ",e.country]},e.id)}))})]}),e.cities?Object(I.jsxs)(u.a,{className:n.formControl,children:[Object(I.jsx)(b.a,{id:"demo-controlled-open-select-label",children:"City"}),Object(I.jsx)(j.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:A,value:x,onClose:function(){T(!1)},onOpen:function(){T(!0)},onChange:function(e){O((function(t){return e.target.value}))},children:e.cities.map((function(e,t){return Object(I.jsxs)(p.a,{value:"".concat(e),children:[Object(I.jsx)(ee.a,{})," ",e]},t)}))})]}):Object(I.jsx)("p",{children:"Load..."})]})]}),Object(I.jsx)(l.a,{item:!0,sm:12,md:9,container:!0,children:x.length>0?Object(I.jsx)(X,{city:x}):Object(I.jsx)("p",{})})]})};var ae=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(o.a,{maxWidth:"md",children:Object(I.jsx)(ne,{})})]})},re=n(19),ce=n(84),ie=n(85),oe=n(33),se={item:{},loading:!0,error:null};var le={items:[]};var de=Object(re.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0,error:null});case y:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:null,item:t.payload});case v:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:t.error,item:{}});default:return e}},country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;default:return e}}}),ue=Object(ie.composeWithDevTools)(Object(re.applyMiddleware)(ce.a)),be=Object(re.createStore)(de,ue);c.a.render(Object(I.jsx)(g.a,{store:be,children:Object(I.jsx)(ae,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.6d3f8ab1.chunk.js.map