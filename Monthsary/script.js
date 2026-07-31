// ===== Typing Animation =====
const text = "Happy Monthsary, My Love 💙";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();

// ===== Scroll =====
function scrollToLetter() {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
}

// ===== Relationship Counter =====
const startDate = new Date("2026-04-2");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const months = Math.floor(days / 30);

    const remain = days % 30;

    document.getElementById("countdown").innerHTML =
        months + " Month(s) " + remain + " Day(s)";
}

updateCounter();

setInterval(updateCounter,1000);

// ===== Floating Hearts =====

setInterval(createHeart,300);

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💙";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

// ===== Surprise =====

function startExperience(){

	document.querySelector("audio").play();
			scrollToLetter();
		alert("💙 Happy Monthsary, Love!\n\nThank you for always choosing me.\nI hope we continue making beautiful memories together.\n\nI love you so much! ❤️");

    for(let i=0;i<40;i++){

        setTimeout(createHeart,i*80);

    }

}
