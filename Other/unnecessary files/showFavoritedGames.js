(async () => {

    alert("Made by: glizzz_y#0777");

    const name = prompt("Enter your Blooket username:")

    const check = await fetch('https://api.blooket.com/api/users/favoriteGames', {
        method: "PUT",
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            name: name
        }),
    });
    const checked = await check.json();

    console.log(`Favorited Game: ${checked[0].title}`)
    //if you want to show more literally just copy paste the top console.log and replace the array number with 1 and if u want to add another third one you will do [3] and so on. (just adding the number by 1 each time u console.log)
})();