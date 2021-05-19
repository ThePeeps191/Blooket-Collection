(async () => {

    alert("Made by: glizzz_y#0777")
    const name = prompt("Enter Blooket username:")

    const get = await fetch(`https://api.blooket.com/api/users/dashboard?name=${name}`, {
        method: "GET",
        headers: {
            referer: "https://www.blooket.com/",
            "content-type": "application/json"
        },
    });
    const idkwhattocallthis = await get.json();

    console.log(`You have : ${idkwhattocallthis.numGames}`)

})();
