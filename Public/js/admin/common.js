//数据存取提交
$("#news-submit").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;

    });
    postData['content']=$("#news-content").Editor("getText");
    console.log(postData);
    //将获取到的数据POST给服务器
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            location.href=SCOPE.save_url;
        }else if(result.status==1){
              location.href=SCOPE.jump_url;
        }
    },"JSON");
});
//数据更新提交
$("#news-update").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;

    });
    postData['content']=$("#news-content").Editor("getText");
    //将获取到的数据POST给服务器
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            alert(result.message);
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
});
//删除记录
$(".news-delete").click(function(){
    var id=$(this).attr('attr-id');
    var data={};
    console.log(id);
    data['newsId']=id;
    data['status']=0;
    //将获取到的数据POST给服务器
    var url='index.php?m=admin&c=news&a=delete';
    $.post(url,data,function (result) {
        if(result.status==0){
            alert(result.message);
        }else if(result.status==1){
            location.href='index.php?m=admin&c=news&a=news';
        }
    },"JSON");
});
//更新排序
$("#listorder-update").click(function(){
    var data=$("#news-listorder").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    //将获取到的数据POST给服务器
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            alert(result.message);
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
});
//美食数据提交
$("#food-submit").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    postData['des']=$("#news-content").Editor("getText");
    //将获取到的数据POST给服务器
    var url=SCOPE.save_url;
    $.post(url,postData,function(result) {
        if(result.status==0){
          location.href=SCOPE.save_url;
        }else if(result.status==1){
           // return dialog.success("111",SCOPE.jump_url);
           location.href=SCOPE.jump_url+'&pid='+result.data;
        }
    },"JSON");
});


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
//食材第二步更新