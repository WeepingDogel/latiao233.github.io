function 点击回主页(){
    window.location="index.html"
}

window.onscroll = function  cs(){
    var 进度 = document.documentElement.scrollTop || document.body.scrollTop;
    while(进度>200){
        var qqq = document.getElementById("xxx")
        document.getElementById("xxx").innerHTML="qqq";
    }
}