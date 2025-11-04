
let b1 = document.getElementById("d11");
let b2 = document.getElementById("d12");
let b3 = document.getElementById("d13");
let b4 = document.getElementById("d21");
let b5 = document.getElementById("d22");
let b6 = document.getElementById("d23");
let b7 = document.getElementById("d31");
let b8 = document.getElementById("d32");
let b9 = document.getElementById("d33");

let turn = document.getElementById("t"); 
let final = document.getElementById("f");
let xscore = document.getElementById("xs")
let oscore = document.getElementById("os")
let i = 0; 
let s = 0;
let ss = 0;
final.style.color="green"
 winz=false;

function ch1(id) {
   console.log(id);
   
  if (id.innerHTML== "") {

    if (i % 2 == 0) {
      id.innerHTML = "X";
      id.style.color = "red";
      turn.innerHTML = "O-TURN";
      turn.style.color="blue"
    } else {
      id.innerHTML = "O";
      id.style.color = "blue";
      turn.innerHTML = "X-TURN";
      turn.style.color="red"
    }
    i++;
    Wins()
  }

}

// function ch2() {
//   if (b2.innerHTML=== "") {
//     if (i % 2 === 0) {
//       b2.innerHTML = "X";
//       b2.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b2.innerHTML = "O";
//       b2.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//      Wins()
//   }
 
// }

// function ch3() {
//   if (b3.innerHTML === "") {
//     if (i % 2 === 0) {
//       b3.innerHTML = "X";
//       b3.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b3.innerHTML = "O";
//       b3.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//     Wins()
//   }
  
// }

// function ch4() {
//   if (b4.innerHTML === "") {
//     if (i % 2 === 0) {
//       b4.innerHTML = "X";
//       b4.style.color="red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b4.innerHTML = "O";
//       b4.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//      Wins()
//   }
  
// }

// function ch5() {
//   if (b5.innerHTML === "") {
//     if (i % 2 === 0) {
//       b5.innerHTML = "X";
//       b5.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b5.innerHTML = "O";
//       b5.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//       Wins()
//   }
 
// }

// function ch6() {
//   if (b6.innerHTML === "") {
//     if (i % 2 === 0) {
//       b6.innerHTML = "X";
//       b6.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b6.innerHTML = "O";
//       b6.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//      Wins()
//   }
  
// }

// function ch7() {
//   if (b7.innerHTML === "") {
//     if (i % 2 === 0) {
//       b7.innerHTML = "X";
//       b7.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b7.innerHTML = "O";
//       b7.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//     Wins()
//   }
   
// }

// function ch8() {
//   if (b8.innerHTML === "") {
//     if (i % 2 === 0) {
//       b8.innerHTML = "X";
//       b8.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b8.innerHTML = "O";
//       b8.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//     Wins()
//   }
   
// }

// function ch9() {
//   if (b9.innerHTML === "") {
//     if (i % 2 === 0) {
//       b9.innerHTML = "X";
//       b9.style.color = "red";
//       turn.innerHTML = "O-TURN";
//       turn.style.color="blue"
//     } else {
//       b9.innerHTML = "O";
//       b9.style.color = "blue";
//       turn.innerHTML = "X-TURN";
//       turn.style.color="red"
//     }
//     i++;
//     Wins()
//   }
   
// }



function resetbtn() {
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  b5.innerHTML = "";
  b6.innerHTML = "";
  b7.innerHTML = "";
  b8.innerHTML = "";
  b9.innerHTML = "";
  i = 0;
  turn.innerHTML = "X-TURN";
  turn.style.color="red"
  f.innerHTML="RESULT";
  f.style.color="green";
}
function resetscore(){
  s=0;
  ss=0;
  xscore.innerHTML=0;
  oscore.innerHTML=0;
}
 
function Wins(){
  if((b1.innerHTML=="X" && b2.innerHTML=="X" && b3.innerHTML=="X")||(b4.innerHTML=="X" && b5.innerHTML=="X" && b6.innerHTML=="X")||(b7.innerHTML=="X" && b8.innerHTML=="X" && b9.innerHTML=="X")||(b1.innerHTML=="X" && b4.innerHTML=="X" && b7.innerHTML=="X")||(b2.innerHTML=="X" && b5.innerHTML=="X" && b8.innerHTML=="X")||(b3.innerHTML=="X" && b6.innerHTML=="X" && b9.innerHTML=="X")||(b1.innerHTML=="X" && b5.innerHTML=="X" && b9.innerHTML=="X")||(b3.innerHTML=="X" && b5.innerHTML=="X" && b7.innerHTML=="X")){
  final.innerHTML="WINNER X";
   final.style.color="red";
    
   xscore.innerHTML=++s;
  
  winz=true;
  winzf()
}
  else   if((b1.innerHTML=="O" && b2.innerHTML=="O" && b3.innerHTML=="O")||(b4.innerHTML=="O" && b5.innerHTML=="O" && b6.innerHTML=="O")||(b7.innerHTML=="O" && b8.innerHTML=="O" && b9.innerHTML=="O")||(b1.innerHTML=="O" && b4.innerHTML=="O" && b7.innerHTML=="O")||(b2.innerHTML=="O" && b5.innerHTML=="O" && b8.innerHTML=="O")||(b3.innerHTML=="O" && b6.innerHTML=="O" && b9.innerHTML=="O")||(b1.innerHTML=="O" && b5.innerHTML=="O" && b9.innerHTML=="O")||(b3.innerHTML=="O" && b5.innerHTML=="O" && b7.innerHTML=="O")){
  final.innerHTML="WINNER O";
  final.style.color="blue";
    
    oscore.innerHTML=++ss;
    
  winz=true;
   winzf()
}
else if(b1.innerHTML!=="" && b2.innerHTML!=="" && b3.innerHTML!=="" && b4.innerHTML!=="" && b5.innerHTML!=="" && b6.innerHTML!=="" && b7.innerHTML!=="" && b8.innerHTML!=="" && b9.innerHTML!==""){ 
  final.innerHTML="DRAW!!!";
   final.style.color="orange";
  
}
}




function winzf(){
if(winz){
  if(b1.innerHTML==""){
    b1.innerHTML=" "
  }
    if(b2.innerHTML==""){
    b2.innerHTML=" "
  }
   if(b3.innerHTML==""){
    b3.innerHTML=" "
  }
   if(b4.innerHTML==""){
    b4.innerHTML=" "
  }
   if(b5.innerHTML==""){
    b5.innerHTML=" "
  }
   if(b6.innerHTML==""){
    b6.innerHTML=" "
  }
   if(b7.innerHTML==""){
    b7.innerHTML=" "
  }
   if(b8.innerHTML==""){
    b8.innerHTML=" "
  }
   if(b9.innerHTML==""){
    b9.innerHTML=" "
  }
}
}