(this["webpackJsonpnew-reactor"]=this["webpackJsonpnew-reactor"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/Headshot-cropped.e14419ff.jpeg"},28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/LaserLinks.cfad92b0.png"},42:function(e,t,a){e.exports=a.p+"static/media/MrLewis.c91525af.png"},43:function(e,t,a){e.exports=a.p+"static/media/Gradient.d306d55c.png"},44:function(e,t,a){e.exports=a.p+"static/media/WeatherMap.9127a965.png"},45:function(e,t,a){e.exports=a.p+"static/media/Gardenseedr.76ac9e42.png"},46:function(e,t,a){e.exports=a.p+"static/media/DiceRoller.a4542f79.png"},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),l=a.n(i);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,s=a(5),o=a(6),u=a(8),p=a(7),d=(a(34),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h5",null,"CONTACT and MORE"),r.a.createElement("h5",null,"Email: ",r.a.createElement("a",{href:"andy.bob.ball@gmail.com"},"andy.bob.ball@gmail.com")),r.a.createElement("h5",null,"LinkedIn: ",r.a.createElement("a",{href:"andy.bob.ball@gmail.com"},"Andrew-Robert-Ball")),r.a.createElement("h5",null,"GitHub: ",r.a.createElement("a",{href:"https://github.com/AndrewBall79"},"AndrewBall79")))}}]),a}(r.a.Component)),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"main-title"},"".concat("Andrew"," ").concat("Ball")),r.a.createElement("h3",null,"Web Designer"))}}]),a}(r.a.Component),h=a(51),b=a(52),g=new Date,f={fontSize:30};g.getHours()>11?(f.color="red",c="PM"):(c="AM",f.color="blue");var v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hours:(new Date).getHours(),minutes:(new Date).getMinutes()},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({hours:(new Date).getHours(),minutes:(new Date).getMinutes()})}},{key:"render",value:function(){return r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"nav navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},r.a.createElement(h.a.Toggle,null),r.a.createElement(h.a.Collapse,null,r.a.createElement("a",{className:"navbar-brand",href:"#"},"Top Of Page"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"}),r.a.createElement(b.a,{className:"mr-auto d-block"},r.a.createElement(b.a.Item,{className:"navbar-nav mr-auto"},r.a.createElement(b.a.Link,{className:"nav-item active"},r.a.createElement("h1",{style:f},this.state.hours+":"+this.state.minutes+" "+c))))))}}]),a}(r.a.Component),E=a(25),w=a.n(E),k=a(26),y=a(27),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{className:"mainContent"},r.a.createElement(y.a,null,r.a.createElement("img",{className:"blurred-edge",style:{width:"60vw",position:"relative"},src:w.a,alt:"Headshot"})))}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("br",null),r.a.createElement("p",{className:"project-header"},this.props.project.title),r.a.createElement("a",{href:this.props.project.href},r.a.createElement("img",{className:"images",width:"90%",src:this.props.project.url,alt:this.props.project.alt})),r.a.createElement("br",null),r.a.createElement("h5",{className:"projectsDescription"},this.props.project.description),r.a.createElement("br",null))}}]),a}(r.a.Component),M=[{id:1,title:"Laser Links",description:"Design is tied together with animation seamlessly obscuring links to other works within animated polygons.",url:a(41),alt:"Laser Links",href:"https://andrewball79.github.io/laserLinks"},{id:2,title:"Mr. Lewis And The Funeral 5",description:"Bootstrap, HTML, CSS, JQuery, and a Spotify player are tucked behind animated tabs on this band page.",url:a(42),alt:"Mr. Lewis",href:"https://andrewball79.github.io/laserLinks/mrLewis"},{id:3,title:"Gradient Mind",description:"Gradient Mind is an experiment with pure CSS and HTML showcasing some interesting animation, layout and design.",url:a(43),alt:"Gradient Mind",href:"https://andrewball79.github.io/laserLinks/gradientLife"},{id:4,title:"Weather Map",description:"The Weather Map is a Javascript API project to create a user interactive application where the user can input location, latitude or longitude, or drag a marker on the map to show the realtime weather forecast in a given location through Dark Sky API and MapBox API.",url:a(44),alt:"Weather Map",href:"https://andrewball79.github.io/laserLinks/weatherMap"},{id:5,title:"Gardenseedr",description:"GardenSeedr is a desktop gardening assistant developed during the coronavirus outbreak as an aid to new gardeners with planting ideas and placement. Two separate API calls, OpenWeather API and OpenFarm API were used for weather updates and crop information respectively. A virtual garden grid is used for crop placement.",url:a(45),alt:"Gardenseedr",href:"https://gardenseedr.com"},{id:6,title:"Dice Roller",description:"This is a page layout exhibiting clean, bright design principles using HTML, CSS, JavaScript, and Jquery. There are multiple die choices and a selectable number of rolls. It is meant to be used as a supplemental to any tabletop games where dice are used.",url:a(46),alt:"Bobby's Party",href:"https://andrewball79.github.io/laserLinks/DiceRoller"}],L=(a(47),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=M.map((function(e){return r.a.createElement(O,{key:e.id,item:e,project:e})}));return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(m,null),r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"pro-pro"},"PROJECTS"),r.a.createElement("div",{className:"products-list"},e),r.a.createElement(d,null))}}]),a}(r.a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.171f1292.chunk.js.map