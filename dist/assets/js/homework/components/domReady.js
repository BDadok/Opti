define(function(){"use strict";function n(){var n=r;a&&n.length&&(r=[],function(n){var e;for(e=0;e<n.length;e+=1)n[e](l)}(n))}function e(){a||(a=!0,i&&clearInterval(i),n())}function d(n){return a?n(l):r.push(n),d}var t,o,i,c="undefined"!=typeof window&&window.document,a=!c,l=c?document:null,r=[];if(c){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1);else if(window.attachEvent){window.attachEvent("onload",e),o=document.createElement("div");try{t=null===window.frameElement}catch(n){}o.doScroll&&t&&window.external&&(i=setInterval(function(){try{o.doScroll(),e()}catch(n){}},30))}"complete"===document.readyState&&e()}return d.version="2.0.1",d.load=function(n,e,t,o){o.isBuild?t(null):d(t)},d});