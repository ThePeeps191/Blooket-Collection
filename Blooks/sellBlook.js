(async () => {

    alert("Made by: glizzz_y#0777");

    const name = prompt('Please input your blooket username');
    const blook = prompt("What blook do you want to sell?")
    const numSold = prompt('How many of the same blook do you want to sell?');

    const sell = await fetch("https://api.blooket.com/api/users/sellblook", {
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            blook: blook,
            name: name,
            numSold: numSold
        }),
        method: 'PUT'
    });
    const sold = await sell.json();

    console.log(`Sold ${name} only ${numSold} time.`)

})();