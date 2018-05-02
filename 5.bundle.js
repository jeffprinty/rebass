(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(t(1)),a=u(t(453)),l=u(t(415)),o=u(t(413));function u(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return r.default.createElement("div",null,r.default.createElement(l.default,{children:a.default}),r.default.createElement(o.default,{previous:{href:"/grid-system",name:"Grid System"},next:{href:"/extending",name:"Extending"}}))}},412:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(8)),a=o(t(1)),l=t(12);function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return a.default.createElement(l.Heading,(0,r.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},413:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t(1),l=(r=a)&&r.__esModule?r:{default:r},o=t(17),u=t(417),i=t(12);n.default=function(e){return l.default.createElement(i.Flex,{my:[3,5]},e.previous&&l.default.createElement(i.NavLink,{is:o.Link,to:e.previous.href},l.default.createElement(u.Chevron,{left:!0,size:16}),l.default.createElement(i.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&l.default.createElement(i.NavLink,{is:o.Link,ml:"auto",to:e.next.href},l.default.createElement(i.Text,{bold:!0,mr:2},e.next.name),l.default.createElement(u.Chevron,{right:!0,size:16})))}},415:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=h(t(8)),a=h(t(18)),l=h(t(24)),o=h(t(23)),u=h(t(22)),i=h(t(21)),d=h(t(1)),f=(h(t(7)),h(t(121))),s=h(t(419)),c=t(12),m=(function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);n.default=e}(c),h(t(412)));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function n(){return(0,l.default)(this,n),(0,u.default)(this,(n.__proto__||(0,a.default)(n)).apply(this,arguments))}return(0,i.default)(n,e),(0,o.default)(n,[{key:"render",value:function(){return d.default.createElement(s.default,{source:this.props.children,renderers:v})}}]),n}(d.default.Component),v={code:function(e){var n=e.language,t=e.value;if(!/\./.test(n))return d.default.createElement(c.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},t);var r=!!/\.\./.test(n);return d.default.createElement(c.Box,{mb:3},d.default.createElement(f.default,{code:t,noInline:r}))},heading:function(e){return 1===e.level?d.default.createElement(m.default,e):d.default.createElement(c.BlockLink,{href:"#"+e.children},d.default.createElement(c.Heading,(0,r.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return d.default.createElement(c.Code,{color:"blue",children:e.value})},link:c.Link,paragraph:function(e){return d.default.createElement(c.Measure,(0,r.default)({},e,{maxWidth:"40em",mb:3}))}};n.default=p},453:function(e,n){e.exports="\n# Theming\n\nRebass's core theme includes breakpoints, a spacing scale,\na typographic scale, fonts, font weights, border radii, and colors, all of which can be configured with the `<Provider />` component.\n\nTo customize the underlying theme, pass a `theme` object to the `<Provider />` component.\n\n```.jsx\n<Provider\n  theme={{\n    fonts: {\n      sans: '\"Avenir Next\", Helvetica, sans-serif',\n    },\n    fontSizes: [\n      12, 16, 24, 36, 48, 72\n    ]\n  }}>\n  <Heading fontSize={[ 2, 3, 4, 5 ]}>\n    Hello\n  </Heading>\n</Provider>\n```\n\nThe theme object has the following shape. Any custom values passed to the Provider component will be merged with the defaults.\n\n```js\n// Default values\nconst theme = {\n  breakpoints: [\n    32,\n    48,\n    64,\n    80\n  ],\n  space: [\n    0,\n    4,\n    8,\n    16,\n    32,\n    64,\n    128,\n  ],\n  fonts: {\n    sans: 'system-ui, sans-serif',\n    mono: 'Menlo, monospace',\n  },\n  fontSizes: [\n    12,\n    14,\n    16,\n    20,\n    24,\n    32,\n    48,\n    64,\n    72,\n    96\n  ],\n  weights: {\n    normal: 400,\n    bold: 700\n  },\n  colors: {\n    black: '#000',\n    white: '#fff',\n    ...etc\n  },\n  radii: [ 0, 2, 4 ]\n}\n```\n\nSee the [styled-system](https://github.com/jxnblk/styled-system) docs for more about how Rebass style props integrate with the theme.\n"}}]);