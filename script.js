console.log("he;llo world!");
const twitterIcon = document.querySelector('.twiiter_icon');
const drawer = document.querySelector('.drawer');

twitterIcon.addEventListener("click",()=>{
    console.log("hello world!!");
    drawer.classList.toggle("animateClass");
    twitterIcon.classList.toggle("fade");
    
})