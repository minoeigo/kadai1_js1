document.body.innerText="丁半博打\n";
//document.body.innerText="0:丁　1:半\n"

var te =["丁", "半"]

document.onkeydown=function(ev)
{
let a=ev.key;
if( !te[a]){
//if(ev.key == '0'){
//    a=0;
//}else if(ev.key == '1'){
//    a=1;
//}else{
    return;
}
document.body.innerText += "予想【"+te[a]+"】\n";

var r = Math.floor(Math.random()*6)+1;

document.body.innerText += "結果【"+r+"】\n";

if(r%2==a){
    document.body.innerText += "当たり\n";
}else{
    document.body.innerText += "はずれ\n";
}
}

//if(a==0){ //丁を予想した場合
//if(r==2 || r==4 || r==6){
//    document.body.innerText += "当たり\n";
//}else{
//    document.body.innerText += "はずれ\n";
//}
//}

//if(a==1){ //半を予想した場合
//    　if(r==1 || r==3 || r==5){
//        document.body.innerText += "当たり\n";
//    }else{
//        document.body.innerText += "はずれ\n";
//    }
//    }


//if(r==0) document.body.innerText +="【大吉】\n";

//else if(r==1)document.body.innerText +="【中吉】\n";
//else if(r==2)document.body.innerText +="【小吉】\n";
//else if(r==3)document.body.innerText +="【吉】\n";
//else document.body.innerText +="【凶】\n";

//}
//if(r<0.2){
//    console.log("大吉");
//    $("h1").text("大吉");
//}
//else if(r<0.4){
//    console.log("中吉");
//    $("h1").text("中吉");
//}
//else if(r<0.6){
//    console.log("小吉");
//    $("h1").text("小吉");
//}
//else if(r<0.8){
 //   console.log("吉");
  //  $("h1").text("吉");
//}
//else{
  //  console.log("凶");
   // $("h1").text("凶");
//}
