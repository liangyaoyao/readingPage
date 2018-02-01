$("#bookcon").click(function(){
    var pid=$("#bookcon").attr('attr-id');
    location.href=SCOPE.save_url+'&pid='+pid;
})

$("#search").click(function(){
    var postData ={};
    var aticletit=$("input[name=aticletit]").val();
    var pid      =$("input[name=pid]").val();
    console.log(postData);
    var url      ="index.php?m=admin&c=bookcontent&a=bookcontent&pid="+pid+"&aticletit="+aticletit;
    location.href=url;
})

$("#book").click(function(){
    location.href='index.php?c=book&a=add';
})
//book.html结束
$("#bookcontent-submit").click(function(){
    postData={};
    postData['aticletit']=$('input[name=articletit]').val();
    postData['aticlecon']=$("#book-des").Editor("getText");
    postData['pid']=$('input[name=pid]').val();
    reg=/^[0-9]+$/m;
    if(!reg.test($('input[name=artid]').val())){
        $('input[name=artid]').val("请输入数字！");
    }
    postData['artid']=$('input[name=artid]').val();
    console.log(postData);
    var url=SCOPE.save_url;
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('#book-submit').attr("data-content",result.message);
            $('#book-submit').popover('show');
        }else if(result.status==1){
            location.href=SCOPE.jump_url+'&id='+result.data;
        }
    },"JSON");
})
$("#edit-submit").click(function(){
    postData={};
    postData['aticletit']=$('input[name=articletit]').val();
    postData['aticlecon']=$("#book-des").Editor("getText");
    postData['id']=$('input[name=id]').val();
    postData['pid']=$('input[name=pid]').val();
    var url=SCOPE.save_url;
    console.log(postData);
    $.post(url,postData,function (result) {
        if(result.status==0){
            $('#edit-submit').attr("data-content",result.message);
            $('#edit-submit').popover('show');
            location.href="index.php?m=admin&c=bookcontent&a=contentedit";
        }else if(result.status==1){
            location.href='index.php?m=admin&c=bookcontent&a=bookcontent&id='+result.data;
        }
    },"JSON");
})
$(".delete").click(function(){
    var id=$(this).attr("attr-id");
    var data={};
    data['id']=id;
    data['pid']=$('input[name=pid]').val();
    console.log(data);
    var url="index.php?m=admin&c=bookcontent&a=delete";
    $.post(url,data,function (result) {
        if(result.status==0){
            $('this').attr("data-content",result.message);
            $('this').popover('show');
        }else if(result.status==1){
            location.href="index.php?m=admin&c=bookcontent&a=bookcontent&id="+result.data;
        }
    },"JSON");
})
$(".delete").blur(function(){
    $(".delete").popover("hide");
})

