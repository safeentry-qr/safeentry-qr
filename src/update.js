if (location.hash.includes("#update")) {
    const time = new Date();
    const timeString = `${time.getDate()} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][time.getMonth()]} ${time.getFullYear()}, ${time.getHours() >= 12 ? (time.getHours() == 12 ? 12 : time.getHours() - 12) : (time.getHours() == 0 ? 12 : time.getHours())}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} ${time.getHours() >= 12 ? "PM" : "AM"}`;
    const placeString = decodeURIComponent(location.hash.substring(7));
    location.hash = "";

    document.getElementById("time").appendChild(document.createTextNode(timeString));
    document.getElementById("place").appendChild(document.createTextNode(placeString));

    localStorage.place = placeString;
    localStorage.time = timeString;
}
else if (localStorage.time == undefined || localStorage.place == undefined) {
    window.location = "index.html";
}
else {
    document.getElementById("time").appendChild(document.createTextNode(localStorage.time));
    document.getElementById("place").appendChild(document.createTextNode(localStorage.place));
}