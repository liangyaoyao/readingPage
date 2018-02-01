$("#cate").click(function(){
    location.href=SCOPE.save_url;
})
$("#cate_add").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    console.log(postData);
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('#cate_add').attr("data-content",result.message);
            $('#cate_add').popover('show');
        }else if(result.status==1){
            $('#cate_add').attr("data-content",result.message);
            $('#cate_add').popover('show');
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
$('#cate_add').blur(function () {
    $('#cate_add').popover('hide');
})
$(".user-delete").click(function () {
    var id=$(this).attr('attr-id');
    var url='index.php?m=admin&c=cate&a=delete&id='+id;
    $.get(url,function (result) {
        if(result.status==0){
            $(this).attr("data-content",result.message);
            $(this).popover('show');
        }else if(result.status==1){
            location.href='index.php?m=admin&c=cate&a=cate';
        }
    },"JSON");
})