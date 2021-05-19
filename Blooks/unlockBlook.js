(async () => {

    alert("Made by: glizzz_y#0777");

    const name = prompt("Enter your Blooket username:");
    const box = prompt("Enter the box you want to open:");
    const amount = prompt("Enter how many boxes to open");

    for(var i = 0; i < amount; i++){
        const open = await fetch("https://api.blooket.com/api/users/unlockblook", {
            method: "PUT",
            "headers": {
                "referer": "https://www.blooket.com/",
                "content-type": "application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                box: box,
                name: name
            })
        });
        const opened = await open.json();

        const checkTokens = opened.tokens

        if (!checkTokens) return alert("You have 0 tokens to open a box.")
        if (checkTokens < 20) return alert("You have less than 20 tokens.")
        if (checkTokens < 25) return alert("You have less than 25 tokens.")
        if (checkTokens < 15) return alert("You have less than 15 tokens.")

        console.log(`Opened blook: ${opened.unlockedBlook}`);
    }
})();
