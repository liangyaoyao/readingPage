$("#sera").click(function () {
    var bookname=$("input[name=search]").val();
    console.log(bookname);
    location.href="index.php?m=home&c=search&a=search&bookname="+bookname;
})
var tr=1;
$(".more").click(function(){
    if(tr==1) {
        $(this).next().removeClass("oflow");
        tr=0;
    }
    else{
        $(this).next().addClass("oflow");
        tr=1;
    }
})