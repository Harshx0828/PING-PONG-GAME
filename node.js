document.addEventListener("DOMContentLoaded",function (){
  let balls=document.getElementById("ball");
  let ballx=10;
  let bally=10;
  let dx=2;
  let dy=2;
  let end=false;
  let table=document.getElementById("pingpongtable");
  let paddle=document.getElementById("paddle");
 
  balls.style.left=`${ballx}px`;
  balls.style.top=`${bally}px`;
  console.log("hello");
  setInterval(function(){
    if(end)return;
  ballx+=dx;
  bally+=dy;
  balls.style.left=`${ballx}px`;
  balls.style.top=`${bally}px`;
  if(ballx>table.offsetWidth-balls.offsetWidth || ballx<0)dx*=-1;
   if(bally>table.offsetHeight-balls.offsetHeight|| bally<0)dy*=-1;
  if((paddle.offsetLeft+paddle.offsetWidth)>ballx && bally>=paddle.offsetTop &&bally+balls.offsetHeight<=paddle.offsetTop+paddle.offsetHeight){
    dx*=-1;
  }
  if(ballx==0){let h=document.getElementById("gameover");
    h.innerText="Game Over";
    console.log("kya h");
    let restart=document.createElement("button");
    restart.innerHTML="Restart";
    restart.style.margin="5px";
    restart.classList.add("restartbtn");
    h.appendChild(restart);
    end=true;
    restart.addEventListener("click",function(){
    location.reload();

    })
  }
  },0.25);
  let paddley=0;
   let pdy=10;
  document.addEventListener("keydown",function(event){
    event.preventDefault();
      if (event.key === "ArrowUp") {
     console.log("up");
     paddley-=pdy;
     if(paddley<0){paddley=0;}
     paddle.style.top=`${paddley}px`;
    
  }
 else   if (event.key === "ArrowDown") {
 console.log("down");
 paddley+=pdy;
 if(paddley>=table.offsetHeight-paddle.offsetHeight)paddley=(table.offsetHeight-paddle.offsetHeight);
 paddle.style.top=`${paddley}px`;
   }
   
  })
 document.addEventListener("mousemove",(event)=>{
   if(end)return;
  let topdistance=event.clientY;
  let tabledistancefromtop=table.offsetTop;
  let paddletop=paddle.offsetTop;
  let mousedistance=topdistance-tabledistancefromtop-paddletop/2;
  if(mousedistance<0 ||mousedistance>table.offsetHeight-paddle.offsetHeight)return;
  paddle.style.top=`${mousedistance}px`;
 });

});