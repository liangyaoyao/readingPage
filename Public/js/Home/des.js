$("#addbook").click(function () {
    var id=$("#addbook").attr("attr-id");
    console.log(id);
    var data={};
    data['id']=id;
    var url="index.php?m=home&c=bookshelf&a=addbook";
    $.post(url,data,function (result) {
        if(result.status==0){
            $("#addbook").text(result.message);
        }else if(result.status==1){
            $("#addbook").text(result.message);
        }
    },"JSON")
})
$("#conmment").click(function(){
    var id=$("#conmment").attr('attr-id');
    var data={};
    data['id']=id;
    var url='index.php?m=home&c=conmment&a=check';
    $.post(url,data,function(result){
        if(result.status==0){
            var a=$("#conmment").text(result.message);
            a.css("color","orangered");
        }else if(result.status==1){
            location.href='index.php?m=home&c=conmment&a=conmment&id='+id;
        }
    },"JSON");
})