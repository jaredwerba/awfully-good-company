!function(a){a.fn.smkValidate=function(b){var c=a.extend({lang:"en"},a.fn.smkValidate.Languaje,b),d={en:{textEmpty:"Required field",textEmail:"Enter a valid email",textAlphanumeric:"Only numbers and/or letters allowed",textNumber:"Only numbers are allowed",textNumberRange:"The numerical range must be greater than <b> {@} </b> and less than <b> {@} </b>",textDecimal:"Only decimal numbers are allowed",textCurrency:"Please enter a valid monetary amount",textSelect:"It is necessary that you select an option",textCheckbox:"It is necessary that you select an option",textLength:"The number of characters is equal to <b> {@} </b>",textRange:"The number of characters must be greater than <b> {@} </b> and less than <b> {@} </b>",textSPassDefault:"Minimum 4 characters",textSPassWeak:"Minimum 6 characters",textSPassMedium:"Minimum 6 characters and a number",textSPassStrong:"Minimum 6 characters a number and a capital"}};"en"!=c.lang&&(d=a.fn.smkValidate.Languaje);var e="",f="",g=!1;return a(":input",this).each(function(b,h){if("button"!=a(h).attr("type")){e=a(h),f=a(h).parents(".form-group");var i=a(h).attr("name"),j=a(h).val(),k=a(h).attr("type"),l=a(h).attr("smk-type"),m=h.tagName.toLowerCase(),n=a(h).attr("required"),o=a(h).attr("smk-strongPass"),p=a(h).attr("minlength"),q=a(h).attr("maxlength"),r=a(h).attr("smk-min"),s=a(h).attr("smk-max");if(a.smkRemoveError(e),"required"===n&&("text"===k||"textarea"===m||"password"===k||"email"===k)){if(""===j)return g=a.smkAddError(e,d[c.lang].textEmpty),!1;g=!0}if("required"===n&&"email"===k){var t=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;if(!t.test(j))return g=a.smkAddError(e,d[c.lang].textEmail),!1;g=!0}if("required"===n&&"password"===k){var u="",v="";switch(o){case"weak":u=/^(?=.*[a-z0-9])\w{6,}$/,v=d[c.lang].textSPassWeak;break;case"medium":u=/^(?=.*\d)(?=.*[a-z])\w{6,}$/,v=d[c.lang].textSPassMedium;break;case"strong":u=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/,v=d[c.lang].textSPassStrong;break;default:u=/^(?=.*[a-z0-9])\w{4,}$/,v=d[c.lang].textSPassDefault}if(!u.test(j))return g=a.smkAddError(e,v),!1;g=!0}if("required"===n&&"select"===m){if(""===j)return g=a.smkAddError(e,d[c.lang].textSelect),!1;g=!0}if("required"===n&&("radio"===k||"checkbox"===k)){var w=a("input[name="+i+"]:checked").val();if(void 0===w)return g=a.smkAddError(e,d[c.lang].textCheckbox),!1;g=!0}if("alphanumeric"===l){var x=/^[a-z0-9]+$/i;if(!x.test(j))return g=a.smkAddError(e,d[c.lang].textAlphanumeric),!1;g=!0}if("number"===l){var y=/^\d+$/;if(!y.test(j))return g=a.smkAddError(e,d[c.lang].textNumber),!1;g=!0}if("decimal"===l){var z=/^\d+(?:\.\d{1,4})?$/;if(!z.test(j))return g=a.smkAddError(e,d[c.lang].textDecimal),!1;g=!0}if("currency"===l){var A=/^(?:\d+|\d{1,3}(?:,\d{3})*)(?:\.\d{1,4}){0,1}$/;if(!A.test(j))return g=a.smkAddError(e,d[c.lang].textCurrency),!1;g=!0}if("undefined"!=typeof p||"undefined"!=typeof q)if(p===q){if(j.length!=p&&j.length!=q){var B=a.smokeCustomizeText(d[c.lang].textLength,q);return g=a.smkAddError(e,B),!1}g=!0}else if(p!==q){if(j.length<p||j.length>q){var C=[];C[0]=parseInt(p-1),C[1]=parseInt(q)+1;var D=a.smokeCustomizeText(d[c.lang].textRange,C);return g=a.smkAddError(e,D),!1}g=!0}if("undefined"!=typeof r||"undefined"!=typeof s){if(r>j||j>s){var E=[];E[0]=parseInt(r-1),E[1]=parseInt(s)+1;var F=a.smokeCustomizeText(d[c.lang].textNumberRange,E);return g=a.smkAddError(e,F),!1}g=!0}}}),a(e).keyup(function(){""!==e.val()&&a.smkRemoveError(e)}),a(e).change(function(){""!==e.val()&&a.smkRemoveError(e)}),g},a.smkEqualPass=function(b,c,d){var e={en:{textEqualPass:"Passwords do not match"}};return void 0===d&&(d="en"),"en"!=d&&(e=a.smkEqualPass.Languaje),b=void 0!==a(b).val()?a(b).val():b,b!==a(c).val()?a.smkAddError(a(c),e[d].textEqualPass):!0},a.fn.smkClear=function(b){var c=a.extend({noClear:""},b),d=c.noClear.replace(/\s/g,""),e=d.split(",");return a(":input",this).each(function(){var b=this.type,c=this.tagName.toLowerCase();if("input"==c&&(c=b),a.inArray(b,e)<0&&a.inArray(c,e)<0){switch(b){case"text":case"password":case"email":case"number":case"hidden":this.value="";break;case"checkbox":case"radio":this.checked=!1}switch(c){case"textarea":this.value="";break;case"select":this.selectedIndex=-1,a(this).hasClass("select2")&&a(this).select2("val","")}}})},a.smkAddError=function(b,c){var d=a(b).parents(".form-group"),e=a(b).attr("type"),f=a(b).prop("tagName").toLowerCase(),g=a(b).attr("smk-text");(""===g||void 0===g)&&(g=c),void 0===e&&(e=f);var h='<span class="glyphicon glyphicon-remove-sign form-control-feedback smk-error-icon"></span>',i='<span class="smk-error-text">'+g+"</span>";return"select"==e?(d.addClass("has-feedback has-error smk-"+e),d.append(h+i)):"checkbox"==e||"radio"==e?(d.addClass("has-feedback has-error smk-"+e),d.append(i)):(d.addClass("has-feedback has-error"),d.append(h+i)),b.focus(),!1},a.smkRemoveError=function(b){var c=a(b).parents(".form-group");return c.find(".smk-error-text, .smk-error-icon").remove(),c.removeClass("has-error has-feedback"),!1},a.smokeCustomizeText=function(b,c){var d="";if("string"==typeof c)d=b.replace("{@}",c);else{var e=b.split("{@}");a.each(c,function(a,b){d+=e[a]+b})}return d};var b=0;a.smkAlert=function(c){function d(){g=setTimeout(function(){f.animate({opacity:"0",marginLeft:"100px",marginRight:"-100px"},300,function(){f.remove()})},1e3*e.time)}var e=a.extend({text:"Hola Mundo",type:"warning",icon:"glyphicon-exclamation-sign",time:5,permanent:!1},c);switch(b++,e.type){case"warning":e.type="alert-warning",e.icon="glyphicon-exclamation-sign";break;case"success":e.type="alert-success",e.icon="glyphicon-ok-sign";break;case"danger":e.type="alert-danger",e.icon="glyphicon-remove-sign";break;case"info":e.type="alert-info",e.icon="glyphicon-info-sign"}1==b&&a("body").append('<div class="smk-alert-content"></div>');var f=a('<div class="alert alert-dismissable '+e.type+' smk-alert"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span class="glyphicon '+e.icon+'"></span><p>'+e.text+"</p></div>");if(a(".smk-alert-content").prepend(f),f.animate({opacity:"1",marginTop:"20px"},300),e.permanent===!1){var g=0;a(f).mouseenter(function(){clearTimeout(g)}).mouseleave(function(){d()}),d()}},a.smkConfirm=function(b,c){function d(){a(".smk-confirm-back").fadeOut(200,function(){a(".smk-confirm-back").remove()}),a(".smk-confirm").animate({top:"-500px",opacity:"0"},400,function(){a(".smk-confirm").remove()})}var e=a.extend({text:"¿Estas seguro?",accept:"Aceptar",cancel:"Cancelar"},b);a("body").append('<div class="smk-confirm-back"><div class="panel panel-default smk-confirm"><div class="panel-body"><br>'+e.text+'<br><br></div><div class="panel-footer text-right"><a class="btn btn-default btn-sm smk-cancel" href="#" >'+e.cancel+'</a> <a class="btn btn-primary btn-sm smk-accept" href="#">'+e.accept+"</a></div></div></div>"),a(".smk-confirm").animate({top:"-5px",opacity:"1"},400),a(".smk-cancel").click(function(a){a.preventDefault(),d(),c(!1)}),a(".smk-accept").click(function(a){a.preventDefault(),d(),c(!0)})},a.smkFloat=function(a){return"string"==typeof a&&(a=a.replace(",","")),parseFloat(a)},a.smkCurrency=function(a,b){var c=a.replace(",","");if(""===c||isNaN(c))return 0;c=Math.round(parseFloat(c)*Math.pow(10,2))/Math.pow(10,2),b=b||"",c+="";var d=c.split("."),e=d[0],f=d.length>1?"."+d[1]:".00";f+="00",f=f.substr(0,3);for(var g=/(\d+)(\d{3})/;g.test(e);)e=e.replace(g,"$1,$2");return b+e+f},a.smkGetURL=function(b){var c=a(location).attr("protocol"),d=a(location).attr("hostname"),e=a(location).attr("pathname");e=e.split("/");var f=e.pop();""!==f&&(file=f.split("."),file.length<2&&e.push(f)),e=e.slice(0,b+1),e=e.join("/");var g=c+"//"+d+e;return g},a.smkDatePicker=function(a){if(""!==a){var b=(a.getDate()<10?"0":"")+a.getDate(),c=(a.getMonth()+1<10?"0":"")+(a.getMonth()+1),d=a.getFullYear();result=d+"-"+c+"-"+b}else result="";return result},a.smkDate=function(b){var c=a.smkDatePicker(new Date),d=a.extend({date:c,format:"yyyy-mm-dd",lang:"en"},a.smkDate.Languaje,b),e={en:{shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},f=/\d+|[a-zA-z]/g,g=(d.date.replace(f,"\x00").split("\x00"),d.date.match(f));"es"==d.lang?(e=a.smkDate.Languaje,d.date=4==g[0].length?new Date(g[0],g[1]-1,g[2]):new Date(g[2],g[1]-1,g[0])):d.date=4==g[0].length?new Date(g[0],g[2]-1,g[1]):new Date(g[2],g[0]-1,g[1]);var h="";if("Invalid Date"!=d.date){var i={d:d.date.getDate(),dd:(d.date.getDate()<10?"0":"")+d.date.getDate(),m:d.date.getMonth()+1,mm:(d.date.getMonth()+1<10?"0":"")+(d.date.getMonth()+1),M:e[d.lang].shortMonthNames[d.date.getMonth()],MM:e[d.lang].monthNames[d.date.getMonth()],yyyy:d.date.getFullYear(),yy:d.date.getFullYear().toString().substring(2),hh:d.date.getHours(),mi:d.date.getMinutes(),ss:d.date.getSeconds()},j=/dd?|DD?|mm?|MM?|yy(?:yy)?/g,k=d.format.replace(j,"\x00").split("\x00"),l=d.format.match(j);a.each(l,function(a,b){h+=k[a]+i[b]})}else h="",console.log("Invalid Date");return h},a.smkDateDiff=function(b){var c=a.extend({fromDate:new Date,toDate:new Date,interval:"days"},b),d=1e3,e=60*d,f=60*e,g=24*f,h=7*g,i=new Date(c.fromDate),j=new Date(c.toDate),k=j-i;if(isNaN(k))return 0/0;switch(c.interval){case"years":return j.getFullYear()-i.getFullYear();case"months":return 12*j.getFullYear()+j.getMonth()-(12*i.getFullYear()+i.getMonth());case"weeks":return Math.floor(k/h);case"days":return Math.floor(k/g);case"hours":return Math.floor(k/f);case"minutes":return Math.floor(k/e);case"seconds":return Math.floor(k/d);default:return void 0}},a.smkScrolling=function(b){var c=a.extend({speed:1e3},b);a("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html,body").animate({scrollTop:b.offset().top},c.speed),!1}})},a.smkProgressBar=function(b){var c=a.extend({element:"body",status:"start"},b),d='<div class="smk-progressbar">';d+='<div class="progress">',d+='<div class="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">',d+='<span class="sr-only">0% Complete</span>',d+="</div></div></div>",a(c.element).prepend(a(d).fadeIn("fast")),"body"==c.element?a(".smk-progressbar").css("position","fixed"):(a(c.element).css("position","relative"),a(".smk-progressbar").css("position","absolute")),"start"==c.status?a(c.element+" .smk-progressbar .progress .progress-bar").width(50+30*Math.random()+"%"):"end"==c.status&&a(c.element+" .smk-progressbar .progress .progress-bar").width("110%").delay(200,function(){a(c.element+" .smk-progressbar").fadeOut("slow",function(){a(this).remove()})})},a.fn.smkFullscreen=function(){function b(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}var c='<a class="btn smk-fullscreen" href="#" data-toggle="tooltip" data-placement="bottom" title="Fullscreen"><span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span></a>';a(this).append(c),a(".smk-fullscreen").click(function(a){a.preventDefault(),b()});var d=function(){a(".smk-fullscreen").children(".glyphicon").toggleClass("glyphicon-fullscreen").toggleClass("glyphicon-resize-small")};document.addEventListener("fullscreenchange",d,!1),document.addEventListener("msfullscreenchange",d,!1),document.addEventListener("mozfullscreenchange",d,!1),document.addEventListener("webkitfullscreenchange",d,!1)},a.fn.smkPanel=function(b){var c=a.extend({hide:""},b),d=c.hide.replace(/\s/g,""),e=d.split(","),f=a(this).children(".panel-heading").children(".panel-title"),g="";g=f.length>0?"smk-btn-group-panel-title":"smk-btn-group-panel";var h='<div class="btn-group btn-group-sm pull-right '+g+'" role="group">';-1==a.inArray("min",e)&&(h+='<a class="btn smk-min" href="#"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></a>'),-1==a.inArray("remove",e)&&(h+='<a class="btn smk-remove" href="#"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>'),-1==a.inArray("full",e)&&(h+='<a class="btn smk-full" href="#"><span class="glyphicon glyphicon-resize-full" aria-hidden="true"></span></a>'),h+="</div>",a(this).children(".panel-heading").append(h),a(".smk-min").click(function(b){b.preventDefault();var c=a(this).parents(".panel-heading").siblings(".panel-body"),d=a(this).parents(".panel-heading").siblings(".panel-footer"),e=a(this).children(".glyphicon");a(d).slideToggle("fast"),a(c).slideToggle("fast",function(){e.toggleClass("glyphicon-minus").toggleClass("glyphicon-plus")})}),a(".smk-remove").click(function(b){b.preventDefault();var c=a(this).parents(".panel");c.fadeOut(400,function(){})}),a(".smk-full").click(function(b){b.preventDefault();var c=a(this).parents(".panel"),d=a(this).parents(".panel-heading").siblings(".panel-body"),e=a(this).children(".glyphicon"),f=a(this).siblings(".btn").children(".glyphicon-plus");c.hasClass("panel-full")?(c.removeClass("panel-full"),a(this).siblings(".btn").show(),1==f.length&&d.hide(),a("body").css({overflow:"auto"})):(c.addClass("panel-full"),a(this).siblings(".btn").hide(),1==f.length&&d.show(),a("body").css({overflow:"hidden"})),e.toggleClass("glyphicon-resize-full").toggleClass("glyphicon-resize-small")})}}(jQuery);