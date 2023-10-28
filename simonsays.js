let gameSeq=[];
let userSeq=[];

let btns =["red","green","purple","yellow"];

let started=false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started = true;

        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
};



function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `level${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let random = document.querySelector(`.${randColor}`);
    // console.log(random);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnflash(random);



};

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over! your score was<b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn = this;
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
