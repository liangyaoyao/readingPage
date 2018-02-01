$("#conmment-submit").click(function(){
    var re=/^[0-9]{1}$/mi;
    var number = $("input[name=number]").val();
console.log(re.test(number));
    if(re.test(number)){
    var data = {};
    data['pid'] = $("input[name=id]").val();
    data['number'] = $("input[name=number]").val();
    data['des']=$("#des").val();
    console.log(data);
    var url="index.php?m=home&c=conmment&a=conmment";
    $.post(url,data,function (result) {
        if(result.status==0){
            location.href="index.php?m=home&c=conmment&a=conmment";
        }else if(result.status==1){
            location.href="index.php?m=home&c=des&a=des&id="+result.data;
        }
    },"JSON")
    }else{
        $("#error").text("请输入0到9之间的一个数字");
        $("#error").css("color","orangered");
    }
})