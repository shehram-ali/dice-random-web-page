window.onload=function(){
    function displayimg(imgid,imgid2){
        var imglist=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
        var num=Math.floor(Math.random(imglist)*7);
        var num2=Math.floor(Math.random(imglist)*7);

        document.getElementById(imgid).src=imglist[num];
        document.getElementById(imgid2).src=imglist[num2];
        if(num<num2){
            document.querySelector("h1").innerHTML="Player 2 Win";
        }
        else if (num>num2){
            document.querySelector("h1").innerHTML="Player 1 Win";

        }
        else{
            document.querySelector("h1").innerHTML="Match Tie";

        }


    } 

    displayimg('img1','img2');
    
}
