if (localStorage.time == undefined || localStorage.place == undefined) {
    window.location = "index.html";
}
else {
    document.getElementById("time").appendChild(document.createTextNode(localStorage.time));
    document.getElementById("place").appendChild(document.createTextNode(localStorage.place));
    localStorage.clear();
}