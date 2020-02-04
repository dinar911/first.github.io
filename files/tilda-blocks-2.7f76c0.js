function t142_checkSize(recid){var el=$("#rec"+recid).find(".t142__submit");if(el.length){var btnheight=el.height()+5;var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t142__submit-overflowed");el.html("<span class=\"t142__text\">"+btntext+"</span>")}}}
function t451_showMenu(recid){var el=$('#rec'+recid);$('body').addClass('t451__body_menushowed');el.find('.t451m').addClass('t451m__menu_show');el.find('.t451m__overlay').addClass('t451m__menu_show');el.find('.t451m__overlay, .t451m__close, a[href*=#]').click(function(){if($(this).is(".tooltipstered, .t794__tm-link")){return}
t451_closeMenu()});$(document).keydown(function(e){if(e.keyCode==27){$('body').removeClass('t451__body_menushowed');$('.t451m').removeClass('t451m__menu_show');$('.t451m__overlay').removeClass('t451m__menu_show')}})}
function t451_closeMenu(){$('body').removeClass('t451__body_menushowed');$('.t451m').removeClass('t451m__menu_show');$('.t451m__overlay').removeClass('t451m__menu_show')}
function t451_checkSize(recid){var el=$('#rec'+recid).find('.t451m');var windowheight=$(window).height()-80;var contentheight=el.find(".t451m__top").height()+el.find(".t451m__rightside").height();if(contentheight>windowheight){el.addClass('t451m__overflowed');el.find(".t451m__container").css('height','auto')}}
function t451_initMenu(recid){var el=$('#rec'+recid);var obj=el.find('.t451__burger');obj.click(function(e){t451_closeMenu();t451_showMenu(recid);t451_checkSize(recid);e.preventDefault()});$('.t451').bind('clickedAnchorInTooltipMenu',function(){t451_closeMenu()})}
function t451_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t451__list_item a[href='"+url+"']").addClass("t-active");$(".t451__list_item a[href='"+url+"/']").addClass("t-active");$(".t451__list_item a[href='"+pathname+"']").addClass("t-active");$(".t451__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t451__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t451__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t451_changeBgOpacityMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t451__container__bg").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacity=el.attr("data-bgopacity");var bgopacity_afterscroll=el.attr("data-bgopacity2");var menu_shadow=el.attr("data-menu-shadow");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacity_afterscroll!="0"&&bgopacity_afterscroll!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}else{el.css("background-color",bgcolor);if(bgopacity!="0"&&bgopacity!="0.0"){el.css('box-shadow',menu_shadow)}else{el.css('box-shadow','none')}}})}
function t451_appearMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t451__panel").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");console.log(appearoffset)
if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t451__beforeready')){el.removeClass('t451__beforeready')}}else{el.addClass('t451__beforeready')}}})}
function t478_setHeight(recid){var el=$('#rec'+recid);var sizer=el.find('.t478__sizer');var height=sizer.height();var width=sizer.width();var ratio=width/height;var imgwrapper=el.find(".t478__blockimg, .t478__textwrapper");var imgwidth=imgwrapper.width();if(height!=$(window).height()){imgwrapper.css({'height':((width/ratio)+'px')})}}
function t480_setHeight(recid){var el=$('#rec'+recid);var sizer=el.find('.t480__sizer');var height=sizer.height();var width=sizer.width();var ratio=width/height;var imgwrapper=el.find(".t480__blockimg, .t480__textwrapper");var imgwidth=imgwrapper.width();if(height!=$(window).height()){imgwrapper.css({'height':((imgwidth/ratio)+'px')})}}
function t498_unifyHeights(recid){$('#rec'+recid+' .t498 .t-container').each(function(){var t498__highestBox=0;$('.t498__col',this).each(function(){var t498__curcol=$(this);var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');if(t498__curcol.height()<t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());if(t498__curcol.height()>t498__highestBox)t498__highestBox=t498__curcol.height()});if($(window).width()>=960){$('.t498__col',this).css('height',t498__highestBox)}else{$('.t498__col',this).css('height',"auto")}})};function t517_unifyHeights(recid){if($(window).width()>=960){$('#rec'+recid+' .t517 .t-container .t517__row').each(function(){var t517__highestBox=0;var t517__currow=$(this);$('.t517__col',this).each(function(){var t517__curcol=$(this);var t517__curcolinfo=t517__curcol.find('.t517__sectioninfowrapper');var t517__curcolpers=t517__curcol.find('.t517__personwrapper');var t517__curcolinnerheight=t517__curcolinfo.outerHeight()+t517__curcolpers.outerHeight();if(t517__curcolinnerheight>t517__highestBox){t517__highestBox=t517__curcolinnerheight}});$('.t517__col',this).css('height',t517__highestBox)})}};function t537_setHeight(recid){var t537__el=$("#rec"+recid),t537__image=t537__el.find(".t537__bgimg:first"),t537__width=t537__image.attr("data-image-width"),t537__height=t537__image.attr("data-image-height"),t537__ratio=t537__height/t537__width,t537__padding=t537__ratio*100;$("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%")}