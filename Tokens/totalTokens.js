(async () => {

    alert("Made by: glizzz_y#0777");
    const name = prompt("Enter your Blooket username:");

    const n = await fetch(`https://api.blooket.com/api/users?name=${name}`, {
        method: "GET",
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
    });
    const a = await n.json();

    console.log(`Your total tokens are: ${a.totalTokens}`)

})();