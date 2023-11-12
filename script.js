const panels = document.querySelectorAll('.col')
const playTag=document.getElementById("pt")
const reStart=document.getElementById("restart")
const butStart=document.getElementById("Strat")
const butStartc=document.getElementById("Stratc")
const allcombo = [
    [0, 1, 2], // Horizontal
    [3, 4, 5], // Horizontal
    [6, 7, 8], // Horizontal
    [0, 3, 6], // Vertical
    [1, 4, 7], // Vertical
    [2, 5, 8], // Vertical
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];
const defstart = "X"
var allredydone=[]
function players(){
    butStart.classList.add("hide")
    butStartc.classList.add("hide")
    playTag.classList.remove("hide")
    var lastvall = "O"
    var play1 =[]
    var play2=[]
    var allredydone=[]
    var gameOver=0
    panels.forEach((panel , index)=>{
        panel.addEventListener('click',()=>{
            if(gameOver===0){
                if(allredydone.includes(index)){
                    alert("Already marked")
                }
            else{
                reStart.classList.add("hide")
                if(lastvall==="O"){
                    panel.innerHTML=defstart
                    panel.classList.add("xcol")
                    lastvall=defstart
                    play1.push(index)
                    playTag.innerText="Player 2 turn"
                    }
                    else{
                        panel.innerHTML="O"
                        lastvall="O"
                        play2.push(index)
                        playTag.innerText="Player 1 turn"
                        panel.classList.add("ocol")
                    }
                    console.log(lastvall)
                    allredydone.push(index)
                }
                console.log(index)
                console.log(play1,play2)
                cwin()
                drawcheck()
            } 
        })
    })
    function cwin(){
        allcombo.forEach((combo)=>{
            if(combo.every((value) => play1.includes(value))){
                alert("Player 1 win")
                playTag.innerText="Player 1 win"
                console.log(combo)
                winhig(combo)
                gameOver=1
            }
            if(combo.every((value) => play2.includes(value))){
                alert("Player 2 win")
                gameOver=1
                winhig(combo)
                playTag.innerText="Player 2 win"
            }})
        }
    function winhig(colb){
        colb.forEach((col)=> {
            panels[col].classList.add("win")
        })
        reStart.classList.add("show")
    }
    reStart.addEventListener('click',()=>{
         location.reload()
    })
    function drawcheck(){
        if(gameOver!=1){
        if (allredydone.length===9){
            alert("Draw")
            playTag.innerText="Draw"
            reStart.classList.add("show")
        }}
    }
}
function compVs(){
    butStart.classList.add("hide")
    butStartc.classList.add("hide")
    playTag.classList.remove("hide")
    var lastvall = "O"
    var play1 =[]
    var Comp=[]
    
    var gameOver=0
    panels.forEach((panel , index)=>{
        panel.addEventListener('click',()=>{
            if(gameOver===0){
                if(allredydone.includes(index)){
                    alert("Already marked")
                }
            else{
                reStart.classList.add("hide")
                if(lastvall==="O"){
                    panel.innerHTML=defstart
                    panel.classList.add("xcol")
                    play1.push(index)
                    playTag.innerText="Player turn"
                    console.log(lastvall)
                    allredydone.push(index) 
                    cwin()
                    drawcheck()
                    if(gameOver!=1){
                    genRan()    
                }               
                    }
                    
                }
                function genRan(){
                    var randomno=Math.floor(Math.random()*7)
                    console.log(randomno)
                    comPl(randomno)
                }
                function comPl(randomno){
                   if(allredydone.includes(randomno)){
                     genRan()
                   }
                   else{

                    var comPlay=panels[randomno]
                    comPlay.innerHTML="O"
                    comPlay.classList.add("ocol")
                    Comp.push(randomno)
                    allredydone.push(randomno)
                    console.log(index)
                console.log(play1,Comp)
                cwin()
                drawcheck()
            }
                }
                
                function cwin(){
                    allcombo.forEach((combo)=>{
                        if(combo.every((value) => play1.includes(value))){
                            alert("Player 1 win")
                            playTag.innerText="Player 1 win"
                            console.log(combo)
                            winhig(combo)
                            gameOver=1
                        }
                        else if(combo.every((value) => Comp.includes(value))){
                            alert("Computer win")
                            gameOver=1
                            winhig(combo)
                            playTag.innerText="Computer win"
                        }})
                    }
                function winhig(colb){
                    colb.forEach((col)=> {
                        panels[col].classList.add("win")
                    })
                    reStart.classList.add("show")
                }
                reStart.addEventListener('click',()=>{
                     location.reload()
                })
                function drawcheck(){
                    if(gameOver!=1){
                    if (allredydone.length===9){
                        alert("Draw")
                        playTag.innerText="Draw"
                        reStart.classList.add("show")
                    }}
                }
            } 
        })
    })
}
