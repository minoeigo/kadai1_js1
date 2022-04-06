document.body.innerText="おみくじ\n";
document.body.innerText="何かキーを押してください\n"

var kuji =["daikiti", "chukiti", "syokiti", "kiti", "kyo"]

document.onkeydown=function()
{

var r = Math.floor(Math.random()*5);

document.body.innerText += "【"+kuji[r]+"】\n";

//if(r==0) document.body.innerText +="【大吉】\n";

//else if(r==1)document.body.innerText +="【中吉】\n";
//else if(r==2)document.body.innerText +="【小吉】\n";
//else if(r==3)document.body.innerText +="【吉】\n";
//else document.body.innerText +="【凶】\n";

}
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
