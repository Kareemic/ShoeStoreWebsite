const izbor=document.getElementById("izbor");
const button=document.getElementById("shopButton");
button.addEventListener("click",()=>
{
    izbor.scrollIntoView({behavior:"smooth",block:"end"})
});



