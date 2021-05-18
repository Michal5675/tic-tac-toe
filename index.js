var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var playerScore1 = 0;
var playerScore2 = 0;
var drawScore = 0;
var playerBtn1 = [];
var playerBtn2 = [];
var click = 0;
var count = 0;
const resetBtn = document.getElementsByClassName("restart")[0];
var reset = 0;
var player1ScoreView = document.getElementsByClassName("player1-score")[0];
var player2ScoreView = document.getElementsByClassName("player2-score")[0];
var drawScoreView = document.getElementsByClassName("draw-score")[0];
//object with game-winning configurations
var config = {
ar1: ["1", "2", "3"],
ar2: ["1", "4", "7"],
ar3: ["1", "5", "9"],
ar4: ["2", "5", "8"],
ar5: ["3", "6", "9"],
ar6: ["3", "5", "7"],
ar7: ["4", "5", "6"],
ar8: ["7", "8", "9"]

};


var tab = [];



var btn = document.getElementsByTagName("button");


 
    for(let i = 0; i <btn.length; i++) {
        btn[i].addEventListener("click", () => {
            //toggle between players
            if(click % 2 == 0) {
            
            // adding cross icon to clicked btn
            btn[i].innerHTML = '<i class="fas fa-times fa-5x"></i>';
            btn[i].disabled = "true";
            if(btn[i].disabled) {
              count++;
            }
            playerBtn1.push(btn[i].id);
            
            //checking if player1 won
            for(key in config) {
               tab = config[key];
               var a = Number(tab[2]);
            if(tab.every(el => playerBtn1.includes(el))) {
              for(let k = 0; k <btn.length; k++) {
                //disable rest of buttons
                btn[k].disabled = "true";
              }
              
              //adding crossing line to btns of winner
              for(let n = 0; n < tab.length; n++) {
                var hr = document.createElement("hr");
                
                if(tab[n+1] - tab[n] === 3) {
                  tab[3] = a +3;
                  hr.style.transform = "rotate(90deg)";
                   btn[tab[n]-1].append(hr);
                   
                }
                
                else if(tab[n+1] - tab[n] === 4) {
                  
                  tab[3] = a +4;
                  hr.classList.add("hr-look", "hr-cross");
                  btn[tab[n]-1].append(hr);
                  if(n === 1) {
                    hr.classList.add("hr-pos-cross");
                   }
                  else if(n === 2) {
                    hr.remove();
                  }
                  
                }
                else if(tab[n+1] - tab[n] === 2) {
                  tab[3] = a +2;
                  hr.style.transform = "rotate(-40deg)";
                  hr.classList.add("hr-look", "hr-cross-left");
                  btn[tab[n]-1].append(hr);
                  if(n === 2) {
                    hr.classList.add("hr-pos-cross-left");
                   }
                  else if(n === 1) {
                    hr.remove();
                  }
                  
                }
                else if(tab[n+1] - tab[n] === 1) {
                  tab[3] = a +1;
                  btn[tab[n]-1].append(hr);
                }
               
                player1.innerHTML = "Player 1 Wins";
                player1.style.color = "blueviolet";
               
                 
             }
             if(player2.innerHTML === "Player 2 Wins") {
              playerScore2++;
            }  
            else if(player1.innerHTML === "Player 1 Wins") {
              playerScore1++;
            }
          } 
          
          } 
          
        }
      
           else {
    
              // adding circle icon to clicked btn
                btn[i].innerHTML = '<i class="far fa-circle fa-4x"></i>';
                btn[i].disabled = "true";
                if(btn[i].disabled) {
                  count++;
                }
                playerBtn2.push(btn[i].id);

                for(key in config) {
                  tab = config[key];
                  var a = Number(tab[2]);
                   //checking if player2 won
                if(tab.every(el => playerBtn2.includes(el))) {
                  for(let k = 0; k <btn.length; k++) {
                    //disable rest of buttons
                    btn[k].disabled = "true";
                  }
                  for(let n = 0; n < tab.length; n++) {
                    var hr = document.createElement("hr");
                    
                     //adding crossing line to btns of winner
                    if(tab[n+1] - tab[n] === 3) {
                      tab[3] = a +3;
                      hr.style.transform = "rotate(90deg)";
                       btn[tab[n]-1].append(hr);
                     
                    }
                    
                    else if(tab[n+1] - tab[n] === 4) {
                      tab[3] = a +4;
                      hr.classList.add("hr-look", "hr2");
                      btn[tab[n]-1].append(hr);
                      if(n === 1) {
                       hr.classList.add("hr-pos");
                      }
                     else if(n === 2) {
                       hr.remove();
                     }
                         
                      
                    }
                    else if(tab[n+1] - tab[n] === 2) {
                      tab[3] = a +2;
                      hr.style.transform = "rotate(-40deg)";
                      hr.classList.add("hr-look", "hr-cross-left");
                      btn[tab[n]-1].append(hr);
                      if(n === 2) {
                      hr.classList.add("hr-pos-circle-left");
                       }
                      else if(n === 1) {
                        hr.remove();
                      }
                      
                    }
                    else if(tab[n+1] - tab[n] === 1) {
                      tab[3] = a +1;
                      btn[tab[n]-1].append(hr);
                    }

                    player2.innerHTML = "Player 2 Wins";
                    player2.style.color = "blueviolet";
                    
                  
                 }
                 if(player2.innerHTML === "Player 2 Wins") {
                  playerScore2++;
                }  
                else if(player1.innerHTML === "Player 1 Wins") {
                  playerScore1++;
                }
             } 
             
            
            }

          }
           if(count === 9) {
             drawScore++;
           }
            click++;
            changeScore();
             
        }); 
         
}




// function toggleFunc(flag) {
//   if(flag) {
//     playerA();
//   }
//   else  {
//     playerB();
//   }
// }



//reset game 
resetBtn.addEventListener("click", () => {
    for(i in btn) {
      btn[i].innerHTML = "";
      btn[i].disabled = false
      
    }
    playerBtn1 = [];
    playerBtn2 = [];
    click = 0;
    count = 0;
    player2.innerHTML = "Player 2";
    player1.innerHTML = "Player 1";
    player2.style.color = "white";
    player1.style.color = "white";
    
});

//change table with scoreboard
function changeScore() {
  player1ScoreView.innerHTML = playerScore1;
  player2ScoreView.innerHTML = playerScore2;
  drawScoreView.innerHTML = drawScore;
}
