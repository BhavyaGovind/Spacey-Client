(this["webpackJsonpspacey-client"]=this["webpackJsonpspacey-client"]||[]).push([[0],{31:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i),n=s(32),c=s.n(n),l=(s(44),s.p,s(45),s(20)),h=s(16),d=s(33),r=s(34),o=s(14),u=s(38),j=s(37),b=s(1),k=function(e){return Object(b.jsxs)("li",{class:"topics",children:[Object(b.jsx)("input",{onClick:e.handleCheckChieldElement,type:"checkbox",checked:e.isChecked,value:e.value},e.id)," ",e.value]})},m=s(35),p=s.n(m),C=(s(31),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).handleAllChecked=function(t){e.setState({checkAll:!e.state.checkAll});var s=e.state.topics,i=e.state.destinations;s.forEach((function(e){return e.isChecked=t.target.checked})),i.forEach((function(e){return e.isChecked=t.target.checked})),e.setState({topics:s}),e.setState({destinations:i})},e.handleCheckChieldElement=function(t){var s=e.state.topics;s.forEach((function(e){e.value===t.target.value&&(e.isChecked=t.target.checked)})),e.setState({topics:s});var i=e.state.destinations;i.forEach((function(e){e.value===t.target.value&&(e.isChecked=t.target.checked)})),e.setState({destinations:i})},e.state={fName:"mai",lName:"",email:"",frequency:"",visibility:"invisible",checkAll:!0,message:"",selectedOption:"1Week",topics:[{id:1,value:"deals",isChecked:!0},{id:2,value:"reviews",isChecked:!0},{id:3,value:"packages",isChecked:!0},{id:4,value:"starships",isChecked:!0}],destinations:[{id:1,value:"mars",isChecked:!0},{id:2,value:"jupiter",isChecked:!0},{id:3,value:"moon",isChecked:!0},{id:4,value:"pluto",isChecked:!0},{id:5,value:"thesun",isChecked:!0},{id:6,value:"venus",isChecked:!0},{id:7,value:"mercury",isChecked:!0},{id:8,value:"saturn",isChecked:!0},{id:9,value:"uranus",isChecked:!0},{id:10,value:"neptune",isChecked:!0},{id:11,value:"nearest_blackHole",isChecked:!0},{id:12,value:"endlessVoid",isChecked:!0}],input:{},errors:{}},e.handleChange=e.handleChange.bind(Object(o.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(o.a)(e)),e.onValueChange=e.onValueChange.bind(Object(o.a)(e)),e}return Object(r.a)(s,[{key:"handleChange",value:function(e,t){if(this.setState(Object(h.a)({},t,e.target.value)),this.setState({visibility:"visible"}),e.target.name){var s=this.state.input;s[e.target.name]=e.target.value,this.setState({input:s})}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.validate()&&this.postRequest()}},{key:"postRequest",value:function(){var e=this;console.log("Deals option selected",this.state.topics[0].isChecked),p()({method:"post",url:"https://spacey-server.herokuapp.com/subscribers",data:{first_name:this.state.fName,last_name:this.state.lName,email:this.state.email,deals:this.state.topics[0].isChecked,reviews:this.state.topics[1].isChecked,packages:this.state.topics[2].isChecked,star_ships:this.state.topics[3].isChecked,mars:this.state.destinations[0].isChecked,jupiter:this.state.destinations[1].isChecked,moon:this.state.destinations[2].isChecked,saturn:this.state.destinations[7].isChecked,uranus:this.state.destinations[8].isChecked,neptune:this.state.destinations[9].isChecked,the_nearest_black_hole:this.state.destinations[10].isChecked,the_endless_void:this.state.destinations[11].isChecked,the_sun:this.state.destinations[4].isChecked,venus:this.state.destinations[5].isChecked,pluto:this.state.destinations[3].isChecked,mercury:this.state.destinations[6].isChecked,frequency:this.state.selectedOption}}).then((function(t){e.setState({message:"Thank you "+t.data.subscriber.first_name+" for subscribing to our news letter"})}),(function(t){e.setState({message:"Sorry there is some glitch in the network, please try again"})}))}},{key:"validate",value:function(){var e=this.state.input,t={},s=!0;(e.FirstName||(s=!1,t.FirstName="Please enter first name."),e.LastName||(s=!1,t.LastName="Please enter last name."),e.email||(s=!1,t.email="Please enter your email Address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(s=!1,t.email="Please enter valid email address."));return this.setState({errors:t}),s}},{key:"onValueChange",value:function(e){this.setState({selectedOption:e.target.value})}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{class:"home",children:Object(b.jsxs)("div",{className:"subscribeForm",children:[Object(b.jsx)("h3",{children:" Keep up to(star) date on all our offerings. Subscribe now! "}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{class:"inputForm",children:[Object(b.jsx)("input",{type:"text",name:"email",placeholder:"Email",className:"userName email",onChange:function(t){return e.handleChange(t,"email")}}),Object(b.jsx)("input",{type:"text",name:"FirstName",placeholder:"FirstName",className:"userName",onChange:function(t){return e.handleChange(t,"fName")}}),Object(b.jsx)("input",{type:"text",name:"LastName",placeholder:"LastName",className:"userName",onChange:function(t){return e.handleChange(t,"lName")}})]}),Object(b.jsx)("h4",{children:"*SpaceX will keep your data private; morning, moon and night. That is our privacy policy in nutshell"}),Object(b.jsx)("div",{class:"text-danger",children:this.state.errors.FirstName}),Object(b.jsx)("div",{class:"text-danger",children:this.state.errors.LastName}),Object(b.jsx)("div",{class:"text-danger",children:this.state.errors.email}),Object(b.jsxs)("div",{className:this.state.visibility,children:[Object(b.jsx)("h3",{children:"Topics"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"checkbox",onClick:this.handleAllChecked,value:"checkedall",checked:this.state.checkAll})," Check / Uncheck All",Object(b.jsx)("ul",{class:"list",children:this.state.topics.map((function(t){return Object(b.jsx)(k,Object(l.a)({handleCheckChieldElement:e.handleCheckChieldElement},t))}))}),Object(b.jsx)("h3",{children:"Destinations"}),Object(b.jsx)("ul",{class:"list",children:this.state.destinations.map((function(t){return Object(b.jsx)(k,Object(l.a)({handleCheckChieldElement:e.handleCheckChieldElement},t))}))}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"1Week",checked:"1Week"===this.state.selectedOption,onChange:this.onValueChange}),"1 Week"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"2Weeks",checked:"2Weeks"===this.state.selectedOption,onChange:this.onValueChange}),"2Weeks"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",value:"Monthly",checked:"Monthly"===this.state.selectedOption,onChange:this.onValueChange}),"Monthly"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{class:"subscribe",onClick:this.handleSubmit,children:" Subscribe "}),Object(b.jsx)("div",{children:this.state.message})]})]})]})})}}]),s}(i.Component)),v=s(13),O=s(3),x=s(78),g=s(79),f=s.p+"static/media/spacex.8b9e72e3.png",y=function(){return Object(b.jsx)(x.a,{children:Object(b.jsxs)(g.a,{class:"navBar",children:[Object(b.jsx)(v.b,{class:"link",to:"/",children:Object(b.jsx)("img",{class:"logo",src:f})}),Object(b.jsx)(v.b,{class:"link",to:"/",children:"Book"}),Object(b.jsx)(v.b,{class:"link",to:"/",children:"Manage"}),Object(b.jsx)(v.b,{class:"link",to:"/",children:"Experience"}),Object(b.jsx)(v.b,{class:"link",to:"/",children:"Where we fly"})]})})};var N=function(){return Object(b.jsx)("div",{className:"Home",children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(O.c,{children:Object(b.jsx)(O.a,{exact:!0,path:"/",component:C})})]})})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,80)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),S()}},[[76,1,2]]]);
//# sourceMappingURL=main.ab010c64.chunk.js.map