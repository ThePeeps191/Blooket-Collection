alert("made by Glizzy Flizzy Dlizzy Blizzy✔#0777")
var pin = prompt("Pin"), // put the game pin
    name = prompt("Name"), // put what name you want
    amount = prompt("Amount"); // put how many bots you want to join the game
for (var i = 0; i < amount; i++) {
    fetch("https://api.blooket.com/api/firebase/join", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            id: pin,
            name: `${name}-${i}`
        })
    });
}


// Please don't steal my code and say its yours or what ever I don't care if you use it just give me credit atleast.
