(async () => {

    alert("Made by: glizzz_y#0777");
    const name = prompt("Enter your Blooket username:");

    const n = await fetch(`https://api.blooket.com/api/users/tokens?name=${name}`, {
        method: "GET",
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
    });
    const a = await n.json();

    console.log(a)

})();