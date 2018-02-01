$("#user").click(function(){
    location.href=SCOPE.save_url;
})
$("#user_add").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('#user_add').attr("data-content",result.message);
            $('#user_add').popover('show');
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
$("#user_add").blur(function () {
    $('#user_add').popover('hide');
})
$(".user-delete").click(function () {
    var id=$(this).attr('attr-id');
    var url='index.php?m=admin&c=user&a=delete&id='+id;
    $.get(url,function (result) {
        if(result.status==0){
            $(this).attr("data-content",result.message);
            $(this).popover('show');
        }else if(result.status==1){
            location.href='index.php?m=admin&c=user&a=user';
        }
    },"JSON");
})
$("#user_update").click(function () {
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('#user_update').attr("data-content",result.message);
            $('#user_update').popover('show');
        }else if(result.status==1){
            location.href=SCOPE.jump_url;
        }
    },"JSON");
})
$('#user_update').blur(function () {
    $('#user_update').popover('hide');
})