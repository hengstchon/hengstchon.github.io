(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(185),i=n(189),l=n(187),c=n(184),u=n(183),m=o.b.div.withConfig({displayName:"footer__Styled",componentId:"sc-1kiiktv-0"})(["ul{display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;margin-left:0;padding:0 ",";}"],Object(c.a)(.2)),d=Object(o.b)(l.a).withConfig({displayName:"footer__StyledLink",componentId:"sc-1kiiktv-1"})(["color:"," !important;text-decoration:none;:hover{text-decoration:underline;}"],u.a.secondary),s=function(e){var t=e.previous,n=e.next;return r.a.createElement(m,null,r.a.createElement("ul",null,r.a.createElement("li",null,t&&r.a.createElement(d,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title||n.fields.slug)),r.a.createElement("li",null,n&&r.a.createElement(d,{to:n.fields.slug,rel:"next"},n.frontmatter.title||n.fields.slug," →"))))},p=o.b.div.withConfig({displayName:"post__Styled",componentId:"sc-101x0na-0"})(["a{color:",";:hover{text-decoration:underline;}}small{margin-bottom:","}"],u.a.primary,Object(c.a)(1)),f=function(e){var t=e.data,n=e.previous,a=e.next,o=e.location,l=t.markdownRemark,c=t.site.siteMetadata.title;return r.a.createElement(i.a,{location:o,title:c},r.a.createElement(p,null,r.a.createElement("h1",null,l.frontmatter.title||l.fields.slug),r.a.createElement("small",null,l.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}}),r.a.createElement("hr",null),r.a.createElement(s,{previous:n,next:a})))};n.d(t,"pageQuery",function(){return h});t.default=function(e){var t=e.data,n=e.pageContext,a=n.previous,o=n.next,i=e.location;return r.a.createElement(f,{data:t,previous:a,next:o,location:i})};var h="3398177345"},183:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a={background:"#316666",text:"#F2E6C2",primary:"#eb7350",secondary:"#FFAF5A",muted:"hsla(0, 0%, 100%, 0.2)"},r={container:"672px"}},184:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(190),r=new(n.n(a).a)({baseFontSize:"16px",baseLineHeight:1.8,headerFontFamily:["-apple-system","serif"],bodyFontFamily:["-apple-system","sans-serif"],scaleRatio:2});var o=r.rhythm;r.scale},186:function(e,t,n){var a;e.exports=(a=n(188))&&a.default||a},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(56),c=n.n(l);n.d(t,"a",function(){return c.a});n(186),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},188:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=n(83),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},189:function(e,t,n){"use strict";n(27),n(22),n(10),n(42);var a=n(0),r=n.n(a),o=n(185),i=n(187),l=n(184),c=n(183),u=o.b.span.withConfig({displayName:"header__Mark",componentId:"h3vvmy-0"})(["margin-right:0.3em;color:",";"],c.a.text),m=Object(o.b)(i.a).withConfig({displayName:"header__StyledLink",componentId:"h3vvmy-1"})(["color:",";:hover{text-decoration:none;}"],c.a.text),d=Object(o.c)(["0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}"]),s=o.b.span.withConfig({displayName:"header__Cursor",componentId:"h3vvmy-2"})(["display:inline-block;width:0.3em;height:1em;background:",";margin-left:0.3em;margin-bottom:-0.2em;border-radius:1px;animation:"," 1.5s infinite;"],c.a.primary,d),p=o.b.h1.withConfig({displayName:"header__IndexHeader",componentId:"h3vvmy-3"})(["margin-bottom:",";"],Object(l.a)(2)),f=o.b.h3.withConfig({displayName:"header__PostHeader",componentId:"h3vvmy-4"})(["margin-bottom:",";"],Object(l.a)(1.5)),h=function(e){var t=e.title;return r.a.createElement(a.Fragment,null,r.a.createElement(u,null,">"),r.a.createElement(m,null,t),r.a.createElement(s,null))},b=function(e){var t=e.title;return"/"===e.location.pathname?r.a.createElement(p,null,r.a.createElement(h,{title:t})):r.a.createElement(f,null,r.a.createElement(h,{title:t}))};function y(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: system-ui, sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  blockquote {\n    border-left: 4px solid ",";\n    padding-left: ",";\n    opacity: 0.7;\n  }\n\n  small {\n    display: block;\n  }\n\n  hr {\n    background: ",";\n  }\n\n  th, td {\n    padding-bottom: ",";\n    padding-top: ",";\n  }\n\n  h1 {\n    margin: 0 0 0.5em 0;\n    color: ",";\n  }\n\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 1em 0;\n    color: ",";\n  }\n"]);return y=function(){return e},e}var g=Object(o.a)(y(),c.a.background,c.a.text,c.a.muted,Object(l.a)(1),c.a.muted,Object(l.a)(.3),Object(l.a)(.3),c.a.secondary,c.a.secondary);var v=o.b.div.withConfig({displayName:"layout__Layout",componentId:"sc-1xvv2zr-0"})(["max-width:",";margin:0 auto;padding:"," ",";"],c.b.container,Object(l.a)(1.5),Object(l.a)(.75));t.a=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children"]);return r.a.createElement(a.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null,r.a.createElement(b,n),r.a.createElement("main",null,t)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6912cf4f80f09f35814e.js.map