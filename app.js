const colors=["red", "green", "purple", "#f15025", "rgba(133,122,200)"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color")
btn.addEventListener("click", () =>{
    const randomNumber=getRandColor();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandColor(){
    return Math.floor(Math.random()*colors.length);
}