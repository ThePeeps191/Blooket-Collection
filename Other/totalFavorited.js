(async () => {

    alert("Made by: glizzz_y#0777")
    const set = prompt("Enter game set:")

    const get = await fetch(`https://api.blooket.com/api/games?gameId=${set}`, {
        method: "GET",
        headers: {
            referer: "https://www.blooket.com/",
            "content-type": "application/json"
        },
    });
    const c = await get.json();

    console.log(`Total Favorite Count: ${c.favoriteCount}`)

})();