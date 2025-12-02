// Typing Effect
const roles=["Java Developer","Spring Boot Developer","Backend Engineer"];
let i=0,j=0,txt=document.getElementById("role");
(function type(){
 if(j<roles[i].length){txt.textContent+=roles[i][j++];setTimeout(type,90);}
 else setTimeout(function erase(){
  if(j>0){txt.textContent=roles[i].substring(0,--j);setTimeout(erase,60);}
  else{i=(i+1)%roles.length;setTimeout(type,200);}
 },800);
})();

// Scroll Animation
const fadeEls=document.querySelectorAll('.fade');
function showOnScroll(){
 fadeEls.forEach(el=>{
  if(el.getBoundingClientRect().top<window.innerHeight-100)el.classList.add("show");
});
}
window.addEventListener("scroll",showOnScroll);showOnScroll();

// Animated Background Dots
const canvas=document.createElement("canvas");document.body.appendChild(canvas);
const ctx=canvas.getContext("2d");
let w,h,particles;
function init(){
 w=canvas.width=window.innerWidth;
 h=canvas.height=window.innerHeight;
 particles=Array.from({length:80}).map(()=>({
  x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+1,
  dx:(Math.random()-0.5)*0.6,dy:(Math.random()-0.5)*0.6
 }));
}
function draw(){
 ctx.clearRect(0,0,w,h);
 particles.forEach(p=>{
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  ctx.fillStyle="#4ef6ff";ctx.fill();
  p.x+=p.dx;p.y+=p.dy;
  if(p.x<0||p.x>w)p.dx*=-1;if(p.y<0||p.y>h)p.dy*=-1;
 });
 requestAnimationFrame(draw);
}
init();draw();window.onresize=init;
canvas.style.position="fixed";
canvas.style.top="0";canvas.style.left="0";
canvas.style.zIndex="-3";