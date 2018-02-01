$("#login").click(function (){
    $("#forminput>label").remove();
    var user=$("input[name=username]").val();
    var password=$("input[name=password]").val();
    var data={};
    data['user']=user;
    data['password']=password;
    var url="index.php?m=home&c=login&a=check";
    $.post(url,data,function (result) {
         if(result.status==0){
             var error=$("<label></label>").text(result.message);
             error.addClass("colo");
             $(".form-group:nth-child(2)").after(error);
         }else if(result.status==1){
             location.href="index.php?m=home&c=login&a=LoginSuccess";
         }
    },"JSON")
})