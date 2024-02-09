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

    heartContainer.appendChild(heart);
}
