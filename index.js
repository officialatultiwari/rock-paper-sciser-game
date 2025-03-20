let userScore =0;
let compScore=0;

 const choices = document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg");

 const userScorepara =document.querySelector("#user-score");
 const compScorepara= document.querySelector("#comp-score");

 const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
    return option [randIdx];

 }
 const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw .plese try again /";
    msg.style.backgroundColor ="red";

 };
 const showwiner=(userwin , userchoice, compchoice)=>{
    if(userwin){
       userScore++;
       userScorepara.innerHTML = userScore;
        msg.innerText =`you win the match ${userchoice} bets ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
       compScorepara.innerHTML = compScore;
        msg.innerText=`you Loss the match! ${compchoice} bets ${userchoice}`;
        msg.style.backgroundColor ="red";
       
    }
 };

 const playGame=(userchoice) =>{
    console.log("usechoice=",userchoice);

    // Genrate comupter choice-> modular
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice)

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //sciser, paper
            userwin=compchoice==="paper" ? false : true

        }else if(userchoice==="paper"){
            //rock,scissor
            userwin=compchoice==="scissore" ? false : true
        }else{
            //rock, paper
           userwin=compchoice=== "rock" ? false: true
        }
        showwiner(userwin, userchoice, compchoice);

    }
   
 





 };
 choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice.getAttribute")
        console.log("choice was clicked",userchoice)
        playGame(userchoice);
    });

 });