const dinazor = document.getElementById("dinazor");
const kaktus = document.getElementById("kaktus");

function jump() {
    if (dinazor.classList !="jump") {
        dinazor.classList.add("jump");
        setTimeout(function() {
            dinazor.classList.remove("jump");
        }, 300);
    }
   
}

var isAlive = setInterval(function () {
    var dinazorTop = parseInt(window.getComputedStyle(dinazor).getPropertyValue("top")) 
    var kaktusLeft = parseInt(
        window.getComputedStyle(kaktus).getPropertyValue("left")
    );
    if (kaktusLeft<50 && kaktusLeft > 0 && dinazorTop>=140) {
        alert("OYUN BİTTİ...");
    }
},10);

document.addEventListener("keydown",function(event){
    jump();
})