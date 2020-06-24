if (localStorage.time == undefined || localStorage.place == undefined) {
    window.location = "index.html";
}
else {
    const time = new Date();
    document.getElementById("time").appendChild(document.createTextNode(`${time.getDate()} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][time.getMonth()]} ${time.getFullYear()}, ${time.getHours() >= 12 ? (time.getHours() == 12 ? 12 : time.getHours() - 12) : (time.getHours() == 0 ? 12 : time.getHours())}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} ${time.getHours() >= 12 ? "PM" : "AM"}`));
    document.getElementById("place").appendChild(document.createTextNode(localStorage.place));
    localStorage.clear();
}