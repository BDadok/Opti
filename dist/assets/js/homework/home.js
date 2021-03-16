require(["./main"],function(e){require(["jquery","components/domReady","tweenmax","components/bxslider","waypoints","global"],function(o,e,t,a,n,i){({banner_anim:function(){TweenMax.set("#platform",{top:"-10%"}),TweenMax.set("#platform, #card-base, #card-chip, #email",{top:"-10%"}),TweenMax.set("#chart-base",{top:"5%"}),TweenMax.set("#chart-1",{scaleY:.1,top:"50.2%"}),TweenMax.set("#chart-2",{scaleY:.1,top:"53.8%"}),TweenMax.set("#chart-3",{scaleY:.1,top:"63.4%"}),TweenMax.set("#cloud",{left:"20%",top:"8%"}),TweenMax.set("#social",{left:"-10%",top:"-4%"}),TweenMax.set("#mobile",{top:"20%"}),TweenMax.set("#pc",{left:"10%",top:"-2%"}),TweenMax.set("#rainbow",{opacity:0,left:"-5%"}),TweenLite.to(".home-banner__content p",2,{opacity:1,delay:1.6}),TweenLite.to(".l-home-banner__3-cols > div",1,{opacity:1,delay:1.7}),TweenLite.to(".home-banner__content .headline-1",2,{opacity:1,delay:1.1}),TweenLite.to(".home-banner__anim img",1,{opacity:1}),TweenLite.to(".home-banner__content p .btn",2,{opacity:1,delay:0}),TweenLite.to(".l-home-banner .btn--arrow-down",2,{opacity:1,delay:2}),TweenLite.to(".home-banner__anim",1,{opacity:1,delay:.5}),TweenLite.to("#platform, #pc",1,{top:"0",ease:Back.easeOut,delay:.5}),TweenLite.to("#card-base",1.1,{top:"-2%",ease:Back.easeOut,delay:.5}),TweenLite.to("#card-chip",1.2,{top:"-3%",delay:.5}),TweenLite.to("#email",1.2,{top:"-2%",ease:Back.easeOut,delay:.5}),TweenLite.to("#pc",1.2,{top:"-1%",ease:Back.easeOut,delay:.5}),TweenLite.to("#chart-base",1,{top:"0",ease:Back.easeOut,delay:.5}),TweenLite.to("#chart-1",1,{scaleY:1,top:"34.2%",ease:Expo.easeOut,delay:.5}),TweenLite.to("#chart-2",1,{scaleY:1,top:"41.7%",ease:Expo.easeOut,delay:.5}),TweenLite.to("#chart-3",1,{scaleY:1,top:"55.7%",ease:Expo.easeOut,delay:.5}),TweenLite.to("#cloud",1.3,{top:0,left:0,ease:Expo.easeOut}),TweenLite.to("#social",1.2,{top:0,left:0,ease:Expo.easeOut}),TweenLite.to("#mobile",1.1,{top:0,ease:Expo.easeOut}),TweenLite.to("#pc",1.3,{top:0,left:0,ease:Expo.easeOut}),TweenLite.to("#rainbow",1.1,{opacity:1,delay:.5,left:0})},adjust_banner_height:function(){var e=0;function t(){if(1150<o(window).width()&&700<o(window).height()){var e=o(window).height()-o(".l-navbar").height();o(".l-home-banner").css({height:e})}else o(".l-home-banner").css({height:"auto"});1150<o(window).width()&&1e3<o(window).height()&&o(".l-home-banner").css({height:"800px"})}t(),this.banner_anim(),o(window).resize(function(){clearTimeout(e),e=setTimeout(function(){t()},100)})},slider_features:function(){o("#slider-features").bxSlider({nextSelector:".btn-arrow--right",prevSelector:".btn-arrow--left",nextText:"",prevText:"",pagerCustom:"#slider-features-pager",touchEnabled:!1})},shortcuts:function(){o(".l-shortcuts--home").clone().insertAfter(".l-shortcuts--home").addClass("sticky"),o(".l-main").waypoint(function(e){"down"==e?o(".l-shortcuts--home.sticky").slideToggle(200):o(".l-shortcuts--home.sticky").slideToggle(100)},{offset:0})},info_box_anim:function(){o(".info-box").waypoint(function(e){TweenMax.to(".info-box__product-tour img",1.5,{right:"-85%",ease:Expo.easeOut}),TweenMax.to(".info-box__product-tour .btn",2,{opacity:1,delay:.5,ease:Expo.easeOut})},{offset:500})},init:function(){this.adjust_banner_height(),this.slider_features(),this.shortcuts(),this.info_box_anim(),o(".btn--arrow-down").on("click",function(){var e=o("#main").offset().top+5;return o("html,body").animate({scrollTop:e},500),!1})}}).init(),i.init()})});