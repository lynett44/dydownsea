$(function(){setTimeout(function(){$(".bannerBG").css('background-image','url('+$(".bannerBG").data("background")+')');},3000);$.ajaxSetup({headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')}});$(".start_img").click(function(){var _txt=$("#link").val();if(_txt){layer.load();var form=document.getElementById('search_form');form.submit();}});$("body").delegate(".support-url-cls","click",function(){$("#link").val($(this).data("url"));$("#select").val($(this).data("select"));$(".start_img").trigger("click");});$("body").delegate(".video-login","click",function(e){e.preventDefault();_area_view=IS_PC?['630px','360px']:["370px",'200px'];layer.open({title:'Login',type:1,area:_area_view,fixed:false,maxmin:true,content:$(".login-div").html()});return false;});$(document).keyup(function(event){if(event.keyCode==13){if($(".start_img")){$(".start_img").trigger("click");}
if($(".start_query")){$(".start_query").trigger('click');}}});$("#link").on("click",function(){$(this).select();});$(".panel-title").click(function(){$(this).parents(".panel").find(".panel-body").toggle();});$("body").delegate(".btn-record","click",function(e){$.post("/record_url",{url:$(this).data("url"),mp4_url:$(this).attr("href"),title:$(this).attr("title")});});$(".ajax-more-load").click(function(){var url_link=$(this).data("last-url");var that=$(this);if(!url_link){that.hide();return false;}
var select_link=SELECT;var lading=layer.load();$.post("/"+select_link+"-video-download/search",{select:select_link,url:url_link,ajax_more:1},function(res){layer.close(lading);if(res.status==1){$(".wrap-line").append(res.data);var last_url=res.url;if(last_url){that.data("last-url",last_url);}else{that.hide();}}else{layer.msg(res.info);}});});})