var window1 = 10;

function 打开概览() {
    document.getElementById("概览").style.display='block';      //点击概览按钮后概览界面显示
    document.getElementById("body背景").style.backgroundImage="url(image/bj2.jpg)";     //切换body背景为高斯模糊
    var dbottom1 = document.getElementsByClassName("左侧菜单");
    dbottom1[0].style.display='none';
    document.getElementById("顶栏关闭按钮").style.display='block';
    window1 = 1;
}


function 窗口1开(){
    document.getElementById("窗口1").style.display='block';         //单机测试按钮显示窗口1
    document.getElementById("概览").style.display='none';          //概览页面隐藏
    document.getElementById("body背景").style.backgroundImage="url(image/bj.jpg)";      //背景切换回原版
    window1 = 0;
}

function 顶栏关闭按钮js() {
    if(window1==1){
        document.getElementById("概览").style.display='none';
        document.getElementById("body背景").style.backgroundImage="url(image/bj.jpg)";
        document.getElementById("顶栏关闭按钮").style.display='none'; 
        var dbottom1 = document.getElementsByClassName("左侧菜单");
        dbottom1[0].style.display='block';
    }
    else{
        document.getElementById("窗口1").style.display='none';
        document.getElementById("顶栏关闭按钮").style.display='none';
        var dbottom1 = document.getElementsByClassName("左侧菜单");
        dbottom1[0].style.display='block';
    }
}

function 显示右侧下拉菜单(){


}


