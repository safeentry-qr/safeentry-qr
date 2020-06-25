if (localStorage.history == undefined) localStorage.history = "[]";
else if (localStorage.history != "[]") {
    let history = JSON.parse(localStorage.history);
    const aside = document.getElementsByTagName("aside")[0];
    while (aside.hasChildNodes()) aside.removeChild(aside.childNodes[0]);
    const header = document.createElement("strong");
    header.appendChild(document.createTextNode("Past Locations"));
    aside.appendChild(header);

    for (let i = 0; i < history.length; i++) {
        const container = document.createElement("a");
        container.classList.add("history");
        container.href = `/checkin.html#update${encodeURIComponent(history[i])}`;

        const name = document.createElement("span");
        name.appendChild(document.createTextNode(history[i]));
        container.appendChild(name);

        const deleteButton = document.createElement("img");
        deleteButton.src = "/assets/delete.svg";
        deleteButton.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            aside.removeChild(container);
            history.splice(i, 1);
            localStorage.history = JSON.stringify(history);
        });

        container.appendChild(deleteButton);
        aside.appendChild(container);
    }
}
document.getElementById("text").addEventListener("submit", e => {
    e.preventDefault();
    window.location = `/checkin.html#update${encodeURIComponent(document.getElementsByTagName("textarea")[0].value)}`;
});