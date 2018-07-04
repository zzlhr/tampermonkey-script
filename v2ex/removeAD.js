// ==UserScript==
// @name         V2ex去广告
// @description  去除v2ex广告
// @copyright    2018, lhr(https://www.lhrsite.com/)
// @version      1.0.0
// @author       lhr
// @license      MIT
// @homepageURL  https://github.com/zzlhr/tampermonkey-script/
// @version      1.0
// @grant        none
// @run-at       document-end
// @include      https://*.v2ex.com/*
// ==/UserScript==

(function() {
    'use strict';
    console.log('插件已加载');
    var sidebar_units = $('.sidebar_units');
    for(var i=0;i<sidebar_units.length;i++){
        $(sidebar_units[i]).attr('hidden','');
    }

    var googles = $('.adsbygoogle');
    console.log(googles)
    for(i=0;i<googles.length;i++){
        $(googles[i]).parent().parent().attr('hidden','')
    }
    // Your code here...
})();