alert("Created by Glizzy Flizzy Dlizzy Blizzy✔#0777")
var pin = prompt("Pin"),
    name = prompt("Name");

fetch(`https://api.blooket.com/api/firebase/client?id=${pin}&name=${name}`, {
    method: "DELETE",
    headers: {
        referer: "https://www.blooket.com/",
        "content-type": "application/json"
    }
});
