(this.webpackJsonpappptwo=this.webpackJsonpappptwo||[]).push([[0],{76:function(e,t,n){e.exports={container:"App_container__1C8rG",card:"App_card__HQ63q"}},82:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(10),r=n.n(s),i=n(65),o=n(58),c=n(59),d=n(60),l=n(67),j=n(66),m=(n(76),n(123)),u=n(118),h=n(113),p=n(125),b=n(117),O=n(119),x=n(120),g=n(63),f=n.n(g),v=n(5),C=Object(h.a)((function(e){return{root:{width:"100%",marginTop:"2rem"},spaceTop:{marginTop:"2rem"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));var D=function(e){var t=e.username,n=e.Descreptions,s=e.delet,r=e.Edit,i=C();return Object(v.jsx)(a.Fragment,{children:Object(v.jsx)("div",{className:i.root,children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(b.a,{expandIcon:Object(v.jsx)(f.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(v.jsx)(u.a,{className:i.heading,children:t})}),Object(v.jsx)(O.a,{children:Object(v.jsx)(u.a,{children:n})}),Object(v.jsx)(O.a,{children:Object(v.jsxs)(u.a,{className:{width:"100%"},align:"right",children:[Object(v.jsx)(x.a,{color:"primary",onClick:r,children:"Edit"}),Object(v.jsx)(x.a,{onClick:s,color:"secondary",children:"Delete"})]})})]})})})},w=n(121),N=n(122),H=n(84),y=n(64),k=n.n(y),E=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var S=function(e){var t=E();return Object(v.jsx)("div",{className:t.root,children:Object(v.jsx)(w.a,{position:"static",children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(H.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(v.jsx)(k.a,{})}),Object(v.jsx)(u.a,{variant:"h6",className:t.title,children:"DEsckription"}),Object(v.jsx)(x.a,{color:"inherit",onClick:e.Newpost,children:"New Post"})]})})})},G=n(124),P=Object(h.a)((function(e){return{root:{width:"100%",marginTop:"2rem"}}}));var T=function(e){var t=e.GoHome,n=e.id,a=e.username,s=e.Descreptions,r=e.Update,i=e.disable,o=e.Onsave,c=P();return Object(v.jsxs)("div",{children:[Object(v.jsx)(G.a,{className:c.root,label:"User Id",name:"id",value:n,onChange:r,disabled:i}),Object(v.jsx)(G.a,{className:c.root,label:"Username",name:"username",value:a,onChange:r}),Object(v.jsx)(G.a,{className:c.root,label:"User's Descreption",name:"Descreptions",value:s,multiline:!0,rows:3,onChange:r}),Object(v.jsxs)(u.a,{className:c.root,children:[Object(v.jsx)(x.a,{onClick:o,variant:"contained",color:"primary",children:"save"}),Object(v.jsx)(x.a,{onClick:t,style:{marginLeft:"1rem"},variant:"contained",color:"secondary",children:"Go Home"})]})]})},U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={Cards:[{username:"saif boii",id:"12#lk",Descreptions:"lorem ipsum dolar emmet"},{username:"john doe",id:"44#ii",Descreptions:"lorem ipsum dolar emmet"},{username:"dark man",id:"98@56",Descreptions:"lorem ipsum dolar emmet"}],NewPost:!1,OnEdit:!1,disabled:!1,username:"",id:"",Descreptions:""},e.NewPostHandler=function(){e.setState({NewPost:!0,username:"",id:"",Descreptions:"",disabled:!1})},e.GoHomeHandler=function(){e.setState({NewPost:!1,OnEdit:"",username:"",id:"",Descreptions:"",disabled:!1})},e.onDeleteCard=function(t){var n=e.state.Cards.filter((function(e){return e.id!==t.id}));e.setState({Cards:n})},e.OnEditHandler=function(t){e.setState({OnEdit:!0,username:t.username,id:t.id,Descreptions:t.Descreptions,disabled:!0})},e.onChangeUpdate=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.onSaveHandler=function(){var t=e.state,n=t.id,a=t.username,s=t.Descreptions,r={id:n,username:a,Descreptions:s},o=e.state.Cards.findIndex((function(e){return e.id===n})),c=Object(i.a)(e.state.Cards);!0===e.state.disabled?c[o]=r:c.push(r),e.setState({Cards:c}),e.GoHomeHandler()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.Cards.map((function(t,n){return Object(v.jsx)(D,{id:t.id,username:t.username,Descreptions:t.Descreptions,delet:e.onDeleteCard.bind(e,t),Edit:e.OnEditHandler.bind(e,t)},n)})),n=Object(v.jsx)(T,{GoHome:this.GoHomeHandler,id:this.state.id,username:this.state.username,Descreptions:this.state.Descreptions,Update:this.onChangeUpdate,disable:this.state.disabled,Onsave:this.onSaveHandler});return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)(S,{Newpost:this.NewPostHandler}),Object(v.jsxs)(m.a,{container:!0,children:[Object(v.jsx)(m.a,{sm:2,item:!0}),Object(v.jsx)(m.a,{sm:8,item:!0,children:this.state.NewPost||this.state.OnEdit?n:t}),Object(v.jsx)(m.a,{sm:2,item:!0})]}),Object(v.jsx)(u.a,{align:"center",style:{marginTop:"50px"},children:"Made with in sheryians"})]})}}]),n}(a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};r.a.render(Object(v.jsx)(U,{}),document.getElementById("root")),F()}},[[82,1,2]]]);
//# sourceMappingURL=main.b5f8e96c.chunk.js.map