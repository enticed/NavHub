!function(e){function t(t){for(var r,c,l=t[0],i=t[1],s=t[2],m=0,f=[];m<l.length;m++)c=l[m],a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={2:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([109,0]),n()}({109:function(e,t,n){"use strict";n.r(t);var r=n(14),a=n(4);function o(e){var t=e.tag.replace("-","&#8209;");return a.createElement("a",{className:"news-tag",href:"https://medium.com/tag/"+e.tag,dangerouslySetInnerHTML:{__html:t}})}var c=n(4);function l(e){var t=e.item.title.replace(/ (?=[^ ]*$)/i,"&nbsp;"),n=e.item.link.split("?")[0].replace("https://medium.com/nav-coin/",""),a=e.item["content:encoded"],l=document.createElement("div");l.innerHTML=a;var i=l.getElementsByTagName("img"),s=l.getElementsByTagName("p"),u=s[0].innerHTML;return u.length<150&&(u+=" ",u+=s[1].innerHTML),c.createElement("div",{className:"news-item"},c.createElement("a",{href:"/article/?id="+n},c.createElement("div",{className:"blog-image",style:{backgroundImage:"url(".concat(i[0].src,")")}},c.createElement("div",{className:"item-overlay"}))),c.createElement("div",{className:"blog-details"},c.createElement("h3",null,c.createElement("a",{href:"/article/?id="+n,dangerouslySetInnerHTML:{__html:t}})),c.createElement("ul",{className:"blog-author-name"},c.createElement("li",null,c.createElement("i",{className:"fa fa-user-circle-o"}),e.item.creator),c.createElement("li",null,c.createElement("i",{className:"fa fa-calendar"}),c.createElement(r.a,{isoDate:e.item.isoDate}))),c.createElement("ul",{className:"blog-tags"},c.createElement("li",{className:"hash"},c.createElement("i",{className:"fa fa-hashtag"})),e.item.categories&&e.item.categories.map(function(e,t){return c.createElement("li",{className:"tag",key:t.toString()},c.createElement(o,{tag:e}))}),!e.item.categories&&["navcoin","cryptocurrency","blockchain"].map(function(e,t){return c.createElement("li",{className:"tag",key:t.toString()},c.createElement(o,{tag:e}))})),c.createElement("div",{className:"blog-excerpt",dangerouslySetInnerHTML:{__html:u}}),c.createElement("div",{className:"social-icon-sect"},c.createElement("div",{className:"read-more"},c.createElement("div",{className:"themeix-button-group"},c.createElement("a",{href:"/article/?id="+n,className:"btn btn-purple"},"read more"))),c.createElement("div",{className:"share-icon"},c.createElement("span",null,"share"),c.createElement("a",{className:"social-icon twitter",href:"https://twitter.com/intent/tweet?text=".concat(e.item.title,"&url=").concat("https://medium.com/nav-coin","/").concat(n,"&via=NavCoin&related=NavCoin"),rel:"nofollow",target:"_blank",title:"Share on Twitter"},c.createElement("i",{className:"fa fa-twitter"})),c.createElement("a",{className:"social-icon facebook",href:"https://facebook.com/sharer.php?u=".concat("https://medium.com/nav-coin","/").concat(n),rel:"nofollow",target:"_blank",title:"Share on Facebook"},c.createElement("i",{className:"fa fa-facebook"}))))))}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=n(34),d=n(4),h=n(33),v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,d.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=new p,t=this;e.parseURL("https://cors-anywhere.herokuapp.com/https://medium.com/feed/nav-coin",function(e,n){if(console.log(n),e)return console.error(e),t.setState({error:!0});t.setState({isLoaded:!0,items:n.items})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.items;return t?d.createElement("div",{className:"ninety-vw-container"},d.createElement("div",{className:"status-container no-flex small"},d.createElement("h3",null,"Something went wrong"),d.createElement("p",null,"We were unable to fetch the latest stories, you can try viewing them directly on the NavCoin Collective Medium publication."),d.createElement("a",{href:"https://medium.com/nav-coin"},"NavCoin Collective   ",d.createElement("span",{className:"fa fa-chevron-right"})))):n?d.createElement("div",{className:"ninety-vw-container"},d.createElement("div",{className:"ninety-vw-container grid-container two-col"},r.map(function(e,t){return d.createElement(l,{key:t.toString(),item:e})}))):d.createElement("div",{className:"ninety-vw-container"},d.createElement("div",{className:"status-container small"},d.createElement("h3",null,"Loading...")))}}])&&s(n.prototype,r),a&&s(n,a),t}(),y=document.querySelector("#react-news");h.render(d.createElement(v),y)},14:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(4);function a(e){var t=new Date(e.isoDate),n="".concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getFullYear());return r.createElement("span",null,n)}},41:function(e,t){},42:function(e,t){},53:function(e,t){},54:function(e,t){}});