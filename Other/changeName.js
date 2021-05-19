(async () => {

    alert("Made by: glizzz_y#0777");
    var username = prompt('Enter your current Blooket username');
    var newName = prompt("Enter your new Blooket username you wish to change:")

    const a = await fetch("https://api.blooket.com/api/users/change/name", {
        method: "PUT",
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            name: username,
            newName: newName
        }),
    });
    const i = await a.json();

    console.log(`Error, ${i.msg}`)

})();