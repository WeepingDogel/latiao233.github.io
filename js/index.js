function 主页() {
    window.location = "../index.html"
}

function 滚动进度(){
    let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight; // 页面总高度
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; // 浏览器视口高度
    let scrollAvail = pageHeight - windowHeight; // 可滚动的高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条的高度
    var jindu = Math.ceil(scrollTop/scrollAvail*100) //计算滚动位置并取整
    document.getElementById("进度文本").innerHTML = jindu + '%';
    if (jindu < 3){
        document.getElementById("进度").style.display = 'none';
        document.getElementById("回到顶部").style.display = 'none';
    }
    else{
        document.getElementById("进度").style.display = 'block';
        document.getElementById("回到顶部").style.display = 'block';
    }
}

function 点击回顶部(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
}