$("#foodsubmit2").click(function(){
    var postData={};
    postData['des']=$("#foodmake").val();
    postData['thumb']=$("#fileupload_img_src").val();
    postData['pid']=$("input[name=pid]").val();
    console.log(postData);
    //将获取到的数据POST给服务器
    var step=parseInt($("#step").attr("attr-id"))+1;
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            location.href=SCOPE.save_url;
        }else if(result.status==1){
            location.href=SCOPE.save_url+'&pid='+result.data+'&step='+step;
        }
    },"JSON");
});
$("#food-finish").click(function(){
    var postData={};
    postData['des']=$("#foodmake").val();
    postData['thumb']=$("#fileupload_img_src").val();
    postData['pid']=$("input[name=pid]").val();
    console.log(postData);
    //将获取到的数据POST给服务器
    var step=parseInt($("#step").attr("attr-id"))+1;
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            location.href=SCOPE.save_url;
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");

});