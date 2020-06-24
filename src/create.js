document.getElementById("text").addEventListener("submit", e => {
    e.preventDefault();
    window.location = `/checkin.html#update${encodeURIComponent(document.getElementsByTagName("input")[0].value)}`;
});