(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),i=(n(93),n(162)),o=n(163),s=n(44),l=n(160),d=n(53),u=n(161),j=n(167),p=n(164),b=n(168),m=n(152),h=n(24),x=n(57),g=n.n(x),O=n(69),f="FETCH_WEATHERAPI_REQUEST",y="FETCH_WEATHERAPI_SUCCESS",v="FETCH_WEATHERAPI_FAILURE",C="GET_COUNTRY",w=n(70),k=n(71),S=n(72),A=n.n(S).a.create({baseURL:"http://api.openweathermap.org/data/2.5/weather",headers:{"Content-type":"application/json"}}),E=new(function(){function e(){Object(w.a)(this,e)}return Object(k.a)(e,[{key:"fetchAPI",value:function(e){return A.get("/?uk&units=metric&appid=".concat("f8b4d16e38d25d8b6596944ecae6a2ac","&q=").concat(e))}}]),e}()),T=n(165),H=n(52),M=n(154),N=n(156),R=n(166),F=n(157),I=n(158),P=n(159),z=n(77),D=n.n(z),L=n(51),U=n.n(L),_=n(4),W=function(e){var t="";switch(e.condition){case"Clouds":t="./image/Mostly Cloudy-2x.png";break;case"Clear":t="./image/Mostly Sunny-2x.png";break;case"Haze":t="./image/Haze-2x.png";break;case"Hail":t="./image/Hail-2x.png";break;case"Fog":t="./image/Fog-2x.png";break;case"Tornado":t="./image/Tornado-2x.png";break;case"Dust":t="./image/Dust-2x.png";break;case"Mist":t="./image/Fog-2x.png";break;case"Snow":t="./image/Snow-2x.png";break;case"Rain":t="./image/Rain-2x.png";break;case"Drizzle":t="./image/Drizzle-2x.png";break;case"Thunderstorm":t="./image/Severe Thunderstorm-2x.png";break;default:t="./image/Fog-2x.png"}return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("img",{src:t,alt:"weather condition"})})},Y=Object(m.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]},contexClass:{textAlign:"center",fontSize:"60px"},imageClasses:{textAlign:"center",margin:"70px"},contexClassDescription:{textAlign:"center",fontSize:"40px"}}})),B=function(e){var t=e.temp,n=e.pressure,a=e.sunrise,c=e.sunset,r=e.description,i=e.wind,o=e.feelslike,s=e.condition,l=Y();return Object(_.jsxs)(M.a,{className:l.root,children:[Object(_.jsx)(N.a,{avatar:Object(_.jsx)(R.a,{"aria-label":"recipe",className:l.avatar,children:"T"}),action:Object(_.jsx)(F.a,{"aria-label":"settings",children:Object(_.jsx)(D.a,{})}),title:"".concat(U()().format("MMM D YYYY")),subheader:""}),Object(_.jsxs)(I.a,{style:{background:function(e){var t=0,n=0;return e>12?(t=Math.ceil(255*(1-(e-12)/34)),"linear-gradient(to top, rgb(255,".concat(t,",0), rgb(255,").concat(n,",0))")):e<=12?(n=(t=Math.ceil(255*(1-(e+20)/32)))-150,"linear-gradient(to top, rgb(0,".concat(t,",255), rgb(0,").concat(n,",255))")):void 0}(t),color:"#ffffff"},children:[Object(_.jsxs)(d.a,{variant:"body2",component:"p",className:l.contexClass,children:[t," \u2103"]}),Object(_.jsx)(d.a,{variant:"body1",component:"p",className:l.contexClassDescription,children:r.toUpperCase()}),Object(_.jsx)(d.a,{variant:"body2",component:"p",className:l.imageClasses,children:Object(_.jsx)(W,{condition:s})}),Object(_.jsxs)(d.a,{variant:"body2",component:"p",children:["Atmospheric pressure: ",n," hPa"]}),Object(_.jsxs)(d.a,{variant:"body2",component:"p",children:["Wind speed: ",i," m/s"]}),Object(_.jsxs)(d.a,{variant:"body2",component:"p",children:["Feels Like: ",o," \u2103"]}),Object(_.jsxs)(d.a,{variant:"body2",component:"p",children:["Sunrise time: ",U.a.unix(a).format("HH:mm")]}),Object(_.jsxs)(d.a,{variant:"body2",component:"p",children:["Sunset time: ",U.a.unix(c).format("HH:mm")]}),Object(_.jsx)("p",{children:s})]}),Object(_.jsx)(P.a,{disableSpacing:!0})]})},J=Object(m.a)((function(e){return{weatherClass:{margin:40}}})),K=function(e){var t=e.item,n=J();return Object(_.jsxs)(l.a,{item:!0,sm:12,className:n.weatherClass,children:[Object(_.jsxs)(d.a,{variant:"h5",component:"p",children:["City : ",t.name]}),Object(_.jsxs)(d.a,{variant:"h5",component:"p",children:["Country : ",t.sys.country]}),Object(_.jsxs)(T.a,{component:"span",m:1,children:[Object(_.jsxs)(d.a,{variant:"body1",component:"p",children:["City geo location, longitude : ",t.coord.lon]}),Object(_.jsxs)(d.a,{variant:"body1",component:"p",children:["City geo location, latitude : ",t.coord.lat]})]}),Object(_.jsx)(T.a,{component:"span",m:1,children:Object(_.jsx)(B,{temp:t.main.temp,pressure:t.main.pressure,sunrise:t.sys.sunrise,sunset:t.sys.sunset,description:t.weather[0].description,wind:t.wind.speed,feelslike:t.main.feels_like,condition:t.weather[0].main})})]})},q=function(e){var t=e.city,n=Object(h.c)((function(e){return e.weather})),c=Object(h.b)();return Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(O.a)(g.a.mark((function t(n){var a,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:f}),t.prev=1,t.next=4,E.fetchAPI(e);case 4:a=t.sent,c=a.data,n({type:y,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:v,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t,c]),Object(_.jsx)(l.a,{item:!0,xs:12,container:!0,justify:"center",children:n.error?Object(_.jsx)(d.a,{variant:"h5",component:"p",children:"Something went wrong"}):n.loading?Object(_.jsx)(d.a,{variant:"h5",component:"p",children:"Loading..."}):Object(_.jsx)(K,{item:n.item})})},G=[{id:0,country:"Serbia",cities:["Belgrade"]},{id:1,country:"UK",cities:["London","Manchester"]},{id:2,country:"Australia",cities:["Sydney","Perth","Brisbane"]},{id:3,country:"China",cities:["Beijing","Macau","Shanghai"]},{id:4,country:"Russia",cities:["Moscow","Saint Petersburg","Kazan"]},{id:5,country:"USA",cities:["New York","Los Angeles","Chicago","Phoenix"]}],Q=Object(m.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}})),V=function(){var e=Object(h.c)((function(e){return e.country})),t=Object(h.b)(),n=Q(),c=Object(a.useState)(0),r=Object(s.a)(c,2),i=r[0],o=r[1],m=Object(a.useState)(""),x=Object(s.a)(m,2),g=x[0],O=x[1],f=Object(a.useState)(!1),y=Object(s.a)(f,2),v=y[0],w=y[1],k=Object(a.useState)(!1),S=Object(s.a)(k,2),A=S[0],E=S[1];Object(a.useEffect)((function(){t(function(e){return{type:C,payload:G[e]}}(i))}),[i]);return Object(_.jsxs)(l.a,{container:!0,children:[Object(_.jsxs)(l.a,{item:!0,xs:12,children:[Object(_.jsx)(d.a,{variant:"h4",component:"h4",children:"API from https://openweathermap.org"}),Object(_.jsx)(d.a,{variant:"h5",component:"h5",children:"Choose a country"}),Object(_.jsxs)("form",{children:[Object(_.jsxs)(u.a,{className:n.formControl,children:[Object(_.jsx)(j.a,{id:"demo-controlled-open-select-label",children:"Country"}),Object(_.jsx)(p.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:v,value:i,onClose:function(){w(!1)},onOpen:function(){w(!0)},onChange:function(e){o((function(t){return e.target.value})),O("")},children:G.map((function(e){return Object(_.jsx)(b.a,{value:"".concat(e.id),children:e.country},e.id)}))})]}),e.cities?Object(_.jsxs)(u.a,{className:n.formControl,children:[Object(_.jsx)(j.a,{id:"demo-controlled-open-select-label",children:"City"}),Object(_.jsx)(p.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:A,value:g,onClose:function(){E(!1)},onOpen:function(){E(!0)},onChange:function(e){O((function(t){return e.target.value}))},children:e.cities.map((function(e,t){return Object(_.jsx)(b.a,{value:"".concat(e),children:e},t)}))})]}):Object(_.jsx)("p",{children:"Load..."})]})]}),Object(_.jsx)(l.a,{item:!0,xs:12,container:!0,children:g.length>0?Object(_.jsx)(q,{city:g}):Object(_.jsx)("p",{children:"You must select a city"})})]})};var X=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(i.a,{}),Object(_.jsx)(o.a,{maxWidth:"md",children:Object(_.jsx)(V,{})})]})},Z=n(19),$=n(78),ee=n(79),te=n(32),ne={item:{},loading:!0,error:null};var ae={items:[]};var ce=Object(Z.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(te.a)(Object(te.a)({},e),{},{loading:!0,error:null});case y:return Object(te.a)(Object(te.a)({},e),{},{loading:!1,error:null,item:t.payload});case v:return Object(te.a)(Object(te.a)({},e),{},{loading:!1,error:t.error,item:{}});default:return e}},country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;default:return e}}}),re=Object(ee.composeWithDevTools)(Object(Z.applyMiddleware)($.a)),ie=Object(Z.createStore)(ce,re);r.a.render(Object(_.jsx)(h.a,{store:ie,children:Object(_.jsx)(X,{})}),document.getElementById("root"))},93:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.9aff9b5d.chunk.js.map