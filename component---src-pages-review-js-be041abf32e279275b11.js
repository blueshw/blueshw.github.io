(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"pageQuery",function(){return s});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),u=n(155),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,this.props)},t}(i.a.Component),s="2455565295"},150:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(158),r=new(n.n(a).a)({baseFontSize:"15px",baseLineHeight:"1.8",headerFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"],bodyFontFamily:["Noto Sans Light","Malgun Gothic","NanumGothic","sans-serif"]});var o=r.rhythm,i=r.scale},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(149),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(152),m=n.n(l);n.d(t,"PageRenderer",function(){return m.a});var p=n(39);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},153:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(53),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),u=n(150),c=(n(38),n(151)),s={boxShadow:"none",textDecoration:"none",color:"inherit"},l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pathname,n=e.menuPathname,a=e.menuName;return i.a.createElement("span",{style:Object.assign({},m,{fontWeight:t===n?800:300})},i.a.createElement(c.Link,{style:s,to:n},a))},t}(i.a.Component),m={fontSize:13,flex:"0 0 auto",marginRight:15,marginTop:3,fontWeight:300,color:"#777"},p=l,d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location;e.children,t.pathname;return i.a.createElement("div",{style:{height:"50px",widht:"100%",borderBottom:"1px solid #eee",padding:10}},i.a.createElement("div",{style:{display:"flex",width:"100%",marginBottom:Object(u.a)(1.5)}},i.a.createElement("span",{style:Object.assign({},Object(u.b)(.25),{flex:"1 0 auto",color:"#bbb",marginLeft:20})},i.a.createElement(c.Link,{style:s,to:"/"},"bono's blog")),i.a.createElement(p,{pathname:t.pathname,menuPathname:"/programming",menuName:"개발"}),i.a.createElement(p,{pathname:t.pathname,menuPathname:"/essay",menuName:"일기"}),i.a.createElement(p,{pathname:t.pathname,menuPathname:"/review",menuName:"책리뷰"}),i.a.createElement(p,{pathname:t.pathname,menuPathname:"/",menuName:"태그"})))},t}(i.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(d,this.props),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},e))},t}(i.a.Component);t.a=h},155:function(e,t,n){"use strict";n(38),n(52);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),u=n(151),c=n(157),s=n.n(c),l=n(156),m=n.n(l),p=n(154),d=n(150),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(m.a,{htmlAttributes:{lang:"ko"},meta:[{name:"description",content:t}],title:e}),n.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{style:{marginBottom:Object(d.a)(1.8)},key:t.fields.slug},i.a.createElement("h3",{style:Object.assign({marginBottom:Object(d.a)(.25),fontWeight:300},Object(d.b)(.3))},i.a.createElement(u.Link,{style:{boxShadow:"none"},to:t.fields.slug},i.a.createElement("span",{style:{color:"#444"}},n))),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{style:{fontSize:14,color:"#999"},dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.a=h}}]);
//# sourceMappingURL=component---src-pages-review-js-be041abf32e279275b11.js.map