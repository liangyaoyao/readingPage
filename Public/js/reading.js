(function () {
    var Util=(function () {
           var prefix='html5_reader_';
           var StorageGetter=function (key) {
                 return localStorage.getItem(prefix + key);
           }
           var StorageSetter=function(key,value){
                 return localStorage.setItem(prefix + key,value);
           }
           return {
               StorageGetter:StorageGetter,
               StorageSetter:StorageSetter,
           }
    })();
        //var next=ReadModel();
        var time=null;
        var iconfont=$(".icon-font");
        var topnav=$("#top_nav");
        var bottomnav=$("#bottom_nav");
        var navpanelbk=$(".nav-panel-bk");
        var navpanel=$(".nav-panel");
        var daytab=$(".day-tab");
        var nighttab=$(".night-tab");
        var body=$("body");
        var fiction=$(".m-read-content div");
        var fiction1=$(".m-read-content p")
       function main(){
           // 入口函数
           EvenHanlder();

       }
       function EvenHanlder(){
           //todo 实现阅读器的交互
           //返回书架
           $(".backlist").click(function(){
               location.href='/?m=home&c=homepage&a=home';
           })
           //点击中间部分时候上下边栏显示
           $("#action_mid").click(function(){
                   $(".listcontainer").animate({left:'-150%'},1000);

                   iconfont.css("color","#fff");
                   if(topnav.css('display')=="none"){
                       topnav.fadeIn("fast");
                       bottomnav.fadeIn("fast");
                   }else{
                       topnav.fadeOut("fast");
                       bottomnav.fadeOut("fast");
                       navpanelbk.fadeOut("fast");
                       navpanel.fadeOut("fast");
                   };

           })
           //当滚动滚动条时上下边栏隐藏
           $(window).scroll(function () {
               topnav.fadeOut();
               bottomnav.fadeOut();
               navpanelbk.fadeOut();
               navpanel.fadeOut();
               iconfont.css("color","#fff");
           })
           //白天黑夜模式转换
           $("#dn-tab").click(function () {
               // navpanelbk.fadeIn();
               // navpanel.fadeIn();
               iconfont.css("color","#fff");
                if(daytab.css("display")=='block'){
                    daytab.fadeOut();
                    nighttab.fadeIn();
                    body.css({"background":"#000"});
                }else{
                    daytab.fadeIn();
                    nighttab.fadeOut();
                    body.css("background","#e9dfc7");
                }
           })
           //点击设置时的交互，设置框弹出，Aa字体颜色改变
           $(".font-tab").click(function () {
                  if(iconfont.css("color")=="rgb(255, 255, 255)"){
                      iconfont.css("color","#ff6600");

                  }else{
                      iconfont.css("color","#fff");
                  }
                  if(navpanel.css("display")=="none"){
                      navpanelbk.fadeIn();
                      navpanel.fadeIn();
                  }else{
                      navpanelbk.fadeOut();
                      navpanel.fadeOut();
                  }
           })
           //改变背景颜色；
           $(".bk-container-current1").click(function () {
                  $("body").css("background","rgb(299,187,129)");
                  localStorage.bkcolor='rgb(299,187,129)';
           })
           $(".bk-container-current2").click(function () {
               $("body").css("background","rgb(178,190,126)");
               localStorage.bkcolor='rgb(178,190,126)';
           })
           $(".bk-container-current3").click(function () {
               $("body").css("background","rgb(217,104,49)");
               localStorage.bkcolor='rgb(217,104,49)';
           })
           $(".bk-container-current4").click(function () {
               $("body").css("background","rgb(201,186,153)");
               localStorage.bkcolor='rgb(201,186,153)';
           })
           $(".bk-container-current5").click(function () {
               $("body").css("background","rgb(227,160,93)");
               localStorage.bkcolor='rgb(227,160,93)';
           })
           //改变字体大小
           var sizefont=14;

           $("#large_button").click(function () {
               // sizefont++;
               if(localStorage.sizefont){
                   localStorage.sizefont=Number(localStorage.sizefont)+1;
               }else {
                   localStorage.sizefont=14;
               }
               console.log(localStorage.sizefont+"px");
               if(localStorage.sizefont<24) {
                   fiction.css("font-size",localStorage.sizefont+'px');
                   fiction1.css("font-size",localStorage.sizefont+'px');
                   $(" .m-read-content").css("font-size",localStorage.sizefont+'px');
                }else{
                   localStorage.sizefont=24;
               }
               $(".sizefont").html(localStorage.sizefont);
           })
           $("#small_button").click(function () {
               // sizefont--;
               if(localStorage.sizefont){
                   localStorage.sizefont=Number(localStorage.sizefont)-1;
               }else {
                   localStorage.sizefont=14;
               }
               console.log(localStorage.sizefont+"px");
               if(localStorage.sizefont>10) {
                   fiction.css("font-size",localStorage.sizefont+'px');
                   fiction1.css("font-size",localStorage.sizefont+'px');
                   $(" .m-read-content").css("font-size",localStorage.sizefont+'px');
               }else{
                   localStorage.sizefont=10;
               }
               $(".sizefont").html(localStorage.sizefont);
           })
           $(".catalog-tab").click(function(){
               $(".listcontainer").animate({left:'0px'},500);
               navpanelbk.hide();
               navpanel.hide();
               iconfont.css("color","#fff");
               topnav.hide();
               bottomnav.hide();
           });

       }

       main();
})();

