(this.webpackJsonpdelit=this.webpackJsonpdelit||[]).push([[0],{161:function(e,t){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),l=n.n(o),c=(n(76),n(77),n(78),n(79),n(80),n(81),n(82),n(4)),i=n(8),s=n(6),u=n(5),d=n(7),h=n(33),m=n(20),p=n(14),E=n(18),v=n(25);var b=n(1),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Modal,{bottomSheet:!1,fixedFooter:!1,header:this.props.header,open:this.props.open,style:{maxHeight:"none"},options:{dismissible:!1,endingTop:"10%",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,opacity:.5,outDuration:250,preventScrolling:!1,startingTop:"4%"},actions:this.props.actions},this.props.content)}}]),t}(r.a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",modelActive1:!1,modelActive2:!1,vemail:"",vcode:"",vpass:"",vpass2:""},n.handleSubmit=function(e){e.preventDefault(),n.props.login(n.state,n.props.socket)},n.handleChange=function(e){var t=e.target;n.setState((function(e){return Object(v.a)({},e,Object(E.a)({},t.id,t.value))}))},n.goRegister=function(){n.props.clearError(),n.props.handleGoRegister()},n.handleModalOpen1=function(){n.setState({modelActive1:!0})},n.handleModalClose1=function(){n.setState({modelActive1:!1})},n.handleModalOpen2=function(){n.handleModalClose1(),n.setState({modelActive2:!0})},n.handleModalClose2=function(){n.setState({modelActive2:!1})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.vemail,o=e.vpass,l=e.vpass2,c=e.vcode,i=this.props.auth;return i.email?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement("div",{className:"white login-form right"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Login"),r.a.createElement(b.TextInput,{type:"email",label:"Enter Your Email",id:"email",value:t,onChange:this.handleChange}),r.a.createElement(b.TextInput,{type:"password",label:"Enter Your Password",id:"password",value:n,onChange:this.handleChange}),i.authError?r.a.createElement("div",{className:"red-text center"},r.a.createElement("p",null,i.authError)):null,r.a.createElement("li",{className:"login-link",onClick:this.goRegister},"New to Delit? sign up"),r.a.createElement("li",{className:"login-link",onClick:this.handleModalOpen1},"Forget your password?"),r.a.createElement(b.Button,{waves:"orange",className:"home-submitbtn",onClick:this.handleSubmit},"Login"),r.a.createElement(g,{header:"Verification",open:this.state.modelActive1,actions:[r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalOpen2},"Submit"),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose1},"Close")],content:r.a.createElement("section",{className:"dialog_content"},r.a.createElement("p",null,r.a.createElement("strong",null,"Please Enter Your Email")),r.a.createElement("p",null,"We will send you a verification code"),r.a.createElement(b.TextInput,{label:"Enter Your Email",id:"vemail",value:a,onChange:this.handleChange}))}),r.a.createElement(g,{header:"Reset Password",open:this.state.modelActive2,actions:[r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose2},"Submit"),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose2},"Close")],content:r.a.createElement("section",{className:"dialog_content"},r.a.createElement("p",null,r.a.createElement("strong",null,"We have sent you a verification code")),r.a.createElement(b.TextInput,{label:"Enter Your Verification Code",id:"vcode",value:c,onChange:this.handleChange}),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleResend}," Resend ",r.a.createElement("span",{style:{color:"red"}}," (60s) ")),r.a.createElement("p",null,r.a.createElement("strong",null,"Password")),r.a.createElement(b.TextInput,{label:"Enter Your New Password",id:"vpass",value:o,onChange:this.handleChange}),r.a.createElement("p",null,r.a.createElement("strong",null,"Password")),r.a.createElement(b.TextInput,{label:"Confirm Your New Password",id:"vpass2",value:l,onChange:this.handleChange}))}))}}]),t}(r.a.Component),O=Object(p.b)((function(e){return console.log(e),{auth:e.auth,socket:e.backend.socket}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(n,a){t.emit("login_input",e,(function(e,t){n(e?{type:"LOGIN_ERROR",value:t}:{type:"LOGIN_SUCCESS",value:t})}))}}(t,n))},clearError:function(){return e((function(e,t){e({type:"CLEAR_ERROR"})}))}}}))(f),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",password2:"",modelActive1:!1,modelActive2:!1,vemail:"",vcode:""},n.handleSubmit=function(e){e.preventDefault(),n.props.register(n.state,n.props.socket)},n.handleChange=function(e){var t=e.target;n.setState((function(e){return Object(v.a)({},e,Object(E.a)({},t.id,t.value))}))},n.goLogin=function(){n.props.clearError(),n.props.handleGoLogin()},n.handleModalOpen1=function(){n.setState({modelActive1:!0})},n.handleModalClose1=function(){n.setState({modelActive1:!1})},n.handleModalOpen2=function(){n.handleModalClose1(),n.setState({modelActive2:!0})},n.handleModalClose2=function(){n.setState({modelActive2:!1})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.password2,o=e.vemail,l=e.vcode,c=this.props.auth;return c.email?r.a.createElement(m.a,{to:"/dashboard"}):r.a.createElement("div",{className:"white login-form right"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign up"),r.a.createElement(b.TextInput,{type:"email",label:"Enter Your Email",id:"email",value:t,onChange:this.handleChange}),r.a.createElement(b.TextInput,{type:"password",label:"Enter Your Password",id:"password",value:n,onChange:this.handleChange}),r.a.createElement(b.TextInput,{type:"password",label:"Enter Your Password",id:"password2",value:a,onChange:this.handleChange}),c.authError?r.a.createElement("div",{className:"red-text center"},r.a.createElement("p",null,c.authError)):null,r.a.createElement("li",{className:"login-link",onClick:this.goLogin},"Already have account, go login"),r.a.createElement(b.Button,{waves:"orange",className:"home-submitbtn",onClick:this.handleModalOpen1},"Sign Up"),r.a.createElement(g,{header:"Verification",open:this.state.modelActive1,actions:[r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalOpen2},"Submit"),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose1},"Close")],content:r.a.createElement("section",{className:"dialog_content"},r.a.createElement("p",null,r.a.createElement("strong",null,"Please Enter Your Email")),r.a.createElement("p",null,"We will send you a verification code"),r.a.createElement(b.TextInput,{label:"Enter Your Email",id:"vemail",value:o,onChange:this.handleChange}))}),r.a.createElement(g,{header:"Verify Your Email",open:this.state.modelActive2,actions:[r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose2},"Submit"),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleModalClose2},"Close")],content:r.a.createElement("section",{className:"dialog_content"},r.a.createElement("p",null,r.a.createElement("strong",null,"We have sent you a verification code")),r.a.createElement(b.TextInput,{label:"Enter Your Verification Code",id:"vcode",value:l,onChange:this.handleChange}),r.a.createElement(b.Button,{waves:"orange",onClick:this.handleResend}," Resend ",r.a.createElement("span",{style:{color:"red"}}," (60s) ")))}))}}]),t}(r.a.Component),w=Object(p.b)((function(e){return{auth:e.auth,socket:e.backend.socket}}),(function(e){return{register:function(t,n){return e(function(e,t){return function(n,a){t.emit("register_input",e,(function(e,t){n(e?{type:"REGISTER_ERROR",value:t}:{type:"REGISTER_SUCCESS",value:t})}))}}(t,n))},clearError:function(){return e((function(e,t){e({type:"CLEAR_ERROR"})}))}}}))(C),j=n(65),y=n.n(j),S="HOME_SCREEN",k="REGISTER_SCREEN",N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={currentScreen:S},n.handleGoRegister=function(){n.setState({currentScreen:k})},n.handleGoLogin=function(){n.setState({currentScreen:S})},n.handleChange=function(e){var t=e.target;n.setState((function(e){return Object(v.a)({},e,Object(E.a)({},t.id,t.value))}))},n.getScreen=function(){switch(n.state.currentScreen){case S:return r.a.createElement(O,{handleGoRegister:n.handleGoRegister});case k:return r.a.createElement(w,{handleGoLogin:n.handleGoLogin});default:return r.a.createElement("div",null,"error")}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("img",{className:"delit-logo left",src:y.a,alt:""}),this.getScreen())}}]),t}(r.a.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Navbar,{alignLinks:"right",brand:r.a.createElement("a",{className:"brand-logo",href:"/"},"Logo"),menuIcon:r.a.createElement(b.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},r.a.createElement(b.NavItem,null,"User"),r.a.createElement(b.NavItem,null,"User"))}}]),t}(r.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Collection,{className:"dashboard-sidebar"},r.a.createElement(b.CollectionItem,{className:"dashboard-sideItem"},r.a.createElement(b.Button,{waves:"red",className:"dashboard-sidebtn"},"Create A New Project")),r.a.createElement(b.CollectionItem,{className:"dashboard-sideItem"},r.a.createElement(b.Button,{waves:"red",className:"dashboard-sidebtn"},"All Projects")),r.a.createElement(b.CollectionItem,{className:"dashboard-sideItem"},r.a.createElement(b.Button,{waves:"red",className:"dashboard-sidebtn"},"Projects Created By Me")),r.a.createElement(b.CollectionItem,{className:"dashboard-sideItem"},r.a.createElement(b.Button,{waves:"red",className:"dashboard-sidebtn"},"Projects Shared With Me")),r.a.createElement(b.CollectionItem,{className:"dashboard-sideItem"},r.a.createElement(b.Button,{waves:"red",className:"dashboard-sidebtn"},"Manage My Tilesets")))}}]),t}(r.a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"dashboard-search"},r.a.createElement(b.TextInput,{label:"Enter search"})),r.a.createElement(b.Button,{type:"submit",waves:"orange",className:"dashboard-searchbutton blue"},"Search"))}}]),t}(r.a.Component),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleGoEdit=function(){n.props.history.push("/project/fwef")},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.projects;return r.a.createElement("div",{className:"dashboard-itemlist"},t&&t.map((function(t){return r.a.createElement(b.Card,{className:"dashboard-itemcard waves-red waves-effect",closeIcon:r.a.createElement(b.Icon,null,"close"),revealIcon:r.a.createElement(b.Icon,null,"more_vert"),textClassName:"white-text",title:t.name,onClick:e.handleGoEdit,key:t.id},"Last Modified By: ",t.lastModified,r.a.createElement(b.Button,{waves:"orange",className:"dashboard-itemcard-btn right"},"Team"),r.a.createElement(b.Button,{waves:"orange",className:"dashboard-itemcard-btn right"},"Edit"))})))}}]),t}(r.a.Component),M=Object(p.b)((function(){return{projects:[{name:"Project1",lastModified:"123@123.com",id:"123213"},{name:"Project2",lastModified:"cringe squirtle",id:"sdfsd"}]}}),(function(e){return{}}))(B),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(x,null),r.a.createElement("div",{className:"dashboard-display"},r.a.createElement(M,{history:this.props.history}),r.a.createElement(b.Pagination,{activePage:2,items:10,leftBtn:r.a.createElement(b.Icon,null,"chevron_left"),maxButtons:8,rightBtn:r.a.createElement(b.Icon,null,"chevron_right"),className:"dashboard-pagination center"})),r.a.createElement(I,null))}}]),t}(r.a.Component),_={alignment:"left",autoTrigger:!0,closeOnClick:!1,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"workscreen-toptoolbar"},r.a.createElement(b.Dropdown,{options:_,trigger:r.a.createElement(b.Button,{node:"button",className:"workscreen-dropdown"},"File")},r.a.createElement("div",null,"Import"),r.a.createElement("div",null,"Export"),r.a.createElement("div",null,"Save"),r.a.createElement("div",null,"Save as")),r.a.createElement(b.Dropdown,{options:_,trigger:r.a.createElement(b.Button,{node:"button",className:"workscreen-dropdown"},"Edit")},r.a.createElement("div",null,"Copy"),r.a.createElement("div",null,"Paste")),r.a.createElement(b.Dropdown,{options:_,trigger:r.a.createElement(b.Button,{node:"button",className:"workscreen-dropdown"},"View")},r.a.createElement(b.Checkbox,{id:"checkbox_1",label:"Hide Layer Window",value:"Red"}),r.a.createElement(b.Checkbox,{id:"checkbox_2",label:"Hide Tilesets Window",value:"Red"}),r.a.createElement(b.Checkbox,{id:"checkbox_3",label:"Hide Property Window",value:"Red"})))}}]),t}(r.a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Navbar,{alignLinks:"right",brand:r.a.createElement("a",{className:"brand-logo",href:"/dashboard"},"Logo"),extendWith:r.a.createElement(T,null),menuIcon:r.a.createElement(b.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},r.a.createElement(b.NavItem,null,r.a.createElement("div",{href:"/dashboard"},"Back")),r.a.createElement(b.NavItem,{href:"components.html"},"User"))}}]),t}(r.a.Component),L=n(19),P=document.body.getBoundingClientRect(),G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=P.width,t=P.height;return r.a.createElement(L.a,{className:"workscreen-window",default:{x:0,y:0,width:.2*e,height:.7*t}},"Property Window")}}]),t}(r.a.Component),D=document.body.getBoundingClientRect(),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=D.width,t=D.height,n=.8*e;return r.a.createElement(L.a,{className:"workscreen-window",default:{x:n,y:0,width:.2*e,height:.7*t*.4}},"Layer Window")}}]),t}(r.a.Component),Y=n(68),U=n.n(Y),V=function e(t,n,a,r){var o=this;Object(c.a)(this,e),this.getSize=function(){return o.numRow*o.numColumn},this.buildModel=function(){o.numColumn=Math.floor(o.srcWidth/o.width),o.numRow=Math.floor(o.srcHeight/o.height),o.buildSource(),o.buildDestination()},this.buildSource=function(){for(var e=0;e<o.numRow;e++)for(var t=0;t<o.numColumn;t++)o.sx.push(t*o.width),o.sy.push(e*o.height),o.sWidth.push(o.width),o.sHeight.push(o.height)},this.buildDestination=function(){for(var e=o.mapWidth/o.numColumn,t=o.mapHeight/o.numRow,n=0;n<o.numRow;n++)for(var a=0;a<o.numColumn;a++)o.dx.push(a*e),o.dy.push(n*t),o.dWidth.push(e),o.dHeight.push(t)},this.draw=function(){o.srcWidth=o.img.width,o.srcHeight=o.img.height,o.buildModel();for(var e=0;e<o.getSize();e++)o.ctx.drawImage(o.img,o.sx[e],o.sy[e],o.sWidth[e],o.sHeight[e],o.dx[e]+1,o.dy[e]+1,o.dWidth[e]-2,o.dHeight[e]-2)},this.ctx=t,this.img=n,this.width=a,this.height=r,this.mapWidth=this.ctx.canvas.width,this.mapHeight=this.ctx.canvas.height,this.srcWidth=0,this.srcHeight=0,this.sx=[],this.sy=[],this.sWidth=[],this.sHeight=[],this.dx=[],this.dy=[],this.dWidth=[],this.dHeight=[],this.numColumn=0,this.numRow=0},z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={width:150,height:150,numRow:0,numColumn:0,selected:null},n.canvas=r.a.createRef(),n.componentDidMount=function(){var e=n.state,t=e.width,a=e.height,r=n.canvas.current.getContext("2d"),o=new Image;o.src=U.a;var l=new V(r,o,t,a);o.onload=function(){l.draw();var e=l.numRow,t=l.numColumn;n.setState({numRow:e,numColumn:t})}},n.handleSelect=function(e){var t=n.canvas.current.getBoundingClientRect(),a=t.left,r=t.top,o=t.width,l=t.height,c=e.clientX-a,i=e.clientY-r,s=o/n.state.numColumn,u=l/n.state.numRow,d=n.getGridIndex(c,i,s,u);n.setState({selected:d})},n.getGridIndex=function(e,t,a,r){for(var o=n.state,l=o.numRow,c=o.numColumn,i=0;i<l;i++)for(var s=0;s<c;s++)if(e>s*a&&e<(s+1)*a&&t>i*r&&t<(i+1)*r)return{x:s,y:i}},n.render=function(){var e=n.state,t=e.selected,a=e.numColumn,o=e.numRow,l={};null!==n.canvas.current&&null!==t&&(l={left:100*t.x/a+"%",top:100*t.y/o+"%",width:100/a+"%",height:100/o+"%"});return r.a.createElement("div",{style:n.props.style,className:n.props.className},r.a.createElement("canvas",{ref:n.canvas,className:"canvas",onClick:n.handleSelect}),t?r.a.createElement("div",{style:l,className:"selected-grid"}):t)},n}return Object(d.a)(t,e),t}(r.a.Component),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={scale:50},n.canvas=r.a.createRef(),n.handleZoomIn=function(){var e=n.state.scale;e*=2,n.setState({scale:e})},n.handleZoomOut=function(){var e=n.state.scale;e/=2,n.setState({scale:e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.scale;return r.a.createElement("div",null,r.a.createElement(b.Button,{small:!0,waves:"red",node:"button",className:"",icon:r.a.createElement(b.Icon,null,"zoom_in"),onClick:this.handleZoomIn}),r.a.createElement(b.Button,{small:!0,waves:"red",node:"button",className:"",icon:r.a.createElement(b.Icon,null,"zoom_out"),onClick:this.handleZoomOut}),r.a.createElement("div",{className:"display-place",onMouseDown:function(e){return e.stopPropagation()}},r.a.createElement(z,{canvas:this.canvas,className:"map",style:{width:e+"%",height:e+"%",left:e<100?(100-e)/2+"%":0,top:e<100?(100-e)/2+"%":0,border:"1px solid #d3d3d3"}})))}}]),t}(r.a.Component),Z=document.body.getBoundingClientRect(),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Z.width,t=Z.height,n=.8*e,a=.7*t*.4;return r.a.createElement(L.a,{className:"workscreen-window",default:{x:n,y:a,width:.2*e,height:.7*t*.6}},r.a.createElement(F,null))}}]),t}(r.a.Component),J=document.body.getBoundingClientRect(),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=J.width,t=J.height,n=.2*e;return r.a.createElement(L.a,{className:"workscreen-window",default:{x:n,y:0,width:.6*e,height:.7*t}},"map window")}}]),t}(r.a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(G,null),r.a.createElement(H,null),r.a.createElement(q,null)))}}]),t}(r.a.Component),$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.createSocket()}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:N}),r.a.createElement(m.b,{path:"/dashboard",component:A}),r.a.createElement(m.b,{path:"/project/:key",component:X}),r.a.createElement(m.b,{path:"/:any",component:N}))))}}]),t}(a.Component),Q=Object(p.b)(null,(function(e){return{createSocket:function(){return e((function(e,t){e({type:"CREATE_SOCKET"})}))}}}))($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=n(22),te=n(69),ne={},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return{authError:t.value};case"LOGIN_SUCCESS":return{email:t.value};case"LOGOUT_SUCCESS":return e;case"REGISTER_SUCCESS":return{email:t.value};case"REGISTER_ERROR":return{authError:t.value};case"CLEAR_ERROR":return{authError:null};default:return e}},re=n(70),oe=n.n(re),le={},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;if("CREATE_SOCKET"===t.type){var n=oe()("https://real-delit.herokuapp.com/");return{socket:n}}return e},ie=Object(ee.c)({auth:ae,backend:ce}),se=Object(ee.d)(ie,Object(ee.a)(te.a));l.a.render(r.a.createElement(p.a,{store:se},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){e.exports=n.p+"static/media/Project_Logo.14dc221b.PNG"},68:function(e,t,n){e.exports=n.p+"static/media/squirtle.24d233b5.jpg"},71:function(e,t,n){e.exports=n(164)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.421c14d9.chunk.js.map