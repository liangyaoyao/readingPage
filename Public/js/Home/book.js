$(document).ready(function () {
    var a=$("input");
    for(j=0;j<a.length;j++){
        var data={};
        data['cid']=$(a[j]).val();
        var url="index.php?m=home&c=book&a=getbookbycid";
        $.post(url,data,function(result) {
            if(result.status==0){

            }else if(result.status==1){
                var arr=result.data;
                for(i=0;i<arr.length;i++){
                    var img=$("<img>").addClass("img-responsive padding5").attr("src",arr[i]['img']);
                    var imgcon=$("<div></div>").addClass("col-xs-3 col-md-2 padding5");
                    var h5=$("<h5></h5>").text(arr[i]['bookname']);
                    var poflow=$("<p></p>").addClass("oflow").text(arr[i]['des']);
                    var p=$("<p></p>").text(arr[i]['writer']);
                    var colxs9=$("<div></div>").addClass("col-xs-9");
                    var a=$("<a></a>").attr("href","index.php?m=home&c=des&a=des&id="+arr[i]['id']);
                        a=a.addClass("aclass");
                    var row=$("<div></div>").addClass("row");
                    var div=$("<div></div>").addClass("col-xs-12 col-md-6");
                    var imgcontainer=imgcon.append(img);
                    var colxs9con=colxs9.append(h5,poflow,p);
                    var rowcon=row.append(imgcontainer,colxs9con);
                    var all=div.append(rowcon);
                        all=all.append(a)
                    $("#"+arr[i]['cid']).append(all);
                }

            }
        },"JSON")
    }

});
$("input").focus(function(){
    location.href="index.php?m=home&c=search&a=search";
})