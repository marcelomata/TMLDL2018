!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.22793468229c73f9fca4769dbeac76cf.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.a0ab0bcd6a975e3d7e03e759dd4d8547.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.21354d142caebf813d50d9d69641db45.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.daedd146972fc7d8dffd9be34c404865.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.e63a160a6bfb2f2953b5059c50baaf15.js",a.body.appendChild(c)}();