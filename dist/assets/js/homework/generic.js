require(["./main"],function(e){require(["jquery","components/bxslider","components/domReady","waypoints","global"],function(a,e,t,o,i){var s={scrollToID:function(e){var t=a(e).offset().top-50;a("html,body").animate({scrollTop:t},400)},shortcuts:function(){if(0<a(".l-shortcuts").length){setTimeout(function(){a(".l-main").waypoint(function(e){"down"==e?a(".l-shortcuts").slideToggle(200):a(".l-shortcuts").slideToggle(100)},{offset:65})},500),a(".l-shortcuts a[href^='#']").click(function(e){e.preventDefault(),s.scrollToID(this.hash),history.pushState?history.pushState(null,null,this.hash):location.hash=this.hash});for(var e=a(".l-shortcuts li a[href^='#']"),n=[],t=0;t<e.length;t++){var o=e[t],i=a(o).attr("href");n.push(i)}function r(){for(var e=a(window).scrollTop(),t=(a(window).height(),a(document).height(),0);t<n.length;t++){var o=n[t],i=a(o).offset().top-70,r=a(o).height();i<=e&&e<i+r?a("a[href='"+o+"']").addClass("active"):a("a[href='"+o+"']").removeClass("active")}}a(window).scroll(function(){r()}),r()}},slider_people:function(){a(".people-slider__slides").bxSlider({nextSelector:".btn-arrow--right",prevSelector:".btn-arrow--left",nextText:"",prevText:"",pagerCustom:".people-slider__grid",touchEnabled:!1,mode:"fade"}),a(".people-slider__grid a").on("click",function(){a(".people-slider__grid").fadeOut(0),a(".people-slider .bx-viewport").fadeIn()}),a(".people-slider__ico-tiles").on("click",function(){a(".people-slider .bx-viewport").fadeOut(0),a(".people-slider__grid").fadeIn()}),700<a(window).width()&&(a(".people-slider .bx-viewport").fadeIn(0),setTimeout(function(){a(".people-slider .bx-viewport").fadeOut(0)},200))},image_slider:function(){var e=a(".l-main--inner-page").find(".image-slider");a.each(e,function(e){var t=this.id;a("#"+t+" .image-slider__imgs").bxSlider({nextSelector:"#"+t+" .btn-arrow--right",prevSelector:"#"+t+" .btn-arrow--left",nextText:"",prevText:"",pager:!1,autoStart:!0})})},resources_auto_hash_launch:function(){if(0<window.location.pathname.indexOf("resources/")&&""!==window.location.hash){var e=window.location.hash.split("-");if("#latest"==e[0])a.ajax({url:site_url+"marketo/latest_resource/id/"+e[1],type:"POST",dataType:"json",success:function(e){if(1==e.res){if("video"==e.type)return a.magnificPopup.open({items:{src:e.url},type:"iframe",titleSrc:"Video",gallery:{enabled:!0,navigateByImgClick:!0}}),!1;a.magnificPopup.open({items:{src:site_url+"marketo/download_resource/id/"+e.id},type:"ajax",titleSrc:"Download"})}}});else{var t=e[1];a.ajax({url:site_url+"marketo/share_popup/id/"+t,type:"POST",dataType:"json",success:function(e){if(1==e.res){if("video"==e.type)return a.magnificPopup.open({items:{src:e.url},type:"iframe",titleSrc:"Video",gallery:{enabled:!0,navigateByImgClick:!0}}),!1;a.magnificPopup.open({items:{src:site_url+"marketo/download_resource/id/"+t},type:"ajax",titleSrc:"Download"})}}})}}},resources_from_menu_when_on_resources:function(){a('.l-megamenu .col-35.right a[href*="#"]').on("click",function(){if(0<window.location.pathname.indexOf("resources/")&&""!==window.location.hash)return window.location.hash=a(this).attr("href").split("#")[1],window.location.reload(!0),!1})},sorter:function(){0<a(".sorter").length&&(a(".sorter").clone().insertAfter(".inner-page").addClass("sticky"),a(".inner-page__container").waypoint(function(e){"down"==e?a(".sorter.sticky").slideToggle(200):a(".sorter.sticky").slideToggle(100)},{offset:65}))},counter:function(){a('div[data-counter="1"]').length&&(a('div[data-counter="1"] em, div[data-counter="1"] p').css({opacity:0}),a('div[data-counter="1"]').waypoint(function(e){a('div[data-counter="1"] .counter').hasClass("ready")||(a('div[data-counter="1"] .counter').addClass("ready"),a('div[data-counter="1"] em:first').animate({opacity:1},500),setTimeout(function(){a('div[data-counter="1"] .counter').animate({opacity:1},250);setTimeout(function(){a('div[data-counter="1"] em').animate({opacity:1},250),setTimeout(function(){a('div[data-counter="1"] p').animate({opacity:1},350)},700)},400),function(){var e=a('div[data-counter="1"] .counter'),t=e.text();e.text("0");var o=0,i=setInterval(function(){e.text(o),t<=(o+=1)&&(e.text(t),clearInterval(i))},25)}()},500))},{offset:350}))},init:function(){this.shortcuts(),this.slider_people(),this.image_slider(),this.resources_auto_hash_launch(),this.sorter(),this.counter(),this.resources_from_menu_when_on_resources()}};s.init(),i.init()})});