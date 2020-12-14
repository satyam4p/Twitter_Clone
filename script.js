
const twitterIcon = document.querySelector('.twiiter_icon');
const content = document.querySelector('.main_content_body');
const navButton = document.querySelector('.navButton');
const sideDrawerBtn = document.querySelector('.side_drawer_button');

twitterIcon.addEventListener("click",()=>{
    document.getElementById("small_nav").style.transform="translateX(0%)";
});

navButton.addEventListener("click",()=>{
    document.getElementById("small_nav").style.transform="translateX(-100%)";
});
content.addEventListener("click",()=>{
    document.getElementById("small_nav").style.transform="translateX(-100%)";
});

sideDrawerBtn.addEventListener("click",()=>{
    document.getElementById("small_nav").style.transform="translateX(0%)";
})
