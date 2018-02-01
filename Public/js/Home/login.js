var login = {
    check: function () {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();

        if (!username) {
            dialog.error('用户名不能为空');
        }
        if (!password) {
            dialog.error('密码不能为空');
        }
        var url = "/?m=home&c=news&a=check";
        var data = {'username': username, 'password': password};
        $.post(url, data, function (result) {
            if (result.status === 0) {
                return dialog.error(result.message);
            }
            if (result.status === 1) {
                location.href = '/index.php?m=home&c=homepage&a=home';
            }
        }, "JSON")
    }

};
var signin={
    check: function(){
        var username = $('input[name="signin-username"]').val();
        var password = $('input[name="signin-password"]').val();
        var passwordr = $('input[name="signinpassword"]').val();
        var point=/^用户名已存在$/g;
        var point1=$(".points1").text();
        console.log(point1);
        var reg=/^[a-zA-Z0-9]{5,8}$/m;
        if (!username) {
            dialog.error('用户名不能为空');
            return;
        };
        if (!password) {
            dialog.error('密码不能为空');
            return;
        };
        if(!reg.test(password)){
            dialog.error('密码格式不正确');
            return;
        };
        if(password!=passwordr){
            dialog.error('两次输入的密码不一样');
            return;
        };
        if(point.test(point1)){
            dialog.error('用户名已存在');
            return;
        };
        var url = "/?m=home&c=news&a=signin";
        var data = {'username': username, 'password': password};
        $.post(url, data, function (result) {
            if (result.status === 0) {
                return dialog.error(result.message);
            }
            if (result.status === 1) {
                 dialog.error(result.message);
                 location.href = '/index.php?m=home&c=homepage&a=home';
            }
        }, "JSON")
    }
};

$('input[name="signin-username"]').blur(function(){
    var username = $('input[name="signin-username"]').val();
    var data ={'username':username};
    var url = "/?m=home&c=news&a=news";
    if(!username){
        $(".points1").html("请输入用户名");
        return;
    };
    $.post(url,data,function (result) {
        if(result.status===1){
             $(".points1").html("用户名已存在");
        }
        if(result.status===0){
             $(".points1").html("用户名可使用");
        }
    },"json");
});

$('input[name="signin-password"]').blur(function(){
    var password = $('input[name="signin-password"]').val();
    var count=0;
    var reg=/^[a-zA-Z0-9]{5,8}[~!@#$%^&*()_+]?$/g;
    var reg1=/[a-z]/g;
    var reg2=/[0-9]/g;
    var reg3=/[A-Z]/g;
    var reg4=/[~!@#$%^&*()_+]/g;
        if (reg1.test(password)) {
            count=count+1;
        };
        if (reg2.test(password)) {
            count=count+1;
        };
        if (reg3.test(password)) {
            count=count+1;
        };
        if (reg4.test(password)) {
            count=count+1;
        };
    if(!reg.test(password)){
        $(".points2").html("请重新输入5到8位密码");
        return;
    };
    switch (count){
        case 1: $(".points2").html("密码强度：弱"); break;
        case 2: $(".points2").html("密码强度：中"); break;
        case 3: $(".points2").html("密码强度：强"); break;
        case 4: $(".points2").html("密码强度：强"); break;
        default:$(".point2").html("qing");
    };
});

$('input[name="signinpassword"]').blur(function(){
    var password = $('input[name="signin-password"]').val();
    var passwordr = $('input[name="signinpassword"]').val();
    if(password==passwordr){
        $(".points3").html("密码正确");
    }else{
        $(".points3").html("密码不一致");
    }
})

$(".signin").click(function(){
    $(".all").css("transform","translateX(-450px)");
});
$(".backlogin").click(function(){
    $(".all").css("transform","translateX(0%)");
});
