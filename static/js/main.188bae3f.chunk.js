(this.webpackJsonphelp_update=this.webpackJsonphelp_update||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),i=n.n(l),c=(n(25),n(1)),s=n(2),o=n(4),u=n(3),m=n(5),h=(n(26),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-grid",style:{width:"100%",margin:"auto"}},r.a.createElement("div",{className:"about-me-cell"},r.a.createElement("h2",null,"ABOUT ME"),r.a.createElement("hr",null),r.a.createElement("p",null,"1997")),r.a.createElement("div",{style:{border:"1px solid blue"}},r.a.createElement("div",{className:"paragraph"},r.a.createElement("p",null,"Born and raised from Atlanta, GA and a recent graduate from Georgia State University who studied Computer Science and Game Design & Development. I love to create websites along with my personal website improving them every single year. This is my 4th attempt using a different technology - React."))))}}]),t}(a.Component)),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).resized=function(){var t=window.innerWidth;t>=720?e.setState({isTrue:!0}):e.setState({isTrue:!1}),console.log(e.state.isTrue+" :"+t)},e.state={width:window.innerWidth,isTrue:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.resized()}},{key:"componentWillUnmount",value:function(){this.resized()}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav_container center"},r.a.createElement("nav",{className:"nav",style:{backgroundColor:"tomato",position:this.props.links.position,marginTop:this.props.links.padding}},r.a.createElement("a",{href:"#d"},r.a.createElement("h1",null,"Anthony Hsia")),r.a.createElement("div",{className:"div_links"},r.a.createElement("ul",{className:"nav_links"},r.a.createElement("a",{href:"#a"},r.a.createElement("li",null,"About Me")),r.a.createElement("a",{href:"#b"},r.a.createElement("li",null,"Projects")),r.a.createElement("a",{href:"#c"},r.a.createElement("li",null,"Contact "))))))}}]),t}(a.Component),p=n(7),v=n(9),E=n(10);function b(){var e=Object(v.a)(["\n  opacity: ",";\n  margin-right: ",";\n  transition: opacity ease-in 2s, margin-right cubic-bezier(1, 0, 0.4, 1) 2s;\n"]);return b=function(){return e},e}function f(){var e=Object(v.a)(["\n  opacity: ",";\n  margin-left: ",";\n  transition: opacity ease-in 2s, margin-left cubic-bezier(1, 0, 0.4, 1) 2s;\n"]);return f=function(){return e},e}var g=E.a.section(f(),(function(e){return e.show?"100":"0"}),(function(e){return e.show?"0":"100px"})),y=E.a.section(b(),(function(e){return e.show?"100":"0"}),(function(e){return e.show?"0":"100px"})),O=g,j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={revealed:!1},n.reveal=function(){n.setState({revealed:!0})},n.unreveal=function(){n.setState({revealed:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{onEnter:this.reveal,onLeave:this.unreveal},r.a.createElement(O,{show:this.state.revealed},this.props.children))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={revealed:!1},n.reveal=function(){n.setState({revealed:!0})},n.unreveal=function(){n.setState({revealed:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{onEnter:this.reveal,onLeave:this.unreveal},r.a.createElement(y,{show:this.state.revealed},this.props.children))}}]),t}(a.Component),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentWillUnmount=function(){window.removeEventListener("scroll",n.set_position_header)},n.set_position_header=function(){var e=window.pageYOffset;e<=40?n.setState({position:"relative",padding:"-20px",increase_num:1}):e<n.state.highest&&n.state.increase_num>=0&&n.state.increase_num<=20?n.setState({increase_num:1+n.state.increase_num}):e<n.state.highest&&n.state.increase_num>=21?n.setState({highest:e,position:"fixed",padding:"-20px",increase_num:0}):n.setState({highest:e,position:"relative",increase_num:0})},n.set_state=function(){n.setState({show:!0})},n.state={highest:0,position:"relative",padding:"-20px",increase_num:1,set_opacity:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.set_position_header,!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,{links:this.state})),r.a.createElement("br",null),r.a.createElement(w,null,"hi"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,null,r.a.createElement("section",null,r.a.createElement(h,null))),r.a.createElement(j,null,r.a.createElement("h2",null,"hi lol"),r.a.createElement("section",null,r.a.createElement("div",null,"hello ",r.a.createElement("br",null)),r.a.createElement("div",null,"hello ",r.a.createElement("br",null)),r.a.createElement("div",null,"hello ",r.a.createElement("br",null)),r.a.createElement("div",null,"hello ",r.a.createElement("br",null)),r.a.createElement("div",null,"hello ",r.a.createElement("br",null)),r.a.createElement("div",null,"hello ",r.a.createElement("br",null)))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.188bae3f.chunk.js.map