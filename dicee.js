window.onload=function(){
    function displayimg(imgid){
        var imglist=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
        var num=Math.floor(Math.random(imglist)*7);
        document.getElementById(imgid).src=imglist[num];
    }
    displayimg('img1');
    displayimg('img2');
}