$(".food-delete").click(function(){
     var id=$(this).attr("attr-id");
    var data={};
        data['id']=id;
    var url="index.php?m=admin&c=food&a=delete";
    $.post(url,data,function (result) {
        if(result.status==0){
            location.href="index.php?m=admin&c=food&a=food";
        }else if(result.status==1){
            location.href="index.php?m=admin&c=food&a=food";
        }
    },"JSON");
})