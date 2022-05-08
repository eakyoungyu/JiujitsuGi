(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{91:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,d,l,s=t(12),p=t(0),x=t.n(p),h=t(32),b=t.n(h),m=t(28),j=t(10),g=t(23),u=t(13),f=t(4),O=j.c.div(i||(i=Object(s.a)(["\n  width: 22vw;\n  height: 22vw;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 873px) {\n    width: 29vw;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media only screen and (max-width: 400px) {\n    width: 40vw;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.white.lighter})),y=j.c.div(o||(o=Object(s.a)(["\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),v=j.c.div(r||(r=Object(s.a)(["\n  margin: 5px 0px;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  @media only screen and (max-width: 873px) {\n    margin-top: 5px;\n  }\n  @media only screen and (min-width: 1500px) {\n    margin: 10px 0px;\n  }\n"]))),w=j.c.img(a||(a=Object(s.a)(["\n  width: 40%;\n  object-fit: contain;\n  @media only screen and (min-width: 1500px) {\n    width: 50%;\n  }\n"]))),k=j.c.h1(c||(c=Object(s.a)(["\n  font-weight: 700;\n  font-size: 22px;\n  margin-bottom: 20px;\n  @media only screen and (max-width: 873px) {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  @media only screen and (min-width: 1500px) {\n    font-size: 28px;\n    margin-bottom: 20px;\n  }\n"]))),z=j.c.div(d||(d=Object(s.a)(["\n  font-size: 12px;\n  /* width: 80%; */\n  text-align: center;\n  @media only screen and (min-width: 1500px) {\n    font-size: 14px;\n  }\n"]))),C=j.c.div(l||(l=Object(s.a)(["\n  margin-top: 20px;\n  padding: 10px 15px;\n  border-radius: 20px;\n  background-color: ",";\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  @media only screen and (max-width: 873px) {\n    padding: 8px 10px;\n    margin-top: 15px;\n  }\n"])),(function(n){return n.theme.grey.darker}),(function(n){return n.theme.white.lighter}));var D,q=function(n){var e=n.data;return console.log(null===e||void 0===e?void 0:e.first_photo),Object(f.jsxs)(O,{children:[Object(f.jsxs)(y,{children:[Object(f.jsx)(v,{children:Object(f.jsx)(w,{src:"".concat(null===e||void 0===e?void 0:e.first_photo)})}),Object(f.jsx)(k,{children:null===e||void 0===e?void 0:e.name}),Object(f.jsx)(z,{children:null===e||void 0===e?void 0:e.description})]}),Object(f.jsx)(C,{children:Object(f.jsx)("a",{href:null===e||void 0===e?void 0:e.link,target:"_blank",children:Object(f.jsx)("span",{children:"\uad6c\ub9e4\ud558\ub7ec \uac00\uae30"})})})]})},L=j.c.div(D||(D=Object(s.a)(["\n  width: 100vw;\n  padding: 20px;\n  background-color: ",";\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(auto-fill, auto-fill);\n  grid-row-gap: 1em;\n  grid-column-gap: 1em;\n  justify-items: center;\n  @media only screen and (max-width: 873px) {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(auto-fill, auto-fill);\n    grid-row-gap: 1em;\n    grid-column-gap: 0.5em;\n    justify-items: center;\n  }\n  @media only screen and (max-width: 400px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(auto-fill, auto-fill);\n    grid-row-gap: 1em;\n    grid-column-gap: 0.5em;\n    justify-items: center;\n  }\n"])),(function(n){return n.theme.backgroundColor.grey}));var E,F,I,H=function(n){var e=n.data;return n.isLoading,Object(f.jsx)(L,{children:null===e||void 0===e?void 0:e.map((function(n){return Object(f.jsx)(q,{data:n})}))})};function M(){return fetch("http://127.0.0.1:8000/brand/api/").then((function(n){return n.json()}))}var Q=j.c.div(E||(E=Object(s.a)(["\n  background-color: ",";\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n"])),(function(n){return n.theme.backgroundColor.grey})),S=j.c.div(F||(F=Object(s.a)(["\n  height: 20vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),_=j.c.div(I||(I=Object(s.a)(["\n  margin: 20px;\n\n  margin-bottom: 0px;\n  font-size: 18px;\n  text-align: center;\n  span {\n    margin-right: 5px;\n    :nth-child(2) {\n      color: ",";\n    }\n  }\n  @media only screen and (min-width: 1500px) {\n    margin: 50px 10px;\n    font-size: 28px;\n  }\n"])),(function(n){return n.theme.grey.lighter}));var G,J,N,P,T=function(){var n=Object(m.useQuery)(["brands","brandHome"],M),e=n.data,t=n.isLoading;return console.log(e),Object(f.jsxs)(Q,{children:[Object(f.jsxs)(_,{children:[Object(f.jsx)("span",{children:"DDobok \ub610\ubcf5."}),Object(f.jsx)("span",{children:"\ub2f9\uc2e0\uc5d0\uac8c \uc5b4\uc6b8\ub9ac\ub294 \ub3c4\ubcf5\uc744 \uace8\ub77c\ubcf4\uc138\uc694"})]}),t?Object(f.jsx)(S,{children:"Loading"}):Object(f.jsx)(H,{data:e,isLoading:t})]})},B=t(54),A=t(97),K=Object(j.c)(A.a.div)(G||(G=Object(s.a)(["\n  width: 100%;\n  height: 50px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 20px;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  background-color: ",";\n"])),(function(n){return n.theme.navColor})),R=j.c.h1(J||(J=Object(s.a)(["\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  margin: auto 0;\n  z-index: 3;\n  width: 30px;\n  font-size: 16px;\n  letter-spacing: 10px;\n  font-weight: 700;\n  color: #e7e7e7;\n  @media only screen and (max-width: 873px) {\n    font-size: 14px;\n    letter-spacing: 1px;\n  }\n  @media only screen and (max-width: 400px) {\n    font-size: 12px;\n    letter-spacing: 1px;\n  }\n"]))),U=j.c.div(N||(N=Object(s.a)(["\n  color: #e7e7e7;\n  cursor: pointer;\n  margin-right: 30px;\n  font-size: 14px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: white;\n  }\n  @media only screen and (max-width: 400px) {\n    margin-right: 10px;\n    font-size: 11px;\n  }\n"]))),V=Object(j.c)(A.a.span)(P||(P=Object(s.a)(["\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.white.darker}));var W,X=function(){var n=Object(u.f)("/"),e=Object(u.f)("/nav1"),t=Object(u.f)("/nav2");return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(K,{children:[Object(f.jsx)(R,{children:"DDobok"}),Object(f.jsx)(U,{children:Object(f.jsxs)(g.b,{to:"/",children:["\ube0c\ub79c\ub4dc",(null===n||void 0===n?void 0:n.isExact)&&Object(f.jsx)(V,{layoutId:"circle"})]})}),Object(f.jsx)(U,{children:Object(f.jsxs)(g.b,{to:"/nav1",children:["\uc0c8\ub3c4\ubcf5 ",(null===e||void 0===e?void 0:e.isExact)&&Object(f.jsx)(V,{layoutId:"circle"})]})}),Object(f.jsx)(U,{children:Object(f.jsxs)(g.b,{to:"/nav2",children:["\ub0b4\uc815\ubcf4 ",(null===t||void 0===t?void 0:t.isExact)&&Object(f.jsx)(V,{layoutId:"circle"})]})})]})})},Y=j.c.div(W||(W=Object(s.a)(["\n  background-color: ",";\n  padding-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  span {\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.theme.backgroundColor.grey}));var Z=function(){return Object(f.jsxs)(Y,{children:[Object(f.jsx)("span",{children:"Contact us: great.ddobok@gmail.com"}),Object(f.jsx)("footer",{children:"Copyright \xa9 2022 DDobok"})]})};var $,nn=function(){return Object(f.jsxs)(g.a,{basename:"",children:[Object(f.jsxs)(B.a,{children:[Object(f.jsx)("title",{children:"DDobok"}),Object(f.jsx)("link",{rel:"icon",href:"".concat(""," / Dobok.ico")}),Object(f.jsx)("meta",{name:"description",content:"\ub2f9\uc2e0\uc5d0\uac8c \uc5b4\uc6b8\ub9ac\ub294 \ub3c4\ubcf5\uc744 \uace8\ub77c\ubcf4\uc138\uc694"}),Object(f.jsx)("meta",{property:"og:image",content:"".concat(""," / Dobok.ico")})]}),Object(f.jsx)(X,{}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/nav1"}),Object(f.jsx)(u.a,{path:"/nav2"}),Object(f.jsx)(u.a,{path:"/",children:Object(f.jsx)(T,{})})]}),Object(f.jsx)(Z,{})]})},en=Object(j.b)($||($=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 400;\n  font-family: 'Nanum Gothic', sans-serif;\n  color:",";\n  line-height: 1.2;\n  \n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.textColor})),tn=new m.QueryClient;b.a.render(Object(f.jsx)(x.a.StrictMode,{children:Object(f.jsx)(m.QueryClientProvider,{client:tn,children:Object(f.jsxs)(j.a,{theme:{pointColor:{red:"#E51013",orange:"#f66907",blue:"#0071e3"},textColor:"1d1d1f",navColor:"#313131",backgroundColor:{grey:"#f5f5f7",white:"#fafafa"},grey:{darker:"#424244",lighter:"#86858a"},black:{darker:"#141414",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(f.jsx)(en,{}),Object(f.jsx)(nn,{})]})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.e04add79.chunk.js.map