$("#search").click(function(){
    var cid=$("#cid option:selected").val();
    var bookname=$('input[name=bookname]').val();
    var url=SCOPE.save_url;
    location.href=url+'&cid='+cid+'&bookname='+bookname;
})

$("#book").click(function(){
    location.href='index.php?m=admin&c=book&a=add';
})
//book.html结束
$("#book-submit").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    postData['cid']=$("#cid option:selected").val();
    postData['des']=$("#book-des").Editor("getText");;
    console.log(postData);
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            // $('#book-submit').attr("data-content",result.message);
            // $('#book-submit').popover('show');
            location.href='index.php?m=admin&c=book&a=add';
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
$(".delete").click(function(){
    var postData={};
    postData['id']=$(this).attr("attr-id");
    var url="index.php?m=admin&c=book&a=delete";
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('.delete').attr("data-content",result.message);
            $('.delete').popover('show');
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
$("#updatelist").click(function(){
    var data=$("#news-listorder").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    console.log(postData);
    var url="index.php?m=admin&c=book&a=update";
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('.delete').attr("data-content",result.message);
            $('.delete').popover('show');
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
