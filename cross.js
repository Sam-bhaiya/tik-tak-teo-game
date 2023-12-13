let click = new Audio("click sound.wav");
let gameoversound = new Audio("game  over.wav");
const main = document.querySelector("#main");
let reset = document.getElementsByTagName("button");
let gif = document.getElementsByTagName("video");

let turn = "X";

   
const changeturn =()=>{
    return turn === "X"?"0":"X"
}
 
const checkwin =()=>{
    let cross =document.getElementsByClassName('cross');
    let posiblity =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
       
    ]
    posiblity.forEach(e=> {
        if((cross[e[0]].innerText=== cross[e[1]].innerText) && (cross[e[2]].innerText=== cross[e[1]].innerText) && (cross[e[0]].innerText !== "")){
            document.querySelector('.turnx').innerText = cross[e[0]].innerText + "WON"
            gameoversound.play();    
            gif.play();      
        }
       
        
    })
}
let gamer = document.getElementsByClassName("gamer");
Array.from(gamer).forEach(element =>{
    let cross=element.querySelector(".cross");
    element.addEventListener('click',()=>{
        if(cross.innerText===''){
            cross.innerText=turn;
           turn=changeturn();
            click.play();
            checkwin();
            
        }
    })
})





