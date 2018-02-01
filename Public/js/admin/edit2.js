$("#food-update1").click(function(){
    var data=$("#aiwo-form").serializeArray();
    postData={};
    $(data).each(function(i){
        postData[this.name]=this.value;
    });
    postData['pid']=$("input[name=pid]").val();
    var num=$("#aiwo-form .form-group").length;
    //将获取到的数据POST给服务器
    console.log(postData);
    var url=SCOPE.save_url+"&num="+num;
    $.post(url,postData,function(result) {
        if(result.status==0){
            // location.href=SCOPE.save_url;
        }else if(result.status==1){
            var label=$("<div></div>").text("更新成功！");
            label.addClass('text-danger');
            $("#next").after(label);
        }
    },"JSON");
});
$("#create").click(function(){
    var num=$("#aiwo-form .form-group").length;
    var inputnum=$("input[name=input-num]").val();
    var all=parseInt(inputnum)+parseInt(num);
    for(i=num;i<all;i++){
        var label1=$("<label></label>").text("食材：");
        label1.addClass("col-sm-2 control-label");
        var input1=$("<input>").addClass("form-control");
        input1.attr({"type":"text","placeholder":"请输入材料","name":"material"+i});
        var div1=$("<div></div>").addClass("col-sm-2");
        div1.append(input1);
        var label2=$("<label></label>").text("量度：");
        label2.addClass("col-sm-2 control-label");
        var input2=$("<input>").addClass("form-control");
        input2.attr({"type":"text","placeholder":"请输入量度","name":"number"+i});
        var div2=$("<div></div>").addClass("col-sm-2");
        div2.append(input2);
        var formgroup=$("<div></div>").addClass("form-group");
        formgroup.append(label1);
        formgroup.append(div1);
        formgroup.append(label2);
        formgroup.append(div2);
        $("#aiwo-form").append(formgroup);
    }
})
$("#next").click(function () {
     var pid=$("input[name=pid]").val();
    location.href="index.php?m=admin&c=food&a=edit3&pid="+pid;
})