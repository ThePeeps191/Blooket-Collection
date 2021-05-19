(async () => {

    alert("Made by: glizzz_y#0777");

    const name = prompt("Enter your Blooket username:")

    const check = await fetch(`https://api.blooket.com/api/users/unlocks?name=${name}`, {
        method: "GET",
        "headers": {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
    });
    const checked = await check.json();

    console.log(`Unlocked Blooks: ${checked[0]}`)
    console.log(`Unlocked Blooks: ${checked[1]}`)
    console.log(`Unlocked Blooks: ${checked[2]}`)
    console.log(`Unlocked Blooks: ${checked[3]}`)
    console.log(`Unlocked Blooks: ${checked[4]}`)
    console.log(`Unlocked Blooks: ${checked[5]}`)
    console.log(`Unlocked Blooks: ${checked[6]}`)
    console.log(`Unlocked Blooks: ${checked[7]}`)
    console.log(`Unlocked Blooks: ${checked[8]}`)
    console.log(`Unlocked Blooks: ${checked[9]}`)
    console.log(`Unlocked Blooks: ${checked[10]}`)
    console.log(`Unlocked Blooks: ${checked[11]}`)
    console.log(`Unlocked Blooks: ${checked[12]}`)
    console.log(`Unlocked Blooks: ${checked[13]}`)
    console.log(`Unlocked Blooks: ${checked[14]}`)
    console.log(`Unlocked Blooks: ${checked[15]}`)
    console.log(`Unlocked Blooks: ${checked[16]}`)
    console.log(`Unlocked Blooks: ${checked[17]}`)
    console.log(`Unlocked Blooks: ${checked[18]}`)
    console.log(`Unlocked Blooks: ${checked[19]}`)
    console.log(`Unlocked Blooks: ${checked[20]}`)
    console.log(`Unlocked Blooks: ${checked[21]}`)
    console.log(`Unlocked Blooks: ${checked[22]}`)
    console.log(`Unlocked Blooks: ${checked[23]}`)
    console.log(`Unlocked Blooks: ${checked[24]}`)
    console.log(`Unlocked Blooks: ${checked[25]}`)
    console.log(`Unlocked Blooks: ${checked[26]}`)
    console.log(`Unlocked Blooks: ${checked[27]}`)
    console.log(`Unlocked Blooks: ${checked[28]}`)
    console.log(`Unlocked Blooks: ${checked[29]}`)
    console.log(`Unlocked Blooks: ${checked[30]}`)
    console.log(`Unlocked Blooks: ${checked[31]}`)
    console.log(`Unlocked Blooks: ${checked[32]}`)
    console.log(`Unlocked Blooks: ${checked[33]}`)
    console.log(`Unlocked Blooks: ${checked[34]}`)
    console.log(`Unlocked Blooks: ${checked[35]}`)
    console.log(`Unlocked Blooks: ${checked[36]}`)
    console.log(`Unlocked Blooks: ${checked[37]}`)
    console.log(`Unlocked Blooks: ${checked[38]}`)
    console.log(`Unlocked Blooks: ${checked[39]}`)
    console.log(`Unlocked Blooks: ${checked[40]}`)
    console.log(`Unlocked Blooks: ${checked[41]}`)
    console.log(`Unlocked Blooks: ${checked[42]}`)
    console.log(`Unlocked Blooks: ${checked[43]}`)
    console.log(`Unlocked Blooks: ${checked[44]}`)
    console.log(`Unlocked Blooks: ${checked[45]}`)
    console.log(`Unlocked Blooks: ${checked[46]}`)
    console.log('If you get undefined for some of them don\'t worry its because you haven\'t unlocked all blooks.')
})();