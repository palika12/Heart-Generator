function generateHeart() {
    var name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    var heartContainer = document.getElementById("heartContainer");
    heartContainer.innerHTML = "";

    var heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = `<span>${name}</span><br>&#x2764;`; // Unicode heart symbol

    // Generate random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    heart.style.color = randomColor;

    heartContainer.appendChild(heart);
}
