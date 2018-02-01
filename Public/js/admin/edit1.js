//食材第一步更新
$("#food-update1").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    postData['des']=$("#news-content").Editor("getText");
    console.log(postData);
    //将获取到的数据POST给服务器
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            location.href=SCOPE.save_url;
            // return dialog.error(result.message);
        }else if(result.status==1){
            location.href=SCOPE.jump_url+"&id="+result.data;
        }
    },"JSON");
});
$("#next").click(function () {
     var id=$("input[name=id]").val();
    location.href="index.php?m=admin&c=food&a=edit2&id="+id;
})