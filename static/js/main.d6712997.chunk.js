(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(19),A=c.n(s),n=c(3),i=c(6),r=c(7),o=c(8),l=c.p+"static/media/title_man.0977c34a.png",j=(c(17),c(1)),d=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),A=0;A<a;A++)s[A]=arguments[A];return(e=t.call.apply(t,[this].concat(s))).state={name:"Williom McLuhan"},e.onMouseEnter=function(e){e.target.classList.toggle("title_man_img_toggle")},e.onMouseLeave=function(e){e.target.classList.toggle("title_man_img_toggle")},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state.name;return Object(j.jsxs)("div",{id:"header",className:"header",children:[Object(j.jsx)("div",{className:"header_inner_4"}),Object(j.jsxs)("div",{className:"header_inner_3",children:[Object(j.jsx)("h1",{children:e}),Object(j.jsx)("h4",{children:"Designer | Developer | Creator"})]}),Object(j.jsx)("div",{className:"header_inner_2",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#about",children:"about"}),Object(j.jsx)("a",{href:"#projects",children:"projects"}),Object(j.jsx)("a",{href:"#contact",children:"contact"})]})}),Object(j.jsx)("div",{className:"header_inner_1",children:Object(j.jsx)("img",{onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,className:"title_man_img",src:l})})]})}}]),c}(a.Component),g=c(5),h=c.p+"static/media/about_man.0249fe7f.png";function u(){var e=Object(a.useState)("more"),t=Object(g.a)(e,2),c=t[0],s=t[1],A=Object(a.useRef)();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{id:"about",className:"about_div",children:[Object(j.jsx)("div",{className:"about_man_div",children:Object(j.jsx)("img",{className:"about_man",src:h})}),Object(j.jsxs)("div",{className:"about_message_div_1",children:[Object(j.jsx)("p",{children:"A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client\u2013server model. A web content management system is often used to develop and maintain web applications."}),Object(j.jsx)("button",{onClick:function(e){var t=e.target,c=t.id,a=t.value;"about_more_btn"==c&&("more"==a&&(s("less"),A.current.style.display="unset"),"less"==a&&(s("more"),A.current.style.display="none"))},value:c,className:"more_btn",id:"about_more_btn",children:c})]})]}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(j.jsx)("div",{className:"about_empty"}),Object(j.jsxs)("div",{style:{display:"none"},ref:A,className:"about_message_div_2",children:[Object(j.jsx)("p",{children:"a person who imagines how something could be made and draws plans for it"}),Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:"Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. A web designer works on the appearance, layout, and, in some cases, content of a website."})})]})]})]})}var m=c(23);function O(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),c=t[0],s=(t[1],Object(m.useSpring)({reset:!0,reverse:c,from:{number:0},number:127,delay:50}).number),A=function(e){e.target.classList.add("project_div_event")},n=function(e){e.target.classList.remove("project_div_event")};return Object(j.jsxs)("div",{id:"projects",className:"project_outer",children:[Object(j.jsx)("div",{className:"project_empty_div"}),Object(j.jsxs)("div",{className:"project_inner",children:[Object(j.jsx)("h1",{className:"project_title",children:"Projects"}),Object(j.jsxs)("div",{className:"project_holder_div",children:[Object(j.jsxs)("div",{className:"project_1_div",onMouseLeave:n,onMouseEnter:A,children:[Object(j.jsx)("h1",{children:"Store Web UI"}),Object(j.jsx)("p",{children:"Project two description here"})]}),Object(j.jsxs)("div",{className:"project_2_div",onMouseLeave:n,onMouseEnter:A,children:[Object(j.jsx)("h1",{children:"York College"}),Object(j.jsx)("p",{children:"Full website with LMS facilities for school"})]}),Object(j.jsxs)("div",{className:"project_count_div",children:[Object(j.jsx)("h1",{children:"Total Projects"}),Object(j.jsx)(m.animated.div,{style:{color:"white",fontSize:50,textAlign:"center"},children:s.to((function(e){return e.toFixed(0)}))})]})]}),Object(j.jsx)("button",{className:"more_btn",id:"projects_more_btn",children:"more"})]})]})}var b=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),A=0;A<a;A++)s[A]=arguments[A];return(e=t.call.apply(t,[this].concat(s))).state={name:"",mail:"",comment:""},e.onChange=function(t){var c=t.target.value,a=t.target.name;"name"==a&&e.setState({name:c}),"mail"==a?e.setState({mail:c}):e.setState({comment:c})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.name,c=e.mail,a=e.comment;return Object(j.jsxs)("div",{id:"contact",children:[Object(j.jsx)("div",{className:"contact_title_div",children:Object(j.jsx)("h1",{className:"contact_title",children:"Conatact"})}),Object(j.jsxs)("div",{className:"contact_div_outer",children:[Object(j.jsxs)("div",{className:"contact_details_div",children:[Object(j.jsx)("h2",{className:"contact_type",children:"Telephone"}),Object(j.jsx)("p",{className:"contact_values",children:"0112456789"}),Object(j.jsx)("h2",{className:"contact_type",children:"Address"}),Object(j.jsx)("p",{className:"contact_values",children:"No: 123, Main Plaza, York Street"}),Object(j.jsx)("h2",{className:"contact_type",children:"Fax"}),Object(j.jsx)("p",{className:"contact_values",children:"0112369852"})]}),Object(j.jsxs)("div",{className:"email_form_div",children:[Object(j.jsx)("h2",{className:"send_email_title",children:"Email to me"}),Object(j.jsxs)("form",{action:"mailto:test@gmail.com",method:"POST",enctype:"text/plain",name:"EmailForm",children:[Object(j.jsx)("input",{name:"mail",value:c,onChange:this.onChange,className:"email_from_inputs",type:"email",required:!0,placeholder:"your email here"}),Object(j.jsx)("input",{name:"name",value:t,onChange:this.onChange,className:"email_from_inputs",required:!0,placeholder:"enter your name"}),Object(j.jsx)("textarea",{name:"comment",value:a,onChange:this.onChange,rows:"6",className:"email_from_inputs",required:!0,placeholder:"message here"}),Object(j.jsx)("button",{type:"submit",className:"submit_btn",children:"Send"})]})]})]})]})}}]),c}(a.Component);function B(){var e=["Developer","Designer","Creator","Williom McLuhan"],t=0,c=Object(a.useState)(""),s=Object(g.a)(c,2),A=s[0],n=s[1];return Object(a.useEffect)((function(){setInterval((function(){t<e.length?(n(e[t]),t++):n(e[t=0])}),5e3)}),[]),Object(j.jsxs)("div",{className:"footer_root_div",children:[Object(j.jsx)("div",{className:"footer_empty_div",children:Object(j.jsx)("h1",{className:"footer_carousel",children:A})}),Object(j.jsxs)("div",{className:"footer_outer",children:[Object(j.jsxs)("div",{className:"footer_inner_1",children:[Object(j.jsx)("p",{children:"All Rights Received \xa9"}),Object(j.jsx)("p",{children:"foxbot IT solutions 2020-2021"})]}),Object(j.jsx)("div",{className:"footer_inner_2"}),Object(j.jsxs)("div",{className:"footer_inner_3",children:[Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("img",{className:"social_icons",src:"data:image/png;base64,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"})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("img",{className:"social_icons",src:"data:image/png;base64,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"})})]})]})]})}var x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(u,{}),Object(j.jsx)("br",{}),Object(j.jsx)(O,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(b,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(B,{}),Object(j.jsx)("a",{href:"#header",style:{position:"fixed",right:0,top:450},children:Object(j.jsx)("img",{className:"arrow_icons",src:"data:image/png;base64,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"})})]})};A.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d6712997.chunk.js.map